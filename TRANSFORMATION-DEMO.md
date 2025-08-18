## Docusaurus to Hugo Transformation Demonstration

### Original Docusaurus Format:
```yaml
---
layout: post
title: "Academy "
lang: en
categories:
  - writeups
tags:
  - security
  - writeups
  - htb
  - pe
  - linux
  - web
  - php
  - laravel
date: 2021/02/28 22:31:00
thumbnail: /img/HackTheBox/academy.png
toc: true
---
```

### Transformed Hugo Format:
```toml
+++
title = "Academy"
date = 2021-02-28T22:31:00Z
author = "s4ch"
description = "Academy HackTheBox writeup - Easy Linux machine featuring Laravel RCE and privilege escalation"
summary = "Academy is an easy Linux machine on HackTheBox involving Laravel application exploitation, database credential reuse, and sudo privilege escalation through composer."
slug = "academy"
draft = false

categories = ["writeups"]
series = ["HackTheBox"]
tags = ["ctf", "hackthebox", "penetration-testing", "writeup", "security", "htb", "pe", "linux", "web", "php", "laravel"]

difficulty = "Easy"
platform = "HackTheBox"
os = "Linux"
points = "20"
release_date = "2021-02-28"

[cover]
    image = "academy.png"
    alt = "Academy HackTheBox Machine"
    caption = "Academy - Easy Linux Machine"
    relative = true

ShowReadingTime = true
ShowWordCount = true
showtoc = true
tocopen = false
+++
```

### Image Path Transformations:
- **Before**: `![Academy](/img/HackTheBox/academy.png)`
- **After**: `![Academy](/writeups/hackthebox/academy/academy.png)`

### Key Transformations Applied:

1. **Front matter delimiters**: `---` → `+++`
2. **Format**: YAML → TOML
3. **Title**: Cleaned quotes and trailing spaces
4. **Date**: `2021/02/28 22:31:00` → `2021-02-28T22:31:00Z`
5. **Categories/Tags**: Array format adapted to TOML
6. **Thumbnail**: `thumbnail: /img/...` → `[cover]` block with `relative = true`
7. **TOC**: `toc: true` → `showtoc = true`
8. **Added Hugo fields**: `author`, `description`, `summary`, `slug`, `draft`
9. **Added machine metadata**: `difficulty`, `platform`, `os`, `points`, `release_date`
10. **Image paths**: `/img/HackTheBox/academy.png` → `/writeups/hackthebox/academy/academy.png`

The script preserves all Markdown content while only transforming front matter and image paths as specified.
