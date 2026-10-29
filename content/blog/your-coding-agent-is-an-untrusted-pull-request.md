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

Here is the whole bug in ten lines. Run it in a scratch directory. The "payload" only creates a marker file:

```sh
D=$(mktemp -d); cd "$D"
git init -q tree && cd tree && echo hi > a && git add a && git -c user.name=x -c user.email=x@x commit -qm init
git config core.fsmonitor "touch $D/PWNED; false"   # what a compromised agent writes
cd "$D"
git -C tree status >/dev/null 2>&1; ls PWNED        # naive daemon: PWNED exists
rm -f PWNED; git clone -q --bare tree trusted.git
GIT_DIR="$D/trusted.git" GIT_WORK_TREE="$D/tree" GIT_CONFIG_NOSYSTEM=1 GIT_CONFIG_GLOBAL=/dev/null \
  git status >/dev/null 2>&1; ls PWNED              # hardened daemon: no such file
```

`core.fsmonitor` names a program, and git runs it on any command that refreshes the index. A planted `.git/config` turns a routine `git status` into code execution.

None of that is new on its own. Git's [own docs](https://git-scm.com/docs/git#_security) say it isn't safe to run git in a `.git` you don't trust, and [CVE-2022-24765](https://github.blog/open-source/git/git-security-vulnerability-announced/) is why `safe.directory` exists. In September, Manifold Security's [GitSpawn](https://labs.cloudsecurityalliance.org/research/csa-research-note-gitspawn-ai-coding-agent-rce-20260903-csa/) showed it firing inside seven coding agents that open a repo and run `git status` for context.

This post is about the same bug class one layer up: the *harness* that runs agents unattended and then runs git on whatever they wrote.

## The threat model: a fork PR from a stranger

Since September I've been building Hematron, a personal harness that takes coding tasks, runs agent workers (Claude Code, Codex, Cursor's agent, opencode) around the clock, and opens one verified pull request per task for a human to merge.

Most agent setups treat the agent like a junior engineer: well-meaning, sometimes wrong. I treat it like a stranger opening a pull request from a fork. Not because models are malicious, but because everything they read can be: issue text, dependency READMEs, web pages, test fixtures. With prompt injection, the author of your diff is whoever last got text into the agent's context window.

CI security already has a name for this shape: GitHub's [pwn request](https://securitylab.github.com/resources/github-actions-preventing-pwn-requests/), where untrusted code reaches a privileged pipeline. The harness daemon is that privileged pipeline. It holds the GitHub credentials, and workers don't.

## Never let git read a `.git` the agent wrote

GitSpawn's recommended mitigation is `git -c core.fsmonitor=false`. That closes one key. A worker that controls the whole work tree can also plant `core.hooksPath`, diff and filter driver definitions, a `commondir` redirect, or an `objects/info/alternates` escape into another repo. Pinning keys one at a time is a denylist, and denylists lose.

So the control in Hematron is structural. The daemon never lets git *discover* a repository inside an untrusted tree. It always points git at a daemon-owned git directory outside the tree, which is never mounted into a sandbox:

```text
GIT_DIR=<daemon-owned dir>   GIT_WORK_TREE=<untrusted tree>   # no repo discovery
GIT_CONFIG_NOSYSTEM=1   GIT_CONFIG_GLOBAL=/dev/null   GIT_ATTR_NOSYSTEM=1
unset GIT_COMMON_DIR GIT_OBJECT_DIRECTORY GIT_ALTERNATE_OBJECT_DIRECTORIES
      GIT_INDEX_FILE GIT_EXTERNAL_DIFF
-c core.hooksPath=/dev/null  -c core.fsmonitor=false  -c core.attributesFile=/dev/null
--no-textconv --no-ext-diff            # on diff/show/log/format-patch/diff-*
```

With `GIT_DIR` set explicitly, anything planted under the tree's `.git` is data git never reads. The pins are defense in depth. The wrapper also refuses to run if the git dir sits inside the tree, and callers confirm the worker that owned the tree is dead first, so files can't change mid-command.

One subtle case is worth writing down. A tracked `.gitattributes` saying `diff=evil` is harmless only because the daemon never defines a driver named `evil`, and git treats an undefined driver as a no-op. That's a guarantee by absence, so it has its own test.

## The agent can't grade its own homework

The other half of "untrusted PR" is the verifier. An agent asked to make the tests pass will sometimes find that deleting the test works, with no malice involved.

So verification policy and acceptance criteria are read from the base commit, never from the candidate, and a diff that edits the policy file can't change its own checks. Evidence is bound to the exact `(baseSha, headSha, policy snapshot)`. Rewrite the candidate and every earlier result is void. If the base moves before publishing, the task parks for a human to re-approve instead of quietly rebasing. The reviewer stage uses a model from a different family than the author, because two runs of the same model share blind spots.

The rest is plumbing that has to be right. Publishing goes through an outbox with idempotent phases, so a crash mid-publish yields one branch and one PR, which fault-injection tests against a fake GitHub prove. A replay benchmark (`hx eval`) reruns past tasks at their original base and policy, so a prompt tweak gets measured instead of felt.

If you run agents unattended, run the ten-line repro against your own harness first. Then search the harness for every place it shells out to git, and ask which `.git` each call is reading.
