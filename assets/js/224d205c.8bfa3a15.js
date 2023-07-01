"use strict";(self.webpackChunkcyfun_me=self.webpackChunkcyfun_me||[]).push([[6525],{3905:(e,t,r)=>{r.d(t,{Zo:()=>p,kt:()=>h});var n=r(67294);function a(e,t,r){return t in e?Object.defineProperty(e,t,{value:r,enumerable:!0,configurable:!0,writable:!0}):e[t]=r,e}function o(e,t){var r=Object.keys(e);if(Object.getOwnPropertySymbols){var n=Object.getOwnPropertySymbols(e);t&&(n=n.filter((function(t){return Object.getOwnPropertyDescriptor(e,t).enumerable}))),r.push.apply(r,n)}return r}function s(e){for(var t=1;t<arguments.length;t++){var r=null!=arguments[t]?arguments[t]:{};t%2?o(Object(r),!0).forEach((function(t){a(e,t,r[t])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(r)):o(Object(r)).forEach((function(t){Object.defineProperty(e,t,Object.getOwnPropertyDescriptor(r,t))}))}return e}function l(e,t){if(null==e)return{};var r,n,a=function(e,t){if(null==e)return{};var r,n,a={},o=Object.keys(e);for(n=0;n<o.length;n++)r=o[n],t.indexOf(r)>=0||(a[r]=e[r]);return a}(e,t);if(Object.getOwnPropertySymbols){var o=Object.getOwnPropertySymbols(e);for(n=0;n<o.length;n++)r=o[n],t.indexOf(r)>=0||Object.prototype.propertyIsEnumerable.call(e,r)&&(a[r]=e[r])}return a}var i=n.createContext({}),u=function(e){var t=n.useContext(i),r=t;return e&&(r="function"==typeof e?e(t):s(s({},t),e)),r},p=function(e){var t=u(e.components);return n.createElement(i.Provider,{value:t},e.children)},c="mdxType",m={inlineCode:"code",wrapper:function(e){var t=e.children;return n.createElement(n.Fragment,{},t)}},d=n.forwardRef((function(e,t){var r=e.components,a=e.mdxType,o=e.originalType,i=e.parentName,p=l(e,["components","mdxType","originalType","parentName"]),c=u(r),d=a,h=c["".concat(i,".").concat(d)]||c[d]||m[d]||o;return r?n.createElement(h,s(s({ref:t},p),{},{components:r})):n.createElement(h,s({ref:t},p))}));function h(e,t){var r=arguments,a=t&&t.mdxType;if("string"==typeof e||a){var o=r.length,s=new Array(o);s[0]=d;var l={};for(var i in t)hasOwnProperty.call(t,i)&&(l[i]=t[i]);l.originalType=e,l[c]="string"==typeof e?e:a,s[1]=l;for(var u=2;u<o;u++)s[u]=r[u];return n.createElement.apply(null,s)}return n.createElement.apply(null,r)}d.displayName="MDXCreateElement"},95461:(e,t,r)=>{r.r(t),r.d(t,{assets:()=>i,contentTitle:()=>s,default:()=>m,frontMatter:()=>o,metadata:()=>l,toc:()=>u});var n=r(87462),a=(r(67294),r(3905));const o={},s="Routes",l={unversionedId:"Tryhackme/Motunui/ROUTES",id:"Tryhackme/Motunui/ROUTES",title:"Routes",description:"The base URL for the api is api.motunui.thm:3000/v2/.",source:"@site/writeups/Tryhackme/Motunui/ROUTES.md",sourceDirName:"Tryhackme/Motunui",slug:"/Tryhackme/Motunui/ROUTES",permalink:"/writeups/Tryhackme/Motunui/ROUTES",draft:!1,tags:[],version:"current",frontMatter:{},sidebar:"tutorialSidebar",previous:{title:"Motunui",permalink:"/writeups/Tryhackme/Motunui/"},next:{title:"Documentation for the in-development API",permalink:"/writeups/Tryhackme/Motunui/d3v3lopm3nt.motunui.thm_README"}},i={},u=[{value:"<code>POST /login</code>",id:"post-login",level:3},{value:"Parameters",id:"parameters",level:4},{value:"Response (200)",id:"response-200",level:4},{value:"Response (401)",id:"response-401",level:4},{value:"\ud83d\udd10 <code>GET /jobs</code>",id:"-get-jobs",level:3},{value:"Parameters",id:"parameters-1",level:4},{value:"Response (200)",id:"response-200-1",level:4},{value:"Response (403)",id:"response-403",level:4},{value:"\ud83d\udd10 <code>POST /jobs</code>",id:"-post-jobs",level:3},{value:"Parameters",id:"parameters-2",level:4},{value:"Response (201)",id:"response-201",level:4},{value:"Response (401)",id:"response-401-1",level:4}],p={toc:u},c="wrapper";function m(e){let{components:t,...r}=e;return(0,a.kt)(c,(0,n.Z)({},p,r,{components:t,mdxType:"MDXLayout"}),(0,a.kt)("h1",{id:"routes"},"Routes"),(0,a.kt)("p",null,"The base URL for the api is ",(0,a.kt)("inlineCode",{parentName:"p"},"api.motunui.thm:3000/v2/"),"."),(0,a.kt)("h3",{id:"post-login"},(0,a.kt)("inlineCode",{parentName:"h3"},"POST /login")),(0,a.kt)("p",null,"Returns the hash for the specified user to be used for authorisation."),(0,a.kt)("h4",{id:"parameters"},"Parameters"),(0,a.kt)("ul",null,(0,a.kt)("li",{parentName:"ul"},(0,a.kt)("inlineCode",{parentName:"li"},"username")),(0,a.kt)("li",{parentName:"ul"},(0,a.kt)("inlineCode",{parentName:"li"},"password"))),(0,a.kt)("h4",{id:"response-200"},"Response (200)"),(0,a.kt)("pre",null,(0,a.kt)("code",{parentName:"pre",className:"language-js"},'{\n    "hash": String()\n}\n')),(0,a.kt)("h4",{id:"response-401"},"Response (401)"),(0,a.kt)("pre",null,(0,a.kt)("code",{parentName:"pre",className:"language-js"},'{\n    "error": "invalid credentials"\n}\n')),(0,a.kt)("h3",{id:"-get-jobs"},"\ud83d\udd10 ",(0,a.kt)("inlineCode",{parentName:"h3"},"GET /jobs")),(0,a.kt)("p",null,"Returns all the cron jobs running as the current user."),(0,a.kt)("h4",{id:"parameters-1"},"Parameters"),(0,a.kt)("ul",null,(0,a.kt)("li",{parentName:"ul"},(0,a.kt)("inlineCode",{parentName:"li"},"hash"))),(0,a.kt)("h4",{id:"response-200-1"},"Response (200)"),(0,a.kt)("pre",null,(0,a.kt)("code",{parentName:"pre",className:"language-js"},'{\n    "jobs": Array()\n}\n')),(0,a.kt)("h4",{id:"response-403"},"Response (403)"),(0,a.kt)("pre",null,(0,a.kt)("code",{parentName:"pre",className:"language-js"},'{\n    "error": "you are unauthorised to view this resource"\n}\n')),(0,a.kt)("h3",{id:"-post-jobs"},"\ud83d\udd10 ",(0,a.kt)("inlineCode",{parentName:"h3"},"POST /jobs")),(0,a.kt)("p",null,"Creates a new cron job running as the current user."),(0,a.kt)("h4",{id:"parameters-2"},"Parameters"),(0,a.kt)("ul",null,(0,a.kt)("li",{parentName:"ul"},(0,a.kt)("inlineCode",{parentName:"li"},"hash"))),(0,a.kt)("h4",{id:"response-201"},"Response (201)"),(0,a.kt)("pre",null,(0,a.kt)("code",{parentName:"pre",className:"language-js"},'{\n    "job": String()\n}\n')),(0,a.kt)("h4",{id:"response-401-1"},"Response (401)"),(0,a.kt)("pre",null,(0,a.kt)("code",{parentName:"pre",className:"language-js"},'{\n    "error": "you are unauthorised to view this resource"\n}\n')))}m.isMDXComponent=!0}}]);