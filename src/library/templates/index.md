---
layout: base.html
title: Templates
---
<div class="grid-container">

# {{ title }}

Below are examples of templates that we commonly use in our websites. Of course these are "wireframe" examples that do not include visual aesthetics and can be used as started files. {: .usa-intro }

<ul class="usa-card-group">
  {% for l in collections.template %}
    <li class="usa-card tablet-lg:grid-col-6 widescreen:grid-col-3">
      <div class="usa-card__container">
      <div class="usa-card__body">
        <h4 class="usa-card__heading">{{ l.data.title}}</h4>
        {{ l.data.summary}}
      </div>
      <div class="usa-card__footer">
        <a href="{{ l.url }}" class="usa-button">view template</a>
      </div>
      </div>
    </li>
  {% endfor %}
</ul>

</div>