{% if prototype %}
{% assign nav = nav.nav %}
{% assign utls = nav.utls %}
{% else %}
{% assign nav = lib-nav.nav %}
{% endif %}


<div class="usa-overlay"></div>
<header class="usa-header usa-header--extended">
  <div class="usa-nav-container">
  <div class="usa-navbar">
  <div class="usa-logo">
  {% if settings.sitelogo %}
  <a href="/" title="{{ settings.sitename }}"><img style="" src="{{ settings.sitelogo }}" /></a>
  {% else%}
  <em class="usa-logo__text"><a href="/" title="{{ settings.sitename }}">{{ settings.sitename }}</a></em>
  {% endif %}
  </div>
  <button type="button" class="usa-menu-btn">Menu</button>
  </div>
  <nav aria-label="Primary navigation" class="usa-nav">
    <button type="button" class="usa-nav__close">
    <img src="/assets/img/usa-icons/close.svg" role="img" alt="Close" />
  </button>
  <ul class="usa-nav__primary usa-accordion">
  {% for i in nav %}
  {% if i.subnav %}
  <li class="usa-nav__primary-item">
  <button
    type="button"
    class="usa-accordion__button usa-nav__link {% if page.url == i.href %}usa-current{% endif %}"
    aria-expanded="false"
    aria-controls="basic-nav-section-{{forloop.index}}">
  <span>{{ i.title }}</span>
  </button>
  <ul id="basic-nav-section-{{forloop.index}}" class="usa-nav__submenu">
  {% for p in i.subnav %}
  <li class="usa-nav__submenu-item">
  <a href="{{ p.href }}"><span>{{ p.title }}</span></a>
  </li>
  {% endfor %}
  </ul>
  </li>
  {% else%}
  <li class="usa-nav__primary-item">
  <a href="{{ i.href }}" class="usa-nav-link {% if page.url == i.href %}usa-current{% endif %}"><span>{{ i.title }}</span></a>
  </li>
  {% endif %}
  {% endfor %}
  </ul>
  <div class="usa-nav__secondary">
  <ul class="usa-nav__secondary-links">
  {% for u in utls %}
  <li><a href="{{ u.href }}" class="usa-nav-link "><span>{{ u.title }}</span></a></li>
  {% endfor %}
  </ul>
  {% include 'patterns/search.md' %}
  </div>
  </div>
  </nav>
</header>
