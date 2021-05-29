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

- importance of logical document outline
- using semantically meaningful tags around content before using visual design aspect
- CSS can also improve accessibility 


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

``` html
<form>
  <label for="name">Name:</label>
  <input type="text" id="name" name="name">
</form>
```

## Wrap Radio Buttons ins a fieldset element

- radios often comes in a group where the user must choose one
- semantically show the choices are part of a set
- `fieldset`
- surrounds the entire grouping of radio buttons 
  - `legend`
    - description for grouping
    - read by screen readers
- not necessary when choices are self-explanatory (eg. gender selection)
  - `label` with `for` is sufficient

``` html
<form>
  <fieldset>
    <legend>Choose one of these three items:</legend>
    <input id="one" type="radio" name="items" value="one">
    <label for="one">Choice One</label><br>
    <input id="two" type="radio" name="items" value="two">
    <label for="two">Choice Two</label><br>
    <input id="three" type="radio" name="items" value="three">
    <label for="three">Choice Three</label>
  </fieldset>
</form>
```

## Add an Accessible Date Picker

- `date`
- shows up in the input field when it's in focus
  - makes fillinga form easier for all users
  - depends on browser support
- for older browsers
  - default is `text` type 

``` html
<label for="input1">Enter a date:</label>
<input type="date" id="input1" name="input1">
```

## Standardize Times with HTML5 datetime attribute

- `time` element
  - inline element
- `datetime` attribute
- wrap a date or time on a page
- a valid format of the date is held

``` html
p>Master Camper Cat officiated the cage match between Goro and Scorpion <time datetime="2013-02-13">last Wednesday</time>, which ended in a draw.</p>
```

## Make Elements only visible to a screen reader by using custim CSS

- CSS can improve accessibility
  - visually hide content meant only for screen readers
- visual presentation (charts)
  - screen reader users need alternative presentation (table) to access data
- CSS does not do the same thing:
  - `display: none` or `visibility: hidden`
    - hides content for everyone (including screen reader users)
  - zero values for pixel sizes, `width: 0px; height: 0px`
    - removes the element from the document flow
    - screen readers will ignore it

``` css
.sr-only {
  position: absolute;
  left: -10000px;
  width: 1px;
  height: 1px;
  top: auto;
  overflow: hidden;
}
```

## Improve Readability with High Contrast Text

- sufficient contrast improves readability of content
- `4.5 to 1 contrast ratio for normal text`
  - Web Content Accessibility Guidelines (WCAG)
  - compare relative luminance/lightness values of two colors
  - applies to both color use and gray-scale combinations
  - `1:1` for same color (no contrast)
  - `21:1` for white against black (strongest contrast)
- can be achieved by shading the darker color and tinting the lighter color
  - darker shades - shades of blues, violets, magentas, and reds
  - lighter tinted colors - oranges, greens, blue-greens

## Avoid Colorblindness Issues by using sufficient contrast

- color is a large part of visual design
  - introduces two accessibility isses
    - color alone should not be used as the only wau to convey important information
      - screen reader users won't see it
    - foreground and background colors need sufficient contrast so colorblind users can distinguish them
- colorblind users have trouble distinguishing some colors from others
  - usually in hue and sometimes lightness as well

## Avoid Colorblindness Issues by carefully choosing colors that convey information

- various forms of colorblindness
  - reduced sensitivity to certain wavelength of light
  - inability to see color at all
- most common: reduced sensitivity to detect greens
  - two similar green colors are the foreground and background color
  - user may not be able to distinguish them
- Close colors can be thought as neighbors on color wheel
  - should be avoided when conveying important information
- some onle color picking tools include visual simulations of colorblindness

## Give Links meaning by using descriptive link text

- screen reader users have different options for what type of content their device reads
  - skipping to or over landmark elements
  - jumping to main content
  - getting a page summary from headings
  - only hear links available on a page
    - screen readers read the link text
    - having `click here` or `read more` isn't helpful
    - use brief but descriptive text within the `a` tags

``` html
<p>Felines the world over have been waging war on the most persistent of foes. This red nemesis combines both cunning stealth and lightning speed. But chin up, fellow fighters, our time for victory may soon be near. Click here for <a href="">information about batteries</a></p>
```

## Make Links navigable with HTML Access Keys

 - `accesskey` attribute
   - specify a shortcut key to activate or bring focus to an element
   - more efficient for keyboard-only users
   - can be used by any element
     - particularly useful when it's used with interactive ones
       - links
       - buttons
       - form controls

``` html
<button accesskey="b">Important Button</button>
```

## Use tabindex to add keyboard focus to an element

- `tabindex`
  - tag 
    - indicated the element can be focused on
    - value: integer (+,-,0) determines behavior
  - links and form controls
    - automatically receive keyboard focus when a user tabs through a page
    - same order as the elemtnts come in the HTML source markup
  - div, span, p 
    - `tabindex="0"`
  - a negative `tabindex` (-1) indicates that an element is focusable but is not reachable by the keyboard
    - brings focus to content programmatically 
      - eg. div used for a pop-up window is activated
- enables CSS pseudo-class `:focus` on a tag

``` html
<div tabindex="0">I need keyboard focus!</div>
```

## Use tabindex to specify the order of keyboard focus for several elements

- `tabindex`
  - specifies the exact tab order of elements when the value of the attribute is set to a positive number 
  - `tabindex="1` - focuses on that element first then cycles through the sequence of specified `tabindex` values (2,3 ...) before moving to default and `tabindex="0"`
- it overrides the default order (the HTML source)
  - may confuse users who are expecting to start navigation from top of the page
  - may be necessary in some circumstances

``` html
<div tabindex="1">I get keyboard focus, and I get it first!</div>

<div tabindex="2">I get keyboard focus, and I get it second!</div>
```
## Resource/s

[FreeCodeCamp](https://www.freecodecamp.org/learn)