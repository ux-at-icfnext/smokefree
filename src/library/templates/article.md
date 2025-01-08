---
layout: base
title: Article
summary: |
  These pages are at the end of a person's journey. Content created here should be focused on supporting the purpose of the resource. It provides dynamic navigational content to other pages like topic, search, and home.

date: "Created"
author: Alice
image: /library/templates/imgs/alice-teaparty.png
tags: templates

prototype: true
alert: 
  content: please see the <a href="/library/specs/article">specifications</a> page for this template

---
<style>
  @media (min-width: 1024px){
    .wrapper {
      display: flex;
      gap: 20px;
    }
    .siderail {
      max-width: 300px;
    }
  }
</style>
<div class="grid-container usa-prose">
<div class="wrapper">
<article>

# Prepare to Quit
Quitting is hard. But quitting can be a bit easier if you have a plan. When you think you’re ready to quit, here are a few simple steps you can take to put your plan into action. {: .usa-intro}

![Photo of a mom, dad, and three kids in a park on a sunny day. The kids are playing with hula hoops.](/assets/images/Hoola_hoop_family_hero.jpg)

Remind yourself of the rewards of quitting to help yourself stay on track:

- **20 minutes:** heart rate, blood pressure drop
- **12 hours:** carbon monoxide in the bloodstream drops to normal
- **2 weeks–3 months:** circulation, lung function improves; heart attack risk begins to drop
- **1–9 months:** cough less, breathe easier
- **1 year:** risk of coronary heart disease cut in half
- **2–5 years:** risk of cancer of mouth, throat, esophagus, bladder cut in half; stroke risk is reduced to that of a nonsmoker
- **10 years:** half as likely to die from lung cancer; risk of kidney or pancreatic cancer decreases
- **15 years:** risk of coronary heart disease same as non-smoker’s risk

## Immediate Rewards
There is no safe amount of cigarette smoke. When you smoke, the chemicals in tobacco reach your lungs quickly every time you inhale. Your blood carries the toxins to every organ in your body. But after you quit, your body begins to heal within 20 minutes of your last cigarette. The nicotine leaves your body within three days. As your body starts to repair itself, you may feel worse instead of better. [Withdrawal can be difficult](https://smokefree.gov/challenges-when-quitting/withdrawal/managing-nicotine-withdrawal), but it’s a sign that your body is healing.

## Long-Term Rewards
Quitting can help you add years to your life. Smokers who quit before age 40 reduce their chance of dying too early from smoking-related diseases by about 90 percent. Those who quit by age 45–54 reduce their chance of dying too early by about two-thirds. You can take control of your health by quitting and staying smokefree. Over time, you’ll greatly lower your risk of death from lung cancer and other diseases such as heart disease, stroke, chronic bronchitis, emphysema, and at least 13 other kinds of cancer.

When you quit, you’ll also protect your loved ones from dangerous [secondhand smoke](https://smokefree.gov/quit-smoking/why-you-should-quit/secondhand-smoke). You’ll set a good example and show your family that a life without cigarettes is possible.
</article>
  <div class="siderail">
    {% assign card = article.quit %}
    {% include 'patterns/quitnote.md' %}
  </div>
</div>

---

## More for you {: .block-title}
{% assign card = article.card %}
{% include "patterns/card.md" %}

</div> <!-- closes grid -->
