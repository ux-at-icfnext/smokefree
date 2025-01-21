---
layout: "right.md"
title: Footer
tags: patterns
summary: A footer serves site visitors who arrive at the bottom of a page without finding what they want.
branded: true

date: 2024-08-14
---

## Design 
** note: the design is too wide for this space, please view on a [prototype page](/library/templates/home/).
### Medium Footer
{% include 'patterns/footer.md' %}




## Theme Settings
- `$theme-footer-font-family` - Font family of the footer.
- `$theme-footer-max-width` - Maximum width of footer container.

For this library we've set the `$theme-footer-max-width` to "widescreen", to fit with our [Grid](/library/styles/grid) strategy. Since there were several type groups in the footer, we used custom CSS to style. _see below_.

All other aspects to brand the footer will have to be overwritten using CSS.



<div class="usa-accordion" style="padding-top: 20px">
  <h4 class="usa-accordion__heading">
    <button
      type="button"
      class="usa-accordion__button"
      aria-expanded="false"
      aria-controls="a1"
    >
      CSS
    </button>
  </h4>
  <div id="a1" class="usa-accordion__content usa-prose">

  ```css
    .usa-footer{
      .footer-tagline{
        text-align: center;
        background-color: #383838;
        @include u-text('white');
        @include u-padding(1);
        @include u-font('serif', 'md')
      }
      .usa-footer__primary-section, .usa-footer__secondary-section  {
        background-color: #333;
        a {
          @include u-text('white');
          &:hover{
            @include u-text('primary');
            text-decoration: underline;
          }
        }
      }
      .usa-footer__primary-section{
        @include u-font('sans', 'md');
      }
      .usa-footer__nav {
        @include u-flex('align-center');
      }
      .befree-callout {
        @include u-font('serif', '3xs');
        @include u-text('primary-light', 'center');
        @include u-border(1px, 'primary-light');
        @include u-padding-x(5px);
        &:hover {
          @include u-text('primary');
          @include u-bg('white');
          transform: background-color .05s;
        }
      }
      .usa-footer__logo-img {
        max-width: 250px;
      }
      .usa-icon {
        width: 100%; height: 100%;
      }
    }
  ```
  </div>
</div>


## Nex+ Library prototyping notes
The library and prototype use the same footer which is set in the `_layouts/default.html` file. At default it's using the regular partial footer, this can be updated to use the extended header by changing `footer.md` or `footer-small` or `footer-ext.md`.

The navigation for the library is in `_data/lib-nav.yml` and for the prototype in `_data/nav.yml`. Settings for the logo and site name are in the `_data/settings.yml` file.