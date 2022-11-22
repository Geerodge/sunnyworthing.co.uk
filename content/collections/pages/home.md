---
id: home
blueprint: pages
title: Home
template: default
updated_by: 3bd1f3d1-f089-4ca4-a2f7-76ff9d4b5bf9
updated_at: 1668708585
block_builder:
  -
    heading: 'The Definitive Guide'
    type: hero
    enabled: true
    textarea: 'to Worthing, West Sussex'
    background: bg-brand-primary
    image: worthing-pier-hero.png
    pretextarea: 'Welcome to Sunny Worthing'
    hero_form_field: hero_subscription
  -
    image_side: right
    background: bg-brand-white
    subtitle: 'Fun activites'
    title: 'Things To Do In Worthing'
    content:
      -
        type: paragraph
        attrs:
          class: null
        content:
          -
            type: text
            text: 'There’s plenty of attractions and things to do in Worthing and the surrounding areas.'
      -
        type: bullet_list
        content:
          -
            type: list_item
            content:
              -
                type: paragraph
                attrs:
                  class: null
                content:
                  -
                    type: text
                    text: 'Fun activities and games'
          -
            type: list_item
            content:
              -
                type: paragraph
                attrs:
                  class: null
                content:
                  -
                    type: text
                    text: 'Family friendly'
          -
            type: list_item
            content:
              -
                type: paragraph
                attrs:
                  class: null
                content:
                  -
                    type: text
                    text: 'Walks and Nature'
          -
            type: list_item
            content:
              -
                type: paragraph
                attrs:
                  class: null
                content:
                  -
                    type: text
                    text: History
    images:
      - cissbury-ring.jpg
      - dome-cinema.jpg
      - south-downs.jpg
      - splash-point.jpg
      - worthing-pier.jpg
      - worthing-splash-point.jpg
    button_text: 'Read more'
    button_color: button--primary
    type: image_aside_multi
    enabled: true
    bard:
      -
        type: paragraph
        attrs:
          class: 'p p-base font-sans'
        content:
          -
            type: text
            text: test
    textarea: 'There’s plenty of attractions and things to do in Worthing and the surrounding areas.'
    list:
      - 'Fun activities and games'
      - 'Family friendly'
      - 'Walks and nature'
      - History
    image:
      - dome-cinema.jpg
      - splash-point.jpg
      - south-downs.jpg
      - worthing-pier.jpg
      - worthing-splash-point.jpg
  -
    youtube_url: 'https://www.youtube.com/watch?v=wSUJzmTpmUE'
    type: youtube_video
    enabled: true
  -
    cards:
      -
        title: 'Things to Do in Worthing'
        price: £19.99
        textarea: 'With tons of outdoor space, a wicked art scene and a rich history – what’s not to love about Worthing!'
        button_text: 'Read more'
        button_url: /
        button_color: button--primary
        type: new_set
        enabled: true
        image: worthing-splash-point.jpg
        center_align: 'No'
      -
        button_color: button--primary
        type: new_set
        enabled: true
        title: 'Food and Drink'
        price: £19.99
        textarea: 'Explore Worthing’s restaurants serving award winning food. We have lots of cafés, bars, and pubs too…'
        button_text: 'Read more'
        button_url: /
        image: food-and-drink.jpg
        center_align: 'No'
      -
        title: 'Explore Sussex'
        price: £19.99
        textarea: 'Escape the city and explore the beauty of the Sussex countryside, coastline and surrounding areas…'
        button_text: 'Read more'
        button_url: /
        button_color: button--primary
        type: new_set
        enabled: true
        image: south-downs.jpg
        center_align: 'No'
    type: cards
    enabled: true
---
