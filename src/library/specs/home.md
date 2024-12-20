---
layout: content-grid
title: Home Page Specifications
summary: Home pages serve as the front door to a website.

tags: specs
---
[view full prototype](/library/templates/home)


## 3. Articles {: .spec-header }

| field | content | notes| 
| -- | -- | --|
| title | h2 - `.block-title` | Articles & Information |
| card | see [cards](/library/patterns/card) for schema | The first card uses `usa-card--header-first`. <br> The remainer use `card-default` |


## Articles & Information {: .block-title}

{% assign card = home.article %}
{% include "patterns/card.md" %}




