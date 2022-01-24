---
layout: page
title: Authors
---

<ul>
    {% for author in site.authors %}
        <li>
            <a href="{{ author.url | relative_url }}">{{ author.name }}</a>
        </li>
    {% endfor %}
</ul>
