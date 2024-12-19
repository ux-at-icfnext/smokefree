#### Card Default
This card is the most widely used on the site. It's used on home, landing pages, and articles pages to help people to navigate through the site. 

Add `card-default` to the `<li>` item in a card list group in order to create this styling.

{% include 'partials/cards/default.md' %}


<div class="usa-accordion">
  <h4 class="usa-accordion__heading">
    <button
      type="button"
      class="usa-accordion__button"
      aria-expanded="false"
      aria-controls="b1"
    >
      HTML
    </button>
  </h4>
  <div id="b1" class="usa-accordion__content usa-prose">

  ```html
    {% include 'partials/cards/default.md' %}
  ```
  </div>
  <h4 class="usa-accordion__heading">
    <button
      type="button"
      class="usa-accordion__button"
      aria-expanded="false"
      aria-controls="b2"
    >
      CSS
    </button>
  </h4>
  <div id="b2" class="usa-accordion__content usa-prose">

  ```css
    .card-default {
      .usa-card__img {
        max-height: 145px;
      }
      h3, h4, p {
        @include u-text('primary');
      }
      .usa-card__container {
        position: relative;
        cursor: pointer;
      }
      .usa-card__container:hover {
        @include u-bg('primary-vivid');
        transition: background-color 0.5s;
        h3, h4, p {
          @include u-text('white');
        }
      }
      .usa-card__footer a, .usa-card__footer a:hover {
        position: absolute;
        top: 0;
        left: 0;
        right: 0;
        bottom: 0;
        width: 100%;
        height: 100%;
        
        z-index: 1; /* Ensures it's clickable above other content */
        text-indent: -9999px; /* Hides the text visually for accessibility */
        background: transparent; /* Prevents any visual effects */
      }
    }
  ```
  </div>
</div>