---
layout: "right.md"
title: Type
tags: styles
---
<div class="usa-prose">

**Theme typography**
All patterns in the library make use of the theme token typography by default. There is some theming of patterns, see the pattern you are working with to apply global pattern level changes. In order to apply the `usa-prose` styles to type, add the class to the highest level div that you want the class applied -- typically this would be in the `<body>` tag.

---
**Fonts used for Smokefree**
Montserrat & Roboto

# Headline 1

## Headline 2

### Headline 3

### Headline 4
Body text - Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat. Duis aute irure dolor in reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla pariatur. Excepteur sint occaecat cupidatat non proident, sunt in culpa qui officia deserunt mollit anim id est laborum.

- with examples
- of some bullets
- as well as
- what a [link](/) would look like (use relative links)
- what an external [link](https://somesite.com) would look like (use http or https)

---

## Prose
The USWDS using reset to unstyle all browser type settings. In order to apply prose styles to your text you'll want to give them the proper classes. For instance use `usa-list` to make your list appropately styled with padding and indentation.

Applying the class `usa-prose` to the outter element will apply prose to all items with in. We have found that applying the the class to the same div as where you are applying the `grid-container` will help to make sure that all text elements inside are properly styled. Read more about the [Grid here](/library/styles/grid/)

## Custominizing Type in the USWDS
Use the `$theme-settings` to change the font you would like to use for the library. 


### Using Google Fonts
_make sure to import the google font in your base css file or embed them as links in the html head_
Using the `$theme-settings` add your font tokens to the core.

```
  // font styles
    $theme-typeface-tokens: (
        "roboto": (
            'display-name': "roboto", 
            'cap-height': 364px,
            'stack': "Lora, serif",
        ),
        "montserrat": (
            'display-name': "Montserrat", 
            'cap-height': 364px,
            'stack': "Montserrat, sans-serif",
        ),
    ),
```

Then you can use the same method above to set your font: `$theme-font-type-serif: "montserrat"` which is used for headings and `$theme-font-type-sans: "roboto"` for the body text. 

Learn more about [theme-settings on USWDS](https://designsystem.digital.gov/documentation/settings/#typography-settings) and which variables can be controlled, include the font tokens, weight tokens, size togets and more.

## Designing in Code
This library makes use of [Markdown-it](https://markdown-it.github.io/) and [Liquid](/https://cloudcannon.com/cheat-sheets/jekyll/) to create pages and layouts. HTML can be used when needed.

</div>