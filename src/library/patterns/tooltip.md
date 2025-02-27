---
layout: "right.md"
title: Tool Tip
tags: patterns
branded: true
summary: A tooltip is a short descriptive message that appears when a user hovers or focuses on an element.

date: 2024-09-12

include: "{% include 'patterns/tooltip.md' %}"

tooltip:
  position: top # option top | botton | right | left
  utility: "width-full tablet:width-auto"
  text: Show on top
  tip: I'm on the top

tooltip-bottom:
  position: bottom # option top | botton | right | left
  utility: "width-full tablet:width-auto"
  text: Show on bottom
  tip: I'm on the bottom

tooltip-right:
  position: right # option top | botton | right | left
  utility: "width-full tablet:width-auto"
  text: Show on right
  tip: I'm on the right

tooltip-left:
  position: left # option top | botton | right | left
  utility: "width-full tablet:width-auto"
  text: Show on top
  tip: I'm on the left
---

## Design
{% include 'patterns/tooltip.md' %}

{% assign tooltip = tooltip-bottom %}
{% include 'patterns/tooltip.md' %}

{% assign tooltip = tooltip-left %}
{% include 'patterns/tooltip.md' %}

{% assign tooltip = tooltip-right %}
{% include 'patterns/tooltip.md' %}

## Smokefree styling
This uses Smokefree [colors](http://localhost:8080/library/styles/colors/) of the links, and it pulls in the default [typography](http://localhost:8080/library/styles/type/).

<div class="usa-accordion">
  <h4 class="usa-accordion__heading">
    <button
      type="button"
      class="usa-accordion__button"
      aria-expanded="false"
      aria-controls="e1"
    >
      Other USWDS Settings for further branding
    </button>
  </h4>
  <div id="e1" class="usa-accordion__content usa-prose">

- `$theme-tooltip-background-color `: Background color of tooltip.
- `$theme-tooltip-font-color `: Text color of tooltip.
- `$theme-tooltip-font-size `: Font size of tooltip.
</div>
</div>

Read more about using this with [utility classes](https://designsystem.digital.gov/utilities/) <i class="fa-solid fa-arrow-up-right-from-square"></i> at the USWDS.

## Library prototyping notes
To use the data driven smart pattern, you'll need to set your content in the YAML front matter or in a data file.

``` yml
tooltip:
  position: top # option top | botton | right | left
  utility: # optional 
  text: Show on top
  tip: I'm on the top
```

Include the pattern using this code:

``` markdown
 {{ include }}
```
