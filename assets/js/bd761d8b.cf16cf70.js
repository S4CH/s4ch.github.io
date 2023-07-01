"use strict";(self.webpackChunkcyfun_me=self.webpackChunkcyfun_me||[]).push([[8046],{3905:(e,t,a)=>{a.d(t,{Zo:()=>p,kt:()=>d});var r=a(67294);function n(e,t,a){return t in e?Object.defineProperty(e,t,{value:a,enumerable:!0,configurable:!0,writable:!0}):e[t]=a,e}function i(e,t){var a=Object.keys(e);if(Object.getOwnPropertySymbols){var r=Object.getOwnPropertySymbols(e);t&&(r=r.filter((function(t){return Object.getOwnPropertyDescriptor(e,t).enumerable}))),a.push.apply(a,r)}return a}function o(e){for(var t=1;t<arguments.length;t++){var a=null!=arguments[t]?arguments[t]:{};t%2?i(Object(a),!0).forEach((function(t){n(e,t,a[t])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(a)):i(Object(a)).forEach((function(t){Object.defineProperty(e,t,Object.getOwnPropertyDescriptor(a,t))}))}return e}function s(e,t){if(null==e)return{};var a,r,n=function(e,t){if(null==e)return{};var a,r,n={},i=Object.keys(e);for(r=0;r<i.length;r++)a=i[r],t.indexOf(a)>=0||(n[a]=e[a]);return n}(e,t);if(Object.getOwnPropertySymbols){var i=Object.getOwnPropertySymbols(e);for(r=0;r<i.length;r++)a=i[r],t.indexOf(a)>=0||Object.prototype.propertyIsEnumerable.call(e,a)&&(n[a]=e[a])}return n}var l=r.createContext({}),c=function(e){var t=r.useContext(l),a=t;return e&&(a="function"==typeof e?e(t):o(o({},t),e)),a},p=function(e){var t=c(e.components);return r.createElement(l.Provider,{value:t},e.children)},u="mdxType",m={inlineCode:"code",wrapper:function(e){var t=e.children;return r.createElement(r.Fragment,{},t)}},h=r.forwardRef((function(e,t){var a=e.components,n=e.mdxType,i=e.originalType,l=e.parentName,p=s(e,["components","mdxType","originalType","parentName"]),u=c(a),h=n,d=u["".concat(l,".").concat(h)]||u[h]||m[h]||i;return a?r.createElement(d,o(o({ref:t},p),{},{components:a})):r.createElement(d,o({ref:t},p))}));function d(e,t){var a=arguments,n=t&&t.mdxType;if("string"==typeof e||n){var i=a.length,o=new Array(i);o[0]=h;var s={};for(var l in t)hasOwnProperty.call(t,l)&&(s[l]=t[l]);s.originalType=e,s[u]="string"==typeof e?e:n,o[1]=s;for(var c=2;c<i;c++)o[c]=a[c];return r.createElement.apply(null,o)}return r.createElement.apply(null,a)}h.displayName="MDXCreateElement"},18243:(e,t,a)=>{a.r(t),a.d(t,{assets:()=>l,contentTitle:()=>o,default:()=>m,frontMatter:()=>i,metadata:()=>s,toc:()=>c});var r=a(87462),n=(a(67294),a(3905));const i={title:"Cybersecurity practices and Why they are important?",id:"importantpractices"},o=void 0,s={unversionedId:"ICS/Practices/importantpractices",id:"ICS/Practices/importantpractices",title:"Cybersecurity practices and Why they are important?",description:"Cybersecurity Practices",source:"@site/docs/ICS/2. Practices/1. Cybersecurity practices and why they are important.md",sourceDirName:"ICS/2. Practices",slug:"/ICS/Practices/importantpractices",permalink:"/docs/ICS/Practices/importantpractices",draft:!1,tags:[],version:"current",sidebarPosition:1,frontMatter:{title:"Cybersecurity practices and Why they are important?",id:"importantpractices"},sidebar:"tutorialSidebar",previous:{title:"Cyber Security Practices for Industrial Control System",permalink:"/docs/ICS/ics"},next:{title:"Common information collection techniques and how to protect yourself from them",permalink:"/docs/ICS/Practices/common-info-collection-techniques"}},l={},c=[{value:"Cybersecurity Practices",id:"cybersecurity-practices",level:2},{value:"Why Do It?",id:"why-do-it",level:2},{value:"What&#39;s the 5 part OPSEC process ?",id:"whats-the-5-part-opsec-process-",level:2},{value:"<strong>Part 1:</strong> Identify CRITICAL Information",id:"part-1-identify-critical-information",level:3},{value:"<strong>Part 2:</strong> Analyze the THREAT",id:"part-2-analyze-the-threat",level:3},{value:"<strong>Part 3:</strong> Analyze the VULNERABILITIES",id:"part-3-analyze-the-vulnerabilities",level:3},{value:"<strong>Part 4:</strong> Assess the RISK",id:"part-4-assess-the-risk",level:3},{value:"<strong>Part 5:</strong> Apply the COUNTERMEASURES",id:"part-5-apply-the-countermeasures",level:3}],p={toc:c},u="wrapper";function m(e){let{components:t,...i}=e;return(0,n.kt)(u,(0,r.Z)({},p,i,{components:t,mdxType:"MDXLayout"}),(0,n.kt)("h2",{id:"cybersecurity-practices"},"Cybersecurity Practices"),(0,n.kt)("p",null,"Incorporating cybersecurity practices into your daily life can prevent the disclosure of critical information (CI) to potential adversaries. If you're thinking, \"But I work in a control system environment; control systems don't store CI,\" then consider our definition of CI:"),(0,n.kt)("blockquote",null,(0,n.kt)("p",{parentName:"blockquote"},"Information that if disclosed would have a negative impact on an organization. It includes not only trade secrets and technical specs, but also sensitive information such as the process used by systems(e.g., commands and access points), financial data, personnel records and medical information.")),(0,n.kt)("p",null,"CI also refers to the information that protects assets, such as passwords to access systems or passcodes to enter a building or room. Recipes, formulas, and strategies are usually CI. Even information such as your name, phone number, and email address\u2014especially when all three of these information pieces are together\u2014may be considered sensitive, because it helps an adversary launch a social engineering or phishing attack. In control system environments, the result of CI disclosure may be severe economic impact or loss of life."),(0,n.kt)("p",null,(0,n.kt)("strong",{parentName:"p"},"Note:")," ",(0,n.kt)("em",{parentName:"p"},(0,n.kt)("inlineCode",{parentName:"em"},"Your organization's definition of CI may differ somewhat\u2014i.e., it may be more specific or more general. However, the concepts in this course should apply regardless of any differences."))),(0,n.kt)("h2",{id:"why-do-it"},"Why Do It?"),(0,n.kt)("p",null,"You probably incorporate cybersecurity practices in your personal life without even realizing it."),(0,n.kt)("p",null,"For example, when you have prepared to go on a trip, have you ever done any of the following?"),(0,n.kt)("ul",null,(0,n.kt)("li",{parentName:"ul"},"Stopped newspaper deliveries so newspapers wouldn't pile up outside, letting people know you aren't home?"),(0,n.kt)("li",{parentName:"ul"},"Had your mail held by the post office or asked your neighbor to pick up your mail so the mailbox would not fill up?"),(0,n.kt)("li",{parentName:"ul"},"Connected your porch lights and inside lights to a timer or light sensor so they would go on and off to make it look like someone is home?"),(0,n.kt)("li",{parentName:"ul"},"Left a car parked in the driveway?"),(0,n.kt)("li",{parentName:"ul"},"Had someone keep the lawn trimmed?"),(0,n.kt)("li",{parentName:"ul"},"Asked a friend or neighbor to periodically open and close blinds or curtains?")),(0,n.kt)("p",null,'The CI here is obvious - we do not want a burglar or other "bad guy" to know the house is unoccupied. The more clues we provide to an adversary that the house is unoccupied, the more likely it is the house will be robbed. The same holds true at work. We must reduce or obscure indicators to protect our critical information.'),(0,n.kt)("h2",{id:"whats-the-5-part-opsec-process-"},"What's the 5 part OPSEC process ?"),(0,n.kt)("h3",{id:"part-1-identify-critical-information"},(0,n.kt)("strong",{parentName:"h3"},"Part 1:")," Identify CRITICAL Information"),(0,n.kt)("blockquote",null,(0,n.kt)("p",{parentName:"blockquote"},"A method for identifying critical information within your company or organization is to first DETERMINE>>>"),(0,n.kt)("ol",{parentName:"blockquote"},(0,n.kt)("li",{parentName:"ol"},"What adversaries might want to do...?"),(0,n.kt)("li",{parentName:"ol"},"What information willl the adversary need to accomplish their goal?")),(0,n.kt)("ul",{parentName:"blockquote"},(0,n.kt)("li",{parentName:"ul"},"Be sure to analyze from both friendly and adversarial points of view."),(0,n.kt)("li",{parentName:"ul"},"It's aggrregation of information that can be gathered on a target that poses the threat."),(0,n.kt)("li",{parentName:"ul"},"A company's critical information could include:",(0,n.kt)("ul",{parentName:"li"},(0,n.kt)("li",{parentName:"ul"},"Network structure"),(0,n.kt)("li",{parentName:"ul"},"Employee data - email addresses & work schedules"),(0,n.kt)("li",{parentName:"ul"},"Lists of user names"))),(0,n.kt)("li",{parentName:"ul"},"Social media profiles are often analyzed to aggregate information."),(0,n.kt)("li",{parentName:"ul"},"We all know the profiles are a goldmine of information for attackers. They provide an idea of >>>",(0,n.kt)("ul",{parentName:"li"},(0,n.kt)("li",{parentName:"ul"},"What people do..."),(0,n.kt)("li",{parentName:"ul"},"Where they work..."),(0,n.kt)("li",{parentName:"ul"},"What types of software are used..."),(0,n.kt)("li",{parentName:"ul"},"Any issues that can be replicated in corporate environments..."),(0,n.kt)("li",{parentName:"ul"},"Profile pics are also useful when gathering information..."))))),(0,n.kt)("p",null,(0,n.kt)("strong",{parentName:"p"},"Before you post comments or share content forums and social media, ask yourself :>>>")),(0,n.kt)("p",null,"Does this give an attacker any information they could use to build a profile {or further build} on me or in my company???"),(0,n.kt)("h3",{id:"part-2-analyze-the-threat"},(0,n.kt)("strong",{parentName:"h3"},"Part 2:")," Analyze the THREAT"),(0,n.kt)("p",null,(0,n.kt)("strong",{parentName:"p"},"A threat is a potential danger")," \u2620\ufe0f"),(0,n.kt)("p",null,"It is often defined as any person, circumstance, or event with the potential to cause loss or damage. Threat requires both intent and capability. If one of these isn't present, there is no threat."),(0,n.kt)("p",null,"To analyze a threat, you need to identify:"),(0,n.kt)("ol",null,(0,n.kt)("li",{parentName:"ol"},"Who are the potential adversaries (e.g., competitors, insiders, terrorists)?"),(0,n.kt)("li",{parentName:"ol"},"What is the adversary's intent and what capabilities do they have? For example, a disgruntled employee might have different capabilities than a competitor."),(0,n.kt)("li",{parentName:"ol"},"What does the adversary already know? For example, what might they know from researching information published on the Internet or in trade journals."),(0,n.kt)("li",{parentName:"ol"},"What does the adversary need to know to succeed (e.g., control system commands, how to gain remote or physical access)?"),(0,n.kt)("li",{parentName:"ol"},"Where is the adversary likely to look to obtain the information (remember, an adversary is apt to go to more than one source)?")),(0,n.kt)("blockquote",null,(0,n.kt)("p",{parentName:"blockquote"},"Again, thinking from the adversary\u2019s point of view will help you analyze the threats in your work environment.")),(0,n.kt)("h3",{id:"part-3-analyze-the-vulnerabilities"},(0,n.kt)("strong",{parentName:"h3"},"Part 3:")," Analyze the VULNERABILITIES"),(0,n.kt)("p",null,(0,n.kt)("strong",{parentName:"p"},"This part of the five-step process is about determining weaknesses (that is, vulnerabilities) that may be exploited by an adversary to gain critical information. Vulnerabilities include:")),(0,n.kt)("ul",null,(0,n.kt)("li",{parentName:"ul"},"Inadequate training of employees."),(0,n.kt)("li",{parentName:"ul"},"Use of unsecured communications."),(0,n.kt)("li",{parentName:"ul"},"Publishing the control system manufacturer or vendor used."),(0,n.kt)("li",{parentName:"ul"},"Systems designed without security in mind.")),(0,n.kt)("blockquote",null,(0,n.kt)("p",{parentName:"blockquote"},"It is important to think like the adversary in this step. One way to discover vulnerabilities is to look for indicators. Indicators are observable or detectable activities or information that, when looked at by themselves or in conjunction with something else, point to a vulnerability regarding your organization's operations. For an adversary, indicators are clues that a vulnerability exists and can be exploited.")),(0,n.kt)("p",null,"For example, a fence suddenly put up where one did not exist before could tip off an adversary that something valuable is inside the fence. Other examples of indicators include: people in unusual places, unfamiliar cars in an employee parking lot, and late-night meetings. Although indicators are not vulnerabilities by themselves, they can point to or reveal vulnerabilities."),(0,n.kt)("h3",{id:"part-4-assess-the-risk"},(0,n.kt)("strong",{parentName:"h3"},"Part 4:")," Assess the RISK"),(0,n.kt)("p",null,(0,n.kt)("strong",{parentName:"p"},"Assessing risk incorporates using the risk formula and conducting risk assessments.")),(0,n.kt)("ul",null,(0,n.kt)("li",{parentName:"ul"},"Risk assessment is a process in which you decide if a countermeasure needs to be assigned to a vulnerability based on the level of risk this vulnerability poses to your organization."),(0,n.kt)("li",{parentName:"ul"},"When you assess a vulnerability, also consider the adversary's intent and capability\u2014is the adversary willing to exploit your vulnerability, and does he or she have the means to do so? Next, determine the consequences if the vulnerability were successfully exploited. This determines the level of risk. You then decide if the level of risk warrants the application of one or more countermeasures."),(0,n.kt)("li",{parentName:"ul"},"Looking at risk as a function of consequence (as opposed to asset value) may allow for easier calculations applicable to control system environments. Elements critical to the control domain, such as loss of life, time to recover, and environmental impact, can help in these calculations."),(0,n.kt)("li",{parentName:"ul"},"Keep in mind that consequences aren't always something that have an immediate financial impact. The failure of a control system could result in negative media attention.")),(0,n.kt)("p",null,"$RISK = THREAT",(0,n.kt)("em",{parentName:"p"},"VULNERABILITY"),"CONSEQUENCE$"),(0,n.kt)("p",null,(0,n.kt)("img",{alt:"risk threat vuln",src:a(6836).Z,width:"1707",height:"830"})),(0,n.kt)("p",null,(0,n.kt)("img",{alt:"risk threat vulnn",src:a(18113).Z,width:"1920",height:"883"})),(0,n.kt)("h3",{id:"part-5-apply-the-countermeasures"},(0,n.kt)("strong",{parentName:"h3"},"Part 5:")," Apply the COUNTERMEASURES"),(0,n.kt)("ul",null,(0,n.kt)("li",{parentName:"ul"},"A countermeasure can be anything that reduces an adversary's ability to exploit vulnerabilities. Countermeasures don't need to be complicated or expensive. For example, locking your car door and removing the keys from the ignition are simple, smart ways to make it harder for someone to steal your car."),(0,n.kt)("li",{parentName:"ul"},"Countermeasures are implemented in an order of priority directly proportionate to the risk posed by different weaknesses (the most significant consequences to your mission, operation, or activity). Often implementing several low-cost countermeasures provides the best overall protection."),(0,n.kt)("li",{parentName:"ul"},"Consider all possible countermeasures, and then assess the potential effectiveness of each one against a specific vulnerability or multiple vulnerabilities.")),(0,n.kt)("p",null,(0,n.kt)("strong",{parentName:"p"},"Which of the countermeasures below can you implement right away to protect your systems?")),(0,n.kt)("ul",null,(0,n.kt)("li",{parentName:"ul"},"Controlling Distribution",(0,n.kt)("ul",{parentName:"li"},(0,n.kt)("li",{parentName:"ul"},"Limiting sharing of information to those who need it."))),(0,n.kt)("li",{parentName:"ul"},"Cyber Protection Tools",(0,n.kt)("ul",{parentName:"li"},(0,n.kt)("li",{parentName:"ul"},"Implementing anti-virus software, firewalls, and intrusion detection systems can greatly reduce an adversary's ability to cause damage."))),(0,n.kt)("li",{parentName:"ul"},"Speed of Execution",(0,n.kt)("ul",{parentName:"li"},(0,n.kt)("li",{parentName:"ul"},"Accelerating the schedule can limit the ability of an adversary to act on the information they have obtained."))),(0,n.kt)("li",{parentName:"ul"},"Awareness Training",(0,n.kt)("ul",{parentName:"li"},(0,n.kt)("li",{parentName:"ul"},"Educating employees about all aspects of cybersecurity practices is one of the most effective countermeasures."))),(0,n.kt)("li",{parentName:"ul"},"Physical Security",(0,n.kt)("ul",{parentName:"li"},(0,n.kt)("li",{parentName:"ul"},(0,n.kt)("p",{parentName:"li"},"While it may be wise to employ security guard patrols, an organization must also ensure that patrol schedules are somewhat randomized, and shift changes are kept secret in order to prevent an intruder from determining a pattern."),(0,n.kt)("h2",{parentName:"li",id:"section-summary-"},(0,n.kt)("strong",{parentName:"h2"},"Section Summary")," \ud83d\ude1b")),(0,n.kt)("li",{parentName:"ul"},(0,n.kt)("p",{parentName:"li"},"Cybersecurity practices can prevent the disclosure of critical information to threat actors. A primary security goal is to control information about your organization's capabilities and intentions in order to prevent such information from being exploited. The longer it takes an adversary to obtain critical information, the more time you have to discover problems and block access to the information and your assets. In addition, most of us already use cybersecurity practices in our personal lives without even realizing it.")),(0,n.kt)("li",{parentName:"ul"},(0,n.kt)("p",{parentName:"li"},"Cybersecurity practices include: identifying critical information, analyzing the threat, analyzing the vulnerabilities, assessing risk, and applying countermeasures. In all steps, view the situation from both friendly and adversarial points of view.")),(0,n.kt)("li",{parentName:"ul"},(0,n.kt)("p",{parentName:"li"},'Practicing cybersecurity is a continuous process, not one that "ends" when you complete the fifth step. In fact, the steps do not necessarily have to be followed in a particular order.'))))),(0,n.kt)("p",null,(0,n.kt)("img",{parentName:"p",src:"https://images.unsplash.com/photo-1536440136628-849c177e76a1?ixlib=rb-1.2.1&q=85&fm=jpg&crop=entropy&cs=srgb",alt:"https://images.unsplash.com/photo-1536440136628-849c177e76a1?ixlib=rb-1.2.1&q=85&fm=jpg&crop=entropy&cs=srgb"})),(0,n.kt)("h1",{id:"lets-watch-some-movie"},"Lets watch some movie"))}m.isMDXComponent=!0},6836:(e,t,a)=>{a.d(t,{Z:()=>r});const r=a.p+"assets/images/fi-dc691939d4d539662db747881eb4947f.png"},18113:(e,t,a)=>{a.d(t,{Z:()=>r});const r=a.p+"assets/images/sec-9bc374cfc7f57015edf39526c3329302.png"}}]);