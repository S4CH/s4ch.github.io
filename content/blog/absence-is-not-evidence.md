+++
title = 'Our Dev Cleanup Job Deleted 28 Production Labs'
date = '2026-09-08T00:00:00Z'
author = 's4ch'
description = 'A Kubernetes orphan-cleanup job that treated "no row in my database" as permission to delete, and the three production bugs that came from it.'
summary = "Dev and prod shared a cluster. Dev's cleanup job found prod's labs missing from its own database, called them orphans, and deleted 28 of them in 30 days. The fix: a missing row is never permission to delete."
slug = 'dev-cleanup-job-deleted-production-labs'
aliases = ['/blog/absence-is-not-evidence/']
draft = false
categories = ['blog']
tags = ['kubernetes', 'incident', 'distributed-systems', 'authorization', 'postmortem']
showtoc = true
ShowReadingTime = true
+++

Every platform that spawns things eventually writes a janitor: a loop that finds stuff nobody owns anymore and deletes it. Ours cleans up hands-on security labs, the per-user containers and VMs people hack on. It runs every few minutes, and it's maybe 80 lines of code.

Over seven months, our reapers (the container janitor and, later, a VM one) shipped three separate production bugs. All three had the same root cause, and I only saw that after the third. That pattern is the post.

## The invariant nobody wrote down

A garbage collector answers one question: *is anyone still using this?* The easy way to answer it is by elimination:

> List everything in the cluster. Anything I don't have an active record for is an orphan. Delete it.

It reads fine, and it's wrong. It treats **absence of evidence** ("I have no row for this") as **evidence of absence** ("nobody owns this"). Those two are only the same if your database is the *complete* record of everything you can see. On shared infrastructure that's almost never true.

## Bug 1 (March): the leak that got "fixed" into a hazard

The first version leaked. It only deleted workloads whose DB row said `terminated`, so anything without a row stayed forever. I rewrote it to invert the logic: list every deployment and delete anything without a matching *active* row.

It was a reasonable fix for a real leak. It also turned "I don't recognize this" into a delete permission, and nobody, me included, flagged that change in review.

## Bug 2 (April): labels are part of your auth model

About eight weeks later QA reported a lab that "loads, then breaks." Fresh pods were being deleted about a minute after spawn.

Ten hand-written lab templates set the ownership label (`deployment-id`) on the *pod template* but not on the Deployment's own metadata. The janitor read Deployment metadata, found no label, decided "orphan," and deleted it. CI-generated templates were fine. Two other templates survived only because they had no `app` label at all, so the janitor skipped them, and they were immune purely by accident.

The fix was to label everything properly. What I took from it: **once a label decides whether something gets deleted, that label is an authorization input.** Treat it like one: validate it at creation, test for it, and never infer anything from it being missing.

## Bug 3 (September): the confused deputy

Then production labs started 404ing a few minutes after spawn, and only for individual users. Org users were fine.

The Kubernetes audit log had the answer within minutes. The deletes on production lab workloads came from the *dev* environment's service account.

The causal chain:

1. Dev and prod shared one cluster and one namespace for individual users.
2. The dev database had a stale row pointing at that shared namespace.
3. The dev janitor iterated "its" namespaces from the DB, saw prod's workloads, failed to find them in *dev's* database, and deleted them. In one case I traced, the delete landed one second after the pod went ready.
4. Prod's own stale-checker then saw the workload gone and marked the lab terminated. That turned a confusing 504 into a confident 404 about ten minutes later.

The audit log showed **28 production deployments deleted over 30 days**, across roughly nine users. The VM reaper on the other cluster had the same bug in both directions. Prod's reaper killed a dev box two minutes after spawn, and dev's reaper killed a live prod box during a QA session.

This is a textbook [confused deputy](https://en.wikipedia.org/wiki/Confused_deputy_problem). At the time, the janitor held cluster-wide delete rights (its authority), and it used them on behalf of a database that only knew about one environment (its knowledge). Authority was wider than knowledge, and that gap is the bug.

Scoping by namespace prefix doesn't fix it, because prod's prefix was a superset of dev's. Fixing RBAC alone doesn't either: it shrinks the blast radius but leaves the faulty inference in place.

## The fix is one line of logic

The container janitor now classifies each workload three ways instead of two (the VM reaper got the same rule in its two-way form: no row, no delete):

| Row in *this* env's DB | Row state | Verdict |
|---|---|---|
| exists | active | **keep** |
| exists | terminated / failed / expired | **orphan → delete** |
| absent, or no label | — | **foreign → skip and count** |

```python
def is_reapable(row):
    # A missing row is never permission to delete.
    return row is not None and not is_active(row)
```

Deletion now needs **positive evidence of ownership plus positive evidence of death**. Absence only gets logged.

Yes, that will occasionally leak a genuinely orphaned workload whose row was hard-deleted. That's the right trade: a leak costs some idle CPU until a human notices, while a false delete kills a live user session with no recovery. When the two error costs are that lopsided, design for the cheap error.

One existing test was named `test_live_vmi_with_missing_row_is_zombie`. It had been asserting the bug for seven weeks, and I flipped it. After the deploy, dev logged `skipped 2 foreign workloads`, the prod lab in the shared namespace stayed at HTTP 200, and the audit log went quiet.

## If you're writing a janitor tomorrow

- **Write the invariant first.** "We delete X only when we hold a record proving we created X *and* proving X is finished." If you can't say that sentence, don't ship the loop.
- **Grep your codebase for `not in`.** Every `if id not in known_ids: delete()` is this bug waiting for a second environment.
- **Authority ≤ knowledge.** A process's RBAC scope should never exceed the scope of the data it decides with.
- **Mind what you cache.** Our router cached lookups for five minutes and only rechecked status. A deleted pod showed up as timeouts first and a "lab expired" message later, so users reported "works, then breaks," which pointed every early guess at the wrong layer.
- **Check the audit log before you start guessing.** The answer was in `protoPayload.methodName:"deployments.delete"` the whole time.

The code that deleted things was never the bug. The bug was a sentence nobody wrote down: *what does this loop have to know before it's allowed to kill something?*
