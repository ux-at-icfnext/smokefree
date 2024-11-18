
{% if prototype %}
{% assign foot = nav-foot.foot %}
{% else %}
{% assign foot = lib-nav.foot %}
{% endif %}

<footer class="usa-footer usa-footer--slim">
  <div class="grid-container usa-footer__return-to-top">
    <a href="#">Return to top</a>
  </div>
  <div class="usa-footer__primary-section">
    <div class="usa-footer__primary-container grid-row">
      <div class="mobile-lg:grid-col-8">
        <nav class="usa-footer__nav" aria-label="Footer navigation,">
          <ul class="grid-row grid-gap">
          {% for f in foot %}<li class="mobile-lg:grid-col-4 desktop:grid-col-autousa-footer__primary-content"><a class="usa-footer__primary-link" href="{{ f.href }}">{{ f.title }}</a></li>{% endfor %}
          </ul>
        </nav>
      </div> {% if prototype %}<div class="mobile-lg:grid-col-4">
        <address class="usa-footer__address">
          <div class="grid-row grid-gap">
            <div
              class="grid-col-auto mobile-lg:grid-col-12 desktop:grid-col-auto"
            >
              <div class="usa-footer__contact-info">
                <a href="tel:{{ settings.sitephone }}">{{ settings.sitephone }}</a>
              </div>
            </div>
            <div
              class="grid-col-auto mobile-lg:grid-col-12 desktop:grid-col-auto"
            >
              <div class="usa-footer__contact-info">
                <a href="mailto:{{ settings.siteemail }}">{{ settings.siteemail }}</a>
              </div>
            </div>
          </div>
        </address>
      </div>{% endif %}
    </div>
  </div>
  <div class="usa-footer__secondary-section">
    <div class="grid-container">
      <div class="usa-footer__logo grid-row grid-gap-2">
        <div class="grid-col-auto">
          <img class="usa-footer__logo-img" src="{{ settings.sitelogo-small }}" alt="" />
        </div> {% if prototype %}<div class="grid-col-auto">
          <p class="usa-footer__logo-heading">{{ settings.agencycontent }}</p>
        </div>{% endif %}
      </div>
    </div>
  </div>
</footer>