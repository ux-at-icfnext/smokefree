---
layout: "right.md"
title: Pagination
tags: patterns
branded: true
summary: Pagination is navigation for paginated content.

date: 2024-08-24

include: "{% include 'patterns/pagination.md' %}"
---

## Design
{% include 'patterns/pagination.md' %}

## Smokefree styling
This uses `primary` for the [color](http://localhost:8080/library/styles/colors/) of the links, and it pulls in the default [typography](http://localhost:8080/library/styles/type/).

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

These aspects can be set within the theme settings.
- `$theme-pagination-background-color `: The background color of the entire pagination component.
- `$theme-pagination-breakpoint `: Breakpoint at which full pagination displays.
- `$theme-pagination-button-border-radius `: Default pagination button border radius.
- `$theme-pagination-button-border-width `: Width of button border.
- `$theme-pagination-font-family `: Default font family for pagination.
</div>
</div>

## Library prototyping notes
The library component is just a demo. If you need to make it functional, please build out the component.

``` markdown
 {{ include }}
```
