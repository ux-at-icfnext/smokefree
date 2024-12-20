---
layout: "right.md"
title: Hero
tags: patterns
custom: true
summary: Heros are used to ground the viewer in landing pages where are the pathways to deeper content

date: 2024-08-17

include: "{% include 'patterns/hero.md' %}"

alert:
  type: usa-alert--info
  heading: Custom Component
  body: |
    This is a custom component that is not in the USWDS, however it still follows the UX best practices.
---
{% assign hero = landing.hero %}
{% include 'patterns/alert.md' %}

## Design

{% include 'patterns/hero.md' %}