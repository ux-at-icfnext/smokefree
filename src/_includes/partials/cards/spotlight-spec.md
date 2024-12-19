#### Spotlight
The spotlight card is often included as the first card in a grouping of the default card. It uses the class `usa-card--header-first`.

{% include 'partials/cards/spotlight.md' %}


<div class="usa-accordion">
  <h4 class="usa-accordion__heading">
    <button
      type="button"
      class="usa-accordion__button"
      aria-expanded="false"
      aria-controls="c1"
    >
      HTML
    </button>
  </h4>
  <div id="c1" class="usa-accordion__content usa-prose">

  ```html
    {% include 'partials/cards/spotlight.md' %}
  ```
  </div>
  <h4 class="usa-accordion__heading">
    <button
      type="button"
      class="usa-accordion__button"
      aria-expanded="false"
      aria-controls="c2"
    >
      CSS
    </button>
  </h4>
  <div id="c2" class="usa-accordion__content usa-prose">

  ```css  
    .usa-card--header-first {
      .usa-card__container {
        @include u-bg('base-light');
      }
      .usa-card__header {
        @include u-text('uppercase');
        line-height: 1.42857;
        letter-spacing: 5.6px;
        @include u-text('white');
        @include u-bg('accent-warm-darker');    
        text-align: center;
        height: 40px;
        @include u-padding(1);
      }
      .usa-card__img {
        max-height: 145px;
      }
      h4 {
        @include u-font('serif', 'lg');
        @include u-text('semibold');
      }
    }
  ```
  </div>
</div>