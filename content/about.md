+++
title= "About"
description= "Security engineer, eBPF researcher, and purple teamer"
draft= false
comments= false

ShowReadingTime = false
showtoc = true
tocopen = true
hideSummary = false
ShowWordCount = false
+++

## Hey, I'm Sachin

Security engineer at [iZOOlogic](https://izoologic.com), a US-based cybersecurity firm, doing purple team work. BTech from MNIT Jaipur, 2024.

I break things to understand how they work, then figure out how to detect when someone else tries the same. My day-to-day sits at the intersection of offensive research and defensive engineering — reverse engineering EDR internals, analyzing eBPF at the kernel level, and hunting threat actors across phishing infrastructure.

## Research & Publications

**[How Reverse Engineering Markov Chains Exposed a China-Based Phishing Empire Targeting 24 Indian Banks](https://izoologic.com/industry-news-update/how-reverse-engineering-markov-chains-exposed-a-china-based-phishing-empire-targeting-24-indian-banks/)** — Published at iZOOlogic, October 2025. Uncovered a large-scale phishing operation by reverse engineering the domain generation patterns used by a China-based threat actor targeting Indian banking customers.

**[CVE-2025-32324](/research/cve-2025-32324/)** — Authentication bypass in Android's ActivityManagerShellCommand. Discovered and responsibly disclosed.

**[eBPF JIT Compiler Internals: Understanding Constant Blinding](/research/ebpf-jit-compiler-internals-understanding-constant-blinding/)** — Deep dive into how the Linux kernel's eBPF JIT compiler implements constant blinding as a security mitigation and what it means for both attackers and defenders.

**[Novel Approach to Tackle UAF Bugs in the Linux Kernel](/research/bucket-allocators/)** — Analysis of dedicated bucket allocators as a mitigation technique against use-after-free vulnerabilities.

## Focus Areas

**eBPF Security** — JIT compiler internals, verifier bypasses, constant blinding, and the offensive/defensive implications of eBPF programs running in kernel space.

**EDR Research** — Reverse engineering detection engines, understanding bypass techniques, and building better detections from the other side.

**Threat Intelligence** — Phishing campaign analysis, C2 infrastructure hunting, IOC correlation, and tracking threat actor TTPs. Particular experience with financially motivated groups targeting the banking sector.

**Binary Exploitation** — Vulnerability research, reverse engineering, and exploit development. 100+ machines solved across [HackTheBox](/writeups/hackthebox/) and [TryHackMe](/writeups/tryhackme/), plus pwn.college modules for binary exploitation fundamentals.

## Currently

Exploring how eBPF is reshaping both offensive and defensive security — from rootkit capabilities to next-gen endpoint detection. Most of my findings end up as posts on the [research](/research/) page.
