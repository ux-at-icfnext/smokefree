---
layout: "right.md"
title: Quicknote
tags: patterns
custom: true
summary: Quicknotes are right rail secondary infromation used on article pages as part of next actions.

date: 2024-08-27

include: "{% include 'patterns/quicknote.md' %}"

card:
  list:
    - title: |
        Like anything hard, quitting smoking takes practice. Get help practicing your quit smoking skills with our Practice Quit text messaging program.
      img: man-text.jpg
      button:
        - link: "#"
          label: Sign Up
    - title: |
        Fact: When used as directed, the nicotine patch can double your chances of quitting successfully.
      img: nicotine-patch-success.jpg
      button:
        - link: "#"
          label: <i class="fa-brands fa-twitter"></i> Share
          half: true
        - link: "#"
          label: <i class="fa-regular fa-envelope"></i> Share
          half: true
---

Quit notes are used on the Article template in the right rail for secondary calls to action. The use the [card](/library/patterns/card) pattern to house the information{: .usa-intro}

## Design

__Please note that on the smaller breakpoints, this item is shown with a single card and a carousel navigation. This document still needs to be updated with that information.__

{% include 'patterns/quitnote.md' %}

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
    <div class="quitnote">
    <div class="quitnote-title">Quit Notes</div>
      (card array)
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

  ``` css
    .quitnote {
      @include u-bg('base-light');
      padding: 20px 20px 0 20px;
      .usa-card__container {
        border: 0;
    }
      .quitnote-title {
        @include u-text('white');
        @include u-bg('accent-warm-darker');
        @include u-font('serif', 'lg');
        @include u-text('semibold');
        text-align: center;
        text-size-adjust: 100%;
        @include u-padding(1);
        @include u-margin-bottom('205');
      }
    }
  ```
</div>
</div>

## Library prototyping notes
To use the data driven smart pattern, you'll need to set your content in the YAML front matter or in a data file.

**see the [card](/library/patterns/card) for information on how to used the cards**

Include the pattern using this code:

```markdown
 {{ include }}
```