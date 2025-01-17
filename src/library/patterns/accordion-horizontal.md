---
layout: "right.md"
title: Horizontal Accordion
tags: patterns
summary: An accordion is a list of headers that hide or reveal additional content when selected.

date: 2024-08-02

include: "{% include 'patterns/accordion-horizontal.md' %}"

---

## Design
### Default Accordion

{% include "patterns/accordion-horizontal.md" %}


## Theme Settings
These aspects can be set within the theme settings.

## Variations


## Library prototyping notes
To use the data driven smart pattern, you'll need to set your content in the YAML front matter or in a data file. The component supports having multiple accordion groups on the page by adding the "alpha" property.


Include the pattern using this code:

``` markdown
 {{ include }}
```

If you need to change the name of your accordion group, especially for using multiple groups, you can reassign the accordion name.

``` markdown
 {{ include2 }}
```
