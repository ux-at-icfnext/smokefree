{% if accordion.multiselect %}
  {% assign mclass = "usa-accordion--multiselectable" %}
  {% assign mdata = "data-allow-multiple" %}
{% endif %}

{% if accordion.bordered %}
  {% assign bclass = "usa-accordion--bordered" %}
{% endif %}

{% if accordion.alpha %}
  {% assign alpha = accordion.alpha %}
{% else %}
  {% assign alpha = "a" %}
{% endif %}

<div class="usa-accordion {{ mclass }} {{ bclass }}" {{mdata }}>
{% for acc in accordion.list %}
  <h4 class="usa-accordion__heading">
    <button
      type="button"
      class="usa-accordion__button"
      aria-expanded="false"
      aria-controls="{{alpha}}{{forloop.index}}"
    >
      {{ acc.title }}
    </button>
  </h4>
  <div id="{{alpha}}{{forloop.index}}" class="usa-accordion__content usa-prose">
    <p>
      {{ acc.content }}
    </p>
  </div>
{% endfor %}
</div>