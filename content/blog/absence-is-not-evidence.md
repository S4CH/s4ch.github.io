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

The ticket said labs "work for a few minutes, then 404." Only individual users, never org users. The Kubernetes audit log had the answer in one query:

```text
protoPayload.methodName: "deployments.delete"
principal: system:serviceaccount:<dev-namespace>:<middleware-sa>
resource:  <shared-namespace>/<prod lab>
```

Our *dev* environment was deleting *production* labs. It had done it 28 times in 30 days, across about nine users. In one case the delete landed one second after the pod went ready.

It was the third production bug from the same 80-line cleanup loop in seven months, and all three had one root cause.

## The closed-world assumption

Every platform that spawns things writes a janitor. Ours answered "is anyone still using this?" by elimination: list every workload in the cluster, and delete anything without an active row in my database.

That's the logic of a tracing garbage collector, and in a language runtime it's correct, because the root set is *complete*: anything unreachable from the roots really is garbage. Our database was not a complete root set. It only knew about one environment, on a cluster that held two. Treating "no row" as "no owner" is the closed-world assumption, and on shared infrastructure it's almost never true.

## How it got there

- **March: the "fix" that created the hazard.** The first janitor only deleted rows marked `terminated`, so anything without a row leaked forever. I inverted it to "delete anything without an active row." It fixed a real leak. It also turned "I don't recognize this" into a delete permission, and nobody, me included, flagged that in review.
- **April: labels are authorization inputs.** Ten hand-written lab templates put the ownership label on the pod template but not on the Deployment's own metadata. The janitor read the Deployment, saw no label, and deleted fresh labs about a minute after spawn. Two templates survived only because they had no `app` label at all, which made them immune by accident. Once a label decides what gets deleted, it's part of your auth model.
- **September: the confused deputy.** Dev and prod shared one cluster and one namespace for individual users, and dev's database had a stale row pointing at that namespace. Dev's janitor walked prod's workloads, found none of them in *dev's* database, and deleted them. Prod's own stale-checker then saw the workloads gone and marked the labs terminated, which turned a confusing 504 into a confident 404 ten minutes later. A VM reaper on our other cluster had the same bug in both directions.

The September one is a textbook [confused deputy](https://en.wikipedia.org/wiki/Confused_deputy_problem). The janitor's *authority* (cluster-wide delete) was wider than its *knowledge* (one environment's database), and it exercised the first on behalf of the second.

## Why not just use ownerReferences?

That's the first question any Kubernetes person asks, and it's the right instinct. Kubernetes' own [garbage collector](https://kubernetes.io/docs/concepts/architecture/garbage-collection/) deletes on *positive* ownership, through `ownerReferences`, precisely so controllers don't interfere with objects they don't control. Argo CD [learned the same lesson](https://argo-cd.readthedocs.io/en/stable/user-guide/resource_tracking/) the hard way and moved from labels to annotations plus an installation ID when several instances on one cluster started pruning each other's resources.

We couldn't use `ownerReferences` here, because our owner isn't a Kubernetes object. It's a row in Postgres, and for VM labs it sits on a different cluster from the workload. So the rule had to be enforced by the janitor itself.

## The fix: a missing row is never permission to delete

Every workload now gets one of three verdicts instead of two:

| Row in *this* env's DB | Row state | Verdict |
|---|---|---|
| exists | active | keep |
| exists | terminated / failed / expired | orphan → delete |
| absent, or no label | — | foreign → skip and count |

```python
def is_reapable(row):
    # A missing row is never permission to delete.
    return row is not None and not is_active(row)
```

Deletion now needs positive evidence of ownership *and* positive evidence that the workload is finished. Absence only gets logged. (The VM reaper got the same rule in its two-state form: no row, no delete.)

Yes, this leaks the rare workload whose row was hard-deleted. That's the trade I want. A leak costs idle CPU until someone notices. A false delete kills a live session with no undo. When the two error costs are that lopsided, design for the cheap one.

A test named `test_live_vmi_with_missing_row_is_zombie` had been asserting the bug for seven weeks, and I flipped it. After the deploy, dev logged `skipped 2 foreign workloads`, the prod lab stayed at HTTP 200, and the audit log went quiet.

The next step is Argo's answer: stamp an environment ID on every workload at creation, and have each janitor consider only its own. That turns "is this mine?" from a database lookup into a positive fact on the object.

## Three things I check now

Grep for `not in` near any delete. Every `if id not in known_ids: delete()` is this bug waiting for a second environment.

Keep RBAC no wider than the data the process decides with. Dev's janitor never needed delete rights outside dev.

And when users say "works, then breaks," check what you cache. Our router cached lookups for five minutes and rechecked only status, so a deleted pod looked like timeouts first and "lab expired" later. That pointed every early guess at the wrong layer. The audit log knew the whole time.
