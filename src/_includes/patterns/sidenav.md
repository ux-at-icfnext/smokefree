{% assign list = collections[tags] | sort: "title" %}

<h3><a href="/library/{{ tags }}">{{ tags | capitalize }}</a></h3>
<div class="margin-bottom-4 tablet:margin-bottom-0">
<nav aria-label="Side navigation">
<ul class="usa-sidenav">
{% for l in list  %}
<li><a href="{{ l.url }}"
{% if page.url == l.url %} class="usa-current" {% endif %}>{{ l.data.title }}</a></li>
{% endfor %}
</ul>
</nav>
</div>