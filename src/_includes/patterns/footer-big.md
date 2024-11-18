{% if prototype %}
{% assign foot = nav-foot.foot %}
{% else %}
{% assign foot = lib-nav.foot %}
{% endif %}

<footer class="usa-footer usa-footer--big">
  <div class="grid-container usa-footer__return-to-top">
    <a href="#">Return to top</a>
  </div>
  <div class="usa-footer__primary-section">
    <div class="grid-container">
      <div class="grid-row grid-gap">
        <div class="tablet:grid-col-8">
          <nav class="usa-footer__nav" aria-label="Footer navigation,,">
          {% for f in foot %}
            <div class="grid-row grid-gap-3">
              <div class="">
                <section
                  class="usa-footer__primary-content usa-footer__primary-content--collapsible"
                >
                  <h4 class="usa-footer__primary-link">{{ f.title }}</h4>
                  <ul class="usa-list usa-list--unstyled">
                  {% for sf in f.subnav %}
                    <li class="usa-footer__secondary-link">
                      <a href="{{ sf.href }}">{{ sf.title }}</a>
                    </li>
                  {% endfor %}
                  </ul>
                </section>
              </div>{% endfor %}
            </div>
          </nav>
        </div>
        <div class="tablet:grid-col-4">
          <div class="usa-sign-up">
            <h3 class="usa-sign-up__heading">Sign up</h3>
            <form class="usa-form">
              <label class="usa-label" for="email" id=""
                >Your email address</label
              >
              <input class="usa-input" id="email" name="email" type="email" />
              <button class="usa-button" type="submit">Sign up</button>
            </form>
          </div>
        </div>
      </div>
    </div>
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
