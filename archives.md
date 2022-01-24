---
layout: page
title: Archives
---

<div class="home">
  <h1 class="page-heading">{{ site.packages | size }} Packages</h1>

  <div class="row">
    {%- for package in site.packages -%}
      <div class="col-md-3">
        {% include package-card.html package="package" %}
      </div>
    {%- endfor -%}
  </div>

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
