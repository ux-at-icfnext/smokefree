---
layout: "right.md"
title: Hero
tags: patterns
custom: true
summary: Heros are used to ground the viewer in landing pages where are the pathways to deeper content

date: 2024-08-17

include: "{% include 'patterns/hero.md' %}"

alert:
  type: usa-alert--info
  heading: Custom Component
  body: |
    This is a custom component that is not in the USWDS, however it still follows the UX best practices.
---
{% assign hero = landing.hero %}
{% include 'patterns/alert.md' %}

## Design
{% include 'patterns/hero.md' %}

## Content specifications 
| Name | Type |
|--|--|
| Title | h1 |
| content | text |
| img | image |
| alt | image alt tag |

## Code
<div class="usa-accordion">
  <h4 class="usa-accordion__heading">
    <button
      type="button"
      class="usa-accordion__button"
      aria-expanded="false"
      aria-controls="a1"
    >
      HTML
    </button>
  </h4>
  <div id="a1" class="usa-accordion__content usa-prose">

  ```html
    <div class="sf-hero">
      <div>
        <h1>{{ hero.title }} </h1>
        {{ hero.content }}
      </div>
      <div>
        <img src="{{ hero.img }}" alt="{{ hero.alt }}">
      </div>
    </div>
  ```
  </div>

  <div class="usa-accordion">
  <h4 class="usa-accordion__heading">
    <button
      type="button"
      class="usa-accordion__button"
      aria-expanded="false"
      aria-controls="a2"
    >
      CSS
    </button>
  </h4>
  <div id="a2" class="usa-accordion__content usa-prose">

  ```css
    .sf-hero {
      h1 {
        @include u-font('serif', '3xl');
        margin-bottom: 0px;
      }
      p {
        @include u-font('sans', 'lg');
        @include u-text(100);
      }
      img {
        width: 100%;
        height: auto;
        margin-top: 15px;
      }
      @media(min-width: 1024px) {
        display: flex;
        gap: 20px;
        div:nth-child(2) {
          min-width: 350px;
        }
      }
    }
  ```
  </div>

## Library prototyping notes
To use the data driven smart pattern, you'll need to set your content in the YAML front matter or in a data file.

```yml
  hero:
    title: Hero Title
    content: |
      Hero Content
    img: image
    alt: alt tage
```
Include the pattern using this code:
```markdown
 {{ include }}
```