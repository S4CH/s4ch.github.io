+++
title = '{{ replace .Name "-" " " | title }}'
date = {{ .Date }}
author = 's4ch'
description = ''
summary = ''
slug = ''
draft = true

categories = [
    'writeups'
]
series = [
    '{{ if eq .Section "hackthebox" }}HackTheBox{{ else if eq .Section "tryhackme" }}TryHackMe{{ else }}CTF{{ end }}'
]
tags = [
    'ctf',
    '{{ if eq .Section "hackthebox" }}hackthebox{{ else if eq .Section "tryhackme" }}tryhackme{{ else }}security{{ end }}',
    'penetration-testing',
    'writeup'
]

# Machine/Room Information
difficulty = ''  # Easy, Medium, Hard, Insane (HTB) or Beginner, Easy, Medium, Hard (THM)
platform = '{{ if eq .Section "hackthebox" }}HackTheBox{{ else if eq .Section "tryhackme" }}TryHackMe{{ else }}Unknown{{ end }}'
os = ''  # Linux, Windows, Web, etc.
points = ''  # Points or N/A
release_date = ''

[cover]
    image = ""
    alt = ""
    caption = ""
    relative = true

# Show specific elements
ShowReadingTime = true
ShowWordCount = true
showtoc = true
tocopen = false
+++

## Machine/Room Information

- **Name:** {{ replace .Name "-" " " | title }}
- **Platform:** {{ if eq .Section "hackthebox" }}HackTheBox{{ else if eq .Section "tryhackme" }}TryHackMe{{ else }}Unknown{{ end }}
- **Difficulty:** [FILL IN]
- **OS:** [FILL IN]
- **Points:** [FILL IN]
- **Release Date:** [FILL IN]

## Overview

[Brief description of the machine/room and what you'll learn]

## Enumeration

### Port Scanning

```bash
# Nmap scan command and results
```

### Service Enumeration

[Detail the services found and initial enumeration]

## Initial Access

[Describe how you gained initial access to the system]

## Privilege Escalation

[Describe the privilege escalation process]

## Lessons Learned

[What did you learn from this challenge?]

## Conclusion

[Summary and final thoughts]

---

*This writeup is for educational purposes only. Always ensure you have proper authorization before testing any techniques.*
