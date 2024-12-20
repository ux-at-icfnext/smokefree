---
layout: base.html
title: Specs
---
<div class="grid-container">

# {{ title }}

Below are template level specifications for the different pages templates for the Smokefree website. {: .usa-intro }

<ul class="usa-card-group">
  {% for l in collections.specs %}
    <li class="usa-card tablet-lg:grid-col-6 widescreen:grid-col-3">
      <div class="usa-card__container">
      <div class="usa-card__body">
        <h4 class="usa-card__heading">{{ l.data.title}}</h4>
        {{ l.data.summary}}
      </div>
      <div class="usa-card__footer">
        <a href="{{ l.url }}" class="usa-button">view specifications</a>
      </div>
      </div>
    </li>
  {% endfor %}
</ul>

</div>