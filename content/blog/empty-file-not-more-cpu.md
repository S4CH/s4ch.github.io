+++
title = 'Our VMs Needed an Empty File, Not More CPU'
date = '2026-07-30T00:00:00Z'
author = 's4ch'
description = 'Running deliberately vulnerable VMs, each with its own k3s cluster inside, as on-demand CTF labs on GKE with KubeVirt and CDI.'
summary = 'Spawns went from 10–14 minutes to about 3.5 once VMs were cloned from a golden disk. The worst bug was a missing /etc/machine-id: DHCP failed, cloud-init never finished, and every symptom pointed at netplan.'
slug = 'empty-file-not-more-cpu'
draft = false
categories = ['blog']
tags = ['kubernetes', 'kubevirt', 'virtualization', 'ctf', 'platform-engineering']
showtoc = true
ShowReadingTime = true
+++

Containers are fine for most hacking labs. They stop being fine when the lab *is* infrastructure: a box with its own kernel, its own systemd, its own firewall, and in our case its own k3s cluster running an AI-powered app inside. You can't fake that in a container. We'd had a hand-built VM demo running on [KubeVirt](https://kubevirt.io/) since March. In June I made VMs spawnable on demand, one per player, through the same product flow as every other lab.

The tutorials make this look like a YAML file. In practice it was a month of trust-boundary decisions and one deleted file.

## The threat model decides the architecture

Every VM is a hostile tenant. Players get root on it by design, and the box authors ship images we didn't build. So the VMs run on a dedicated cluster, separate from the one that runs the platform API.

The first plan was the obvious one: the platform API reaches across into the lab cluster's control plane and creates VMs. I spent two days on it and hit five walls in order:

1. The API image lacked the auth library for workload identity.
2. Its network policy blocked the metadata server it needed for tokens.
3. The lab cluster's public endpoint didn't allowlist our egress.
4. The private endpoint had no return route to our pod CIDR.
5. The DNS endpoint rejected traffic that left through Cloud NAT.

Every fix on the table made things worse: cluster-wide IP masquerading on the production cluster, or exposing the hostile cluster's control plane to the internet. When every fix widens your blast radius, the design is wrong.

So I inverted it. A small spawner service runs *inside* the lab cluster with its own service account, whose ClusterRole covers only the resource types it manages (VMs, DataVolumes, and the Services and pods around them). The platform calls it over an internal load balancer with a bearer token. There are no cross-cluster credentials and no allowlist widening, and neither the platform nor any tenant can reach the lab cluster's control plane. Put a small trusted agent inside the boundary instead of punching a hole through it. I knew that rule and still spent two days learning it again.

## Disks: from 14 minutes to 3.5

The first version booted each VM from a `containerDisk`, a VM image wrapped in an OCI container. That works for small images. Our AI boxes are heavy (model weights baked in), so every spawn meant a cold pull plus extracting several GB per pod. That came to **10–14 minutes per spawn**, it got worse on a cold node, and it would have hit a thundering herd the moment an event started. It was also past our 8-minute provisioning timeout, so the platform declared spawns failed while the VMs were still booting.

The fix was [CDI](https://github.com/kubevirt/containerized-data-importer): import each box once into a "golden" PVC, then **snapshot-clone** it per spawn. The one-time import takes about 7 minutes. After that, getting to a running VM with an IP takes roughly 2.5 minutes of clone plus a minute of boot, and it stays flat under concurrency. (Getting to a box whose *apps* are serving is a separate clock, covered further down.) CDI had been installed on the cluster for three months and never used. Most of the work was wiring up idle infrastructure.

The gotchas, all of which cost me hours:

- `WaitForFirstConsumer` storage stalls imports forever. No pod consumes a golden, so it never binds. The fix is to annotate the DataVolume with `cdi.kubevirt.io/storage.bind.immediate.requested`.
- Block-mode volumes failed with `Permission denied` on the device. Filesystem mode works.
- The clone permission check isn't the identity you'd guess. By design, KubeVirt authorizes a VM's `dataVolumeTemplates` cross-namespace clone against the *tenant namespace's* service account, not the caller's. The tempting fix is granting tenants clone rights on the golden namespace. Never grant a hostile tenant read access to every other box's disk. Instead the spawner creates the clone DataVolume itself, with its own rights, and the VM just references it by name.
- Storage class versus machine type. A faster disk type we tried later can't attach to the machine types CDI's temporary prep pods landed on. Every clone sat in `PrepClaimInProgress` for over five minutes, and every box "failed to start." Moving back to `pd-balanced` cleared the stall, with clones binding in about 22 seconds.

## Debug the pipeline with a control, not a suspect

For days, every test spawn returned 504 and I couldn't tell whether the platform or the box was broken, because I was testing the pipeline *with* the box. That's like debugging a compiler with a program that might not compile.

So I built a **control lab**: plain Ubuntu, nginx on `0.0.0.0:80`, SSH, and networking that doesn't depend on anything clever. It spawned through the full product flow and served traffic on the first try. That proved the pipeline, and the 504 belonged to the image.

The image's actual sin: KubeVirt's masquerade networking SNATs all inbound traffic to the guest's gateway address. The box's firewall allowed traffic by *source* address, nothing matched, and the default rule rejected everything. That's a box-side fix, now written down as a contract that box authors follow: bind `0.0.0.0`, and don't filter by source under masquerade.

The same week I learned that "VMI Running with an IP" isn't "ready." Some guests never report an interface IP without a guest agent, so the spawner falls back to the virt-launcher pod's IP, which is where masquerade makes the VM reachable anyway. And our stale-lab checker, which assumed every lab had a Kubernetes Deployment, quietly marked every VM lab terminated after ten minutes. (That checker has [its own post](/blog/dev-cleanup-job-deleted-production-labs/).)

## The machine-id that wasn't there

In late July, every freshly imported golden booted to a login prompt and never got on the network.

The first layer was real. These images were built from Ubuntu's ISO installer, which ships cloud-init *disabled* (`cloud-init.disabled`, `datasource_list: [None]`). Our spawner's cloud-init config never ran. Removing the four lockout files and re-baking fixed that.

The second layer was mine, and it was the expensive one. My bake step ran `cloud-init clean --machine-id` offline, against the disk image with no systemd running. In that situation it *deletes* `/etc/machine-id` instead of writing `uninitialized`. At early boot the root filesystem is still read-only, so systemd can neither create the file nor bind-mount a temporary ID over a file that doesn't exist. Without a machine ID, systemd-networkd can't derive a DHCP DUID:

```text
enp1s0: Failed to configure DHCPv4 client: No such file or directory
```

That broke the whole boot chain. No lease meant `wait-online` blocked, so `network-online.target` blocked, so cloud-init never finished, so the runcmd that applies netplan and enables SSH never ran. *Every* symptom pointed at netplan, and netplan was fine.

I proved it both ways. On a stuck clone, `systemd-machine-id-setup && systemctl restart systemd-networkd` got a lease within seconds. Re-baking with `: > /etc/machine-id` (empty, never absent) gave a fresh clone a lease and open SSH in about three minutes with no help. The empty file also matters for a second reason: each clone generates its own unique ID instead of inheriting the golden's.

Then the hostname trap. These images contain a live k3s cluster whose node is named after the *build* host. KubeVirt's NoCloud metadata renames the guest to the VMI name about three seconds before user-data is merged, so `preserve_hostname` in user-data arrives too late. k3s registered a second node, the original went `NotReady`, and PVs pinned to that ghost node stranded a pod in `Pending` for 14 hours. A `preserve_hostname` drop-in baked into the golden fixed it.

Last one: boxes were taking about 10 minutes to start *serving*, and the instinct was more vCPU. `systemd-analyze blame` said the OS took 20–30 seconds, and pressure-stall info showed the guest idle, not starved. `systemctl list-jobs` showed the real cause: a box warm-up service ordered *into* the boot transaction, with `cloud-final` waiting behind it. More hardware would have bought nothing.

## Where it landed

- A spawner inside the hostile cluster, so the platform never needs the lab cluster's control plane.
- Golden import once, snapshot-clone per spawn, spawner-owned clone DataVolumes, and no clone rights for tenants.
- A written box contract (bind `0.0.0.0`, cloud-init enabled, empty machine-id, preserved hostname). The unlock bake gets re-applied on every import, because every new upstream release has arrived with the installer lockout again. Automating that step is next.
- Autoscaling from 1 to 10 nodes. That's about 3 boxes per node, limited by RAM rather than disk, so roughly 30 concurrent VMs at peak and close to nothing when idle.

If you're about to do this: build the control lab first. Every hour I lost went into the gaps between systems, meaning what cloud-init assumes about systemd, what CDI assumes about storage, and what a box author assumes about the network. A known-good box is the only way to tell which side of a gap you're standing on.
