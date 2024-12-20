---
layout: base
title: Home
summary: Home Landing page

prototype: true
alert: 
  content: please see the <a href="/library/specs/home">specifications</a> page for this template

tags: templates
---


## Articles & Information {: .block-title}
{% assign card = home.article %}
{% include "patterns/card.md" %}