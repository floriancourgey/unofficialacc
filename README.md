# Repository for Jekyll on Github website https://floriancourgey.github.io/unofficialacc

[![](https://travis-ci.com/floriancourgey/unofficialacc.svg?branch=master)](https://travis-ci.com/floriancourgey/unofficialacc)
[![StackShare](https://img.shields.io/badge/tech-stack-0690fa.svg?style=flat)](https://stackshare.io/floriancourgey/unofficialacc)

## Install & run
```console
$ bundle install
$ bundle exec jekyll serve --watch --baseurl ""

```

## Create a package
```bash
$ touch _package/unofficialacc-title.md
```

```markdown
---
title: New Package
download_link: https://github.com/floriancourgey/unofficialacc/releases/download/unofficialacc-xxx-X.Y.Z/unofficialacc-xxx-X.Y.Z.xml
author: XXX
release_name: unofficialacc-xxx
created_at: 20YY-MM-DD
updated_at: 20YY-MM-DD
last_version: X.Y.Z
short_description: Package to xxx and yyy
entities:
  - option xxx
  - schema yyy
---
Excerpt here...
<!--more-->
## Demo
![]({{ site.baseurl }}/assets/unofficialacc-title/unofficialacc-title.jpg)
## Usage
## Installation
## Pre-requisites
```

## Update Algolia index
```bash
$ echo 'my_algolia_key' > _algolia_api_key
$ bundle install --gemfile=Gemfile.dev
$ bundle exec jekyll algolia
```

## htmlproofer
```bash
$ htmlproofer --allow_hash_href --empty_alt_ignore --assume_extension --disable_external ./_site &> h
tmlproofer/htmlproofer.log
```

## Jekyll on Github
- [Default `_config.yml`](https://help.github.com/articles/configuring-jekyll/)
- [Allowed plugins](https://help.github.com/articles/configuring-jekyll-plugins/)

## Changelog
- 2022 01 23 init

## Useful links
- https://cloudconvert.com
- https://digital-forensics.sans.org/media/hex_file_and_regex_cheat_sheet.pdf
