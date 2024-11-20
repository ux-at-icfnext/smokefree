---
layout: "base.html"
---
<style>
.contain {
  max-width: 100ex;
  margin: auto;
  margin-top: 50px;
}
</style>

{% include 'patterns/breadcrumb.md' %}
<div class="usa-prose contain">

# {{ title }}
{% if summary %} {{ summary }} {: .usa-intro} {% endif %}
{{ content}}

</div>