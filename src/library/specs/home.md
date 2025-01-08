---
layout: content-grid
title: Home Page Specifications
summary: Home pages serve as the front door to a website.

tags: specs
---
[view full prototype](/library/templates/home)

## 1. Page Title {: .spec-header }
There needs to be an H1 on the home page. This is needed for both SEO and usability purposes. The H1 can be stylistically different than other pages. In the initial design an example of a page title was given. 

In this case… the large font “Quitting is a Journey” should be used a specialized paragraph. The following sentence is the perfect h1 to describe the site.

{% include 'partials/title/title.md' %}

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
    <div class="sf-intro">
      <p>Quitting is a journey</p>
      <h1>Find support, tips, tools, and expert advice to help you or someone you love <a href="https://smokefree.gov/build-your-quit-plan">quit smoking.</a></h1>
    </div>
  ```
  </div>
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
  
  ```CSS
    .sf-intro {
      p {
        text-align: center;
        font-size: 72px;
        font-weight: 200;
        line-height: 72px;
        text-transform: uppercase;
        margin-top: 0;
        margin-bottom: 5px;
      }
      h1 {
        text-align: center;
        font-size: 1rem; //16px
        line-height: 1.5rem; // 24px
        font-weight: 300rem;
        max-width: 100%; 
        margin: 0;
        margin-bottom: 1rem;
      }
    }
  ```
  </div>
</div>

## 2. Quit Navigation Accordions {: .spec-header }
**TODO**

## 3. Tool Tips {: .spec-header }
**TODO**

## 4. Articles {: .spec-header }

| field | content | notes| 
| -- | -- | --|
| title | h2 - `.block-title` | Articles & Information |
| card | see [cards](/library/patterns/card) for schema | The first card uses `usa-card--header-first`. <br> The remainer use `card-default` |


## Articles & Information {: .block-title}

{% assign card = home.article %}
{% include "patterns/card.md" %}




