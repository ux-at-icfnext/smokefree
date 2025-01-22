---
layout: "right.md"
title: Identifier
tags: patterns
summary: The identifier communicates a site’s parent agency and displays agency links required by federal laws and policies.

branded: true
date: 2024-08-18
---

## Design
{% include 'patterns/identifier.md' %}

## Required links
GSA has links that are required to go into this section. Please view [digital.gov](https://digital.gov/resources/required-web-content-and-links/?_gl=1*17f69hv*_ga*MjA5MjY0NzMyMC4xNzM3NDgxNjU5*_ga_HBYXWFP794*MTczNzQ4NjA1Mi4yLjEuMTczNzQ4ODM2NS4wLjAuMA..}) to learn more.

- About HHS: [https://www.hhs.gov/about/index.html](https://www.hhs.gov/about/index.html)  
- About NIH: [https://www.nih.gov/about-nih](https://www.nih.gov/about-nih)  
- About NCI: [https://www.cancer.gov/about-nci](https://www.cancer.gov/about-nci)  
- Accessibility statement: [https://smokefree.gov/accessibility](https://smokefree.gov/accessibility)  
- FOIA requests: [https://www.cancer.gov/policies/foia](https://www.cancer.gov/policies/foia)  
- No FEAR Act data: [https://www.hhs.gov/about/agencies/asa/eeo/no-fear-act/index.html](https://www.hhs.gov/about/agencies/asa/eeo/no-fear-act/index.html)  
- Office of the Inspector General: [https://oig.hhs.gov/](https://oig.hhs.gov/)  
- Performance reports: tbd  
- Privacy policy: [https://smokefree.gov/privacy-policy](https://smokefree.gov/privacy-policy)  

## Additional Links
Along with the GSA required links, these links were also added to that section from the former Smokefree footer.
- Players & Viewers: https://www.hhs.gov/web/policies-and-standards/hhs-web-policies/plugins/index.html
- HHS Vunerablity Disclosure: https://www.hhs.gov/vulnerability-disclosure-policy/index.html?cid=eb_govdel
- Disclaimers: https://smokefree.gov/disclaimer



## Theme Settings
We didn't need to update the out of box settings to match the site. These are listed here for reference.

- `$theme-identifier-background-color` The background color of the identifier. Use a color of grade 80 or higher, darker than the section that precedes it.
- `$theme-identifier-font-family` The font family of the identifier.
- `$theme-identifier-identity-domain-color` The color of your domain text in the identifier masthead. This should be grade 20-30 in the same family as the `$theme-identifier-background-color`.
- `$theme-identifier-max-width` The maximum width of the content within the identifier. Use the same max-width as your site footer.
- `$theme-identifier-primary-link-color` The color of the links in the masthead section. Default uses either the standard or reverse link color set with `$theme-link-color` and `$theme-link-reverse-color`.
- `$theme-identifier-secondary-link-color` The color of the links in the required links section. This should be **grade 20-30** in a gray family.

## Library prototyping notes
The component is automatically included on any prototype page by setting `prototype:true` in the YAML front matter.

To edit the component to match your project, edit the following file: `/_includes/patterns/identifier.md`.

**If the site you are working on is not a .gov or .mil site, remove the identifier from your prototype**