# Introduction to Applied Accessibility

""Accessibility" generally means having web content and a user interface that can be understood, navigated, and interacted with by a broad audience. This includes people with visual, auditory, mobility, or cognitive disabilities."

- assistive technology
  - screen reader
  - voice recognition
  - keyboard only

Concepts
1. have well-organized code that uses appropriate markup
2. ensure text alternatives exist for non-text and visual content
3. create an easily-navigated page that's keyboard-friendly


## W3 Consortium's Web Content Accessibility Guidelines (WCAG)

They set the international standard for accessibility and provide a number of criteria you can use to check your work.

## Text Alternative for visually impaired accessibilityy

``` html
<img alt="Camper cat doing karate" src="doingKarateWow.jpeg">
```

- `alt`
- text describes the content of the image and provides a text-alternative for it
- used by search engines to understand what an image contains
- People with visual impairments rely on screen readers to convert web content to an audio interface
  - screen readers can access the alt attribute and read its contents
- if image is already explained with text content, or does not add meaning to a page, 
  - `alt` can be set to an empty string.
- For images with a caption, you may still want to include alt text, since it helps search engines catalog the content of the image

## Use Headings to Show Hierarchical Relationships of Content

- Headings are workhorse tags that help provide structure and labeling to your content
- Importnat for heading tags to have semantic meaning and relate to each other, not picked merely for their size values
  - `semantic meaning` - indicates the type of of information it contains
- each page should always have one and only one `h1` element - the main subject of your content

## HTML5 elements with accessibility features

- tags
  - `main`
  - `header`
  - `footer`
  - `nav`
  - `article`
  - `section`
- gives appropriate meaning in your markup
- assistive technologies can access this information to provide better page summary or navigation option to their users

``` html
<body>
  <header>
    <h1></h1>
    <nav>
      <ul>
        <li></li>
        <li></li>
        <li></li>
      </ul>
    </nav>
  </header>
  <main>
    <section>
      <h2></h2>
      <article>
        <h3></h3>
      </article>
      <article>
        <h3></h3>
      </article>
    </section>
  </main>
  <footer></footer>
</body>
```

## Jump straightto content using main element

- `main`
- main content
- should be only one per page
- not meant to include items that repeat across pages (navigation links or banners)
- has embedded landmark feature
  - "Jump to Main Content"

## Wrap Content in the article element

- `article`
- sectioning element
- wrap independent, self-contained content
- works well with blog entries, forum posts, news articles
- how to determine? (judgement call)
  - if you removed all surrounding context, would that content still make sense?
  - would the content hold up if it were in an RSS feed?

## section, div, article

- `section`
  - slightly different semantic meaning than article
- `article` is for standalone content
- `section` is for grouping thematically related content
  - can be used within each other, as needed.
- if a book is the `article`, then each chapter is a `section`
- when there is no relationship between groups of contentm then use a `div`


``` markdown
<div> - groups content
<section> - groups related content
<article> - groups independent, self-contained content
```

## Make navigation easier with the header landmark

- `header`
- used to wrap introductory information or navigation links for its parent tag
- works well around content that's repeated at the top on multiple pages
- has embedded landmark feature to quickly navigate to that content
- meant for use in the `body` tag
  - different than the `head` element, which contains the page's title, meta information etc

## Make navigation easier with the nav landmark

- `nav`
- wrap around with the main navigation links in your page

## Make navigation easier with the footer landmark

- `footer`
- secondary navigation links at the bootom of the page
- primarily used to contain copyright information or links to related documents

## Improve Accessibility of Audio Content with the audio element

- `audio`
- wraps sound or audio stream content in the markup
- audio content needs a text alternative
  - nearby text on the page or a link to a transcript
- supports `controls` attribute
  - shows thebrowser the default play, pause, and other controls
  - supports keyboard functionality
  - boolean attribute
    - its presence on the tag turns the setting on

``` html
<audio id="meowClip" controls>
  <source src="audio/meow.mp3" type="audio/mpeg" />
  <source src="audio/meow.ogg" type="audio/ogg" />
</audio>
```

- multimedia content usually has both visual and auditory components
  - needs synchronized captions and a transcript
- generally, a web developer is not responsible for creating captions or transcript
  - needs to know to include them

## Improve Chart Accessibility with figure element

- `figure`, `figcaption`
- wrap visual representation (image, diagram, chart) along with its caption
- sematically grouping related content
- provides text alternative

``` html
<figure>
  <img src="roundhouseDestruction.jpeg" alt="Photo of Camper Cat executing a roundhouse kick">
  <br>
  <figcaption>
    Master Camper Cat demonstrates proper form of a roundhouse kick.
  </figcaption>
</figure>
```

## Improve Form field accessibility with the label element

- attributes in forms
- `label`
  - wraps text for specific form control item
  - `for` attribute
    - explicitly associates that label with the form conrtols
    - used for screen readers
    - value should be the same as the value if the `id` attribute of the form control