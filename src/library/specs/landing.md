---
layout: content-grid
title: Landing Page Specifications
summary: Landing pages are used to help navigation pathways to topic based areas of the site

tags: specs
---
[view full prototype](/library/templates/landing)

## 1. Landing Page Hero {: .spec-header }
see [hero](/library/patterns/hero) for schema

{% assign hero = landing.hero %}
{% include "patterns/hero.md" %}


## 2. Card Navigation {: .spec-header }
| field | content | notes| 
| -- | -- | --|
| card | see [cards](/library/patterns/card) for schema | Uses `card-default` |


{% assign card = landing.cards %}
{% include "patterns/card.md" %}
