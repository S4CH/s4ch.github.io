+++
title = 'The Terminal Could Delete Its Own Firewall'
date = '2026-10-05T00:00:00Z'
author = 's4ch'
description = 'Per-player browser terminals next to CTF target VMs, confined by an nftables fence each pod applies to itself.'
summary = 'The first version ran ttyd as root with NET_ADMIN, so any player could run nft flush ruleset. The fix moved the privilege into an init container, and the next fix nearly crash-looped every pod over CAP_CHOWN.'
slug = 'terminal-could-delete-its-own-firewall'
draft = false
categories = ['blog']
tags = ['kubernetes', 'container-security', 'nftables', 'ctf', 'threat-modeling']
showtoc = true
ShowReadingTime = true
+++

Our VM labs had a usability problem. Players got a target box, but to attack it they needed tools *somewhere*, and that somewhere had to reach the box. VPN config packs were fiddly, and a box author vetoed them. A full Kali VM per player was 3.9 GB, multiplied across an event cohort. "Bring your own laptop" meant half the room spending the first hour on networking.

So every player now gets a terminal in the browser, already next to the target. A workspace is a small pod (Alpine, about 120 MB, with ttyd, ssh, python3, netcat, socat, curl, dig and tmux) that spawns beside a player's VM, reachable through the same cookie-gated router as the lab.

The product part was easy. The hard part is that a workspace is, by definition, an interactive shell for an anonymous stranger, running inside my network. Every decision below follows from that sentence.

## The fence lives in the pod

I didn't want the shell's confinement to depend on anything outside the pod being configured correctly. So each workspace fences itself with nftables at startup, failing closed:

- **Egress:** the player's own target VM and cluster DNS, nothing else.
- **Ingress:** the router's terminal port, plus dial-back from the player's VM (reverse shells are a legitimate CTF move).

Verified from a live workspace, the target answers, while the inference gateway, the Kubernetes API, the cloud metadata server and everything else on the network time out.

## Green tests, broken feature

The first version passed every unit test and still didn't work. Four bugs sat between "merged" and "working," all the same kind: the code was right and the world around it was wrong.

1. **Wrong cluster** (caught in review). The pod was created with the platform API's in-cluster client, which put it on the *app* cluster, nowhere near the VM it was meant to sit next to. Workspaces now go through the same in-cluster spawner as the VMs.
2. **Missing file in the image** (caught at image build). A new module was imported but never `COPY`'d in the Dockerfile, so the spawner crash-looped on deploy. The unit tests never build the image.
3. **RBAC** (caught by the live smoke test). The spawner could create VMs but not Deployments, which meant a 403 on the first real open.
4. **The probe hit the fence** (caught by the live smoke test). Kubernetes `tcpSocket` probes come from the *node*, the fence correctly dropped them, and the kubelet restarted the container roughly every 90 seconds. The fix was an `exec` probe that curls loopback, which the fence allows, so the fence didn't need a hole.

None of these show up in a unit test. Build the image, deploy it, and click the button.

## Round 1: the shell could delete its own firewall

Review (a box author who reads with an attacker's eye, plus an automated reviewer) came down to one question: *who is ttyd running as?*

Root. With `NET_ADMIN`, because the entrypoint needed it to load the nftables rules. So the player's shell held the exact capability needed to run `nft flush ruleset` and walk out of its main confinement.

That's the classic setup-privilege leak: a capability you need for a few milliseconds at boot stays on the process for the whole session. The first fix used `setpriv` to drop every capability and run ttyd as `player` after the fence loaded. Verified: `nft flush ruleset` from the player shell now returns `Operation not permitted`.

## Round 2: privilege shouldn't share a container with the player

Dropping privileges at runtime relies on the entrypoint script staying correct forever. So the next round made it structural:

- An init container, `apply-fence`, is the only container that ever holds `NET_ADMIN`/`NET_RAW`. It loads the rules into the pod's network namespace and exits. The namespace belongs to the pod, not the container, so the rules stay in force for the workspace container.
- The main container starts as the unprivileged `player` UID, so there's no root step left to drop from. It runs with `drop: [ALL]`, seccomp `RuntimeDefault`, a read-only root filesystem, and writable `emptyDir` mounts only for `/home/player` and `/tmp`.
- No service-account token is mounted.
- The hardened image ships under its own tag, separate from the `:dev` tag that CI overwrites on every push.

## Round 3: the hardening that would have bricked every pod

The re-review caught a bug in the *hardening*. The init container also prepares `/home/player`, which means a `chown`, and `chown(2)` needs `CAP_CHOWN` no matter who owns the file. Round 2 had dropped everything and added back only the two network capabilities.

Had it shipped, every workspace pod would have sat in `Init:CrashLoopBackOff`. It failed closed, which is the right direction to fail, but it was still an outage. The unit tests passed because they asserted the capability list *we wrote*, not what the script actually *needs*. Now the tests run against the exact production capability set.

Review also flagged a rollout-order trap: if the new image lands before the manifest that expects it, the old manifest runs the new image with the old privileges, and the pod fails *open*. The order is now: new tag, then the manifest that references it, then the image changes.

## Round 4: the defaults you never set

A player audit on dev found that the workspace's `env` listed dozens of `*_SERVICE_HOST`/`*_PORT` variables for Services the player had no reason to know about. That's Kubernetes' default `enableServiceLinks: true`, which nobody asks for and every pod gets.

The impact was disclosure only, because the fence already blocked every one of those addresses. But a sandbox that hands the player a map of its neighbours is doing the attacker's recon for free. The fix is one line, `enableServiceLinks: false`.

Service links, token automount and probe source addresses are all defaults you inherit. Treat them as configuration you didn't review.

## Making the shell feel native

None of this matters if the shell is unpleasant to use:

- `hostAliases` map the box's short name and a generic `target` to the guest IP. Write-ups say `ssh player@<box>`, so that should just work. It reuses the same validated IP as the fence, never a second value.
- The pod's hostname is the lab's name, and the prompt shows it.
- `ping` works unprivileged via the `net.ipv4.ping_group_range` sysctl scoped to the player's GID. It's a Kubernetes "safe" sysctl, so it needs no `NET_RAW`.
- Reopening a running workspace returns it instead of erroring. The first version's Open button only worked once.

## What I'd carry to the next sandbox

Every review round asked the same question at a finer grain: when does this process need this privilege, and does it still have it afterwards? Root at boot was fine and root during the session wasn't. Capabilities in the init container were fine and capabilities in the shell weren't. Service links nobody asked for weren't fine at all. If I could keep one habit from this build, it's asking about each privilege over time, not just whether it exists.
