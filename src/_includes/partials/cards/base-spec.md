#### Base Card
This base card is styled to support the applying the Smokefree brand to all cards. Using Theme Settings (below) combined with CSS overrides, we are able to create the support structure for all card styles. The card itself isn't used, however, please add the CSS to theme files to make the other cards work.



{% include 'partials/cards/base.md' %}

<div class="usa-accordion">
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
  .usa-card {
    .usa-card__heading {
      @include u-font('serif', 'lg');
      @include u-text('semibold');
    }
    .usa-button {
      @include u-font('serif', 'xs');
      @include u-text('semibold', 'no-underline');
      width: 100%;
      &:hover {
        @include u-bg('primary-vivid');
        transform: background-color .05s;
      }
    }
    .usa-button--outline {
      @include u-shadow('none');
      @include u-radius('sm');
      @include u-border(1px, 'primary');
      width: 45%;
      &:hover {
        @include u-text('white');
        @include u-bg('primary-vivid');
        transition: .05s;
      }
    }
    .usa-card_line {
      @include u-padding(1);
      @include u-border-bottom(2px, 'primary-light');
      width: 30%;
    }
    &:hover {
      .usa-card_line {
        width: 80%;
        transition: width 0.5s;
      }
    }
  }
  ```
  </div>
</div>