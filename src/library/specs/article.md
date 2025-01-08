---
layout: content-grid
title: Article
summary: The article is one of the main content pages that serve the information that people are looking for.

tags: specs
---
[view full prototype](/library/templates/article)

## 1. Page Content {: .spec-header }
Use `usa-prose` at the body level or at least in the div around the content well to make sure to get all the design system typography to apply to the content.

Page content needs to have:
- One title (`<h1>`)
- Headings H2 through H6 represent the outline of the page, numbers should not be skipped. See more on [WebAIM Headers](https://webaim.org/techniques/headings/).
- images, links, and bullets are acceptable in body content


## 2. Quit Notes {: .spec-header }
see [Quit Notes](/library/patterns/quitnote/) pattern.

Quit note is right rail content on large screens and beneath the main content on small screens
<div style="max-width: 320px;">
{% assign card = article.quit %}
{% include 'patterns/quitnote.md' %}
</div>

## 3. More for you {: .spec-header }


| field | content | notes| 
| -- | -- | --|
| title | h2 - `.block-title` | Articles & Information |
| card | see [cards](/library/patterns/card) for schema | Uses `card-default` |

## More for you {: .block-title}
{% assign card = article.card %}
{% include "patterns/card.md" %}