---
layout: default
---

{% assign author = site.data.authors | where: "id", page.author | first %}

<header class="page-header">
  <h1 class="page-title">Author: {{ author.name }}</h1>
</header>

{{ author.bio | markdownify }}

{% for post in site.posts %}
{% if post.author == author.id %}
{% include post-article.html page=post %}
{% endif %}
{% endfor %}
