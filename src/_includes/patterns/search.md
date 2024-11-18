{% if search.button == "small" %}
  {% assign type = "usa-search--small" %}
{% endif %}
{% if search.button == "big" %}
  {% assign type = "usa-search--big" %}
{% endif %}
{% if search.class %}
  {% assign class = search.class %}
{% endif %}
<section aria-label="Search component">
<form class="usa-search {{ type }}" role="search">
<label class="usa-sr-only" for="search-field">{{ search.label | default: 'Search' }}</label>
<input class="usa-input" id="search-field" type="search" name="search" placeholder="{{ search.placeholder }}" />
<button class="usa-button {{ class }}" type="submit">
{% unless search.button == "small" %}<span class="usa-search__submit-text">{{ search.label | default: 'Search'  }}</span>
{% else %}
<img src="/assets/img/usa-icons-bg/search--white.svg" class="usa-search__submit-icon" alt="Search"/>
{% endunless %}
</button>
</form>
</section>