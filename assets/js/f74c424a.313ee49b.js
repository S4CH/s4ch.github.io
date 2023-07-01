"use strict";(self.webpackChunkcyfun_me=self.webpackChunkcyfun_me||[]).push([[2534],{3905:(e,t,n)=>{n.d(t,{Zo:()=>u,kt:()=>m});var a=n(67294);function s(e,t,n){return t in e?Object.defineProperty(e,t,{value:n,enumerable:!0,configurable:!0,writable:!0}):e[t]=n,e}function l(e,t){var n=Object.keys(e);if(Object.getOwnPropertySymbols){var a=Object.getOwnPropertySymbols(e);t&&(a=a.filter((function(t){return Object.getOwnPropertyDescriptor(e,t).enumerable}))),n.push.apply(n,a)}return n}function o(e){for(var t=1;t<arguments.length;t++){var n=null!=arguments[t]?arguments[t]:{};t%2?l(Object(n),!0).forEach((function(t){s(e,t,n[t])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(n)):l(Object(n)).forEach((function(t){Object.defineProperty(e,t,Object.getOwnPropertyDescriptor(n,t))}))}return e}function i(e,t){if(null==e)return{};var n,a,s=function(e,t){if(null==e)return{};var n,a,s={},l=Object.keys(e);for(a=0;a<l.length;a++)n=l[a],t.indexOf(n)>=0||(s[n]=e[n]);return s}(e,t);if(Object.getOwnPropertySymbols){var l=Object.getOwnPropertySymbols(e);for(a=0;a<l.length;a++)n=l[a],t.indexOf(n)>=0||Object.prototype.propertyIsEnumerable.call(e,n)&&(s[n]=e[n])}return s}var r=a.createContext({}),p=function(e){var t=a.useContext(r),n=t;return e&&(n="function"==typeof e?e(t):o(o({},t),e)),n},u=function(e){var t=p(e.components);return a.createElement(r.Provider,{value:t},e.children)},c="mdxType",h={inlineCode:"code",wrapper:function(e){var t=e.children;return a.createElement(a.Fragment,{},t)}},k=a.forwardRef((function(e,t){var n=e.components,s=e.mdxType,l=e.originalType,r=e.parentName,u=i(e,["components","mdxType","originalType","parentName"]),c=p(n),k=s,m=c["".concat(r,".").concat(k)]||c[k]||h[k]||l;return n?a.createElement(m,o(o({ref:t},u),{},{components:n})):a.createElement(m,o({ref:t},u))}));function m(e,t){var n=arguments,s=t&&t.mdxType;if("string"==typeof e||s){var l=n.length,o=new Array(l);o[0]=k;var i={};for(var r in t)hasOwnProperty.call(t,r)&&(i[r]=t[r]);i.originalType=e,i[c]="string"==typeof e?e:s,o[1]=i;for(var p=2;p<l;p++)o[p]=n[p];return a.createElement.apply(null,o)}return a.createElement.apply(null,n)}k.displayName="MDXCreateElement"},95130:(e,t,n)=>{n.r(t),n.d(t,{assets:()=>r,contentTitle:()=>o,default:()=>h,frontMatter:()=>l,metadata:()=>i,toc:()=>p});var a=n(87462),s=(n(67294),n(3905));const l={},o="Nessus",i={unversionedId:"Tryhackme/Nessus/Nessus",id:"Tryhackme/Nessus/Nessus",title:"Nessus",description:"Learn how to set up and use Nessus, a popular vulnerability scanner.",source:"@site/writeups/Tryhackme/Nessus/Nessus.md",sourceDirName:"Tryhackme/Nessus",slug:"/Tryhackme/Nessus/",permalink:"/writeups/Tryhackme/Nessus/",draft:!1,tags:[],version:"current",frontMatter:{},sidebar:"tutorialSidebar",previous:{title:"NerdHerd",permalink:"/writeups/Tryhackme/NerdHerd/NerdHeard"},next:{title:"Network Services",permalink:"/writeups/Tryhackme/Network Services/"}},r={},p=[{value:"\ud83d\udca2 We will cover  the topics",id:"-we-will-cover--the-topics",level:2},{value:"Task 1 Deploy!",id:"task-1-deploy",level:2},{value:"Task 2 Installation",id:"task-2-installation",level:2},{value:"Task 3 Nessus Quiz",id:"task-3-nessus-quiz",level:2},{value:"Task 4 Scanning!",id:"task-4-scanning",level:2},{value:"Task 5 Wait, there&#39;s mail?",id:"task-5-wait-theres-mail",level:2},{value:"Task 6 So you&#39;re telling me that&#39;s how you set up a web app...",id:"task-6-so-youre-telling-me-thats-how-you-set-up-a-web-app",level:2}],u={toc:p},c="wrapper";function h(e){let{components:t,...n}=e;return(0,s.kt)(c,(0,a.Z)({},u,n,{components:t,mdxType:"MDXLayout"}),(0,s.kt)("h1",{id:"nessus"},"Nessus"),(0,s.kt)("p",null,"Learn how to set up and use Nessus, a popular vulnerability scanner."),(0,s.kt)("p",null,(0,s.kt)("a",{parentName:"p",href:"https://tryhackme.com/room/rpnessus"},"Nessus")),(0,s.kt)("h2",{id:"-we-will-cover--the-topics"},"\ud83d\udca2 We will cover  the topics"),(0,s.kt)("ul",null,(0,s.kt)("li",{parentName:"ul"},"Web Application Analysis"),(0,s.kt)("li",{parentName:"ul"},"Nesus Fundamentals")),(0,s.kt)("h2",{id:"task-1-deploy"},"[Task 1]"," Deploy!"),(0,s.kt)("p",null,"Deploy the vulnerable machine! This one, well, it has problems."),(0,s.kt)("ol",null,(0,s.kt)("li",{parentName:"ol"},"Deploy the virtual machine!")),(0,s.kt)("p",null,(0,s.kt)("inlineCode",{parentName:"p"},"No answer needed")),(0,s.kt)("h2",{id:"task-2-installation"},"[Task 2]"," Installation"),(0,s.kt)("p",null,"Install Nessus on a system of your system of choice! For the sake of this guide, I'll be using Ubuntu. I highly recommend installing this on a dedicated VM just for Nessus scanning. Here's a link to the Nessus documentation online: ",(0,s.kt)("a",{parentName:"p",href:"https://docs.tenable.com/nessus/Content/GettingStarted.htm"},"https://docs.tenable.com/nessus/Content/GettingStarted.htm")),(0,s.kt)("ol",null,(0,s.kt)("li",{parentName:"ol"},"First, create a basic Ubuntu box (or any other system of your choice). Minimum 4 2GHz cores, 4 GB RAM (8 Recommended) and 30 GB of disk space.")),(0,s.kt)("p",null,(0,s.kt)("inlineCode",{parentName:"p"},"No answer needed")),(0,s.kt)("ol",{start:2},(0,s.kt)("li",{parentName:"ol"},"Next, go ahead and register for a Nessus Home license. This can be used to scan up to 16 IP addresses at a time. Be sure to keep this license information safe, you'll need it for any manual work. Here's the registration link: ",(0,s.kt)("a",{parentName:"li",href:"https://www.tenable.com/products/nessus-home"},"https://www.tenable.com/products/nessus-home"))),(0,s.kt)("p",null,(0,s.kt)("inlineCode",{parentName:"p"},"No answer needed")),(0,s.kt)("ol",{start:3},(0,s.kt)("li",{parentName:"ol"},"Follow the installation instructions on Tenable's website, once Nessus is set up connect the machine that it lives on to the network using your VPN file.")),(0,s.kt)("p",null,(0,s.kt)("inlineCode",{parentName:"p"},"No answer needed")),(0,s.kt)("h2",{id:"task-3-nessus-quiz"},"[Task 3]"," Nessus Quiz"),(0,s.kt)("p",null,"A short quiz on the features and functions of Nessus, this includes the Nessus 7 manual as well for any clarification."),(0,s.kt)("ol",null,(0,s.kt)("li",{parentName:"ol"},"As we log into Nessus, we are greeted with a button to launch a scan, what is the name of this button?")),(0,s.kt)("p",null,(0,s.kt)("inlineCode",{parentName:"p"},"New Scan")),(0,s.kt)("ol",{start:2},(0,s.kt)("li",{parentName:"ol"},"Nessus allows us to create custom templates that can be used during the scan selection as additional scan types, what is the name of the menu where we can set these?")),(0,s.kt)("p",null,(0,s.kt)("inlineCode",{parentName:"p"},"Policies")),(0,s.kt)("ol",{start:3},(0,s.kt)("li",{parentName:"ol"},"Nessus also allows us to change plugin properties such as hiding them or changing their severity, what menu allows us to change this?")),(0,s.kt)("p",null,(0,s.kt)("inlineCode",{parentName:"p"},"Plugin Rules")),(0,s.kt)("ol",{start:4},(0,s.kt)("li",{parentName:"ol"},"Nessus can also be run through multiple 'Scanners' where multiple installations can work together to complete scans or run scans on remote networks, what menu allows us to see all of these installations?")),(0,s.kt)("p",null,(0,s.kt)("inlineCode",{parentName:"p"},"Scanners")),(0,s.kt)("ol",{start:5},(0,s.kt)("li",{parentName:"ol"},"Let's move onto the scan types, what scan allows us to see simply what hosts are 'alive'?")),(0,s.kt)("p",null,(0,s.kt)("inlineCode",{parentName:"p"},"Host Discovery")),(0,s.kt)("ol",{start:6},(0,s.kt)("li",{parentName:"ol"},"One of the most useful scan types, which is considered to be 'suitable for any host'?")),(0,s.kt)("p",null,(0,s.kt)("inlineCode",{parentName:"p"},"Basic Network Scan")),(0,s.kt)("ol",{start:7},(0,s.kt)("li",{parentName:"ol"},"Following a few basic scans, it's often useful to run a scan wherein the scanner can authenticate to systems and evaluate their patching level. What scan allows you to do this?")),(0,s.kt)("p",null,(0,s.kt)("inlineCode",{parentName:"p"},"Credentialed Patch Audit")),(0,s.kt)("ol",{start:8},(0,s.kt)("li",{parentName:"ol"},"When performing Web App tests it's often useful to run which scan? This can be incredibly useful when also using nitko, zap, and burp to gain a full picture of an application.")),(0,s.kt)("p",null,(0,s.kt)("inlineCode",{parentName:"p"},"Web Application Tests")),(0,s.kt)("h2",{id:"task-4-scanning"},"[Task 4]"," Scanning!"),(0,s.kt)("p",null,"Run a basic network scan and learn to read through the results!"),(0,s.kt)("ol",null,(0,s.kt)("li",{parentName:"ol"},"Deploy the machine and connect to the network")),(0,s.kt)("p",null,(0,s.kt)("inlineCode",{parentName:"p"},"No answer needed")),(0,s.kt)("ol",{start:2},(0,s.kt)("li",{parentName:"ol"},"Create a new 'Basic Network Scan' targeting the deployed VM. What option can we set under 'BASIC' to set a time for this scan to run? This can be very useful when network congestion is an issue.")),(0,s.kt)("p",null,(0,s.kt)("inlineCode",{parentName:"p"},"Schedule")),(0,s.kt)("ol",{start:3},(0,s.kt)("li",{parentName:"ol"},"Under discovery set the scan to cover ports 1-65535. What is this type called?")),(0,s.kt)("p",null,(0,s.kt)("inlineCode",{parentName:"p"},"Port scan (all ports)")),(0,s.kt)("ol",{start:4},(0,s.kt)("li",{parentName:"ol"},"As we are connected to the network via a VPN, it may be to our benefit to 'tone down' the scan a bit. What scan type can we change to under 'ADVANCED' for this lower bandwidth connection?")),(0,s.kt)("p",null,(0,s.kt)("inlineCode",{parentName:"p"},"Scan low bandwidth links")),(0,s.kt)("ol",{start:5},(0,s.kt)("li",{parentName:"ol"},"With these options set (other than the time to run) save and launch the scan.")),(0,s.kt)("p",null,(0,s.kt)("inlineCode",{parentName:"p"},"No answer needed")),(0,s.kt)("ol",{start:6},(0,s.kt)("li",{parentName:"ol"},"After the scan completes, which 'Vulnerability' can we view the details of to see the open ports on this host?")),(0,s.kt)("p",null,(0,s.kt)("inlineCode",{parentName:"p"},"Nessus SYN scanner")),(0,s.kt)("ol",{start:7},(0,s.kt)("li",{parentName:"ol"},"There seems to be a chat server running on this machine, what port is it on?")),(0,s.kt)("p",null,(0,s.kt)("inlineCode",{parentName:"p"},"6667")),(0,s.kt)("ol",{start:8},(0,s.kt)("li",{parentName:"ol"},"Looks like we have a medium level vulnerability relating to SSH, what is this vulnerability named?")),(0,s.kt)("p",null,(0,s.kt)("inlineCode",{parentName:"p"},"SSH Weak Algorithms Supports")),(0,s.kt)("ol",{start:9},(0,s.kt)("li",{parentName:"ol"},"What web server type and version is reported by Nessus?")),(0,s.kt)("p",null,(0,s.kt)("inlineCode",{parentName:"p"},"Apache/2.4.99")),(0,s.kt)("h2",{id:"task-5-wait-theres-mail"},"[Task 5]"," Wait, there's mail?"),(0,s.kt)("p",null,"Add SMTP functionality into your Nessus install!"),(0,s.kt)("ol",null,(0,s.kt)("li",{parentName:"ol"},"An optional but awesome additional step, link your Nessus box up to an SMTP server via the Settings panel. Google provides this for free if you already have a Gmail account. Adding 2-factor authentication on your account and create an app password, then link Nessus to the Gmail SMTP server via these following settings: ",(0,s.kt)("a",{parentName:"li",href:"https://www.siteground.com/kb/google_free_smtp_server/"},"https://www.siteground.com/kb/google_free_smtp_server/"))),(0,s.kt)("p",null,(0,s.kt)("inlineCode",{parentName:"p"},"No answer needed")),(0,s.kt)("h2",{id:"task-6-so-youre-telling-me-thats-how-you-set-up-a-web-app"},"[Task 6]"," So you're telling me that's how you set up a web app..."),(0,s.kt)("p",null,"Run a Web App scan against a very secure web application that has absolutely no problems!"),(0,s.kt)("ol",null,(0,s.kt)("li",{parentName:"ol"},"Run a web application scan against this new box.")),(0,s.kt)("p",null,(0,s.kt)("inlineCode",{parentName:"p"},"No answer needed")),(0,s.kt)("ol",{start:2},(0,s.kt)("li",{parentName:"ol"},"What is the plugin id of the plugin that determines the HTTP server type and version?")),(0,s.kt)("p",null,(0,s.kt)("inlineCode",{parentName:"p"},"10107")),(0,s.kt)("ol",{start:3},(0,s.kt)("li",{parentName:"ol"},"What authentication page is discovered by the scanner that transmits credentials in cleartext?")),(0,s.kt)("p",null,(0,s.kt)("inlineCode",{parentName:"p"},"login.php")),(0,s.kt)("ol",{start:4},(0,s.kt)("li",{parentName:"ol"},"What is the file extension of the config backup?")),(0,s.kt)("p",null,(0,s.kt)("inlineCode",{parentName:"p"},".bak")),(0,s.kt)("ol",{start:5},(0,s.kt)("li",{parentName:"ol"},"Which directory contains example documents? (This will be in a php directory)")),(0,s.kt)("p",null,(0,s.kt)("inlineCode",{parentName:"p"},"/external/phpids/0.6/docs/examples/")),(0,s.kt)("ol",{start:6},(0,s.kt)("li",{parentName:"ol"},"What vulnerability is this application susceptible to that is associated with X-Frame-Options?")),(0,s.kt)("p",null,(0,s.kt)("inlineCode",{parentName:"p"},"Clickjacking")),(0,s.kt)("ol",{start:7},(0,s.kt)("li",{parentName:"ol"},"What version of php is the server using?")),(0,s.kt)("p",null,(0,s.kt)("inlineCode",{parentName:"p"},"5.5.9-1ubuntu4.26")))}h.isMDXComponent=!0}}]);