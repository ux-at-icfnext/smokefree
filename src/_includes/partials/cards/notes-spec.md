#### Quick Notes Cards
Quick Notes card use the base card without the body slot -- allowing the title to take up to 4 lines. The call to action for these note cards some times use a regular button, and sometimes use two social buttons. Simply adding the CSS for a half size button will make this work.

{% include 'partials/cards/notes.md' %}



<div class="usa-accordion">
  <h4 class="usa-accordion__heading">
    <button
      type="button"
      class="usa-accordion__button"
      aria-expanded="false"
      aria-controls="d1"
    >
      HTML single button
    </button>
  </h4>
  <div id="d1" class="usa-accordion__content usa-prose">

  ```html
    <li class="usa-card tablet-lg:grid-col-12 widescreen:grid-col-12">
    <div class="usa-card__container">
      <div class="usa-card__header">
        <h4 class="usa-card__heading">Quicknote card with ... 4 lines of text - 4 lines of text - & share buttons</h4>
      </div>
      <div class="usa-card__media usa-card__media--inset">
        <div class="usa-card__img">
          <img
            src="https://designsystem.digital.gov/img/introducing-uswds-2-0/built-to-grow--alt.jpg"
            alt="A placeholder image"
          />
        </div>
      </div>
      <div class="usa-card__footer">
        <a href="#" class="usa-button">A button </a>
      </div>
    </div>
  </li>
  ```
  </div>
  <h4 class="usa-accordion__heading">
    <button
      type="button"
      class="usa-accordion__button"
      aria-expanded="false"
      aria-controls="d2"
    >
      HTML social buttons
    </button>
  </h4>
  <div id="d2" class="usa-accordion__content usa-prose">

  ```html
    <li class="usa-card tablet-lg:grid-col-12 widescreen:grid-col-12">
    <div class="usa-card__container">
      <div class="usa-card__header">
        <h4 class="usa-card__heading">Quicknote card with ... 4 lines of text - 4 lines of text - & share buttons</h4>
      </div>
      <div class="usa-card__media usa-card__media--inset">
        <div class="usa-card__img">
          <img
            src="https://designsystem.digital.gov/img/introducing-uswds-2-0/built-to-grow--alt.jpg"
            alt="A placeholder image"
          />
        </div>
      </div>
      <div class="usa-card__footer">
        <a href="#" class="usa-button usa-button--outline usa-button-half"><i class="fa-brands fa-twitter"></i> Share </a> <a href="#" class="usa-button usa-button--outline usa-button-half"><i class="fa-regular fa-envelope"></i> Email</a>
      </div>
    </div>
  </li>
  ```
  </div>
  <h4 class="usa-accordion__heading">
    <button
      type="button"
      class="usa-accordion__button"
      aria-expanded="false"
      aria-controls="d3"
    >
      CSS
    </button>
  </h4>
  <div id="d3" class="usa-accordion__content usa-prose">

  ```css
    .button-half {
      max-width: 45%;
    }
  ```
  </div>
</div>