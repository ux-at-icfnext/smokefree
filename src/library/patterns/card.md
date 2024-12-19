---
layout: "right.md"
title: Card
tags: patterns
branded: true
summary: Cards contain content and actions about a single subject.

date: 2024-08-10

include: "{% include 'patterns/card.md' %}"
---

## Design
There are several cards variations used for the Smokefree website. Please be sure to add all the theme settings, and CSS to the USWDS theme to make these card styles render.

### Card Groups
Cards are usually put together into a card group. The group settings help to control the responsiveness of the card or the overal width. This is set in the `<ul>` as class `<ul class="usa-card-group">`. Then within the `<li>` item, the responsive grid is applied, for example: `tablet-lg:grid-col-6 widescreen:grid-col-4`. In this case the card will be 6 columns up on tablet and four columns on widescreen breakpoints in this twelve column grid. Note that this is set for each item, which makes it then possible for cards to be different widths.

### Card Slots
Cards uses slots to control the different sections with in it. This includes section order and padding. All slots are optional.

| Name | Class | Description |
|--|--|--| 
| header | `usa-card__header` | head section of the card. Can be above or below media |
| media | `usa-card__media` | usually contains graphical content and can either be 100% width or indented using `usa-card__media--inset`|
| body | `usa-card__body` | contains body content |
| footer | `usa-card__footer` | usually contains the call to action |

![Card specs](/assets/images/card-specs.png)

### Card variations
{% include 'partials/cards/base-spec.md' %}

{% include 'partials/cards/default-spec.md' %}

{% include 'partials/cards/spotlight-spec.md' %}

{% include 'partials/cards/notes-spec.md' %}



## Theme Settings
Please update the `uswds-theme.scss` file with these theme settings. Also note that settings in the [Color](/library/styles/colors/) and [Type](/library/styles/type/) also impact the look of the cards.

- `$theme-card-border-radius: 0` - Border radius of card
- `$theme-card-border-width: 1px` - Stroke thickness of card
- `$theme-card-gap: 20px` - Gap between cards in a card group
<div class="usa-accordion">
  <h4 class="usa-accordion__heading">
    <button
      type="button"
      class="usa-accordion__button"
      aria-expanded="false"
      aria-controls="e1"
    >
      Other USWDS Settings
    </button>
  </h4>
  <div id="e1" class="usa-accordion__content usa-prose">

- `$theme-card-border-color` Stroke color of card.
- `$theme-card-flag-min-width` Width at which flag cards change to horizontal layout.
- `$theme-card-flag-image-width` Fixed image width in the card flag variant.
- `$theme-card-font-family` Font family for card body.
- `$theme-card-header-typeset` Family, size, and line height of the heading.
- `$theme-card-margin-bottom` Bottom margin for card.
- `$theme-card-padding-perimeter` Padding between card elements and card border.
- `$theme-card-padding-y` Vertical padding between card elements.
  </div>
  <h4 class="usa-accordion__heading">
    <button
      type="button"
      class="usa-accordion__button"
      aria-expanded="false"
      aria-controls="e2"
    >
      Other USWDS Classes
    </button>
  </h4>
  <div id="e2" class="usa-accordion__content usa-prose">
    
    - `.usa-card--flag` Display in a horizontal (“flag”) orientation at a specified width (`$theme-card-flag-min-width`).
    - `.usa-card--header-first` Displays the header element before the media element.
    - `.usa-card--media-right` In combination with usa-card--flag, sets the media element on the right. (Flag cards display media on the left by default.)
    - `.usa-card__media--inset` Indents the media element so it doesn’t extend to the edge of the card.
    - `.usa-card__body--exdent` Extends the body element out over the card border. Useful for light-bordered cards.
    - `.usa-card__footer--exdent` Extends the footer element out over the card border. Useful for light-bordered cards.
    - `.usa-card__header--exdent` Extends the header element out over the card border. Useful for light-bordered cards.
    - `.usa-card__media--exdent` Extends the media element out over the card border. Useful for light-bordered cards.
  </div>
</div>


## Library prototyping notes
To use the data driven smart pattern, you'll need to set your content in the YAML front matter or in a data file. 

### Responsive Settings
You can set responsive grid sizes by adding grids to the card settings. The grid follows the 12 column strategy of the USWDS. For example: if you want your columns to be 50/50 set your grid number to 6 (see example below):
- **grid**: smallest ≥ 0px
- **mobile**: ≥ 480px
- **tablet**: ≥ 640px
- **desktop**: ≥ 1024px
- **widescreen**: < 1025px

### Card Settings
_these go within the `list` property of the card yml._
- **title** - required
- **body** - text only / optional
- **img** - optional, link to image file
- **inset** - optional, set to "true"
- **header-first** - optional, moves header above the image, set to "true"
- **default** - optional, set to true to get the styling of the default card
- **button** optional, list contains label, link and half. Set the button to half with by setting half to true. Can house multiple buttons. 

```yml
card:
  tablet: 6 
  widescreen: 6
  list:
    - title: Alice in Wonderland
      body: |
        It was high time to go, for the pool was getting quite crowded with the birds and animals that had fallen into it: there were a Duck and a Dodo, a Lory and an Eaglet, and several other curious creatures.
      button:
        - link: "#"
          label: "Drink me"
```

Include the pattern using this code:

```markdown
 {{ include }}
```