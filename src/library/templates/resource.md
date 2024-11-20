---
layout: "left"
title: Resource File
summary: |
  These pages are "product" at the end of a person's journey. Content created here should be focused on supporting the purpose of the resource. It provides dynamic navigational content to other pages like topic, search, and home.

date: "Created"
author: Alice
file-description: A placeholder pdf to show how a download would work.
file-name: Placeholder PDF
file: /library/templates/imgs/placeholder.pdf
image: /library/templates/imgs/alice-teaparty.png

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
  .pdf-hero {
    display: flex;
    gap: 10px;
  }
</style>

<div class="pdf-hero">

![tea party]({{image}})
<div>

  {{ page.date | date: "%A - %b %d, %Y" }}
  by: {{ author }}   

  {{ file-description }}
  
  <button class="usa-button" type="button">PDF Placeholder Button</button>
</div>
</div>


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

## Alice did not at all
### like the tone of this remark
And thought it would be as well to introduce some other subject of [conversation](). While she was trying to fix on one, the cook took the cauldron of soup off the fire, and at once set to work throwing everything within her reach at the Duchess and the baby--the fire-irons came first; then followed a shower of saucepans, plates, and dishes. The Duchess took no notice of them even when they hit her; and the baby was howling so much already, that it was quite impossible to say whether the blows hurt it or not.

Alice tried to fancy to herself what such an extraordinary ways of living would be like, but it puzzled her too much, so she went on: ‘But why did they live at the bottom of a well?’

‘I’ll fetch the executioner myself,’ said the King eagerly, and he hurried off.

Alice said nothing: she had never been so much contradicted in her life before, and she felt that she was losing her temper.

‘It goes on, you know,’ the Hatter continued, ‘in this way:--

### You may also like

{% include 'patterns/card.md' %}