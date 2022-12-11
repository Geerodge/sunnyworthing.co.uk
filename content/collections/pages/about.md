---
id: cb57477d-5748-4c4c-a535-33fd4699c002
blueprint: pages
title: About
updated_by: 3bd1f3d1-f089-4ca4-a2f7-76ff9d4b5bf9
updated_at: 1670782720
block_builder:
  -
    image: worthing-pier-sunset.jpg
    type: hero
    enabled: true
    heading: 'Discover Worthing'
    textarea: 'Places to visit and the surrounding area'
    pretextarea: 'Sunny Worthing'
    hero_form_field: hero_subscription
  -
    background: bg-brand-primary
    bard:
      -
        type: heading
        attrs:
          level: 2
        content:
          -
            type: text
            text: 'About Worthing'
      -
        type: paragraph
        attrs:
          class: null
        content:
          -
            type: text
            text: 'Worthing is a large traditional seaside town in West Sussex. It’s perfectly placed between the South Downs National Park and the English Channel, with an estimated population of about 110,000.'
      -
        type: paragraph
        attrs:
          class: null
        content:
          -
            type: text
            text: 'It’s easy to live a healthy and laid back lifestyle in Worthing, with our large open promenade often enjoyed by runners and cyclists, award winning resturants and countryside walks across the South Downs.'
    type: bard
    enabled: true
    images:
      - beach-huts.jpg
      - worthing-seafront-sunset.jpg
      - worthing-beach-boat.jpg
    image:
      - worthing-beach-boat.jpg
      - worthing-seafront-sunset.jpg
      - beach-huts.jpg
    google_map_field:
      lat: 50.820366057838
      lng: -0.38860297228149
      markerLat: 50.819715366936
      markerLng: -0.3797624113684
      zoom: 13
      type: roadmap
  -
    background: bg-white
    bard:
      -
        type: heading
        attrs:
          level: 2
        content:
          -
            type: text
            text: 'Worthing and Surrounding Area'
      -
        type: paragraph
        attrs:
          class: null
        content:
          -
            type: text
            text: 'Worthing boasts easy access to much of Sussex, Brighton and London. It’s the perfect base for exploring.'
      -
        type: paragraph
        attrs:
          class: null
        content:
          -
            type: text
            text: 'You can hop onto a train from 1 of 3 stations Worthing has to offer, and within…'
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
                    marks:
                      -
                        type: bold
                    text: '20 minutes;'
                  -
                    type: text
                    text: ' start exploring the alleyways of the Brighton Lanes'
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
                    marks:
                      -
                        type: bold
                    text: '45 minutes;'
                  -
                    type: text
                    text: ' arrive at Gatwick Airport to catch a flight to Europe'
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
                    marks:
                      -
                        type: bold
                    text: '80 minutes;'
                  -
                    type: text
                    text: ' stroll out of London Victoria into the City of London'
    google_map_field:
      lat: 50.822310394196
      lng: -0.37796748696861
      zoom: 13
      type: roadmap
      style: null
    type: bard_with_map
    enabled: true
  -
    background: bg-white
    bard:
      -
        type: heading
        attrs:
          level: 2
        content:
          -
            type: text
            text: 'Worthing History and Points of Interest'
      -
        type: paragraph
        attrs:
          class: null
        content:
          -
            type: text
            text: 'For many centuries Worthing was a small mackerel fishing hamlet until in the late 18th century it developed into an elegant Georgian seaside resort and attracted the well-known and wealthy of the day.'
      -
        type: paragraph
        attrs:
          class: null
        content:
          -
            type: text
            text: 'Jane Austen’s unfinished final novel Sanditon is thought to have been significantly based on experiences from her stay in Worthing, and Oscar Wilde wrote The Importance of Being Earnest while staying in the town in the summer of 1894.'
      -
        type: paragraph
        attrs:
          class: null
        content:
          -
            type: text
            text: 'More recent artists from Worthing include Alma Cogan, Royal Blood and The Ordinary Boys, including many more.'
      -
        type: paragraph
        attrs:
          class: null
        content:
          -
            type: text
            text: "Worthing is full of open spaces, Art Deco buildings and architecture. Here are just a few areas of interest.\_"
    type: bard
    enabled: true
    google_map_field:
      lat: 0
      lng: 0
      zoom: '16'
      type: roadmap
  -
    cards:
      -
        image: about/worthing-pier.png
        title: 'Worthing Pier'
        textarea: 'Designed by Sir Robert Rawlinson and opened on 12 April 1862. Now home of the annual International Birdman competition and a grand Victorian mezzanine function room/café.'
        button_text: 'Read more'
        button_url: 'https://www.tripadvisor.co.uk/Attraction_Review-g190761-d1116864-Reviews-Worthing_Pier-Worthing_West_Sussex_England.html'
        button_color: button--primary
        type: new_set
        enabled: true
        center_align: 'yes'
      -
        image: about/dome-cinema.png
        title: 'The Dome Cinema'
        textarea: 'A stunning Edwardian cinema that first opened in April 1911. It has now been fully restored to its former glory and is open to the public.'
        button_text: 'Read more'
        button_color: button--primary
        type: new_set
        enabled: true
        center_align: 'yes'
        button_url: 'entry::40e6119c-7904-4f58-8550-09a871bd639d'
      -
        image: about/cissbury-ring.png
        title: 'Cissbury Ring'
        textarea: "Cissbury Ring is a hill fort on the South Downs. It's the largest hill fort in Sussex and has a history dating back over 5,000 years."
        button_text: 'Read more'
        button_url: 'https://www.nationaltrust.org.uk/cissbury-ring/features/the-story-of-cissbury-ring'
        button_color: button--primary
        type: new_set
        enabled: true
        center_align: 'yes'
      -
        image: about/worthing-museum.png
        title: 'Worthing Museum and Art Gallery'
        textarea: 'Worthing Museum and Art Gallery has one of the largest costume and textile collections in the UK.'
        button_text: 'Read more'
        button_url: 'https://wtm.uk/museum/'
        button_color: button--primary
        type: new_set
        enabled: true
        center_align: 'yes'
      -
        image: about/beach-house-park.png
        title: 'Beach House Park'
        textarea: "Worthing's most prestigious town centre park. Best known for its bowling greens and free outdoor Chess and Draughts."
        button_text: 'Read more'
        button_url: 'https://www.tripadvisor.co.uk/Attraction_Review-g190761-d12702359-Reviews-Beach_House_Park-Worthing_West_Sussex_England.html'
        button_color: button--primary
        type: new_set
        enabled: true
        center_align: 'yes'
      -
        image: about/high-salvington-windmill.png
        title: 'High Salvington Post Mill'
        textarea: 'Travel into the village of High Salvington and on the corner of Bost Hill and Mill Lane is a black post windmill built between 1700 and 1720.'
        button_text: 'Read more'
        button_color: button--primary
        type: new_set
        enabled: true
        center_align: 'yes'
        button_url: 'entry::a8e86c6a-1d24-4f57-a34b-19cc85fc08b5'
    type: cards
    enabled: true
---
