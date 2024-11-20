---
layout: "left"
title: Resource Video
summary: |
  These pages are "product" at the end of a person's journey. Content created here should be focused on supporting the purpose of the resource. It provides dynamic navigational content to other pages like topic, search, and home.

date: "Created"
author: Alice
file-description: A placeholder pdf to show how a download would work.
episode-name: Placeholder Video
episode-link: https://www.youtube.com/embed/tgbNymZ7vqY
length: "3:33:20"
transcript: |
  a transcript should be included for accessibility.


accordion:
  bordered: true # Defaults to false, do not need to include unless you want the border
  multiselect: true # Defaults to false, do not need to include unless you want multi-select
  alpha: b # Defaults to a, do not need to include unless you have multiple accordions on one page
  list:
    - title: Transcript
      content: a transcript should be included for accessibility.


card:
  tablet: 3
  widescreen: 3
  list:
    - title: Alice in Wonderland
      img: card-image-sample.png
      body: |
        It was high time to go, for the pool was getting quite crowded with the birds and animals that had fallen into it,
      button:
        - link: "#"
          label: "Drink me"
    - title: Alice in Wonderland
      img: card-image-sample.png
      body: |
        It was high time to go, for the pool was getting quite crowded with the birds and animals that had fallen into it,
      button:
        - link: "#"
          label: "Drink me"
    - title: Alice in Wonderland
      img: card-image-sample.png
      body: |
        It was high time to go, for the pool was getting quite crowded with the birds and animals that had fallen into it,
      button:
        - link: "#"
          label: "Drink me"
    - title: Alice in Wonderland
      img: card-image-sample.png
      body: |
        It was high time to go, for the pool was getting quite crowded with the birds and animals that had fallen into it,
      button:
        - link: "#"
          label: "Drink me"


tags: templates
---
<style>
  iframe {
  aspect-ratio: 16 / 9;
  width: 100%;
}
.usa-accordion {
  margin-top: 1rem;
}
</style>


<iframe 
src="{{ episode-link }}">
</iframe>

## {{episode-name}}
Date: {{ page.date | date: "%A - %b %d, %Y" }} | Length: {{ length }}


{% include 'patterns/accordion.md' %}


{{ summary }}{: .usa-intro }


## This seemed to Alice a good opportunity 
for making her escape; so she set off at once, and ran till she was quite tired and out of breath, and till the [puppy’s bark](#) sounded quite faint in the distance.

‘I don’t see,’ said the Caterpillar.

‘Ugh!’ said the Lory, with a shiver.


Once more she found herself in the long hall, and close to the little glass table. ‘Now, I’ll manage better this time,’ she said to herself, and began by taking the little golden key, and unlocking the door that led into the garden. 
- Then she went to work 
- nibbling at the mushroom 
- (she had kept a piece of it in her pocket) 

till she was about a foot high: then she walked down the little passage: and THEN--she found herself at last in the beautiful garden, among the bright flower-beds and the cool fountains.,

‘May it please your Majesty,’ said Two, in a very humble tone, going down on one knee as he spoke, ‘we were trying--’

### You may also like

{% include 'patterns/card.md' %}