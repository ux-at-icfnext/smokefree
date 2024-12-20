---
layout: base
title: Landing Page Template
---

<div class="grid-container usa-prose">

{% assign hero = landing.hero %}
{% include "patterns/hero.md" %}

{% assign card = landing.cards %}
{% include "patterns/card.md" %}

</div>