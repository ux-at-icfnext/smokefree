---
layout: base
title: Landing Page Template
summary: Landing pages are used to help navigation pathways to topic based areas of the site

prototype: true
alert: 
  content: please see the <a href="/library/specs/landing">specifications</a> page for this template

tags: templates
---

<div class="grid-container usa-prose">

{% assign hero = landing.hero %}
{% include "patterns/hero.md" %}

{% assign card = landing.cards %}
{% include "patterns/card.md" %}

</div>