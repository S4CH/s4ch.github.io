"use strict";(self.webpackChunkcyfun_me=self.webpackChunkcyfun_me||[]).push([[1834],{3905:(e,t,a)=>{a.d(t,{Zo:()=>p,kt:()=>k});var n=a(67294);function s(e,t,a){return t in e?Object.defineProperty(e,t,{value:a,enumerable:!0,configurable:!0,writable:!0}):e[t]=a,e}function o(e,t){var a=Object.keys(e);if(Object.getOwnPropertySymbols){var n=Object.getOwnPropertySymbols(e);t&&(n=n.filter((function(t){return Object.getOwnPropertyDescriptor(e,t).enumerable}))),a.push.apply(a,n)}return a}function r(e){for(var t=1;t<arguments.length;t++){var a=null!=arguments[t]?arguments[t]:{};t%2?o(Object(a),!0).forEach((function(t){s(e,t,a[t])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(a)):o(Object(a)).forEach((function(t){Object.defineProperty(e,t,Object.getOwnPropertyDescriptor(a,t))}))}return e}function i(e,t){if(null==e)return{};var a,n,s=function(e,t){if(null==e)return{};var a,n,s={},o=Object.keys(e);for(n=0;n<o.length;n++)a=o[n],t.indexOf(a)>=0||(s[a]=e[a]);return s}(e,t);if(Object.getOwnPropertySymbols){var o=Object.getOwnPropertySymbols(e);for(n=0;n<o.length;n++)a=o[n],t.indexOf(a)>=0||Object.prototype.propertyIsEnumerable.call(e,a)&&(s[a]=e[a])}return s}var l=n.createContext({}),h=function(e){var t=n.useContext(l),a=t;return e&&(a="function"==typeof e?e(t):r(r({},t),e)),a},p=function(e){var t=h(e.components);return n.createElement(l.Provider,{value:t},e.children)},d="mdxType",u={inlineCode:"code",wrapper:function(e){var t=e.children;return n.createElement(n.Fragment,{},t)}},c=n.forwardRef((function(e,t){var a=e.components,s=e.mdxType,o=e.originalType,l=e.parentName,p=i(e,["components","mdxType","originalType","parentName"]),d=h(a),c=s,k=d["".concat(l,".").concat(c)]||d[c]||u[c]||o;return a?n.createElement(k,r(r({ref:t},p),{},{components:a})):n.createElement(k,r({ref:t},p))}));function k(e,t){var a=arguments,s=t&&t.mdxType;if("string"==typeof e||s){var o=a.length,r=new Array(o);r[0]=c;var i={};for(var l in t)hasOwnProperty.call(t,l)&&(i[l]=t[l]);i.originalType=e,i[d]="string"==typeof e?e:s,r[1]=i;for(var h=2;h<o;h++)r[h]=a[h];return n.createElement.apply(null,r)}return n.createElement.apply(null,a)}c.displayName="MDXCreateElement"},813:(e,t,a)=>{a.r(t),a.d(t,{assets:()=>l,contentTitle:()=>r,default:()=>u,frontMatter:()=>o,metadata:()=>i,toc:()=>h});var n=a(87462),s=(a(67294),a(3905));const o={},r="Hashing - Crypto 101",i={unversionedId:"Tryhackme/Hashing - Crypto 101/Hashing - Crypto 101",id:"Tryhackme/Hashing - Crypto 101/Hashing - Crypto 101",title:"Hashing - Crypto 101",description:"An introduction to Hashing, as part of a series on crypto",source:"@site/writeups/Tryhackme/Hashing - Crypto 101/Hashing - Crypto 101.md",sourceDirName:"Tryhackme/Hashing - Crypto 101",slug:"/Tryhackme/Hashing - Crypto 101/",permalink:"/writeups/Tryhackme/Hashing - Crypto 101/",draft:!1,tags:[],version:"current",frontMatter:{},sidebar:"tutorialSidebar",previous:{title:"harder",permalink:"/writeups/Tryhackme/Harder/"},next:{title:"HaskHell",permalink:"/writeups/Tryhackme/HaskHell/"}},l={},h=[{value:"\ud83d\udca2 We will cover  the topics",id:"-we-will-cover--the-topics",level:2},{value:"Task 1 Key Terms",id:"task-1-key-terms",level:2},{value:"Task 2 What is a hash function?",id:"task-2-what-is-a-hash-function",level:2},{value:"Task 3 Uses for hashing",id:"task-3-uses-for-hashing",level:2},{value:"Task 4 Recognising password hashes",id:"task-4-recognising-password-hashes",level:2},{value:"Task 5 Password Cracking",id:"task-5-password-cracking",level:2},{value:"Task 6 Hashing for integrity checking",id:"task-6-hashing-for-integrity-checking",level:2}],p={toc:h},d="wrapper";function u(e){let{components:t,...a}=e;return(0,s.kt)(d,(0,n.Z)({},p,a,{components:t,mdxType:"MDXLayout"}),(0,s.kt)("h1",{id:"hashing---crypto-101"},"Hashing - Crypto 101"),(0,s.kt)("p",null,"An introduction to Hashing, as part of a series on crypto"),(0,s.kt)("p",null,(0,s.kt)("a",{parentName:"p",href:"https://tryhackme.com/room/hashingcrypto101"},"Hashing - Crypto 101")),(0,s.kt)("h2",{id:"-we-will-cover--the-topics"},"\ud83d\udca2 We will cover  the topics"),(0,s.kt)("ul",null,(0,s.kt)("li",{parentName:"ul"},"Brute Forcing")),(0,s.kt)("hr",null),(0,s.kt)("h2",{id:"task-1-key-terms"},"Task 1 Key Terms"),(0,s.kt)("p",null,"Before we start, we need to get some jargon out of the way.\nRead these, and take in as much as you can. We'll expand on some of them later in the room."),(0,s.kt)("ul",null,(0,s.kt)("li",{parentName:"ul"},(0,s.kt)("strong",{parentName:"li"},"Plaintext")," - Data before encryption or hashing, often text but not always as it could be a photograph or other file instead."),(0,s.kt)("li",{parentName:"ul"},"Encoding - This is NOT a form of encryption, just a form of data representation like base64 or hexadecimal. Immediately reversible."),(0,s.kt)("li",{parentName:"ul"},'Hash - A hash is the output of a hash function. Hashing can also be used as a verb, "to hash", meaning to produce the hash value of some data.'),(0,s.kt)("li",{parentName:"ul"},"Brute force - Attacking cryptography by trying every different password or every different key"),(0,s.kt)("li",{parentName:"ul"},"Cryptanalysis - Attacking cryptography by finding a weakness in the underlying maths")),(0,s.kt)("p",null,"This room will likely involve some research. Get good at using search engines, it's crucial to infosec."),(0,s.kt)("ol",null,(0,s.kt)("li",{parentName:"ol"},"Read the words, and understand the meanings! Is base64 encryption or encoding?")),(0,s.kt)("p",null,(0,s.kt)("inlineCode",{parentName:"p"},"encoding")),(0,s.kt)("h2",{id:"task-2-what-is-a-hash-function"},"Task 2 What is a hash function?"),(0,s.kt)("p",null,"What's a hash function?"),(0,s.kt)("p",null,"Hash functions are quite different from encryption. There is no key, and it\u2019s meant to be impossible (or very very difficult) to go from the output back to the input."),(0,s.kt)("p",null,'A hash function takes some input data of any size, and creates a summary or "digest" of that data. The output is a fixed size. It\u2019s hard to predict what the output will be for any input and vice versa. Good hashing algorithms will be (relatively) fast to compute, and slow to reverse (Go from output and determine input). Any small change in the input data (even a single bit) should cause a large change in the output.'),(0,s.kt)("p",null,"The output of a hash function is normally raw bytes, which are then encoded. Common encodings for this are base 64 or hexadecimal. Decoding these won\u2019t give you anything useful."),(0,s.kt)("p",null,(0,s.kt)("strong",{parentName:"p"},"Why should I care?")),(0,s.kt)("p",null,"Hashing is used very often in cyber security. When you logged into TryHackMe, that used hashing to verify your password. When you logged into your computer, that also used hashing to verify your password. You interact indirectly with hashing more than you would think, mostly in the context of passwords."),(0,s.kt)("p",null,(0,s.kt)("strong",{parentName:"p"},"What's a hash collision?")),(0,s.kt)("p",null,"A hash collision is when 2 different inputs give the same output. Hash functions are designed to avoid this as best as they can, especially being able to engineer (create intentionally) a collision. Due to the pigeonhole effect, collisions are not avoidable. The pigeonhole effect is basically, there are a set number of different output values for the hash function, but you can give it any size input. As there are more inputs than outputs, some of the inputs must give the same output. If you have 128 pigeons and 96 pigeonholes, some of the pigeons are going to have to share."),(0,s.kt)("p",null,"MD5 and SHA1 have been attacked, and made technically insecure due to engineering hash collisions. However, no attack has yet given a collision in both algorithms at the same time so if you use the MD5 hash AND the SHA1 hash to compare, you will see they\u2019re different. The MD5 collision example is available from ",(0,s.kt)("a",{parentName:"p",href:"https://www.mscs.dal.ca/~selinger/md5collision/"},"https://www.mscs.dal.ca/~selinger/md5collision/")," and details of the SHA1 Collision are available from ",(0,s.kt)("a",{parentName:"p",href:"https://shattered.io/"},"https://shattered.io/"),". Due to these, you shouldn't trust either algorithm for hashing passwords or data."),(0,s.kt)("ol",null,(0,s.kt)("li",{parentName:"ol"},"What is the output size in bytes of the MD5 hash function?")),(0,s.kt)("p",null,(0,s.kt)("inlineCode",{parentName:"p"},"16")),(0,s.kt)("ol",{start:2},(0,s.kt)("li",{parentName:"ol"},"Can you avoid hash collisions? (Yea/Nay)")),(0,s.kt)("p",null,(0,s.kt)("inlineCode",{parentName:"p"},"Nay")),(0,s.kt)("ol",{start:3},(0,s.kt)("li",{parentName:"ol"},"If you have an 8 bit hash output, how many possible hashes are there?")),(0,s.kt)("p",null,(0,s.kt)("inlineCode",{parentName:"p"},"256")),(0,s.kt)("h2",{id:"task-3-uses-for-hashing"},"Task 3 Uses for hashing"),(0,s.kt)("p",null,(0,s.kt)("strong",{parentName:"p"},"What can we do with hashing?")),(0,s.kt)("p",null,"Hashing is used for 2 main purposes in Cyber Security. To verify integrity of data (More on that later), or for verifying passwords."),(0,s.kt)("p",null,(0,s.kt)("strong",{parentName:"p"},"Hashing for password verification")),(0,s.kt)("p",null,"Most webapps need to verify a user's password at some point. Storing these passwords in plain text would be bad. You've probably seen news stories about companies that have had their database leaked. Knowing some people, they use the same password for everything including their banking, so leaking these would be really really bad."),(0,s.kt)("p",null,"Quite a few data breaches have leaked plaintext passwords. You\u2019re probably familiar with \u201crockyou.txt\u201d on Kali as a password wordlist. This came from a company that made widgets for MySpace. They stored their passwords in plaintext and the company had a data breach. The txt file contains over 14 million passwords (although some are ",(0,s.kt)("em",{parentName:"p"},"unlikely")," to have been user passwords. Sort by length if you want to see what I mean)."),(0,s.kt)("p",null,"Adobe had a notable data breach that was slightly different. The passwords were encrypted, rather than hashed and the encryption that was used was not secure. This meant that the plaintext could be relatively quickly retrieved. If you want to read more about this breach, this post from Sophos is excellent: ",(0,s.kt)("a",{parentName:"p",href:"https://nakedsecurity.sophos.com/2013/11/04/anatomy-of-a-password-disaster-adobes-giant-sized-cryptographic-blunder/"},"https://nakedsecurity.sophos.com/2013/11/04/anatomy-of-a-password-disaster-adobes-giant-sized-cryptographic-blunder/")),(0,s.kt)("p",null,"Linkedin also had a data breach. Linkedin used SHA1 for password verification, which is quite quick to compute using GPUs."),(0,s.kt)("p",null,"You can't encrypt the passwords, as the key has to be stored somewhere. If someone gets the key, they can just decrypt the passwords."),(0,s.kt)("p",null,"This is where hashing comes in. What if, instead of storing the password, you just stored the hash of the password? This means you never have to store the user's password, and if your database was leaked then an attacker would have to crack each password to find out what the password was. That sounds fairly useful."),(0,s.kt)("p",null,'There\'s just one problem with this. What if two users have the same password? As a hash function will always turn the same input into the same output, you will store the same password hash for each user. That means if someone cracks that hash, they get into more than one account. It also means that someone can create a "Rainbow table" to break the hashes.'),(0,s.kt)("p",null,"A rainbow table is a lookup table of hashes to plaintexts, so you can quickly find out what password a user had just from the hash. A rainbow table trades time taken to crack a hash for hard disk space, but they do take time to create.\nHere's a quick example so you can try and understand what they're like."),(0,s.kt)("table",null,(0,s.kt)("thead",{parentName:"table"},(0,s.kt)("tr",{parentName:"thead"},(0,s.kt)("th",{parentName:"tr",align:null},"Hash"),(0,s.kt)("th",{parentName:"tr",align:null},"Password"))),(0,s.kt)("tbody",{parentName:"table"},(0,s.kt)("tr",{parentName:"tbody"},(0,s.kt)("td",{parentName:"tr",align:null},"02c75fb22c75b23dc963c7eb91a062cc"),(0,s.kt)("td",{parentName:"tr",align:null},"zxcvbnm")),(0,s.kt)("tr",{parentName:"tbody"},(0,s.kt)("td",{parentName:"tr",align:null},"b0baee9d279d34fa1dfd71aadb908c3f"),(0,s.kt)("td",{parentName:"tr",align:null},"11111")),(0,s.kt)("tr",{parentName:"tbody"},(0,s.kt)("td",{parentName:"tr",align:null},"c44a471bd78cc6c2fea32b9fe028d30a"),(0,s.kt)("td",{parentName:"tr",align:null},"asdfghjkl")),(0,s.kt)("tr",{parentName:"tbody"},(0,s.kt)("td",{parentName:"tr",align:null},"d0199f51d2728db6011945145a1b607a"),(0,s.kt)("td",{parentName:"tr",align:null},"basketball")),(0,s.kt)("tr",{parentName:"tbody"},(0,s.kt)("td",{parentName:"tr",align:null},"dcddb75469b4b4875094e14561e573d8"),(0,s.kt)("td",{parentName:"tr",align:null},"000000")),(0,s.kt)("tr",{parentName:"tbody"},(0,s.kt)("td",{parentName:"tr",align:null},"e10adc3949ba59abbe56e057f20f883e"),(0,s.kt)("td",{parentName:"tr",align:null},"123456")),(0,s.kt)("tr",{parentName:"tbody"},(0,s.kt)("td",{parentName:"tr",align:null},"e19d5cd5af0378da05f63f891c7467af"),(0,s.kt)("td",{parentName:"tr",align:null},"abcd1234")),(0,s.kt)("tr",{parentName:"tbody"},(0,s.kt)("td",{parentName:"tr",align:null},"e99a18c428cb38d5f260853678922e03"),(0,s.kt)("td",{parentName:"tr",align:null},"abc123")),(0,s.kt)("tr",{parentName:"tbody"},(0,s.kt)("td",{parentName:"tr",align:null},"fcea920f7412b5da7be0cf42b8c93759"),(0,s.kt)("td",{parentName:"tr",align:null},"1234567")))),(0,s.kt)("p",null,"Websites like Crackstation internally use HUGE rainbow tables to provide fast password cracking for hashes without salts. Doing a lookup in a sorted list of hashes is really quite fast, much much faster than trying to crack the hash."),(0,s.kt)("p",null,(0,s.kt)("strong",{parentName:"p"},"Protecting against rainbow tables")),(0,s.kt)("p",null,"To protect against rainbow tables, we add a salt to the passwords. The salt is randomly generated and stored in the database, unique to each user. In theory, you could use the same salt for all users but that means that duplicate passwords would still have the same hash, and a rainbow table could still be created specific passwords with that salt."),(0,s.kt)("p",null,"The salt is added to either the start or the end of the password before it\u2019s hashed, and this means that every user will have a different password hash even if they have the same password. Hash functions like bcrypt and sha512crypt handle this automatically. Salts don\u2019t need to be kept private."),(0,s.kt)("ol",null,(0,s.kt)("li",{parentName:"ol"},'Crack the hash "d0199f51d2728db6011945145a1b607a" using the rainbow table manually.')),(0,s.kt)("p",null,(0,s.kt)("inlineCode",{parentName:"p"},"basketball")),(0,s.kt)("ol",{start:2},(0,s.kt)("li",{parentName:"ol"},'Crack the hash "5b31f93c09ad1d065c0491b764d04933" using online tools')),(0,s.kt)("p",null,(0,s.kt)("a",{parentName:"p",href:"https://md5decrypt.net/"},"md5decrypt.net")),(0,s.kt)("p",null,(0,s.kt)("inlineCode",{parentName:"p"},"5b31f93c09ad1d065c0491b764d04933 : tryhackme")),(0,s.kt)("p",null,(0,s.kt)("inlineCode",{parentName:"p"},"tryhackme")),(0,s.kt)("ol",{start:3},(0,s.kt)("li",{parentName:"ol"},"Should you encrypt passwords? Yea/Nay")),(0,s.kt)("p",null,(0,s.kt)("inlineCode",{parentName:"p"},"Nay")),(0,s.kt)("h2",{id:"task-4-recognising-password-hashes"},"Task 4 Recognising password hashes"),(0,s.kt)("p",null,"Automated hash recognition tools such as ",(0,s.kt)("a",{parentName:"p",href:"https://pypi.org/project/hashID/"},"https://pypi.org/project/hashID/")," exist, but they are unreliable for many formats. For hashes that have a prefix, the tools are reliable. Use a healthy combination of context and tools. If you found the hash in a web application database, it's more likely to be md5 than NTLM. Automated hash recognition tools often get these hash types mixed up, which highlights the importance of learning yourself."),(0,s.kt)("p",null,"Unix style password hashes are very easy to recognise, as they have a prefix. The prefix tells you the hashing algorithm used to generate the hash. The standard format is ",(0,s.kt)("inlineCode",{parentName:"p"},"$format$rounds$salt$hash"),"."),(0,s.kt)("p",null,"Windows passwords are hashed using NTLM, which is a variant of md4. They're visually identical to md4 and md5 hashes, so it's very important to use context to work out the hash type."),(0,s.kt)("p",null,"On Linux, password hashes are stored in /etc/shadow. This file is normally only readable by root. They used to be stored in /etc/passwd, and were readable by everyone."),(0,s.kt)("p",null,"On Windows, password hashes are stored in the SAM. Windows tries to prevent normal users from dumping them, but tools like mimikatz exist for this. Importantly, the hashes found there are split into NT hashes and LM hashes."),(0,s.kt)("p",null,"Here's a quick table of the most Unix style password prefixes that you'll see."),(0,s.kt)("table",null,(0,s.kt)("thead",{parentName:"table"},(0,s.kt)("tr",{parentName:"thead"},(0,s.kt)("th",{parentName:"tr",align:null},"Prefix"),(0,s.kt)("th",{parentName:"tr",align:null},"Algorithm"))),(0,s.kt)("tbody",{parentName:"table"},(0,s.kt)("tr",{parentName:"tbody"},(0,s.kt)("td",{parentName:"tr",align:null},"$1$"),(0,s.kt)("td",{parentName:"tr",align:null},"md5crypt, used in Cisco stuff and older Linux/Unix systems")),(0,s.kt)("tr",{parentName:"tbody"},(0,s.kt)("td",{parentName:"tr",align:null},"$2$, $2a$, $2b$, $2x$, $2y$"),(0,s.kt)("td",{parentName:"tr",align:null},"Bcrypt (Popular for web applications)")),(0,s.kt)("tr",{parentName:"tbody"},(0,s.kt)("td",{parentName:"tr",align:null},"$6$"),(0,s.kt)("td",{parentName:"tr",align:null},"sha512crypt (Default for most Linux/Unix systems)")))),(0,s.kt)("p",null,"A great place to find more hash formats and password prefixes is the hashcat example page, available here: ",(0,s.kt)("a",{parentName:"p",href:"https://hashcat.net/wiki/doku.php?id=example_hashes"},"https://hashcat.net/wiki/doku.php?id=example_hashes"),"."),(0,s.kt)("p",null,"For other hash types, you'll normally need to go by length, encoding or some research into the application that generated them. Never underestimate the power of research."),(0,s.kt)("ol",null,(0,s.kt)("li",{parentName:"ol"},"How many rounds does sha512crypt ($6$) use by default?")),(0,s.kt)("p",null,(0,s.kt)("inlineCode",{parentName:"p"},"5000")),(0,s.kt)("ol",{start:2},(0,s.kt)("li",{parentName:"ol"},"What's the hashcat example hash (from the website) for Citrix Netscaler hashes?")),(0,s.kt)("p",null,(0,s.kt)("inlineCode",{parentName:"p"},"1765058016a22f1b4e076dccd1c3df4e8e5c0839ccded98ea")),(0,s.kt)("ol",{start:3},(0,s.kt)("li",{parentName:"ol"},"How long is a Windows NTLM hash, in characters?")),(0,s.kt)("p",null,(0,s.kt)("inlineCode",{parentName:"p"},"32")),(0,s.kt)("h2",{id:"task-5-password-cracking"},"Task 5 Password Cracking"),(0,s.kt)("p",null,"We've already mentioned rainbow tables as a method to crack hashes that don't have a salt, but what if there's a salt involved?"),(0,s.kt)("p",null,"You can't \"decrypt\" password hashes. They're not encrypted. You have to crack the hashes by hashing a large number of different inputs (often rockyou, these are the possible passwords), potentially adding the salt if there is one and comparing it to the target hash. Once it matches, you know what the password was. Tools like Hashcat and John the Ripper are normally used for this."),(0,s.kt)("p",null,(0,s.kt)("strong",{parentName:"p"},"Why crack on GPUs?")),(0,s.kt)("p",null,"Graphics cards have thousands of cores. Although they can\u2019t do the same sort of work that a CPU can, they are very good at some of the maths involved in hash functions. This means you can use a graphics card to crack most hash types much more quickly. Some hashing algorithms, notably bcrypt, are designed so that hashing on a GPU is about the same speed as hashing on a CPU which helps them resist cracking.\nCracking on VMs?"),(0,s.kt)("p",null,"It\u2019s worth mentioning that virtual machines normally don\u2019t have access to the host's graphics card(s) (You can set this up, but it\u2019s a lot of work). If you want to run hashcat, it\u2019s best to run it on your host (Windows builds are available on the website, run it from powershell). You can get Hashcat working with OpenCL in a VM, but the speeds will likely be much worse than cracking on your host. John the ripper uses CPU by default and as such, works in a VM out of the box although you may get better speeds running it on the host OS as it will have more threads and no overhead from running in a VM."),(0,s.kt)("p",null,"NEVER (I repeat, NEVER!) use --force for hashcat. It can lead to false positives (wrong passwords being given to you) and false negatives (skips over the correct hash)."),(0,s.kt)("p",null,"UPDATE: As of Kali 2020.2, hashcat 6.0 will run on the CPU without --force. I still recommend cracking on your host OS if you have a GPU, as it will be much much faster."),(0,s.kt)("p",null,(0,s.kt)("strong",{parentName:"p"},"Time to get cracking!")),(0,s.kt)("p",null,"I'll provide the hashes. Crack them. You can choose how. You'll need to use online tools, Hashcat, and/or John the Ripper. Remember the restrictions on online rainbow tables. Don't be afraid to use the hints. Rockyou or online tools should be enough to find all of these."),(0,s.kt)("ol",null,(0,s.kt)("li",{parentName:"ol"},"Crack this hash: $2a$06$7yoU3Ng8dHTXphAg913cyO6Bjs3K5lBnwq5FJyA6d01pMSrddr1ZG")),(0,s.kt)("pre",null,(0,s.kt)("code",{parentName:"pre"},"kali@kali:~/CTFs/tryhackme/Hashing - Crypto 101$ john hash1 -w=/usr/share/wordlists/rockyou.txt\nUsing default input encoding: UTF-8\nLoaded 1 password hash (bcrypt [Blowfish 32/64 X3])\nCost 1 (iteration count) is 64 for all loaded hashes\nWill run 4 OpenMP threads\nPress 'q' or Ctrl-C to abort, almost any other key for status\n85208520         (?)\n1g 0:00:00:06 DONE (2020-11-06 18:30) 0.1605g/s 2374p/s 2374c/s 2374C/s BRIANNA..puisor\nUse the \"--show\" option to display all of the cracked passwords reliably\nSession completed\n")),(0,s.kt)("p",null,(0,s.kt)("inlineCode",{parentName:"p"},"85208520")),(0,s.kt)("ol",{start:2},(0,s.kt)("li",{parentName:"ol"},"Crack this hash: 9eb7ee7f551d2f0ac684981bd1f1e2fa4a37590199636753efe614d4db30e8e1")),(0,s.kt)("pre",null,(0,s.kt)("code",{parentName:"pre"},"kali@kali:~/CTFs/tryhackme/Hashing - Crypto 101$ john hash2 -w=/usr/share/wordlists/rockyou.txt --format=Raw-SHA256\nUsing default input encoding: UTF-8\nLoaded 1 password hash (Raw-SHA256 [SHA256 256/256 AVX2 8x])\nWarning: poor OpenMP scalability for this hash type, consider --fork=4\nWill run 4 OpenMP threads\nPress 'q' or Ctrl-C to abort, almost any other key for status\nhalloween        (?)\n1g 0:00:00:00 DONE (2020-11-06 18:31) 14.28g/s 936228p/s 936228c/s 936228C/s 123456..sabrina7\nUse the \"--show --format=Raw-SHA256\" options to display all of the cracked passwords reliably\nSession completed\n")),(0,s.kt)("p",null,(0,s.kt)("inlineCode",{parentName:"p"},"halloween")),(0,s.kt)("ol",{start:3},(0,s.kt)("li",{parentName:"ol"},"Crack this hash: $6$GQXVvW4EuM$ehD6jWiMsfNorxy5SINsgdlxmAEl3.yif0/c3NqzGLa0P.S7KRDYjycw5bnYkF5ZtB8wQy8KnskuWQS3Yr1wQ0")),(0,s.kt)("pre",null,(0,s.kt)("code",{parentName:"pre"},"kali@kali:~/CTFs/tryhackme/Hashing - Crypto 101$ john hash3 -w=/usr/share/wordlists/rockyou.txt\nUsing default input encoding: UTF-8\nLoaded 1 password hash (sha512crypt, crypt(3) $6$ [SHA512 256/256 AVX2 4x])\nCost 1 (iteration count) is 5000 for all loaded hashes\nWill run 4 OpenMP threads\nPress 'q' or Ctrl-C to abort, almost any other key for status\nspaceman         (?)\n1g 0:00:00:03 DONE (2020-11-06 18:32) 0.2710g/s 5133p/s 5133c/s 5133C/s sweetgurl..playas\nUse the \"--show\" option to display all of the cracked passwords reliably\nSession completed\n")),(0,s.kt)("p",null,(0,s.kt)("inlineCode",{parentName:"p"},"spaceman")),(0,s.kt)("ol",{start:4},(0,s.kt)("li",{parentName:"ol"},"Bored of this yet? Crack this hash: b6b0d451bbf6fed658659a9e7e5598fe")),(0,s.kt)("p",null,(0,s.kt)("a",{parentName:"p",href:"https://md5hashing.net/hash/md5/b6b0d451bbf6fed658659a9e7e5598fe"},"https://md5hashing.net/")),(0,s.kt)("p",null,(0,s.kt)("inlineCode",{parentName:"p"},"funforyou")),(0,s.kt)("h2",{id:"task-6-hashing-for-integrity-checking"},"Task 6 Hashing for integrity checking"),(0,s.kt)("p",null,(0,s.kt)("strong",{parentName:"p"},"Integrity Checking")),(0,s.kt)("p",null,"Hashing can be used to check that files haven't been changed. If you put the same data in, you always get the same data out. If even a single bit changes, the hash will change a lot. This means you can use it to check that files haven't been modified or to make sure that they have downloaded correctly. You can also use hashing to find duplicate files, if two pictures have the same hash then they are the same picture."),(0,s.kt)("p",null,(0,s.kt)("strong",{parentName:"p"},"HMACs")),(0,s.kt)("p",null,"HMAC is a method of using a cryptographic hashing function to verify the authenticity and integrity of data. The TryHackMe VPN uses HMAC-SHA512 for message authentication, which you can see in the terminal output. A HMAC can be used to ensure that the person who created the HMAC is who they say they are (authenticity), and that the message hasn\u2019t been modified or corrupted (integrity). They use a secret key, and a hashing algorithm in order to produce a hash."),(0,s.kt)("ol",null,(0,s.kt)("li",{parentName:"ol"},"What's the SHA1 sum for the amd64 Kali 2019.4 ISO? ",(0,s.kt)("a",{parentName:"li",href:"https://cdimage.kali.org/kali-images/kali-2019.4/"},"https://cdimage.kali.org/kali-images/kali-2019.4/"))),(0,s.kt)("p",null,(0,s.kt)("inlineCode",{parentName:"p"},"186c5227e24ceb60deb711f1bdc34ad9f4718ff9")),(0,s.kt)("ol",{start:2},(0,s.kt)("li",{parentName:"ol"},"What's the hashcat mode number for HMAC-SHA512 (key = $pass)?")),(0,s.kt)("p",null,(0,s.kt)("inlineCode",{parentName:"p"},"1750")))}u.isMDXComponent=!0}}]);