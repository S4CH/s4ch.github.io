+++
title = 'Our VMs Needed an Empty File, Not More CPU'
date = '2026-07-30T00:00:00Z'
author = 's4ch'
description = 'Running deliberately vulnerable VMs, each with its own k3s cluster inside, as on-demand CTF labs on GKE with KubeVirt and CDI.'
summary = 'A golden-image bake deleted /etc/machine-id. DHCP failed, cloud-init never finished, SSH never opened, and every symptom pointed at netplan. Plus a k3s hostname trap that stranded a pod for 14 hours.'
slug = 'empty-file-not-more-cpu'
draft = false
categories = ['blog']
tags = ['kubernetes', 'kubevirt', 'virtualization', 'ctf', 'platform-engineering']
showtoc = true
ShowReadingTime = true
+++

In late July, every VM lab we cloned from a freshly baked golden image booted to a login prompt and never got on the network. The console had one useful line:

```text
enp1s0: Failed to configure DHCPv4 client: No such file or directory
```

Everything else pointed at netplan, and netplan was fine. The cause was a file my own bake step had deleted.

## The chain

These VMs are CTF targets: full Ubuntu guests, each running its own k3s cluster, cloned per player from a golden disk on [KubeVirt](https://kubevirt.io/). To make a golden cloneable, my bake step ran `cloud-init clean --machine-id` against the disk image offline, with nothing running inside it.

`clean --machine-id` is meant to reset the image's identity. When cloud-init detects a running systemd, it writes `uninitialized` into `/etc/machine-id`, and systemd generates a fresh ID on first boot. Offline there's no running systemd to detect, so it falls back to deleting the file, which is the [non-systemd path in its source](https://github.com/canonical/cloud-init/blob/main/cloudinit/cmd/clean.py). [Launchpad #1999680](https://bugs.launchpad.net/cloud-init/+bug/1999680) is the same failure from 2022, and [machine-id(5)](https://www.freedesktop.org/software/systemd/man/latest/machine-id.html) says plainly that images should ship an *empty* file, not a missing one. At early boot the root filesystem is read-only, so systemd can't create the file or bind-mount a temporary ID over a path that doesn't exist.

None of that was new. What made it expensive was the causal chain:

1. No machine ID, so systemd-networkd can't derive a DHCP DUID and the NIC fails.
2. No lease, so `systemd-networkd-wait-online` blocks, and `network-online.target` blocks with it.
3. cloud-init waits on the network, so it never finishes, and `cloud-final` never runs.
4. `cloud-final` is what runs our spawner's runcmd: apply netplan, enable SSH.

From the outside, that's "netplan didn't apply and SSH is closed." Every visible symptom sits at the end of the chain. The only honest clue was the first error on the console.

I proved it both ways. On a stuck clone, `systemd-machine-id-setup && systemctl restart systemd-networkd` got a lease within seconds. Re-baking with `: > /etc/machine-id` (empty, never absent) gave a fresh clone a lease and open SSH in about three minutes with no help. The empty file also means each clone generates its own ID instead of inheriting the golden's.

There was a layer underneath, too. The images came from Ubuntu's ISO installer, which ships cloud-init *disabled* (`cloud-init.disabled`, `datasource_list: [None]`). The bake now removes four lockout files, and every new upstream release has arrived with them again.

## The hostname trap

I haven't found this one written up. The golden contains a live k3s cluster whose node is named after the *build* host. KubeVirt's NoCloud metadata renames the guest to the VM's name about three seconds *before* user-data is merged, so `preserve_hostname: true` in user-data arrives too late.

k3s came up under the new hostname and registered a second node. The original node went `NotReady`, and local-path volumes are pinned to the node that created them, so a pod sat in `Pending` for 14 hours waiting for a node that would never come back. The fix is a `preserve_hostname` drop-in baked into the golden, so it applies before the metadata rename instead of after.

## Not more CPU either

Boxes also took about 10 minutes to start serving, and the instinct was bigger VMs. `systemd-analyze blame` put the OS at 20–30 seconds, and pressure-stall info showed the guest idle, not starved. `systemctl list-jobs` showed the real cause: the box's warm-up service was ordered *into* the boot transaction, with `cloud-final` queued behind it. More vCPU would have bought nothing.

## How we got VMs on Kubernetes in the first place

Briefly, because each of these decisions has its own trap:

- **Don't reach into the hostile cluster.** The VMs run on a dedicated cluster, and the first plan had the platform API call its control plane across clusters. I hit five walls (workload-identity libraries, metadata egress, endpoint allowlists, no return route for pod IPs, DNS endpoint policy), and every fix widened the blast radius. So a small spawner service runs *inside* the lab cluster, and the platform calls it over an internal load balancer. Neither the platform nor any tenant ever needs the lab cluster's control plane.
- **Clone, don't pull.** Booting each VM from a `containerDisk` meant pulling and extracting gigabytes per spawn, about 10–14 minutes and past our provisioning timeout. [CDI](https://github.com/kubevirt/containerized-data-importer) imports a golden once, then snapshot-clones it per spawn: about 3.5 minutes to a running VM, flat under concurrency. Two traps: `WaitForFirstConsumer` storage never binds a golden nobody mounts (annotate it `bind.immediate`). And KubeVirt authorizes a VM's cross-namespace clone against the *tenant's* service account, by design. Rather than grant hostile tenants read access to every golden, the spawner creates the clone itself and the VM references it by name.
- **Debug with a control.** For days every test spawn returned 504, and I couldn't tell the platform from the box, because I was testing the pipeline *with* the box. A plain Ubuntu control lab (nginx on `0.0.0.0:80`, nothing clever) served on the first try, which put the bug in the image. KubeVirt's masquerade networking SNATs inbound traffic to the guest's gateway address, and the box's firewall allowed traffic by source address, so it rejected everything.

The control lab is the habit I'd keep. Every hour I lost here went into a gap between two systems: what cloud-init assumes about systemd, what KubeVirt assumes about hostnames, what a box author assumes about the network. A known-good box is how you find out which side of the gap you're on.
