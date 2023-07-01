"use strict";(self.webpackChunkcyfun_me=self.webpackChunkcyfun_me||[]).push([[4012],{3905:(e,t,n)=>{n.d(t,{Zo:()=>k,kt:()=>c});var a=n(67294);function r(e,t,n){return t in e?Object.defineProperty(e,t,{value:n,enumerable:!0,configurable:!0,writable:!0}):e[t]=n,e}function l(e,t){var n=Object.keys(e);if(Object.getOwnPropertySymbols){var a=Object.getOwnPropertySymbols(e);t&&(a=a.filter((function(t){return Object.getOwnPropertyDescriptor(e,t).enumerable}))),n.push.apply(n,a)}return n}function i(e){for(var t=1;t<arguments.length;t++){var n=null!=arguments[t]?arguments[t]:{};t%2?l(Object(n),!0).forEach((function(t){r(e,t,n[t])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(n)):l(Object(n)).forEach((function(t){Object.defineProperty(e,t,Object.getOwnPropertyDescriptor(n,t))}))}return e}function o(e,t){if(null==e)return{};var n,a,r=function(e,t){if(null==e)return{};var n,a,r={},l=Object.keys(e);for(a=0;a<l.length;a++)n=l[a],t.indexOf(n)>=0||(r[n]=e[n]);return r}(e,t);if(Object.getOwnPropertySymbols){var l=Object.getOwnPropertySymbols(e);for(a=0;a<l.length;a++)n=l[a],t.indexOf(n)>=0||Object.prototype.propertyIsEnumerable.call(e,n)&&(r[n]=e[n])}return r}var p=a.createContext({}),s=function(e){var t=a.useContext(p),n=t;return e&&(n="function"==typeof e?e(t):i(i({},t),e)),n},k=function(e){var t=s(e.components);return a.createElement(p.Provider,{value:t},e.children)},m="mdxType",d={inlineCode:"code",wrapper:function(e){var t=e.children;return a.createElement(a.Fragment,{},t)}},u=a.forwardRef((function(e,t){var n=e.components,r=e.mdxType,l=e.originalType,p=e.parentName,k=o(e,["components","mdxType","originalType","parentName"]),m=s(n),u=r,c=m["".concat(p,".").concat(u)]||m[u]||d[u]||l;return n?a.createElement(c,i(i({ref:t},k),{},{components:n})):a.createElement(c,i({ref:t},k))}));function c(e,t){var n=arguments,r=t&&t.mdxType;if("string"==typeof e||r){var l=n.length,i=new Array(l);i[0]=u;var o={};for(var p in t)hasOwnProperty.call(t,p)&&(o[p]=t[p]);o.originalType=e,o[m]="string"==typeof e?e:r,i[1]=o;for(var s=2;s<l;s++)i[s]=n[s];return a.createElement.apply(null,i)}return a.createElement.apply(null,n)}u.displayName="MDXCreateElement"},41890:(e,t,n)=>{n.r(t),n.d(t,{assets:()=>p,contentTitle:()=>i,default:()=>d,frontMatter:()=>l,metadata:()=>o,toc:()=>s});var a=n(87462),r=(n(67294),n(3905));const l={},i="Networking",o={unversionedId:"Tryhackme/Networking/Networking",id:"Tryhackme/Networking/Networking",title:"Networking",description:"Part of the Blue Primer series, learn the basics of networking",source:"@site/writeups/Tryhackme/Networking/Networking.md",sourceDirName:"Tryhackme/Networking",slug:"/Tryhackme/Networking/",permalink:"/writeups/Tryhackme/Networking/",draft:!1,tags:[],version:"current",frontMatter:{},sidebar:"tutorialSidebar",previous:{title:"Network Services",permalink:"/writeups/Tryhackme/Network Services/"},next:{title:"Ninja Skills",permalink:"/writeups/Tryhackme/Ninja Skills/"}},p={},s=[{value:"\ud83d\udca2 We will cover  the topics",id:"-we-will-cover--the-topics",level:2},{value:"Kinda like a street address, just cooler.",id:"kinda-like-a-street-address-just-cooler",level:2},{value:"Binary to Decimal",id:"binary-to-decimal",level:2},{value:"Decimal to Binary",id:"decimal-to-binary",level:2},{value:"Address Class Identification",id:"address-class-identification",level:2}],k={toc:s},m="wrapper";function d(e){let{components:t,...n}=e;return(0,r.kt)(m,(0,a.Z)({},k,n,{components:t,mdxType:"MDXLayout"}),(0,r.kt)("h1",{id:"networking"},"Networking"),(0,r.kt)("p",null,"Part of the Blue Primer series, learn the basics of networking"),(0,r.kt)("p",null,(0,r.kt)("a",{parentName:"p",href:"https://tryhackme.com/room/bpnetworking"},"Networking")),(0,r.kt)("h2",{id:"-we-will-cover--the-topics"},"\ud83d\udca2 We will cover  the topics"),(0,r.kt)("ul",null,(0,r.kt)("li",{parentName:"ul"},"Networking")),(0,r.kt)("h2",{id:"kinda-like-a-street-address-just-cooler"},"Kinda like a street address, just cooler."),(0,r.kt)("p",null,"In a manner similar to streets and homes, computers and their respective communication networks must have a way to address their 'mail'. In the following set of questions, we'll investigate the various types of IPv4 addresses. Here's a reference guide for that various types of IP addresses:"),(0,r.kt)("p",null,"IP Address Classes"),(0,r.kt)("p",null,(0,r.kt)("img",{parentName:"p",src:"https://i.imgur.com/K60atvR.png",alt:null})),(0,r.kt)("p",null,"Private Address Space"),(0,r.kt)("p",null,(0,r.kt)("img",{parentName:"p",src:"https://i.imgur.com/3jBu61m.png",alt:null})),(0,r.kt)("p",null,"Room icon made by Freepik"),(0,r.kt)("p",null,"Enjoy the room! For future rooms and write-ups, follow @darkstar7471 on Twitter."),(0,r.kt)("ol",null,(0,r.kt)("li",{parentName:"ol"},"How many categories of IPv4 addresses are there?")),(0,r.kt)("p",null,(0,r.kt)("inlineCode",{parentName:"p"},"5")),(0,r.kt)("ol",{start:2},(0,r.kt)("li",{parentName:"ol"},"Which type is for research? *Looking for a letter rather than a number here")),(0,r.kt)("p",null,(0,r.kt)("inlineCode",{parentName:"p"},"E")),(0,r.kt)("ol",{start:3},(0,r.kt)("li",{parentName:"ol"},"How many private address ranges are there?")),(0,r.kt)("p",null,(0,r.kt)("inlineCode",{parentName:"p"},"3")),(0,r.kt)("ol",{start:4},(0,r.kt)("li",{parentName:"ol"},"Which private range is typically used by businesses?")),(0,r.kt)("p",null,(0,r.kt)("inlineCode",{parentName:"p"},"A")),(0,r.kt)("ol",{start:5},(0,r.kt)("li",{parentName:"ol"},"There are two common default private ranges for home routers, what is the first one?")),(0,r.kt)("p",null,(0,r.kt)("inlineCode",{parentName:"p"},"192.168.0.0")),(0,r.kt)("ol",{start:6},(0,r.kt)("li",{parentName:"ol"},"How about the second common private home range?")),(0,r.kt)("p",null,(0,r.kt)("inlineCode",{parentName:"p"},"192.168.1.0")),(0,r.kt)("ol",{start:7},(0,r.kt)("li",{parentName:"ol"},"How many addresses make up a typical class C range? Specifically a /24")),(0,r.kt)("p",null,(0,r.kt)("inlineCode",{parentName:"p"},"256")),(0,r.kt)("ol",{start:8},(0,r.kt)("li",{parentName:"ol"},"Of these addresses two are reserved, what is the first addresses typically reserved as?")),(0,r.kt)("p",null,(0,r.kt)("inlineCode",{parentName:"p"},"Network")),(0,r.kt)("ol",{start:9},(0,r.kt)("li",{parentName:"ol"},"The very last address in a range is typically reserved as what address type?")),(0,r.kt)("p",null,(0,r.kt)("inlineCode",{parentName:"p"},"Broadcast")),(0,r.kt)("ol",{start:10},(0,r.kt)("li",{parentName:"ol"},"A third predominant address type is typically reserved for the router, what is the name of this address type?")),(0,r.kt)("p",null,(0,r.kt)("inlineCode",{parentName:"p"},"Gateway")),(0,r.kt)("ol",{start:11},(0,r.kt)("li",{parentName:"ol"},"Which address is reserved for testing on individual computers?")),(0,r.kt)("p",null,(0,r.kt)("inlineCode",{parentName:"p"},"127.0.0.1")),(0,r.kt)("ol",{start:12},(0,r.kt)("li",{parentName:"ol"},"A particularly unique address is reserved for unroutable packets, what is that address? This can also refer to all IPv4 addresses on the local machine.")),(0,r.kt)("p",null,(0,r.kt)("inlineCode",{parentName:"p"},"0.0.0.0")),(0,r.kt)("h2",{id:"binary-to-decimal"},"Binary to Decimal"),(0,r.kt)("p",null,"Binary conversion is essential to understand in order to properly manage computer networks. An IPv4 address consists of 32 bits split up into four sections of eight bits. For example, the address 192.168.1.12 translates to this:"),(0,r.kt)("p",null,(0,r.kt)("strong",{parentName:"p"},"11000000 10101000 00000001 00001100")),(0,r.kt)("p",null,"When considering individual bit values, we can break down each octet further. For example, let's break down the second octet valuing 168:"),(0,r.kt)("p",null,(0,r.kt)("img",{parentName:"p",src:"https://i.imgur.com/lGhAEtT.png",alt:null})),(0,r.kt)("p",null,(0,r.kt)("em",{parentName:"p"},"This table provided above is useful to recreate when solving for decimal values. A blank variant has been provided below for copying:")),(0,r.kt)("p",null,(0,r.kt)("img",{parentName:"p",src:"https://i.imgur.com/zbyG80a.png",alt:null})),(0,r.kt)("p",null,"Convert the following binary values into decimal. I suggest doing this by hand with a sheet of paper as it's essential to practice and retain properly. ",(0,r.kt)("strong",{parentName:"p"},"These have been split into two sections of four for readability, however, treat them as octets when solving for decimal values.")),(0,r.kt)("ol",null,(0,r.kt)("li",{parentName:"ol"},"1001 0010")),(0,r.kt)("p",null,(0,r.kt)("inlineCode",{parentName:"p"},"146")),(0,r.kt)("ol",{start:2},(0,r.kt)("li",{parentName:"ol"},"0111 0111")),(0,r.kt)("p",null,(0,r.kt)("inlineCode",{parentName:"p"},"119")),(0,r.kt)("ol",{start:3},(0,r.kt)("li",{parentName:"ol"},"1111 1111")),(0,r.kt)("p",null,(0,r.kt)("inlineCode",{parentName:"p"},"255")),(0,r.kt)("ol",{start:4},(0,r.kt)("li",{parentName:"ol"},"1100 0101")),(0,r.kt)("p",null,(0,r.kt)("inlineCode",{parentName:"p"},"197")),(0,r.kt)("ol",{start:5},(0,r.kt)("li",{parentName:"ol"},"1111 0110")),(0,r.kt)("p",null,(0,r.kt)("inlineCode",{parentName:"p"},"246")),(0,r.kt)("ol",{start:6},(0,r.kt)("li",{parentName:"ol"},"0001 0011")),(0,r.kt)("p",null,(0,r.kt)("inlineCode",{parentName:"p"},"19")),(0,r.kt)("ol",{start:7},(0,r.kt)("li",{parentName:"ol"},"1000 0001")),(0,r.kt)("p",null,(0,r.kt)("inlineCode",{parentName:"p"},"129")),(0,r.kt)("ol",{start:8},(0,r.kt)("li",{parentName:"ol"},"0011 0001")),(0,r.kt)("p",null,(0,r.kt)("inlineCode",{parentName:"p"},"49")),(0,r.kt)("ol",{start:9},(0,r.kt)("li",{parentName:"ol"},"0111 1000")),(0,r.kt)("p",null,(0,r.kt)("inlineCode",{parentName:"p"},"120")),(0,r.kt)("ol",{start:10},(0,r.kt)("li",{parentName:"ol"},"1111 0000")),(0,r.kt)("p",null,(0,r.kt)("inlineCode",{parentName:"p"},"240")),(0,r.kt)("ol",{start:11},(0,r.kt)("li",{parentName:"ol"},"0011 1011")),(0,r.kt)("p",null,(0,r.kt)("inlineCode",{parentName:"p"},"59")),(0,r.kt)("ol",{start:12},(0,r.kt)("li",{parentName:"ol"},"0000 0111")),(0,r.kt)("p",null,(0,r.kt)("inlineCode",{parentName:"p"},"7")),(0,r.kt)("h2",{id:"decimal-to-binary"},"Decimal to Binary"),(0,r.kt)("p",null,"Using the table provided within the previous task convert the following values to binary. ",(0,r.kt)("strong",{parentName:"p"},"For the sake of preserving the full octet, pad the front of each answer with the appropriate amount of zeros.")),(0,r.kt)("ol",null,(0,r.kt)("li",{parentName:"ol"},"238")),(0,r.kt)("p",null,(0,r.kt)("inlineCode",{parentName:"p"},"11101110")),(0,r.kt)("ol",{start:2},(0,r.kt)("li",{parentName:"ol"},"34")),(0,r.kt)("p",null,(0,r.kt)("inlineCode",{parentName:"p"},"00100010")),(0,r.kt)("ol",{start:3},(0,r.kt)("li",{parentName:"ol"},"123")),(0,r.kt)("p",null,(0,r.kt)("inlineCode",{parentName:"p"},"01111011")),(0,r.kt)("ol",{start:4},(0,r.kt)("li",{parentName:"ol"},"50")),(0,r.kt)("p",null,(0,r.kt)("inlineCode",{parentName:"p"},"00110010")),(0,r.kt)("ol",{start:5},(0,r.kt)("li",{parentName:"ol"},"255")),(0,r.kt)("p",null,(0,r.kt)("inlineCode",{parentName:"p"},"11111111")),(0,r.kt)("ol",{start:6},(0,r.kt)("li",{parentName:"ol"},"200")),(0,r.kt)("p",null,(0,r.kt)("inlineCode",{parentName:"p"},"11001000")),(0,r.kt)("ol",{start:7},(0,r.kt)("li",{parentName:"ol"},"10")),(0,r.kt)("p",null,(0,r.kt)("inlineCode",{parentName:"p"},"00001010")),(0,r.kt)("ol",{start:8},(0,r.kt)("li",{parentName:"ol"},"138")),(0,r.kt)("p",null,(0,r.kt)("inlineCode",{parentName:"p"},"10001010")),(0,r.kt)("ol",{start:9},(0,r.kt)("li",{parentName:"ol"},"1")),(0,r.kt)("p",null,(0,r.kt)("inlineCode",{parentName:"p"},"00000001")),(0,r.kt)("ol",{start:10},(0,r.kt)("li",{parentName:"ol"},"13")),(0,r.kt)("p",null,(0,r.kt)("inlineCode",{parentName:"p"},"00001101")),(0,r.kt)("ol",{start:11},(0,r.kt)("li",{parentName:"ol"},"250")),(0,r.kt)("p",null,(0,r.kt)("inlineCode",{parentName:"p"},"11111010")),(0,r.kt)("ol",{start:12},(0,r.kt)("li",{parentName:"ol"},"114")),(0,r.kt)("p",null,(0,r.kt)("inlineCode",{parentName:"p"},"01110010")),(0,r.kt)("h2",{id:"address-class-identification"},"Address Class Identification"),(0,r.kt)("p",null,"Using the table provided in the first task, identify which class each of the following addresses belongs to."),(0,r.kt)("ol",null,(0,r.kt)("li",{parentName:"ol"},"10.240.1.1")),(0,r.kt)("p",null,(0,r.kt)("inlineCode",{parentName:"p"},"A")),(0,r.kt)("ol",{start:2},(0,r.kt)("li",{parentName:"ol"},"150.10.15.0")),(0,r.kt)("p",null,(0,r.kt)("inlineCode",{parentName:"p"},"B")),(0,r.kt)("ol",{start:3},(0,r.kt)("li",{parentName:"ol"},"192.14.2.0")),(0,r.kt)("p",null,(0,r.kt)("inlineCode",{parentName:"p"},"C")),(0,r.kt)("ol",{start:4},(0,r.kt)("li",{parentName:"ol"},"148.17.9.1")),(0,r.kt)("p",null,(0,r.kt)("inlineCode",{parentName:"p"},"B")),(0,r.kt)("ol",{start:5},(0,r.kt)("li",{parentName:"ol"},"193.42.1.1")),(0,r.kt)("p",null,(0,r.kt)("inlineCode",{parentName:"p"},"C")),(0,r.kt)("ol",{start:6},(0,r.kt)("li",{parentName:"ol"},"126.8.156.0")),(0,r.kt)("p",null,(0,r.kt)("inlineCode",{parentName:"p"},"A")),(0,r.kt)("ol",{start:7},(0,r.kt)("li",{parentName:"ol"},"220.200.23.1")),(0,r.kt)("p",null,(0,r.kt)("inlineCode",{parentName:"p"},"C")),(0,r.kt)("ol",{start:8},(0,r.kt)("li",{parentName:"ol"},"230.230.45.58")),(0,r.kt)("p",null,(0,r.kt)("inlineCode",{parentName:"p"},"D")),(0,r.kt)("ol",{start:9},(0,r.kt)("li",{parentName:"ol"},"177.100.18.4")),(0,r.kt)("p",null,(0,r.kt)("inlineCode",{parentName:"p"},"B")),(0,r.kt)("ol",{start:10},(0,r.kt)("li",{parentName:"ol"},"119.18.45.0")),(0,r.kt)("p",null,(0,r.kt)("inlineCode",{parentName:"p"},"A")),(0,r.kt)("ol",{start:11},(0,r.kt)("li",{parentName:"ol"},"117.89.56.45")),(0,r.kt)("p",null,(0,r.kt)("inlineCode",{parentName:"p"},"A")),(0,r.kt)("ol",{start:12},(0,r.kt)("li",{parentName:"ol"},"215.45.45.0")),(0,r.kt)("p",null,(0,r.kt)("inlineCode",{parentName:"p"},"C")))}d.isMDXComponent=!0}}]);