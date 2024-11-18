{% if prototype %}
{% assign foot = nav-foot.foot %}
{% else %}
{% assign foot = lib-nav.foot %}
{% endif %}

<footer class="usa-footer">
  <div class="grid-container usa-footer__return-to-top">
    <a href="#">Return to top</a>
  </div>
  <div class="usa-footer__primary-section">
    <nav class="usa-footer__nav" aria-label="Footer navigation">
      <ul class="grid-row grid-gap">
        {% for f in foot %}<li class="mobile-lg:grid-col-4 desktop:grid-col-auto usa-footer__primary-content">
          <a class="usa-footer__primary-link" href="{{ f.href }}">{{ f.title }}</a>
        </li>
        {% endfor %}
      </ul>
    </nav>
  </div>
  <div class="usa-footer__secondary-section">
    <div class="grid-container">
      <div class="grid-row grid-gap">
        <div
          class="usa-footer__logo grid-row mobile-lg:grid-col-6 mobile-lg:grid-gap-2"
        >
          <div class="mobile-lg:grid-col-auto">
            <img class="usa-footer__logo-img" src="{{ settings.sitelogo-small }}" alt="" />
          </div>
          <div class="mobile-lg:grid-col-auto">
            <p class="usa-footer__logo-heading">{{ settings.sitename }}</p>
          </div>
        </div>{% if prototype %}
        <div class="usa-footer__contact-links mobile-lg:grid-col-6">
          <div class="usa-footer__social-links grid-row grid-gap-1">
          {% for s in nav-foot.social %}
            <div class="grid-col-auto">
              <a class="usa-social-link" href="{{ s.link }}"
                ><img
                  class="usa-social-link__icon"
                  src="{{ s.icon }}"
                  alt="{{ s.alt }}"
              /></a>
            </div>
          {% endfor %}
          </div>
          <p class="usa-footer__contact-heading">
            {{ settings.agencycontent }}
          </p>
          <address class="usa-footer__address">
            <div class="usa-footer__contact-info grid-row grid-gap">
              <div class="grid-col-auto">
                <a href="tel:{{ settings.sitephone }}">{{ settings.sitephone }}</a>
              </div>
              <div class="grid-col-auto">
                <a href="{{ settings.siteemail }}">{{ settings.siteemail }}</a>
              </div>
            </div>
          </address>
        </div>{% endif %}
      </div>
    </div>
  </div>
</footer>