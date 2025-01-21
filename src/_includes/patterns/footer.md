{% if prototype %}
{% assign foot = nav-foot.foot %}
{% else %}
{% assign foot = lib-nav.foot %}
{% endif %}

<footer class="usa-footer">
  <div class="grid-container usa-footer__return-to-top">
    <a href="#">Return to top</a>
  </div>
  {% if prototype %}
  <div class="footer-tagline">NIH... Turning Discovery into Health®</div>
  {% endif %}
  <div class="usa-footer__primary-section">
    <div class="grid-container">
    <nav class="usa-footer__nav grid-row grid-gap" aria-label="Footer navigation">
      <ul class="grid-row grid-gap grid-col-10">
        {% for f in foot %}<li class="tablet:grid-col-auto mobile-lg:grid-col-12   usa-footer__primary-content">
          <a class="usa-footer__primary-link" href="{{ f.href }}">{{ f.title }}</a>
        </li>
        {% endfor %}
      </ul>
      {% if prototype %}
      <div class="grid-col-auto befree-callout">
        <p>Learn More <br> @BeTobaccoFree.gov</p>
      </div>
      {% endif %}
    </nav>
    </div>
  </div>
  <div class="usa-footer__secondary-section">
    <div class="grid-container">
      <div class="grid-row grid-gap">
        <div
          class="usa-footer__logo grid-row mobile-lg:grid-col-6 mobile-lg:grid-gap-2"
        >
          <div class="">
            <img class="usa-footer__logo-img" src="{{ settings.sitelogo-small }}" alt="" />
          </div>
        </div>{% if prototype %}
        <div class="usa-footer__contact-links mobile-lg:grid-col-6">
          <div class="usa-footer__social-links grid-row grid-gap-1">
          {% for s in nav-foot.social %}
            <div class="grid-col-auto">
              <a class="usa-social-link" href="{{ s.link }}"
                >
                <svg class="usa-icon" aria-hidden="true" focusable="false" role="img"><use href="{{ s.svg }}"></use> </svg>
              </a>
            </div>
          {% endfor %}
          </div>
        </div>{% endif %}
      </div>
    </div>
  </div>
</footer>