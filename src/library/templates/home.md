---
layout: base
title: Home
summary: Home Landing page

prototype: true
alert: 
  content: please see the <a href="/library/specs/home">specifications</a> page for this template

tags: templates
---
<div class="grid-container usa-prose">

{% include 'partials/title/title.md' %}

## Articles & Information {: .block-title}
{% assign card = home.article %}
{% include "patterns/card.md" %}

</div>