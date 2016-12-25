{% assign author = site.data.authors | where: "id", page.author | first %}

{{ author.name }}
