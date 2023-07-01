"use strict";(self.webpackChunkcyfun_me=self.webpackChunkcyfun_me||[]).push([[9072],{3905:(e,t,n)=>{n.d(t,{Zo:()=>u,kt:()=>c});var a=n(67294);function i(e,t,n){return t in e?Object.defineProperty(e,t,{value:n,enumerable:!0,configurable:!0,writable:!0}):e[t]=n,e}function l(e,t){var n=Object.keys(e);if(Object.getOwnPropertySymbols){var a=Object.getOwnPropertySymbols(e);t&&(a=a.filter((function(t){return Object.getOwnPropertyDescriptor(e,t).enumerable}))),n.push.apply(n,a)}return n}function o(e){for(var t=1;t<arguments.length;t++){var n=null!=arguments[t]?arguments[t]:{};t%2?l(Object(n),!0).forEach((function(t){i(e,t,n[t])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(n)):l(Object(n)).forEach((function(t){Object.defineProperty(e,t,Object.getOwnPropertyDescriptor(n,t))}))}return e}function r(e,t){if(null==e)return{};var n,a,i=function(e,t){if(null==e)return{};var n,a,i={},l=Object.keys(e);for(a=0;a<l.length;a++)n=l[a],t.indexOf(n)>=0||(i[n]=e[n]);return i}(e,t);if(Object.getOwnPropertySymbols){var l=Object.getOwnPropertySymbols(e);for(a=0;a<l.length;a++)n=l[a],t.indexOf(n)>=0||Object.prototype.propertyIsEnumerable.call(e,n)&&(i[n]=e[n])}return i}var s=a.createContext({}),p=function(e){var t=a.useContext(s),n=t;return e&&(n="function"==typeof e?e(t):o(o({},t),e)),n},u=function(e){var t=p(e.components);return a.createElement(s.Provider,{value:t},e.children)},h="mdxType",d={inlineCode:"code",wrapper:function(e){var t=e.children;return a.createElement(a.Fragment,{},t)}},m=a.forwardRef((function(e,t){var n=e.components,i=e.mdxType,l=e.originalType,s=e.parentName,u=r(e,["components","mdxType","originalType","parentName"]),h=p(n),m=i,c=h["".concat(s,".").concat(m)]||h[m]||d[m]||l;return n?a.createElement(c,o(o({ref:t},u),{},{components:n})):a.createElement(c,o({ref:t},u))}));function c(e,t){var n=arguments,i=t&&t.mdxType;if("string"==typeof e||i){var l=n.length,o=new Array(l);o[0]=m;var r={};for(var s in t)hasOwnProperty.call(t,s)&&(r[s]=t[s]);r.originalType=e,r[h]="string"==typeof e?e:i,o[1]=r;for(var p=2;p<l;p++)o[p]=n[p];return a.createElement.apply(null,o)}return a.createElement.apply(null,n)}m.displayName="MDXCreateElement"},35271:(e,t,n)=>{n.r(t),n.d(t,{assets:()=>s,contentTitle:()=>o,default:()=>d,frontMatter:()=>l,metadata:()=>r,toc:()=>p});var a=n(87462),i=(n(67294),n(3905));const l={},o="Splunk",r={unversionedId:"Tryhackme/Splunk/Splunk",id:"Tryhackme/Splunk/Splunk",title:"Splunk",description:"Part of the Blue Primer series, learn how to use Splunk to search through massive amounts of information",source:"@site/writeups/Tryhackme/Splunk/Splunk.md",sourceDirName:"Tryhackme/Splunk",slug:"/Tryhackme/Splunk/",permalink:"/writeups/Tryhackme/Splunk/",draft:!1,tags:[],version:"current",frontMatter:{},sidebar:"tutorialSidebar",previous:{title:"Source",permalink:"/writeups/Tryhackme/Source/"},next:{title:"Spring",permalink:"/writeups/Tryhackme/Spring/"}},s={},p=[{value:"\ud83d\udca2 We will cover  the topics",id:"-we-will-cover--the-topics",level:2},{value:"Task 1 Deploy!",id:"task-1-deploy",level:2},{value:"Task 2 Can you dig it?",id:"task-2-can-you-dig-it",level:2},{value:"Task 3 BOTS!",id:"task-3-bots",level:2},{value:"Task 4 Halp, I&#39;m drowning in logs!",id:"task-4-halp-im-drowning-in-logs",level:2},{value:"Task 5 Advanced Persistent Threat",id:"task-5-advanced-persistent-threat",level:2},{value:"Task 6 Ransomware",id:"task-6-ransomware",level:2}],u={toc:p},h="wrapper";function d(e){let{components:t,...n}=e;return(0,i.kt)(h,(0,a.Z)({},u,n,{components:t,mdxType:"MDXLayout"}),(0,i.kt)("h1",{id:"splunk"},"Splunk"),(0,i.kt)("p",null,"Part of the Blue Primer series, learn how to use Splunk to search through massive amounts of information"),(0,i.kt)("p",null,(0,i.kt)("a",{parentName:"p",href:"https://tryhackme.com/room/bpsplunk"},"Splunk")),(0,i.kt)("h2",{id:"-we-will-cover--the-topics"},"\ud83d\udca2 We will cover  the topics"),(0,i.kt)("ul",null,(0,i.kt)("li",{parentName:"ul"},"Splunk Fundamentals"),(0,i.kt)("li",{parentName:"ul"},"System Forensic")),(0,i.kt)("h2",{id:"task-1-deploy"},"Task 1 Deploy!"),(0,i.kt)("p",null,"Deploy the Splunk virtual machine. ",(0,i.kt)("strong",{parentName:"p"},"This can take up to five to ten minutes to launch. If the webpage does not load for you after ten minutes, terminate and relaunch the machine.")),(0,i.kt)("ul",null,(0,i.kt)("li",{parentName:"ul"},(0,i.kt)("strong",{parentName:"li"},"Username"),": splunkUser"),(0,i.kt)("li",{parentName:"ul"},(0,i.kt)("strong",{parentName:"li"},"Password"),": SplunkUser#321")),(0,i.kt)("p",null,"The first section of this room consists of a quiz over Splunk. I recommend attempting the quiz while the machine loads as it can take some time. If the VM fails to load, a direct link to the OVA file (Splunk) can be found ",(0,i.kt)("a",{parentName:"p",href:"https://darkstar7471.com/resources.html"},"here"),". You can also build this manually using the data and instructions found at this ",(0,i.kt)("a",{parentName:"p",href:"https://github.com/splunk/botsv1"},"link"),"."),(0,i.kt)("p",null,"Deploy the virtual machine and connect to the website found at BOX_IP:8000"),(0,i.kt)("p",null,(0,i.kt)("inlineCode",{parentName:"p"},"No answer needed")),(0,i.kt)("p",null,"Move on to the quiz while Splunk loads"),(0,i.kt)("p",null,(0,i.kt)("inlineCode",{parentName:"p"},"No answer needed")),(0,i.kt)("h2",{id:"task-2-can-you-dig-it"},"Task 2 Can you dig it?"),(0,i.kt)("p",null,"A short quiz over the base search commands that are useful for Splunk. All you'll need for this is the attached quick reference guide and possibly the magic of Google. Include all parts of the search query unless otherwise instructed."),(0,i.kt)("hr",null),(0,i.kt)("p",null,(0,i.kt)("img",{parentName:"p",src:"https://i.imgur.com/iabqAoB.png",alt:null})),(0,i.kt)("hr",null),(0,i.kt)("p",null,"Enjoy the room! For future rooms and write-ups, follow ",(0,i.kt)("a",{parentName:"p",href:"https://twitter.com/darkstar7471"},"@darkstar7471")," on Twitter."),(0,i.kt)("p",null,"Splunk queries always begin with this command implicitly unless otherwise specified. What command is this? When performing additional queries to refine received data this command must be added at the start. This is a prime example of a slight trick question."),(0,i.kt)("p",null,(0,i.kt)("inlineCode",{parentName:"p"},"search command is used to look up for things you actually wanna look up in the whole data.")),(0,i.kt)("p",null,(0,i.kt)("inlineCode",{parentName:"p"},"search")),(0,i.kt)("p",null,"When searching for values, it's fairly typical within security to look for uncommon events. What command can we include within our search to find these?"),(0,i.kt)("p",null,(0,i.kt)("inlineCode",{parentName:"p"},"rare command gives you the top 5 or 10 least common result while the top command gives you the top most")),(0,i.kt)("p",null,(0,i.kt)("inlineCode",{parentName:"p"},"rare")),(0,i.kt)("p",null,"What about the inverse? What if we want the most common security event?"),(0,i.kt)("p",null,(0,i.kt)("inlineCode",{parentName:"p"},"top")),(0,i.kt)("p",null,"When we import data into splunk, what is it stored under?"),(0,i.kt)("p",null,(0,i.kt)("inlineCode",{parentName:"p"},"it\u2019s like a repository of the data.")),(0,i.kt)("p",null,(0,i.kt)("inlineCode",{parentName:"p"},"index")),(0,i.kt)("p",null,"We can create 'views' that allow us to consistently pull up the same search over and over again; what are these called?"),(0,i.kt)("p",null,(0,i.kt)("inlineCode",{parentName:"p"},"dashboard")),(0,i.kt)("p",null,"Importing data doesn't always go as planned and we can sometimes end up with multiple copies of the same data, what command do we include in our search to remove these copies?"),(0,i.kt)("p",null,(0,i.kt)("inlineCode",{parentName:"p"},"deduplicates data.")),(0,i.kt)("p",null,(0,i.kt)("inlineCode",{parentName:"p"},"dedup")),(0,i.kt)("p",null,"Splunk can be used for more than just a SIEM and it's commonly used in marketing to track things such as how long a shopping trip on a website lasts from start to finish. What command can we include in our search to track how long these event pairs take?"),(0,i.kt)("p",null,(0,i.kt)("inlineCode",{parentName:"p"},"transaction")),(0,i.kt)("p",null,"In a manner similar to Linux, we can 'pipe' search results into further commands, what character do we use for this?"),(0,i.kt)("p",null,(0,i.kt)("inlineCode",{parentName:"p"},"pipe")),(0,i.kt)("p",null,(0,i.kt)("inlineCode",{parentName:"p"},"|")),(0,i.kt)("p",null,"In performing data analytics with Splunk (ironically what the tool is at it's core) it's useful to track occurrences of events over time, what command do we include to plot this?"),(0,i.kt)("p",null,(0,i.kt)("inlineCode",{parentName:"p"},"timechart")),(0,i.kt)("p",null,"What about if we want to gather general statistical information about a search?"),(0,i.kt)("p",null,(0,i.kt)("inlineCode",{parentName:"p"},"stats")),(0,i.kt)("p",null,"Data imported into Splunk is categorized into columns called what?"),(0,i.kt)("p",null,(0,i.kt)("inlineCode",{parentName:"p"},"fields")),(0,i.kt)("p",null,"When we import data into Splunk we can view it's point of origination, what is this called? I'm looking for the machine aspect of this here."),(0,i.kt)("p",null,(0,i.kt)("inlineCode",{parentName:"p"},"host")),(0,i.kt)("p",null,"When we import data into Splunk we can view its point of origination from within a system, what is this called?"),(0,i.kt)("p",null,(0,i.kt)("inlineCode",{parentName:"p"},"source")),(0,i.kt)("p",null,"We can classify these points of origination and group them all together, viewing them as their specific type. What is this called? Use the syntax found within the search query rather than the proper name for this."),(0,i.kt)("p",null,(0,i.kt)("inlineCode",{parentName:"p"},"sourcetype")),(0,i.kt)("p",null,"When performing functions on data we are searching through we use a specific command prior to the evaluation itself, what is this command?"),(0,i.kt)("p",null,(0,i.kt)("inlineCode",{parentName:"p"},"eval")),(0,i.kt)("p",null,"Love it or hate it regular expression is a massive component to Splunk, what command do we use to specific regex within a search?"),(0,i.kt)("p",null,(0,i.kt)("inlineCode",{parentName:"p"},"rex")),(0,i.kt)("p",null,"It's fairly common to create subsets and specific views for less technical Splunk users, what are these called?"),(0,i.kt)("p",null,(0,i.kt)("inlineCode",{parentName:"p"},"pivot tables")),(0,i.kt)("p",null,"What is the proper name of the time date field in Splunk"),(0,i.kt)("p",null,(0,i.kt)("inlineCode",{parentName:"p"},"_time")),(0,i.kt)("p",null,"How do I specifically include only the first few values found within my search?"),(0,i.kt)("p",null,(0,i.kt)("inlineCode",{parentName:"p"},"head")),(0,i.kt)("p",null,"More useful than you would otherwise imagine, how do I flip the order that results are returned in?"),(0,i.kt)("p",null,(0,i.kt)("inlineCode",{parentName:"p"},"reverse")),(0,i.kt)("p",null,"When viewing search results, it's often useful to rename fields using user-provided tables of values. What command do we include within a search to do this?"),(0,i.kt)("p",null,(0,i.kt)("inlineCode",{parentName:"p"},"lookup")),(0,i.kt)("p",null,"We can collect events into specific time frames to be used in further processing. What command do we include within a search to do just that?"),(0,i.kt)("p",null,(0,i.kt)("inlineCode",{parentName:"p"},"bucket")),(0,i.kt)("p",null,"We can also define data into specific sections of time to be used within chart commands, what command do we use to set these lengths of time? This is different from the previous question as we are no longer collecting for further processing."),(0,i.kt)("p",null,(0,i.kt)("inlineCode",{parentName:"p"},"span")),(0,i.kt)("p",null,"When producing statistics regarding a search it's common to number the occurrences of an event, what command do we include to do this?"),(0,i.kt)("p",null,(0,i.kt)("inlineCode",{parentName:"p"},"count")),(0,i.kt)("p",null,"Last but not least, what is the website where you can find the Splunk apps at?"),(0,i.kt)("p",null,(0,i.kt)("inlineCode",{parentName:"p"},"splunkbase.splunk.com")),(0,i.kt)("p",null,"We can also add new features into Splunk, what are these called?"),(0,i.kt)("p",null,(0,i.kt)("inlineCode",{parentName:"p"},"apps")),(0,i.kt)("p",null,"What does SOC stand for?"),(0,i.kt)("p",null,(0,i.kt)("inlineCode",{parentName:"p"},"security operations center")),(0,i.kt)("p",null,"What does SIEM stand for?"),(0,i.kt)("p",null,(0,i.kt)("inlineCode",{parentName:"p"},"security information and event management")),(0,i.kt)("p",null,"How about BOTS?"),(0,i.kt)("p",null,(0,i.kt)("inlineCode",{parentName:"p"},"you can just see this given in Task 3 description.")),(0,i.kt)("p",null,(0,i.kt)("inlineCode",{parentName:"p"},"boss of the soc")),(0,i.kt)("p",null,"And CIM?"),(0,i.kt)("p",null,(0,i.kt)("inlineCode",{parentName:"p"},"Splunk CMI")),(0,i.kt)("p",null,(0,i.kt)("inlineCode",{parentName:"p"},"common information model")),(0,i.kt)("p",null,"what is the website where you can find the Splunk forums at?"),(0,i.kt)("p",null,(0,i.kt)("inlineCode",{parentName:"p"},"answers.splunk.com")),(0,i.kt)("h2",{id:"task-3-bots"},"Task 3 BOTS!"),(0,i.kt)("p",null,"Following our delightful introduction to Splunk with our command quiz, we'll be visiting some of the training material that Splunk has directly generated as part of their 'Boss of the SOC' Security Operations Center competition!"),(0,i.kt)("p",null,(0,i.kt)("img",{parentName:"p",src:"https://i.imgur.com/ImiZwDX.png",alt:null})),(0,i.kt)("p",null,"If you're interested in this, check out this ",(0,i.kt)("a",{parentName:"p",href:"https://www.splunk.com/blog/2017/09/06/what-you-need-to-know-about-boss-of-the-soc.html"},"link")),(0,i.kt)("p",null,"Check out BOTS!"),(0,i.kt)("p",null,(0,i.kt)("inlineCode",{parentName:"p"},"No answer needed")),(0,i.kt)("h2",{id:"task-4-halp-im-drowning-in-logs"},"Task 4 Halp, I'm drowning in logs!"),(0,i.kt)("p",null,"Navigate to the webpage found at 10.10.235.162:8000 on the machine you've deployed for this room. The credentials for logging into Splunk are as follows:"),(0,i.kt)("ul",null,(0,i.kt)("li",{parentName:"ul"},(0,i.kt)("strong",{parentName:"li"},"Username"),": splunkUser"),(0,i.kt)("li",{parentName:"ul"},(0,i.kt)("strong",{parentName:"li"},"Password"),": SplunkUser#321")),(0,i.kt)("p",null,(0,i.kt)("img",{parentName:"p",src:"https://i.imgur.com/HHmY6QZ.png",alt:null})),(0,i.kt)("p",null,"Navigate to the 'Investigating with Splunk Workshop' App on the left side of the screen following login. You'll be greeted with the following images:"),(0,i.kt)("p",null,(0,i.kt)("strong",{parentName:"p"},"Website Defacement")),(0,i.kt)("p",null,(0,i.kt)("img",{parentName:"p",src:"https://i.imgur.com/dHWoa18.png",alt:null})),(0,i.kt)("p",null,(0,i.kt)("strong",{parentName:"p"},"An Example Cerber Ransomware Infection, an Unfortunately Common Real Ransomware")),(0,i.kt)("p",null,(0,i.kt)("img",{parentName:"p",src:"https://i.imgur.com/Zj1umcF.png",alt:null})),(0,i.kt)("p",null,"These two images are the two scenarios we will be working through throughout this room. In addition to this, we will be using Lockheed Martin's Kill Chain to break down each attack and report it accordingly."),(0,i.kt)("p",null,(0,i.kt)("img",{parentName:"p",src:"https://i.imgur.com/dEuPao3.png",alt:null})),(0,i.kt)("p",null,"Start reading through the Overview and navigate through it until you are ready to begin the APT!"),(0,i.kt)("p",null,"Read the overview!"),(0,i.kt)("p",null,(0,i.kt)("inlineCode",{parentName:"p"},"No answer needed")),(0,i.kt)("h2",{id:"task-5-advanced-persistent-threat"},"Task 5 Advanced Persistent Threat"),(0,i.kt)("p",null,"Work your way through the first scenario in order to track down P01s0n1vy! Don't hesitate to use the material provided to give you a nudge!"),(0,i.kt)("p",null,"What IP is scanning our web server?"),(0,i.kt)("p",null,(0,i.kt)("inlineCode",{parentName:"p"},"40.80.148.42")),(0,i.kt)("p",null,"What web scanner scanned the server?"),(0,i.kt)("p",null,(0,i.kt)("inlineCode",{parentName:"p"},"Acunetix")),(0,i.kt)("p",null,"What is the IP address of our web server?"),(0,i.kt)("p",null,(0,i.kt)("inlineCode",{parentName:"p"},"192.168.250.70")),(0,i.kt)("p",null,"What content management system is imreallynotbatman.com using?"),(0,i.kt)("p",null,(0,i.kt)("inlineCode",{parentName:"p"},"Joomla")),(0,i.kt)("p",null,"What address is performing the brute-forcing attack against our website?"),(0,i.kt)("p",null,(0,i.kt)("inlineCode",{parentName:"p"},"23.22.63.114")),(0,i.kt)("p",null,"What was the first password attempted in the attack?"),(0,i.kt)("p",null,(0,i.kt)("inlineCode",{parentName:"p"},"12345678")),(0,i.kt)("p",null,"One of the passwords in the brute force attack is James Brodsky's favorite Coldplay song. Which six character song is it?"),(0,i.kt)("p",null,(0,i.kt)("inlineCode",{parentName:"p"},"yellow")),(0,i.kt)("p",null,"What was the correct password for admin access to the content management system running imreallynotbatman.com?"),(0,i.kt)("p",null,(0,i.kt)("inlineCode",{parentName:"p"},"batman")),(0,i.kt)("p",null,"What was the average password length used in the password brute forcing attempt rounded to closest whole integer?"),(0,i.kt)("p",null,(0,i.kt)("inlineCode",{parentName:"p"},"6")),(0,i.kt)("p",null,"How many seconds elapsed between the time the brute force password scan identified the correct password and the compromised login rounded to 2 decimal places?"),(0,i.kt)("p",null,(0,i.kt)("inlineCode",{parentName:"p"},"92.17")),(0,i.kt)("p",null,"How many unique passwords were attempted in the brute force attempt?"),(0,i.kt)("p",null,(0,i.kt)("inlineCode",{parentName:"p"},"412")),(0,i.kt)("p",null,"What is the name of the executable uploaded by P01s0n1vy?"),(0,i.kt)("p",null,(0,i.kt)("inlineCode",{parentName:"p"},"3791.exe")),(0,i.kt)("p",null,"What is the MD5 hash of the executable uploaded?"),(0,i.kt)("p",null,(0,i.kt)("inlineCode",{parentName:"p"},"AAE3F5A29935E6ABCC2C2754D12A9AF0")),(0,i.kt)("p",null,"What is the name of the file that defaced the imreallynotbatman.com website?"),(0,i.kt)("p",null,(0,i.kt)("inlineCode",{parentName:"p"},"poisonivy-is-coming-for-you-batman.jpeg")),(0,i.kt)("p",null,"This attack used dynamic DNS to resolve to the malicious IP. What fully qualified domain name (FQDN) is associated with this attack?"),(0,i.kt)("p",null,(0,i.kt)("inlineCode",{parentName:"p"},"prankglassinebracket.jumpingcrab.com")),(0,i.kt)("p",null,"What IP address has P01s0n1vy tied to domains that are pre-staged to attack Wayne Enterprises?"),(0,i.kt)("p",null,(0,i.kt)("inlineCode",{parentName:"p"},"23.22.63.114")),(0,i.kt)("p",null,"Based on the data gathered from this attack and common open source intelligence sources for domain names, what is the email address that is most likely associated with P01s0n1vy APT group?"),(0,i.kt)("p",null,(0,i.kt)("inlineCode",{parentName:"p"},"lillian.rose@po1s0n1vy.com")),(0,i.kt)("p",null,"GCPD reported that common TTPs (Tactics, Techniques, Procedures) for the P01s0n1vy APT group if initial compromise fails is to send a spear phishing email with custom malware attached to their intended target. This malware is usually connected to P01s0n1vy\u2019s initial attack infrastructure. Using research techniques, provide the SHA256 hash of this malware."),(0,i.kt)("p",null,(0,i.kt)("inlineCode",{parentName:"p"},"9709473ab351387aab9e816eff3910b9f28a7a70202e250ed46dba8f820f34a8")),(0,i.kt)("p",null,"What special hex code is associated with the customized malware discussed in the previous question?"),(0,i.kt)("p",null,(0,i.kt)("inlineCode",{parentName:"p"},"53 74 65 76 65 20 42 72 61 6e 74 27 73 20 42 65 61 72 64 20 69 73 20 61 20 70 6f 77 65 72 66 75 6c 20 74 68 69 6e 67 2e 20 46 69 6e 64 20 74 68 69 73 20 6d 65 73 73 61 67 65 20 61 6e 64 20 61 73 6b 20 68 69 6d 20 74 6f 20 62 75 79 20 79 6f 75 20 61 20 62 65 65 72 21 21 21")),(0,i.kt)("p",null,"What does this hex code decode to?"),(0,i.kt)("p",null,(0,i.kt)("inlineCode",{parentName:"p"},"Steve Brant\u2019s Beard is a powerful thing. Find this message and ask him to buy you a beer!!!")),(0,i.kt)("h2",{id:"task-6-ransomware"},"Task 6 Ransomware"),(0,i.kt)("p",null,"One of your users at Wayne Enterprises has managed to get their machine infected, work your way through this second scenario to discover how it happened! Don't hesitate to use the material provided to give you a nudge!"),(0,i.kt)("p",null,"What was the most likely IP address of we8105desk on 24AUG2016?"),(0,i.kt)("p",null,(0,i.kt)("inlineCode",{parentName:"p"},"192.168.250.100")),(0,i.kt)("p",null,"What is the name of the USB key inserted by Bob Smith?"),(0,i.kt)("p",null,(0,i.kt)("inlineCode",{parentName:"p"},"MIRANDA_PRI")),(0,i.kt)("p",null,"After the USB insertion, a file execution occurs that is the initial Cerber infection. This file execution creates two additional processes. What is the name of the file?"),(0,i.kt)("p",null,(0,i.kt)("inlineCode",{parentName:"p"},"Miranda_Tate_unveiled.dotm")),(0,i.kt)("p",null,"During the initial Cerber infection a VB script is run. The entire script from this execution, pre-pended by the name of the launching .exe, can be found in a field in Splunk. What is the length in characters of this field?"),(0,i.kt)("p",null,(0,i.kt)("inlineCode",{parentName:"p"},"4490")),(0,i.kt)("p",null,"Bob Smith's workstation (we8105desk) was connected to a file server during the ransomware outbreak. What is the IP address of the file server?"),(0,i.kt)("p",null,(0,i.kt)("inlineCode",{parentName:"p"},"192.168.250.20")),(0,i.kt)("p",null,"What was the first suspicious domain visited by we8105desk on 24AUG2016?"),(0,i.kt)("p",null,(0,i.kt)("inlineCode",{parentName:"p"},"solidaritedeproximite.org")),(0,i.kt)("p",null,"The malware downloads a file that contains the Cerber ransomware cryptor code. What is the name of that file?"),(0,i.kt)("p",null,(0,i.kt)("inlineCode",{parentName:"p"},"mhtr.jpg")),(0,i.kt)("p",null,"What is the parent process ID of 121214.tmp?"),(0,i.kt)("p",null,(0,i.kt)("inlineCode",{parentName:"p"},"3968")),(0,i.kt)("p",null,"Amongst the Suricata signatures that detected the Cerber malware, which signature ID alerted the fewest number of times?"),(0,i.kt)("p",null,(0,i.kt)("inlineCode",{parentName:"p"},"2816763")),(0,i.kt)("p",null,"The Cerber ransomware encrypts files located in Bob Smith's Windows profile. How many .txt files does it encrypt?"),(0,i.kt)("p",null,(0,i.kt)("inlineCode",{parentName:"p"},"406")),(0,i.kt)("p",null,"How many distinct PDFs did the ransomware encrypt on the remote file server?"),(0,i.kt)("p",null,(0,i.kt)("inlineCode",{parentName:"p"},"257")),(0,i.kt)("p",null,"What fully qualified domain name (FQDN) does the Cerber ransomware attempt to direct the user to at the end of its encryption phase?"),(0,i.kt)("p",null,(0,i.kt)("inlineCode",{parentName:"p"},"cerberhhyed5frqa.xmfir0.win")))}d.isMDXComponent=!0}}]);