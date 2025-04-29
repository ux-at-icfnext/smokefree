---
layout: base.html
title: Library
hero:
  image: /assets/images/hero.png
  callout:
    alt: "Welcome"
    text: To the DMX Library
  button:
    href: /library/about/
    text: Get Started
  link:
    text: Link to more about that priority
    href: /link/
  content: This library allows us to use the USWDS customized for our clients.

tagline: Get your pattern library up and running quickly.
intro: |
  This system helps you to document your brand expression of the [U.S. Web Design System](https://designsystem.digital.gov/components/overview/) for your government clients. 

  You will be able to maintain your functional and content specifications, while keeping track of your design changes to both out of box or custom components.

graphics:
  - image:
      src: /assets/images/icon-code.png
      alt: ""
    title: HTML/CSS based Library
    description: Build a library that looks like your brand. And see elements and components as they will appear on your site.
  - image:
      src: /assets/images/icon-team.png
      alt: ""
    title: Full team support
    description: Get your designers and content authors involved with easy to edit Markdown files. While developers are presented with an easy structure to update code snippets.
  - image:
      src: /assets/images/icon-org.png
      alt: ""
    title: Accessible to your whole organization
    description: No need to worry about different contracts building out different web properties. This library can be hosted to be available for all to view and use.
  - image:
      src: /assets/images/icon-web.png
      alt: ""
    title: Quick Design Prototypes
    description: With your full library available, staging design prototypes is quick, allowing for ideation and approvals.
---

{% include "patterns/libhero.md" %}

{% if tagline and intro %}
    <section class="grid-container usa-section">
      <div class="grid-row grid-gap">
        <div class="tablet:grid-col-4">
          <h2 class="font-heading-xl margin-top-0 tablet:margin-bottom-0">{{ tagline }}</h2>
        </div>
        <div class="tablet:grid-col-8 usa-prose">
          {{ intro | markdownify }}
        </div>
      </div>
    </section>
{% endif %}


<section class="graphic-list usa-section usa-section--dark">
<div class="grid-container">
<div class="usa-graphic-list__row grid-row grid-gap" style="row-gap: 100px;">
{% for card in graphics %}
<div class="usa-media-block tablet:grid-col-6">
<img class="usa-media-block__img" src="{{ card.image.src}}">
<div class="usa-media-block__body">
<h2 class="usa-graphic-list__heading">{{ card.title }}</h2>
<p>{{ card.description | markdownify }}</p></div>
</div>
{% endfor %}
</div>
</div>
</section>


<section class="grid-container usa-section">
  <h2>Download this kit and get your library started today.</h2>
  <p>Check out our <a href="/library/about//">documentation</a> on how to get your library started.</p>
  <p><a href="/library/about/" class="usa-button usa-button">Get Started</a>
</section>
