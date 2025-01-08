
<!-- set grid columns -->
{% if card.grid %}{% assign grid = card.grid | prepend: "grid-col-" %}{% endif %}
{% if card.mobile %}{% assign grid-mobile = card.mobile | prepend: "mobile-lg:grid-col-" %}{% endif %}
{% if card.tablet %}{% assign grid-tablet = card.tablet | prepend: "tablet-lg:grid-col-" %}{% endif %}
{% if card.desktop %}{% assign grid-desktop = card.desktop | prepend: "desktop-lg:grid-col-" %}{% endif %}
{% if card.widescreen %}{% assign grid-widescreen = card.widescreen | prepend: "widescreen-lg:grid-col-" %}{% endif %}

<div>
<ul class="usa-card-group">
{% for c in card.list %}
<!-- header and image settings -->
{% if c.header-first %}{% assign cardhead = "usa-card--header-first" %}{% else %}{% assign cardhead = "" %}{% endif %}
{% if c.inset %}{% assign inset = "usa-card__media--inset" %}{% else %}{% assign inset = "" %} {% endif %}
{% if c.default %}{% assign default = "card-default" %}{% else %}{% assign default = "" %}{% endif %}


<!-- use flag layout -->
{% if c.left %}
{% assign flag = "usa-card--flag flex-1" %}
{% elsif c.right %}
{% assign flag = "usa-card--flag flex-1  usa-card--media-right" %}
{% else %}
{% assign flag = "" %}
{% endif %}
<li class="usa-card {{ grid }} {{ grid-mobile }} {{ grid-tablet }} {{ grid-desktop }} {{ grid-widescreen }} {{ cardhead }} {{ default }}{{ flag }}">
<div class="usa-card__container">
<div class="usa-card__header">
<h4 class="usa-card__heading">{{c.title}}</h4>
{% if c.default %}<div class="usa-card_line"></div>{% endif %}
</div>
{% if c.img %}
<div class="usa-card__media {{ inset }}">
<div class="usa-card__img">
<img src="/assets/images/{{c.img}}"  alt="{{ c.alt }}"/>
</div>
</div>
{% endif %}
{% if c.body %}
<div class="usa-card__body">
{{ c.body | markdownify }}
</div>
{% endif %}
{% if c.button %}
<div class="usa-card__footer">
<div style="display: inline;">
{% for b in c.button %}<!-- use a half width button -->{% if b.half %}{% assign half = "button-half usa-button--outline" %}{% else %}{% assign half = "" %}{% endif %}<a href="{{ b.link }}" class="usa-button {{ half }}">{{ b.label }}</a>
{% endfor %}
</div>
</div>
{% endif %}
</div>
</li>
{% endfor %}
<ul>
</div>