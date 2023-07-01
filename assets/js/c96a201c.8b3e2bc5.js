"use strict";(self.webpackChunkcyfun_me=self.webpackChunkcyfun_me||[]).push([[3731],{3905:(n,t,e)=>{e.d(t,{Zo:()=>m,kt:()=>d});var o=e(67294);function c(n,t,e){return t in n?Object.defineProperty(n,t,{value:e,enumerable:!0,configurable:!0,writable:!0}):n[t]=e,n}function a(n,t){var e=Object.keys(n);if(Object.getOwnPropertySymbols){var o=Object.getOwnPropertySymbols(n);t&&(o=o.filter((function(t){return Object.getOwnPropertyDescriptor(n,t).enumerable}))),e.push.apply(e,o)}return e}function i(n){for(var t=1;t<arguments.length;t++){var e=null!=arguments[t]?arguments[t]:{};t%2?a(Object(e),!0).forEach((function(t){c(n,t,e[t])})):Object.getOwnPropertyDescriptors?Object.defineProperties(n,Object.getOwnPropertyDescriptors(e)):a(Object(e)).forEach((function(t){Object.defineProperty(n,t,Object.getOwnPropertyDescriptor(e,t))}))}return n}function r(n,t){if(null==n)return{};var e,o,c=function(n,t){if(null==n)return{};var e,o,c={},a=Object.keys(n);for(o=0;o<a.length;o++)e=a[o],t.indexOf(e)>=0||(c[e]=n[e]);return c}(n,t);if(Object.getOwnPropertySymbols){var a=Object.getOwnPropertySymbols(n);for(o=0;o<a.length;o++)e=a[o],t.indexOf(e)>=0||Object.prototype.propertyIsEnumerable.call(n,e)&&(c[e]=n[e])}return c}var l=o.createContext({}),s=function(n){var t=o.useContext(l),e=t;return n&&(e="function"==typeof n?n(t):i(i({},t),n)),e},m=function(n){var t=s(n.components);return o.createElement(l.Provider,{value:t},n.children)},b="mdxType",p={inlineCode:"code",wrapper:function(n){var t=n.children;return o.createElement(o.Fragment,{},t)}},u=o.forwardRef((function(n,t){var e=n.components,c=n.mdxType,a=n.originalType,l=n.parentName,m=r(n,["components","mdxType","originalType","parentName"]),b=s(e),u=c,d=b["".concat(l,".").concat(u)]||b[u]||p[u]||a;return e?o.createElement(d,i(i({ref:t},m),{},{components:e})):o.createElement(d,i({ref:t},m))}));function d(n,t){var e=arguments,c=t&&t.mdxType;if("string"==typeof n||c){var a=e.length,i=new Array(a);i[0]=u;var r={};for(var l in t)hasOwnProperty.call(t,l)&&(r[l]=t[l]);r.originalType=n,r[b]="string"==typeof n?n:c,i[1]=r;for(var s=2;s<a;s++)i[s]=e[s];return o.createElement.apply(null,i)}return o.createElement.apply(null,e)}u.displayName="MDXCreateElement"},33667:(n,t,e)=>{e.r(t),e.d(t,{assets:()=>l,contentTitle:()=>i,default:()=>p,frontMatter:()=>a,metadata:()=>r,toc:()=>s});var o=e(87462),c=(e(67294),e(3905));const a={},i="Sublist3r",r={unversionedId:"Tryhackme/Sublist3r/Sublist3r",id:"Tryhackme/Sublist3r/Sublist3r",title:"Sublist3r",description:"Part of the Red Primer series, learn how to find subdomains with Sublist3r!",source:"@site/writeups/Tryhackme/Sublist3r/Sublist3r.md",sourceDirName:"Tryhackme/Sublist3r",slug:"/Tryhackme/Sublist3r/",permalink:"/writeups/Tryhackme/Sublist3r/",draft:!1,tags:[],version:"current",frontMatter:{},sidebar:"tutorialSidebar",previous:{title:"StuxCTF",permalink:"/writeups/Tryhackme/StuxCTF/"},next:{title:"Sudo Buffer Overflow",permalink:"/writeups/Tryhackme/Sudo Buffer Overflow/"}},l={},s=[{value:"\ud83d\udca2 We will cover  the topics",id:"-we-will-cover--the-topics",level:2},{value:"Intro",id:"intro",level:2},{value:"Installation",id:"installation",level:2},{value:"Switchboard",id:"switchboard",level:2},{value:"Scans away!",id:"scans-away",level:2}],m={toc:s},b="wrapper";function p(n){let{components:t,...e}=n;return(0,c.kt)(b,(0,o.Z)({},m,e,{components:t,mdxType:"MDXLayout"}),(0,c.kt)("h1",{id:"sublist3r"},"Sublist3r"),(0,c.kt)("p",null,"Part of the Red Primer series, learn how to find subdomains with Sublist3r!"),(0,c.kt)("p",null,(0,c.kt)("a",{parentName:"p",href:"https://tryhackme.com/room/rpsublist3r"},"Sublist3r")),(0,c.kt)("h2",{id:"-we-will-cover--the-topics"},"\ud83d\udca2 We will cover  the topics"),(0,c.kt)("ul",null,(0,c.kt)("li",{parentName:"ul"},"Sublist3r Fundamentals"),(0,c.kt)("li",{parentName:"ul"},"OSINT"),(0,c.kt)("li",{parentName:"ul"},"Web Enumeration")),(0,c.kt)("hr",null),(0,c.kt)("h2",{id:"intro"},"Intro"),(0,c.kt)("p",null,"Reconnaissance, the first step of a pentest, is arguably the most important step. Discovering the total attack surface of your target is critical, especially if you're performing phishing and miss a portal that you can use to login. Sublist3r is a fantastic python script that allows us to perform quick and easy recon against our target, discovering various subdomains associated with the websites/domains in scope."),(0,c.kt)("p",null,(0,c.kt)("img",{parentName:"p",src:"https://i.imgur.com/00ySGQu.png",alt:"Sublist3r"})),(0,c.kt)("p",null,(0,c.kt)("strong",{parentName:"p"},"Disclaimer!")," There's a pretty good chance your ISP isn't going to like recon activities and neither will most search engines. As such, I've provided a text document with the full terminal output from a Sublist3r run as a download for task four. You can still run this program and you're likely not going to get into trouble, however, you'll likely have a temporary CAPTCHA imposed on your Google searches for the next hour if you run this script."),(0,c.kt)("p",null,"You can also use this site if you don't want to run Sublist3r: ",(0,c.kt)("a",{parentName:"p",href:"https://dnsdumpster.com/"},"https://dnsdumpster.com/")),(0,c.kt)("ol",null,(0,c.kt)("li",{parentName:"ol"},"You can find Sublist3r ",(0,c.kt)("a",{parentName:"li",href:"https://github.com/aboul3la/Sublist3r"},"here"),"! We'll install this in the next task.")),(0,c.kt)("p",null,(0,c.kt)("inlineCode",{parentName:"p"},"No answer needed")),(0,c.kt)("h2",{id:"installation"},"Installation"),(0,c.kt)("p",null,"The GitHub repository for Sublist3r can be found here: ",(0,c.kt)("a",{parentName:"p",href:"https://github.com/aboul3la/Sublist3r"},"https://github.com/aboul3la/Sublist3r")),(0,c.kt)("p",null,"We'll be installing Sublist3r in the opt directory, the standard directory for optional package installation on Linux."),(0,c.kt)("p",null,"You'll need to have either Python 3.4.x (or higher) or Python 2.7.x installed. We'll be using Python 3 commands for this room."),(0,c.kt)("ol",null,(0,c.kt)("li",{parentName:"ol"},"First, let's change to our opt directory: cd /opt")),(0,c.kt)("p",null,(0,c.kt)("inlineCode",{parentName:"p"},"No answer needed")),(0,c.kt)("ol",{start:2},(0,c.kt)("li",{parentName:"ol"},"Next, let's clone the Sublist3r repository into opt: git clone ",(0,c.kt)("a",{parentName:"li",href:"https://github.com/aboul3la/Sublist3r.git"},"https://github.com/aboul3la/Sublist3r.git"))),(0,c.kt)("p",null,(0,c.kt)("inlineCode",{parentName:"p"},"No answer needed")),(0,c.kt)("ol",{start:3},(0,c.kt)("li",{parentName:"ol"},"Now let's move into the Sublist3r directory we've just created: cd /opt/Sublist3r")),(0,c.kt)("p",null,(0,c.kt)("inlineCode",{parentName:"p"},"No answer needed")),(0,c.kt)("ol",{start:4},(0,c.kt)("li",{parentName:"ol"},"Finally, let's install the requirements for running Sublist3r: pip3 install -r requirements.txt")),(0,c.kt)("p",null,(0,c.kt)("inlineCode",{parentName:"p"},"No answer needed")),(0,c.kt)("h2",{id:"switchboard"},"Switchboard"),(0,c.kt)("p",null,"Sublist3r has a number of switches that we can use to do everything from setting our target domain to changing which engine to use for searching. You can access this via running Sublist3r with only the help switch: -h"),(0,c.kt)("ol",null,(0,c.kt)("li",{parentName:"ol"},"What switch can we use to set our target domain to perform recon on?")),(0,c.kt)("p",null,(0,c.kt)("inlineCode",{parentName:"p"},"-d")),(0,c.kt)("ol",{start:2},(0,c.kt)("li",{parentName:"ol"},"How about setting which engines we'll use for searching? (i.e. google, bing, etc)")),(0,c.kt)("p",null,(0,c.kt)("inlineCode",{parentName:"p"},"-e")),(0,c.kt)("ol",{start:3},(0,c.kt)("li",{parentName:"ol"},"Saving our output is important both so we don't have to run recon again but also so we can return to our returns and review them at a later time. What switch do we use to define an output file?")),(0,c.kt)("p",null,(0,c.kt)("inlineCode",{parentName:"p"},"-o")),(0,c.kt)("ol",{start:4},(0,c.kt)("li",{parentName:"ol"},"Sublist3r can sometimes take some time to run but we can speed through up the use of threads. Which switch allows us to set the number of threads?")),(0,c.kt)("p",null,(0,c.kt)("inlineCode",{parentName:"p"},"-t")),(0,c.kt)("ol",{start:5},(0,c.kt)("li",{parentName:"ol"},"Last but not least, we can also bruteforce the domains for our target. This isn't always the most useful, however, it can sometimes find a key domain that we might have missed. What switch allows us to enable brute forcing?")),(0,c.kt)("p",null,(0,c.kt)("inlineCode",{parentName:"p"},"-b")),(0,c.kt)("h2",{id:"scans-away"},"Scans away!"),(0,c.kt)("p",null,"Time to scan, let's run Sublit3r against a target company domain and learn about some common domains! You can also run this via the recon tool at ",(0,c.kt)("a",{parentName:"p",href:"https://dnsdumpster.com/"},"https://dnsdumpster.com/")," or you can also just download my results from running sublist3r."),(0,c.kt)("ol",null,(0,c.kt)("li",{parentName:"ol"},"Let's run sublist3r now against nbc.com, a fairly large American news company. Run this now with the command: python3 sublist3r.py -d nbc.com -o sub-output-nbc.txt")),(0,c.kt)("pre",null,(0,c.kt)("code",{parentName:"pre"},"python3 /opt/Sublist3r/sublist3r.py -d nbc.com -o sub-output-nbc.txt\n\n\n                 ____        _     _ _     _   _____\n                / ___| _   _| |__ | (_)___| |_|___ / _ __\n                \\___ \\| | | | '_ \\| | / __| __| |_ \\| '__|\n                 ___) | |_| | |_) | | \\__ \\ |_ ___) | |\n                |____/ \\__,_|_.__/|_|_|___/\\__|____/|_|\n\n                # Coded By Ahmed Aboul-Ela - @aboul3la\n\n[-] Enumerating subdomains now for nbc.com\n[-] Searching now in Baidu..\n[-] Searching now in Yahoo..\n[-] Searching now in Google..\n[-] Searching now in Bing..\n[-] Searching now in Ask..\n[-] Searching now in Netcraft..\n[-] Searching now in DNSdumpster..\n[-] Searching now in Virustotal..\n[-] Searching now in ThreatCrowd..\n[-] Searching now in SSL Certificates..\n[-] Searching now in PassiveDNS..\n[-] Saving results to file: sub-output-nbc.txt\n[-] Total Unique Subdomains Found: 229\nmsnbc.com\nwww.nbc.com\n30rock.nbc.com\nacc-api.nbc.com\nacc-img.nbc.com\nacc-m.nbc.com\nacc-www.nbc.com\nadminmx.nbc.com\nads.nbc.com\nagtvote.nbc.com\naltaec1.nbc.com\naltaec2.nbc.com\naltany6.nbc.com\naltany7.nbc.com\napi.nbc.com\napp.nbc.com\napt.nbc.com\nwww.apt.nbc.com\napt2gostgaoa-ltm.nbc.com\naptaoa-ltm.nbc.com\naptnewprod2.nbc.com\naptstgaoa-ltm.nbc.com\nblog.nbc.com\nblogs.nbc.com\nboards.nbc.com\nwww.boards.nbc.com\nstage.boards.nbc.com\nwww.stage.boards.nbc.com\ndev.nbc.com\ndev-id.nbc.com\ndev-www.nbc.com\ndmzmarsapps.nbc.com\ndmzmarsapps1.nbc.com\ndmzmarsapps2.nbc.com\ndmzmarsapps21.nbc.com\ndmzmarsapps22.nbc.com\ne.nbc.com\neastnet.nbc.com\necstgnbcessowebapps.nbc.com\nwww.ecstgnbcessowebapps.nbc.com\nedit.nbc.com\no92.em.nbc.com\nemail.nbc.com\nlinks.email.nbc.com\no1.email.nbc.com\no2.email.nbc.com\no3.email.nbc.com\no4.email.nbc.com\no5.email.nbc.com\no6.email.nbc.com\no104.emails.nbc.com\no105.emails.nbc.com\no106.emails.nbc.com\no668.emails.nbc.com\no95.emails.nbc.com\nevents.nbc.com\nforum.nbc.com\nfrd.nbc.com\nfriendship.nbc.com\nhelp.nbc.com\nheroes.nbc.com\nid.nbc.com\nimg.nbc.com\nip129.nbc.com\nip130.nbc.com\nip132.nbc.com\nip133.nbc.com\nip134.nbc.com\nip135.nbc.com\nip136.nbc.com\nip137.nbc.com\nip138.nbc.com\nip139.nbc.com\nip140.nbc.com\nip141.nbc.com\nip143.nbc.com\nip144.nbc.com\nip145.nbc.com\nip147.nbc.com\nip149.nbc.com\nip151.nbc.com\nip153.nbc.com\nip154.nbc.com\nip155.nbc.com\nip156.nbc.com\nip157.nbc.com\nip158.nbc.com\nlinks.nbc.com\nlogin.nbc.com\nm.nbc.com\nmail.nbc.com\nclick.mail.nbc.com\nimage.mail.nbc.com\nmta.mail.nbc.com\npages.mail.nbc.com\nview.mail.nbc.com\nmailer1.nbc.com\nmailer2.nbc.com\nmailer5.nbc.com\nmailer6.nbc.com\nmobile.nbc.com\nmp.nbc.com\nmap.mp.nbc.com\nmusiccues.nbc.com\nmy.nbc.com\nwww.nbc6.nbc.com\nnbcaccess.nbc.com\nnbcessowebapps.nbc.com\nwww.nbcessowebapps.nbc.com\nnbcsportsgroup-score-portal.nbc.com\nwww.nbcsportsgroup-score-portal.nbc.com\nolympic.nbc.com\nwww.olympic.nbc.com\nolympicsinvitations2.nbc.com\norigin-www.nbc.com\novation.nbc.com\npassions.nbc.com\nplaytotv.nbc.com\nnbc-agt-s13.playtotv.nbc.com\nnbc-agt-s13-acceptance.playtotv.nbc.com\nnbc-agt-s13-dev.playtotv.nbc.com\nnbc-agt-s13-staging.playtotv.nbc.com\nnbc-agt-s14.playtotv.nbc.com\nnbc-agt-s14-acceptance.playtotv.nbc.com\nnbc-agt-s14-dev.playtotv.nbc.com\nnbc-agt-s14-staging.playtotv.nbc.com\ndirector.nbc-agt-s15.playtotv.nbc.com\ndirector.nbc-agt-s15-staging.playtotv.nbc.com\ndirector.nbc-thevoice-loadtest.playtotv.nbc.com\nnbc-thevoice-s15.playtotv.nbc.com\nnbc-thevoice-s15-acceptance.playtotv.nbc.com\nnbc-thevoice-s15-dev.playtotv.nbc.com\nnbc-thevoice-s15-staging.playtotv.nbc.com\nnbc-thevoice-s16.playtotv.nbc.com\nnbc-thevoice-s16-acceptance.playtotv.nbc.com\nnbc-thevoice-s16-dev.playtotv.nbc.com\nnbc-thevoice-s16-staging.playtotv.nbc.com\nnbc-thevoice-s17.playtotv.nbc.com\nnbc-thevoice-s17-acceptance.playtotv.nbc.com\nnbc-thevoice-s17-dev.playtotv.nbc.com\nnbc-thevoice-s17-staging.playtotv.nbc.com\ndirector.nbc-thevoice-s18.playtotv.nbc.com\ndirector.nbc-thevoice-s18-staging.playtotv.nbc.com\ndirector.nbc-thevoice-s19-staging.playtotv.nbc.com\nbackend.nbc-voting-staging.playtotv.nbc.com\ndirector.nbc-voting-staging.playtotv.nbc.com\nprod-tsjf-www.nbc.com\nprod-www.nbc.com\nsecure.nbc.com\nsecure-uat.nbc.com\nsportsevents.nbc.com\nwww.sportsevents.nbc.com\nssologin.nbc.com\nwww.ssologin.nbc.com\nstage.nbc.com\nstage-id.nbc.com\nstage-img.nbc.com\nstage-www.nbc.com\nlogin.stg.nbc.com\nssologin.stg.nbc.com\nwww.ssologin.stg.nbc.com\nstudiopass.nbc.com\ntbll.nbc.com\napt.telemundo.nbc.com\nvideo.nbc.com\nvirtual.nbc.com\nvote.nbc.com\nagt.vote.nbc.com\nbackend.agt.vote.nbc.com\ndirector.agt.vote.nbc.com\nbackend.agt-dev.vote.nbc.com\ndirector.agt-dev.vote.nbc.com\nbackend.agt-staging.vote.nbc.com\ndirector.agt-staging.vote.nbc.com\nbackend.nbc-voting-dev-client.vote.nbc.com\ndirector.nbc-voting-dev-client.vote.nbc.com\nnbc-voting-staging.vote.nbc.com\nbackend.nbc-voting-staging.vote.nbc.com\nbackend-origin.nbc-voting-staging.vote.nbc.com\ndirector.nbc-voting-staging.vote.nbc.com\ndirector-origin.nbc-voting-staging.vote.nbc.com\nnbc-voting-staging-director.vote.nbc.com\nnbc-voting-waftest.vote.nbc.com\nbackend.nbc-voting-waftest.vote.nbc.com\nbackend-origin.nbc-voting-waftest.vote.nbc.com\ndirector.nbc-voting-waftest.vote.nbc.com\ndirector-origin.nbc-voting-waftest.vote.nbc.com\nnbc-voting-waftest-director.vote.nbc.com\nvoice.vote.nbc.com\nbackend.voice.vote.nbc.com\nbackend-origin.voice.vote.nbc.com\ndirector.voice.vote.nbc.com\ndirector-origin.voice.vote.nbc.com\nbackend.voice-dev.vote.nbc.com\ndirector.voice-dev.vote.nbc.com\nvoice-director.vote.nbc.com\nbackend.voice-staging.vote.nbc.com\ndirector.voice-staging.vote.nbc.com\nagtappvote.votenow.nbc.com\nagtappvote-dev.votenow.nbc.com\nagtappvote-test.votenow.nbc.com\nagtsave.votenow.nbc.com\nagtsave-dev.votenow.nbc.com\nagtsave-test.votenow.nbc.com\nagtstbvote.votenow.nbc.com\nagtstbvote-dev.votenow.nbc.com\nagtstbvote-test.votenow.nbc.com\nagtvote.votenow.nbc.com\nagtvote-dev.votenow.nbc.com\nagtvote-test.votenow.nbc.com\nbtfvote.votenow.nbc.com\nns1.votenow.nbc.com\nns2.votenow.nbc.com\nns3.votenow.nbc.com\nns4.votenow.nbc.com\nsecure.votenow.nbc.com\nvoicevote.votenow.nbc.com\nwebxcn1nbcge.nbc.com\nwebxcn2nbcge.nbc.com\nwebxpn1nbcge.nbc.com\nwebxpn2nbcge.nbc.com\nwidget.nbc.com\napt.wip.nbc.com\nssologin.wip.nbc.com\nssologin.stg.wip.nbc.com\noffice-words.www.nbc.com\nyourgarage.nbc.com\nxn--12-nbc.com\nwww.xn--12-nbc.com\n")),(0,c.kt)("p",null,(0,c.kt)("inlineCode",{parentName:"p"},"No answer needed")),(0,c.kt)("ol",{start:2},(0,c.kt)("li",{parentName:"ol"},"Once that completes open up your results and take a look through them. Email domains are almost always interesting and typically have an email portal (usually Outlook) located at them. Which subdomain is likely the email portal?")),(0,c.kt)("blockquote",null,(0,c.kt)("p",{parentName:"blockquote"},"mail.nbc.com")),(0,c.kt)("p",null,(0,c.kt)("inlineCode",{parentName:"p"},"mail")),(0,c.kt)("ol",{start:3},(0,c.kt)("li",{parentName:"ol"},"Administrative control panels should never be exposed to the internet! Which subdomain is exposed that shouldn't be?")),(0,c.kt)("p",null,(0,c.kt)("inlineCode",{parentName:"p"},"admin")),(0,c.kt)("ol",null,(0,c.kt)("li",{parentName:"ol"},"Company blogs can sometimes reveal information about internal activities, which subdomain has the company blog at it?")),(0,c.kt)("p",null,(0,c.kt)("inlineCode",{parentName:"p"},"blog")),(0,c.kt)("ol",{start:2},(0,c.kt)("li",{parentName:"ol"},"Development sites are often vulnerable to information disclosure or full-blown attacks. Two developer sites are exposed, which one is associated directly with web development?")),(0,c.kt)("blockquote",null,(0,c.kt)("p",{parentName:"blockquote"},"dev-",(0,c.kt)("a",{parentName:"p",href:"http://www.nbc.com"},"www.nbc.com"))),(0,c.kt)("p",null,(0,c.kt)("inlineCode",{parentName:"p"},"dev-www")),(0,c.kt)("ol",{start:3},(0,c.kt)("li",{parentName:"ol"},"Customer and employee help desk portals can often reveal internal nomenclature and other potentially sensitive information, which dns record might be a helpdesk portal?")),(0,c.kt)("blockquote",null,(0,c.kt)("p",{parentName:"blockquote"},"help.nbc.com")),(0,c.kt)("p",null,(0,c.kt)("inlineCode",{parentName:"p"},"help")),(0,c.kt)("ol",{start:4},(0,c.kt)("li",{parentName:"ol"},"Single sign-on is a feature commonly used in corporate domains, which dns record is directly associated with this feature? Include both parts of this subdomain separated by a period.")),(0,c.kt)("blockquote",null,(0,c.kt)("p",{parentName:"blockquote"},"ssologin.stg.nbc.com")),(0,c.kt)("p",null,(0,c.kt)("inlineCode",{parentName:"p"},"ssologin.stg")),(0,c.kt)("ol",null,(0,c.kt)("li",{parentName:"ol"},"One last one for fun. NBC produced a popular sitcom about typical office work environment, which dns record might be associated with this show?")),(0,c.kt)("blockquote",null,(0,c.kt)("p",{parentName:"blockquote"},"office-words.",(0,c.kt)("a",{parentName:"p",href:"http://www.nbc.com"},"www.nbc.com"))),(0,c.kt)("p",null,(0,c.kt)("inlineCode",{parentName:"p"},"office-words")))}p.isMDXComponent=!0}}]);