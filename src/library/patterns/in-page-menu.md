---
layout: "right.md"
title: In-page Navigation
tags: patterns
branded: true
summary: Allows for a table of contents, which reads the header levels in the document and creates a jump menu. Great for long pages.

date: 2024-08-20
---

## Design
See example on the right side of this page.

## Properties
Control how the navigation works
| Property | Description | Default |
| --- | --- | --- |
| `data-heading-elements` | The list of header levels that should be included in the link list | `h2 h3` |
| `data-main-content-selector` | The element the component pulls headers from | `<main>` |
| `data-title-heading-level` | The heading level of the navigation title header | `h4` |
| `data-title-text` | The text of the navigation title header | “On this page” |
| `data-scroll-offset` | Number of pixels scroll should offset from the top of the parent element | 0 |
| `data-root-margin` | Observable margin around the observed root used for calculating the current active section. Use values similar to CSS margin | `0px 0px 0px 0px` |
| `data-threshold` | Percentage of the scrolling section that must be in the observed area before the current section is triggered. Use a value between 0 and 1 | 1|

## Smokefree styling
This uses `primary-lighter` for the [color](http://localhost:8080/library/styles/colors/) of the links, and it pulls in the default [typography](http://localhost:8080/library/styles/type/).
In addition, these styles were set in the Theme Settings File
``` css
@use "uswds-core" with (
  //other theme settings
  $theme-in-page-nav-bar-color: "primary-vivid",
  $theme-in-page-nav-bar-width: "2px",
)
```

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

These aspects can be set with the below settings.
- $theme-in-page-nav-background-color 
- $theme-in-page-nav-background-padding
- $theme-in-page-nav-background-radius 
- $theme-in-page-nav-bar-color
- $theme-in-page-nav-bar-width
- $theme-in-page-nav-font-family
- $theme-in-page-nav-link-color
- $theme-in-page-nav-main-content-max-width
- $theme-in-page-nav-margin-left
- $theme-in-page-nav-margin-top 
- $theme-in-page-nav-top 
</div>
</div>

## Example usage

```html
  <div class="usa-in-page-nav-container">
    <aside class="usa-in-page-nav"></aside>
    <main id="main-content" class="main-content">
      [ Page content ]
    </main>
  </div>
```