---
layout: "base.html"
---
{% include 'patterns/breadcrumb.md' %}
<div class="grid-container usa-prose">
<div class="grid-row grid-gap">
  <div class="tablet:grid-col-3">{% include 'patterns/sidenav.md' %}</div>
  <div class="tablet:grid-col-fill usa-prose">
    <h1> {{ title  }}</h1>
    {{ content }}
  </div>
</div>
</div>