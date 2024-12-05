---
layout: "right.md"
title: Colors
tags: styles
---

## Theme colors
All patterns in the library make use of the theme token colors by default. There is some theming of patterns, see the pattern you are working with the apply global pattern level changes. 

### About theme color tokens
USWDS theme color tokens are divided into five high-level role-based color families: base, primary, secondary, accent-warm, and accent-cool.

**Base** is a project’s neutral color, typically some tint of gray, and usually used as the text color throughout.

_See the [USWDS](https://designsystem.digital.gov/design-tokens/color/theme-tokens/#about-theme-color-tokens) color tokens page to see the default colors_

### Customize theme palette
Set the theme palette by setting the values you want in the [theme settings file](/docs/themesettings). You can use either a [theme token](https://designsystem.digital.gov/design-tokens/color/system-tokens/#using-color-tokens-2) or a hex value.

#### Colors reset to match the Smokefree brand

{% assign colorstable = color %}
{% include 'partials/colors-table.md' %}


## Library & Prototype use
Along with updating the [theme settings file](/docs/themesettings), please use the `site.data.colors.yaml` file to update your colors. This will allow you to track which colors you've customized.

_note: the all-uswds-colors.yaml file contains the default USWDS color pallete if you need it as a reference_