"use strict";(self.webpackChunkcyfun_me=self.webpackChunkcyfun_me||[]).push([[550],{3905:(e,t,n)=>{n.d(t,{Zo:()=>p,kt:()=>d});var a=n(67294);function o(e,t,n){return t in e?Object.defineProperty(e,t,{value:n,enumerable:!0,configurable:!0,writable:!0}):e[t]=n,e}function r(e,t){var n=Object.keys(e);if(Object.getOwnPropertySymbols){var a=Object.getOwnPropertySymbols(e);t&&(a=a.filter((function(t){return Object.getOwnPropertyDescriptor(e,t).enumerable}))),n.push.apply(n,a)}return n}function s(e){for(var t=1;t<arguments.length;t++){var n=null!=arguments[t]?arguments[t]:{};t%2?r(Object(n),!0).forEach((function(t){o(e,t,n[t])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(n)):r(Object(n)).forEach((function(t){Object.defineProperty(e,t,Object.getOwnPropertyDescriptor(n,t))}))}return e}function l(e,t){if(null==e)return{};var n,a,o=function(e,t){if(null==e)return{};var n,a,o={},r=Object.keys(e);for(a=0;a<r.length;a++)n=r[a],t.indexOf(n)>=0||(o[n]=e[n]);return o}(e,t);if(Object.getOwnPropertySymbols){var r=Object.getOwnPropertySymbols(e);for(a=0;a<r.length;a++)n=r[a],t.indexOf(n)>=0||Object.prototype.propertyIsEnumerable.call(e,n)&&(o[n]=e[n])}return o}var i=a.createContext({}),u=function(e){var t=a.useContext(i),n=t;return e&&(n="function"==typeof e?e(t):s(s({},t),e)),n},p=function(e){var t=u(e.components);return a.createElement(i.Provider,{value:t},e.children)},c="mdxType",h={inlineCode:"code",wrapper:function(e){var t=e.children;return a.createElement(a.Fragment,{},t)}},k=a.forwardRef((function(e,t){var n=e.components,o=e.mdxType,r=e.originalType,i=e.parentName,p=l(e,["components","mdxType","originalType","parentName"]),c=u(n),k=o,d=c["".concat(i,".").concat(k)]||c[k]||h[k]||r;return n?a.createElement(d,s(s({ref:t},p),{},{components:n})):a.createElement(d,s({ref:t},p))}));function d(e,t){var n=arguments,o=t&&t.mdxType;if("string"==typeof e||o){var r=n.length,s=new Array(r);s[0]=k;var l={};for(var i in t)hasOwnProperty.call(t,i)&&(l[i]=t[i]);l.originalType=e,l[c]="string"==typeof e?e:o,s[1]=l;for(var u=2;u<r;u++)s[u]=n[u];return a.createElement.apply(null,s)}return a.createElement.apply(null,n)}k.displayName="MDXCreateElement"},67393:(e,t,n)=>{n.r(t),n.d(t,{assets:()=>i,contentTitle:()=>s,default:()=>h,frontMatter:()=>r,metadata:()=>l,toc:()=>u});var a=n(87462),o=(n(67294),n(3905));const r={},s="Web Fundamentals",l={unversionedId:"Tryhackme/Web Fundamentals/Web fundamentals",id:"Tryhackme/Web Fundamentals/Web fundamentals",title:"Web Fundamentals",description:"Learn how the web works!",source:"@site/writeups/Tryhackme/Web Fundamentals/Web fundamentals.md",sourceDirName:"Tryhackme/Web Fundamentals",slug:"/Tryhackme/Web Fundamentals/",permalink:"/writeups/Tryhackme/Web Fundamentals/",draft:!1,tags:[],version:"current",frontMatter:{},sidebar:"tutorialSidebar",previous:{title:"WWBuddy",permalink:"/writeups/Tryhackme/WWBuddy/"},next:{title:"Web Scanning",permalink:"/writeups/Tryhackme/Web Scanning/"}},i={},u=[{value:"\ud83d\udca2 We will cover  the topics",id:"-we-will-cover--the-topics",level:2},{value:"Task 1 Introduction and objectives",id:"task-1-introduction-and-objectives",level:2},{value:"Task 2 How do we load websites?",id:"task-2-how-do-we-load-websites",level:2},{value:"Task 3 More HTTP - Verbs and request formats",id:"task-3-more-http---verbs-and-request-formats",level:2},{value:"Task 4 Cookies, tasty!",id:"task-4-cookies-tasty",level:2},{value:"Task 5 Mini CTF",id:"task-5-mini-ctf",level:2}],p={toc:u},c="wrapper";function h(e){let{components:t,...n}=e;return(0,o.kt)(c,(0,a.Z)({},p,n,{components:t,mdxType:"MDXLayout"}),(0,o.kt)("h1",{id:"web-fundamentals"},"Web Fundamentals"),(0,o.kt)("p",null,"Learn how the web works!"),(0,o.kt)("p",null,(0,o.kt)("a",{parentName:"p",href:"https://tryhackme.com/room/webfundamentals"},"Web Fundamentals")),(0,o.kt)("h2",{id:"-we-will-cover--the-topics"},"\ud83d\udca2 We will cover  the topics"),(0,o.kt)("ul",null,(0,o.kt)("li",{parentName:"ul"},"Web Fundamentals")),(0,o.kt)("h2",{id:"task-1-introduction-and-objectives"},"Task 1 Introduction and objectives"),(0,o.kt)("p",null,"This room is designed as a basic intro to how the web works."),(0,o.kt)("p",null,"We'll cover HTTP requests and responses, web servers, cookies and then put them all to use in a mini Capture the Flag at the end.\n#1"),(0,o.kt)("ol",null,(0,o.kt)("li",{parentName:"ol"},"Read and understand the information")),(0,o.kt)("p",null,(0,o.kt)("inlineCode",{parentName:"p"},"No answer needed")),(0,o.kt)("h2",{id:"task-2-how-do-we-load-websites"},"Task 2 How do we load websites?"),(0,o.kt)("p",null,(0,o.kt)("strong",{parentName:"p"},"Finding the server")),(0,o.kt)("p",null,"Initially, a DNS request is made. DNS is like a giant phone book that takes a URL (Like ",(0,o.kt)("a",{parentName:"p",href:"https://tryhackme.com/"},"https://tryhackme.com/"),") and turns it into an IP address. This means that people don\u2019t have to remember IP addresses for their favourite websites."),(0,o.kt)("p",null,"The IP address uniquely identifies each internet connected device, like a web server or your computer. These are formed of 4 groups of numbers, each 0-255 (x.x.x.x) and called an octet. An example shown below is 100.70.172.11."),(0,o.kt)("p",null,(0,o.kt)("strong",{parentName:"p"},"Loading some content")),(0,o.kt)("p",null,"Once the browser knows the server's IP address, it can ask the server for the web page. This is done with a HTTP GET request. GET is an example of a HTTP verb, which are the different types of request (More on these later). The server will respond to the GET request with the web page content. If the web page is loading extra resources, like JavaScript, images, or CSS files, those will be retrieved in separate GET requests."),(0,o.kt)("p",null,(0,o.kt)("img",{parentName:"p",src:"https://i.imgur.com/R04qcso.png",alt:null})),(0,o.kt)("p",null,"Wireshark showing the HTTP requests that load a website (neverssl.com)"),(0,o.kt)("p",null,"For most websites now, these requests will use HTTPS. HTTPS is a secure (encrypted) version of HTTP, it works in more or less the same way. This uses TLS 1.3 (normally) encryption in order to communicate without:"),(0,o.kt)("ul",null,(0,o.kt)("li",{parentName:"ul"},"Other parties being able to read the data"),(0,o.kt)("li",{parentName:"ul"},"Other parties being able to modify the data")),(0,o.kt)("p",null,"Imagine if someone could modify a request to your bank to send money to your friend. That'd be disastrous!"),(0,o.kt)("p",null,"A web server is software that receives and responds to HTTP(S) requests. Popular examples are Apache, Nginx and Microsoft's IIS. By default, HTTP runs on port 80 and HTTPS runs on port 443. Many CTFs are based around websites, so it's useful to know that if port 80 is open, there's likely a web server listening that you can attack and exploit."),(0,o.kt)("p",null,"The actual content of the web page is normally a combination of ",(0,o.kt)("strong",{parentName:"p"},"HTML"),", ",(0,o.kt)("strong",{parentName:"p"},"CSS")," and ",(0,o.kt)("strong",{parentName:"p"},"JavaScript"),". HTML defines the structure of the page, and the content. CSS allows you to change how the page looks and make it look fancy. JavaScript is a programming language that runs in the browser and allows you to make pages interactive or load extra content."),(0,o.kt)("ol",null,(0,o.kt)("li",{parentName:"ol"},"What request verb is used to retrieve page content?")),(0,o.kt)("p",null,(0,o.kt)("inlineCode",{parentName:"p"},"GET")),(0,o.kt)("ol",{start:2},(0,o.kt)("li",{parentName:"ol"},"What port do web servers normally listen on?")),(0,o.kt)("p",null,(0,o.kt)("inlineCode",{parentName:"p"},"80")),(0,o.kt)("ol",{start:3},(0,o.kt)("li",{parentName:"ol"},"What's responsible for making websites look fancy?")),(0,o.kt)("p",null,(0,o.kt)("inlineCode",{parentName:"p"},"CSS")),(0,o.kt)("h2",{id:"task-3-more-http---verbs-and-request-formats"},"Task 3 More HTTP - Verbs and request formats"),(0,o.kt)("p",null,(0,o.kt)("strong",{parentName:"p"},"Requests")),(0,o.kt)("p",null,'There are 9 different HTTP "verbs", also known as methods. Each one has a different function. We\'ve mentioned GET requests already, these are used to retrieve content.'),(0,o.kt)("p",null,"POST requests are used to send data to a web server, like adding a comment or performing a login."),(0,o.kt)("p",null,"There are several more verbs, but these aren't as commonly used for most web servers."),(0,o.kt)("p",null,"A HTTP request can be broken down into parts. The first line is a verb and a path for the server, such as ",(0,o.kt)("inlineCode",{parentName:"p"},"GET /index.html")),(0,o.kt)("p",null,"The next section is headers, which give the web server more information about your request. Importantly, cookies are sent in the request headers, more on those later."),(0,o.kt)("p",null,"Finally, body of the request. For POST requests, this is the content that's sent to the server. For GET requests, a body is allowed but will mostly be ignored by the server."),(0,o.kt)("p",null,"Here's an example for a GET request retrieving a simple JS file:"),(0,o.kt)("pre",null,(0,o.kt)("code",{parentName:"pre"},"GET /main.js HTTP/1.1\nHost: 192.168.170.129:8081\nConnection: keep-alive\nUser-Agent: Mozilla/5.0 (Windows NT 10.0; Win64; x64) AppleWebKit/537.36 (KHTML, like Gecko) Chrome/80.0.3987.122 Safari/537.36\nAccept: */*\nReferer: http://192.168.170.129:8081/\nAccept-Encoding: gzip, deflate\nAccept-Language: en-GB,en-US;q=0.9,en;q=0.8\n")),(0,o.kt)("p",null,"From the headers, you can tell what I performed the request from (Chrome version 80, from Windows 10). This is useful for forensics and analysing packet captures."),(0,o.kt)("p",null,(0,o.kt)("strong",{parentName:"p"},"Responses")),(0,o.kt)("p",null,"The server should reply with a response. The response follows a similar structure to the request, but the first line describes the status rather than a verb and a path.\nThe status will normally be a code, you're probably already familiar with 404: Not found."),(0,o.kt)("p",null,"A basic breakdown of the status codes is:"),(0,o.kt)("ul",null,(0,o.kt)("li",{parentName:"ul"},"100-199: Information"),(0,o.kt)("li",{parentName:"ul"},'200-299: Successes (200 OK is the "normal" response for a GET)'),(0,o.kt)("li",{parentName:"ul"},"300-399: Redirects (the information you want is elsewhere)"),(0,o.kt)("li",{parentName:"ul"},"400-499: Client errors (You did something wrong, like asking for something that doesn't exist)"),(0,o.kt)("li",{parentName:"ul"},"500-599: Server errors (The server tried, but something went wrong on their side)")),(0,o.kt)("p",null,"You can find more information about these here: ",(0,o.kt)("a",{parentName:"p",href:"https://developer.mozilla.org/en-US/docs/Web/HTTP/Status"},"https://developer.mozilla.org/en-US/docs/Web/HTTP/Status")),(0,o.kt)("p",null,"Response headers can be very important. They can often tell you something about the web server sending them, or give you cookies that may prove useful later on."),(0,o.kt)("p",null,"The response will also have a body. For GET requests, this is normally web content or information such as JSON. For POST requests, it may be a status message or similar."),(0,o.kt)("p",null,"Here's a response to the GET request shown above:"),(0,o.kt)("pre",null,(0,o.kt)("code",{parentName:"pre"},"HTTP/1.1 200 OK\nAccept-Ranges: bytes\nContent-Length: 28\nContent-Type: application/javascript; charset=utf-8\nLast-Modified: Wed, 12 Feb 2020 12:51:44 GMT\nDate: Thu, 27 Feb 2020 21:47:30 GMT\n")),(0,o.kt)("pre",null,(0,o.kt)("code",{parentName:"pre",className:"language-js"},'console.log("Hello, World!")\n')),(0,o.kt)("ol",null,(0,o.kt)("li",{parentName:"ol"},"What verb would be used for a login?")),(0,o.kt)("p",null,(0,o.kt)("inlineCode",{parentName:"p"},"POST")),(0,o.kt)("ol",{start:2},(0,o.kt)("li",{parentName:"ol"},"What verb would be used to see your bank balance once you're logged in?")),(0,o.kt)("p",null,(0,o.kt)("inlineCode",{parentName:"p"},"GET")),(0,o.kt)("ol",{start:3},(0,o.kt)("li",{parentName:"ol"},"Does the body of a GET request matter? Yea/Nay")),(0,o.kt)("p",null,(0,o.kt)("inlineCode",{parentName:"p"},"Nay")),(0,o.kt)("ol",{start:4},(0,o.kt)("li",{parentName:"ol"},"What's the status code for \"I'm a teapot\"?")),(0,o.kt)("p",null,(0,o.kt)("inlineCode",{parentName:"p"},"418")),(0,o.kt)("ol",{start:5},(0,o.kt)("li",{parentName:"ol"},"What status code will you get if you need to authenticate to access some content, and you're unauthenticated?")),(0,o.kt)("p",null,(0,o.kt)("inlineCode",{parentName:"p"},"401")),(0,o.kt)("h2",{id:"task-4-cookies-tasty"},"Task 4 Cookies, tasty!"),(0,o.kt)("p",null,(0,o.kt)("strong",{parentName:"p"},"What are cookies?")),(0,o.kt)("p",null,"Cookies are small bits of data that are stored in your browser. ",(0,o.kt)("strong",{parentName:"p"},"Each browser will store them separately, so cookies in Chrome won't be available in Firefox"),". They have a huge number of uses, but the most common are either session management or advertising (tracking cookies). Cookies are normally sent with every HTTP request made to a server."),(0,o.kt)("p",null,(0,o.kt)("strong",{parentName:"p"},"Why Cookies?")),(0,o.kt)("p",null,"Because HTTP is stateless (Each request is independent and no state is tracked internally), cookies are used to keep track of this. They allow sites to keep track of data like what items you have in your shopping cart, who you are, what you've done on the website and more."),(0,o.kt)("p",null,"Cookies can be broken down into several parts. Cookies have a name, a value, an expiry date and a path. The name identifies the cookie, the value is where data is stored, the expiry date is when the browser will get rid of the cookie automatically and the path determines what requests the cookie will be sent with. Cookies are normally only sent with requests to the site that set them (Weird things happen with advertising/tracking)."),(0,o.kt)("p",null,'The server is normally what sets cookies, and these come in the response headers ("Set-Cookie"). Alternatively, these can be set from JavaScript inside your browser.'),(0,o.kt)("p",null,(0,o.kt)("strong",{parentName:"p"},"Using cookies")),(0,o.kt)("p",null,"When you log in to a web application, normally you are given a Session Token. This allows the web server to identify your requests from someone else's. Stealing someone else's session token can often allow you to impersonate them."),(0,o.kt)("p",null,(0,o.kt)("strong",{parentName:"p"},"Manipulating cookies")),(0,o.kt)("p",null,"Using your browser's developer tools, you can view and modify cookies. In Firefox, you can open the dev tools with F12. In the Storage tab, you can see cookies that the website has set. There's also a \"+\" button to allow you to create your own cookies which will come in handy in a minute. You can modify all cookies that you can see in this panel, as well as adding more."),(0,o.kt)("p",null,(0,o.kt)("strong",{parentName:"p"},"Alternatives - useful to know")),(0,o.kt)("p",null,"Slowly, for some uses, LocalStorage and SessionStorage are used instead. This has a similar functionality but isn't sent with HTTP requests by default. These are HTML5 features."),(0,o.kt)("p",null,(0,o.kt)("strong",{parentName:"p"},"More on cookies")),(0,o.kt)("p",null,(0,o.kt)("a",{parentName:"p",href:"https://developer.mozilla.org/en-US/docs/Web/HTTP/Cookies"},"https://developer.mozilla.org/en-US/docs/Web/HTTP/Cookies")),(0,o.kt)("ol",null,(0,o.kt)("li",{parentName:"ol"},"Read and try and understand this information. Check out the link for extra information")),(0,o.kt)("p",null,(0,o.kt)("inlineCode",{parentName:"p"},"No answer needed")),(0,o.kt)("h2",{id:"task-5-mini-ctf"},"Task 5 Mini CTF"),(0,o.kt)("p",null,"Time to put what you've learnt to use!"),(0,o.kt)("p",null,(0,o.kt)("strong",{parentName:"p"},"Making HTTP requests")),(0,o.kt)("p",null,"You can make HTTP requests in many ways, including without browsers! For CTFs, you'll sometimes need to use cURL or a programming language as this allows you to automate repetitive tasks."),(0,o.kt)("p",null,(0,o.kt)("strong",{parentName:"p"},"Intro to cURL")),(0,o.kt)("p",null,"By default, cURL will perform GET requests on whatever URL you supply it, such as:"),(0,o.kt)("p",null,(0,o.kt)("inlineCode",{parentName:"p"},"curl https://tryhackme.com")),(0,o.kt)("p",null,"This would retrieve the main page for tryhackme with a GET request. Using command line flags for cURL, we can do a lot more than just GET content. The -X flag allows us to specify the request type, eg -X POST. You can specify the data to POST with --data, which will default to plain text data. It's worth mentioning cURL does not store cookies, and you have to manually specify any cookies and values that you would like to send with your request. If you want to send cookies from cURL, you can look up how to do this."),(0,o.kt)("p",null,"Remember, cookies are not shared between different browsers (I'm counting cURL as a browser here)."),(0,o.kt)("p",null,(0,o.kt)("strong",{parentName:"p"},"Tasks")),(0,o.kt)("p",null,"There's a web server running on http://MACHINE_IP:8081. Connect to it and get the flags!"),(0,o.kt)("ul",null,(0,o.kt)("li",{parentName:"ul"},"GET request. Make a GET request to the web server with path /ctf/get"),(0,o.kt)("li",{parentName:"ul"},'POST request. Make a POST request with the body "flag_please" to /ctf/post'),(0,o.kt)("li",{parentName:"ul"},"Get a cookie. Make a GET request to /ctf/getcookie and check the cookie the server gives you"),(0,o.kt)("li",{parentName:"ul"},'Set a cookie. Set a cookie with name "flagpls" and value "flagpls" in your devtools and make a GET request to /ctf/sendcookie')),(0,o.kt)("ol",null,(0,o.kt)("li",{parentName:"ol"},"What's the GET flag?")),(0,o.kt)("pre",null,(0,o.kt)("code",{parentName:"pre"},"kali@kali:~/CTFs/tryhackme/Web Fundamentals$ curl http://10.10.72.117:8081/ctf/get -v\n*   Trying 10.10.72.117:8081...\n* Connected to 10.10.72.117 (10.10.72.117) port 8081 (#0)\n> GET /ctf/get HTTP/1.1\n> Host: 10.10.72.117:8081\n> User-Agent: curl/7.72.0\n> Accept: */*\n> \n* Mark bundle as not supporting multiuse\n< HTTP/1.1 200 OK\n< Date: Fri, 09 Oct 2020 22:39:06 GMT\n< Content-Length: 37\n< Content-Type: text/plain; charset=utf-8\n< \n* Connection #0 to host 10.10.72.117 left intact\nthm{162520bec925bd7979e9ae65a725f99f}\n")),(0,o.kt)("p",null,(0,o.kt)("inlineCode",{parentName:"p"},"thm{162520bec925bd7979e9ae65a725f99f}")),(0,o.kt)("ol",{start:2},(0,o.kt)("li",{parentName:"ol"},"What's the POST flag?")),(0,o.kt)("pre",null,(0,o.kt)("code",{parentName:"pre"},'kali@kali:~/CTFs/tryhackme/Web Fundamentals$ curl http://10.10.72.117:8081/ctf/post -d "flag_please" -v\n*   Trying 10.10.72.117:8081...\n* Connected to 10.10.72.117 (10.10.72.117) port 8081 (#0)\n> POST /ctf/post HTTP/1.1\n> Host: 10.10.72.117:8081\n> User-Agent: curl/7.72.0\n> Accept: */*\n> Content-Length: 11\n> Content-Type: application/x-www-form-urlencoded\n> \n* upload completely sent off: 11 out of 11 bytes\n* Mark bundle as not supporting multiuse\n< HTTP/1.1 200 OK\n< Date: Fri, 09 Oct 2020 22:41:48 GMT\n< Content-Length: 37\n< Content-Type: text/plain; charset=utf-8\n< \n* Connection #0 to host 10.10.72.117 left intact\nthm{3517c902e22def9c6e09b99a9040ba09}\n')),(0,o.kt)("p",null,(0,o.kt)("inlineCode",{parentName:"p"},"thm{3517c902e22def9c6e09b99a9040ba09}")),(0,o.kt)("ol",{start:3},(0,o.kt)("li",{parentName:"ol"},'What\'s the "Get a cookie" flag?')),(0,o.kt)("pre",null,(0,o.kt)("code",{parentName:"pre"},"kali@kali:~/CTFs/tryhackme/Web Fundamentals$ curl -v --cookie 'flagpls=flagpls' 'http://10.10.72.117:8081/ctf/getcookie'\n*   Trying 10.10.72.117:8081...\n* Connected to 10.10.72.117 (10.10.72.117) port 8081 (#0)\n> GET /ctf/getcookie HTTP/1.1\n> Host: 10.10.72.117:8081\n> User-Agent: curl/7.72.0\n> Accept: */*\n> Cookie: flagpls=flagpls\n> \n* Mark bundle as not supporting multiuse\n< HTTP/1.1 200 OK\n< Set-Cookie: flag=thm{91b1ac2606f36b935f465558213d7ebd}; Path=/\n< Date: Fri, 09 Oct 2020 22:47:05 GMT\n< Content-Length: 19\n< Content-Type: text/plain; charset=utf-8\n< \n* Connection #0 to host 10.10.72.117 left intact\nCheck your cookies!\n")),(0,o.kt)("p",null,(0,o.kt)("inlineCode",{parentName:"p"},"thm{91b1ac2606f36b935f465558213d7ebd}")),(0,o.kt)("ol",{start:4},(0,o.kt)("li",{parentName:"ol"},'What\'s the "Set a cookie" flag?')),(0,o.kt)("pre",null,(0,o.kt)("code",{parentName:"pre"},"kali@kali:~/CTFs/tryhackme/Web Fundamentals$ curl -c - -v --cookie 'flagpls=flagpls' 'http://10.10.72.117:8081/ctf/sendcookie'\n*   Trying 10.10.72.117:8081...\n* Connected to 10.10.72.117 (10.10.72.117) port 8081 (#0)\n> GET /ctf/sendcookie HTTP/1.1\n> Host: 10.10.72.117:8081\n> User-Agent: curl/7.72.0\n> Accept: */*\n> Cookie: flagpls=flagpls\n> \n* Mark bundle as not supporting multiuse\n< HTTP/1.1 200 OK\n< Date: Fri, 09 Oct 2020 22:49:56 GMT\n< Content-Length: 37\n< Content-Type: text/plain; charset=utf-8\n< \n* Connection #0 to host 10.10.72.117 left intact\nthm{c10b5cb7546f359d19c747db2d0f47b3}# Netscape HTTP Cookie File\n# https://curl.haxx.se/docs/http-cookies.html\n# This file was generated by libcurl! Edit at your own risk.\n")),(0,o.kt)("p",null,(0,o.kt)("inlineCode",{parentName:"p"},"thm{c10b5cb7546f359d19c747db2d0f47b3}")))}h.isMDXComponent=!0}}]);