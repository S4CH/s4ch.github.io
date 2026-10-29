+++
title = "Never Let Git Read a .git Your Coding Agent Wrote"
date = '2026-10-22T00:00:00Z'
author = 's4ch'
description = 'Building Hematron, a harness that runs coding agents unattended and treats their output like a pull request from a stranger.'
summary = "A worker can plant .git/config with hooks or an fsmonitor command, and a routine git status runs it. Hematron points git at a daemon-owned GIT_DIR, reads policy from the base commit, and binds evidence to commit hashes."
slug = 'never-let-git-read-agent-dot-git'
aliases = ['/blog/your-coding-agent-is-an-untrusted-pull-request/']
draft = false
categories = ['blog']
tags = ['ai-agents', 'supply-chain', 'git', 'sandboxing', 'llm-security']
showtoc = true
ShowReadingTime = true
+++

In September I started building **Hematron**, a personal harness that takes coding tasks, runs agent workers (Claude Code, Codex, Cursor's agent, opencode) around the clock, and opens exactly one verified pull request per task for a human to merge. About 350 commits in, the most useful thing I've learned is the threat model.

Most agent setups assume the agent is a junior engineer: well-meaning, sometimes wrong. I assume the agent is **a stranger opening a pull request from a fork**. Not because the models are malicious, but because everything they read is: issue text, dependency READMEs, web pages, test fixtures. Prompt injection means the author of your diff is whoever last got text into the agent's context window.

CI security already solved this shape of problem. GitHub's `pull_request_target` "pwn request" and poisoned-pipeline-execution attacks are exactly this: untrusted code reaches a privileged pipeline. So I reused that playbook.

## Rule 1: the agent's claims are data, not facts

A worker finishes by writing `result.json` ("done, tests pass") plus a git bundle. The harness believes neither. The bundle is sealed, imported into a **quarantine clone**, and checked again from scratch: structural diff checks, a mandatory secret scan, a path allowlist, CI-style checks in a fresh sandbox, the acceptance items, and a reviewer.

Workers have no GitHub credentials and no network beyond an allowlisted proxy, so they can't push. Only the daemon publishes, and it never merges.

## Rule 2: never let git read a `.git` the agent touched

This is where most harnesses I've read stop being careful. The danger isn't the diff, it's the **repository config**. A worker can write anything into its work tree, including a `.git/` directory. If the daemon then runs git inside that tree, git discovers and trusts the planted config: `core.hooksPath`, `core.fsmonitor` (literally "run this program"), diff and filter driver definitions, a `commondir` redirect, an `objects/info/alternates` escape into another repo. Any of those turns a routine `git status` into code execution in the most privileged process you have.

So the main control is structural. The daemon never runs git *in* an untrusted tree. It points git at a daemon-owned git directory that lives outside the tree and is never mounted into a sandbox:

```text
GIT_DIR=<daemon-owned dir>   GIT_WORK_TREE=<untrusted tree>   # no repo discovery
GIT_CONFIG_NOSYSTEM=1   GIT_CONFIG_GLOBAL=/dev/null   GIT_ATTR_NOSYSTEM=1
unset GIT_COMMON_DIR GIT_OBJECT_DIRECTORY GIT_ALTERNATE_OBJECT_DIRECTORIES
      GIT_INDEX_FILE GIT_EXTERNAL_DIFF
-c core.hooksPath=/dev/null  -c core.fsmonitor=false  -c core.attributesFile=/dev/null
--no-textconv --no-ext-diff            # on diff/show/log/format-patch/diff-*
```

With `GIT_DIR` set explicitly, anything planted under the tree's `.git` is inert data git never reads. The rest is defense in depth. The wrapper also refuses to run if the git dir sits inside the tree, and callers have to confirm the worker that owned the tree is dead first, so files can't change mid-command.

One subtle point that's worth writing down: a tracked `.gitattributes` saying `diff=evil` is harmless **only because** the daemon never defines a driver named `evil`. Git treats an undefined driver as a no-op. That's a guarantee by absence, so it has its own test. Anything a guarantee depends on should be tested.

(Unrelated: git's *detached* auto-gc kept writing `objects/` after the command had returned and raced the next clone. `gc.autoDetach=false` fixed it.)

## Rule 3: the agent must not be able to grade its own homework

The obvious attack on any "verify before merge" system is to edit the verifier. An agent asked to "make the tests pass" will sometimes discover that deleting the test is a solution, with no malice required.

So **verification policy and acceptance criteria are read from the base commit, never from the candidate.** Any change the diff makes to the policy file has no effect on its own verification.

Evidence is bound to the exact `(baseSha, headSha, policy snapshot)` tuple. If the candidate is rewritten, every earlier result is void. If the base moves before publishing, the task parks and waits for a human to re-approve it. It doesn't quietly rebase and hope. What passed is exactly the code being published.

The reviewer stage uses a model from a **different family** than the author. Two runs of the same model share blind spots, and a reviewer that thinks like the author tends to approve the author's mistakes.

## Rule 4: exactly-once publishing is a distributed-systems problem

"Open a PR" sounds atomic and isn't: push branch, create PR, record it, and the daemon can crash between any two steps. Duplicate PRs are how people learn to ignore automation.

Publishing goes through an outbox with idempotent phases and a unique operation marker. A reconciler finishes or rolls back half-done publishes after a crash. The test suite injects faults into a fake GitHub at every phase to prove you get one branch and one PR, no matter where the process dies.

## Rule 5: measure the harness, not your feelings

Every harness tweak (a new route, a prompt overlay, "lessons" carried between tasks) *feels* like an improvement. So Hematron has a **replay benchmark**: `hx eval` reruns past tasks at their original base commit and policy under a variant, and the normal verifier judges each replay. Replays run only in idle slots, step aside for real work, and never publish or notify.

It's slow and it costs real tokens. It's still the only honest answer to "did that change make the agent better?"

## The checklist I run new agent tooling against

1. Threat model: "fork PR from a stranger." Which assumptions survive?
2. Does any git process read a `.git` the agent could have written?
3. Is policy read from a commit the agent didn't write?
4. Is evidence bound to hashes or to branch names?
5. Does a different model family do the review?
6. Is there a replay benchmark, or are prompt tweaks judged by vibes?

If a harness can't answer all six, I don't let it near a repo with secrets in its history.
