---
layout: content-grid
title: Landing Page Specifications
---
[view full prototype](/templates/landing)

## 1. Landing Page Hero {: .spec-header }
see [hero](patterns/hero) for schema

{% assign hero = landing.hero %}
{% include "patterns/hero.md" %}


## 2. Card Navigation {: .spec-header }
| field | content | notes| 
| -- | -- | --|
| card | see [cards](/patterns/card) for schema | Uses `card-default` |


{% assign card = landing.cards %}
{% include "patterns/card.md" %}
