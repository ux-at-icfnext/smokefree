---
layout: "base.html"
---
<style>
.grid-container {
  margin-top: 50px;
}
</style>

{% include 'patterns/breadcrumb.md' %}
<div class="grid-container usa-prose">

# {{ title }}
{% if summary %} {{ summary }} {: .usa-intro} {% endif %}
{{ content}}

</div>