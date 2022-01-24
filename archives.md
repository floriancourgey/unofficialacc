---
layout: page
title: Archives
---

<div class="home">
  <h1 class="page-heading">{{ site.packages | size }} Packages</h1>

  {%- for package in site.packages -%}
  <div class="card shadow-sm mb-4 bg-white rounded">
    <div class="card-body">
      {%- assign date_format = site.minima.date_format | default: "%b %-d, %Y" -%}
      <a class="post-link" href="{{ package.url | relative_url }}">
        <span class="post-meta">{{ package.date | date: date_format }}</span>
        <h3>
            {{ package.title | escape }}
        </h3>
      </a>
      {%- if package.excerpt -%}
        {% assign length = package.excerpt | size %}
        {% if package.excerpt.size > 20 %}
          {{ package.excerpt | truncatewords: 30 }}
        {%- endif -%}
      {%- endif -%}
      <div class="text-right">
        <a href="{{ package.url | relative_url }}" class="card-link">Read more</a>
      </div>
    </div>
  </div>
  {%- endfor -%}

  {% if paginator.total_pages > 1 %}
  <nav class="d-flex justify-content-center">
    <ul class="pagination mx-0">
      <li class="page-item {% unless paginator.next_page %}disabled{% endunless %}">
        <a class="page-link" href="{{ paginator.next_page_path | relative_url }}">
          &laquo; Prev
        </a>
      </li>

      {% for reversed_page in (1..paginator.total_pages) %}
      {% assign page = paginator.total_pages | plus: 1 | minus: reversed_page %}
        <li class="page-item {% if page == paginator.page %}disabled{% endif %}">
          {% if page == 1 %}
            {% assign href = paginator.previous_page_path | relative_url %}
          {% else %}
            {% assign href = site.paginate_path | relative_url | replace: ':num', page %}
          {% endif %}
          <a class="page-link" href="{{ href }}">
            {{ page }}
          </a>
        </li>
      {% endfor %}

      <li class="page-item {% unless paginator.previous_page %}disabled{% endunless %}">
        <a class="page-link" href="{{ paginator.previous_page_path | relative_url }}">
          Next &raquo;
        </a>
      </li>
    </ul>
  </nav>
  {% endif %}

</div>
