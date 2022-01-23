# Repository for Jekyll on Github website https://floriancourgey.github.io/unofficialacc

[![](https://travis-ci.com/floriancourgey/unofficialacc.svg?branch=master)](https://travis-ci.com/floriancourgey/unofficialacc)
[![StackShare](https://img.shields.io/badge/tech-stack-0690fa.svg?style=flat)](https://stackshare.io/floriancourgey/unofficialacc)

## Install & run
```console
$ docker-compose up # Server address: http://127.0.0.1:4000/
# docker exec bash
$ bundle install

```

## Create a post
```bash
$ touch _posts/YYYY-mm-dd-slug-here.md
```

```markdown
---
title: New article
categories: [prestashop,google,opensource,adobe campaign]
---
Excerpt here...
<p class="text-center">🐍👑🌍</p>
<!--more-->
**bold** *italic*  ~~strikethrough~~
## Use h2 for each section
![todo](/assets/images/2019/01/image.png)
```

Video:
```html
<div class="text-center">
  <video autoplay loop muted playsinline height="250">
    <source src="/assets/images/2018/12/overthewire-natas12-php-injection.mp4" type="video/mp4" />
  </video>
</div>
```

Markdown reference
[https://guides.github.com/features/mastering-markdown/#examples](https://guides.github.com/features/mastering-markdown/#examples)

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
