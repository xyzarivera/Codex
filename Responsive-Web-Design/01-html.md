# Basic HTML and HTML 5

HTML, or HyperText Markup Language, is a markup language used to describe the structure of a web page.

## Comments

Comments in HTML start with <!-- and end with a -->

## HTML5 Elements

- main
  - `<main></main>`
- header
- footer
- nav
- video
- article
- section

## images

- `<img src="https://www.your-image-source.com/your-image.jpg" alt="Author.">`
- self-closing
- must have alt attribute. should not contain special characters unless needed.
- If the image is purely decorative, using an empty alt attribute is a best practice.

## links

- a (anchor)
  - `<a href="https://freecodecamp.org">this links to freecodecamp.org</a>`
  - a elements need a destination web address called an href attribute. They also need anchor text.
  - `<a href="#contacts-header">Contacts</a> ... <h2 id="contacts-header">Contacts</h2>`
  - To create an internal link
    - href attribute to a hash symbol # plus the value of the id attribute
    - An id is an attribute that uniquely describes an element.
  - `target="_blank"`
    - causes the linked document to open in a new window tab
  -`<a href="#" target="_blank">cat photos</a>.`
    - dead link

## bulleted/unordered list

``` html
<ul>
  <li>milk</li>
  <li>cheese</li>
</ul>
```

## numbered/ordered list

``` html
<ol>
  <li>Garfield</li>
  <li>Sylvester</li>
</ol>
```

## text forms

``` html
<form action="/url-where-you-want-to-submit-form-data">
  <input type="text" placeholder="this is placeholder text">
  <button type="submit">this button submits the form</button>
</form>
```

- input element
  - self-closing
  - text field
    - type='text'
    - Placeholder text is what is displayed in your input element before your user has inputted anything.
- form
  - action attribute
    - submit data to a server using nothing more than pure HTML.
- submit button
  - Clicking this button will send the data from your form to the URL you specified with your form's action attribute.
- required attribute
  - `<input type="text" required>`

## multiple choice inputs

### radio

``` html
<form action="/url-where-you-want-to-submit-form-data">
  <label for="indoor">
    <input id="indoor" type="radio" value="indoor" name="indoor-outdoor">Indoor
  </label>
  <label for="outdoor">
    <input id="outdoor" type="radio" value="outdoor" name="indoor-outdoor">Outdoor
  </label>
</form>
```

### checkbox

``` html
<form action="/url-where-you-want-to-submit-form-data">
  <label for="loving"><input id="loving" value="loving" type="checkbox" name="personality"> Loving</label>
  <label for="happy"><input id="happy" value="happy" type="checkbox" name="personality"> Happy </label>
  <label for="lovely"><input id="lovely" value="lovely" type="checkbox" name="personality"> Lovely</label>
</form>
```

- wrapping `input` with `label` element
  - associate `input` with the `label` element surrounding it
- All related `inputs` should have the same `name` attribute.
- best practice
  - `label` element `for` attribute == `input` element `id` attribute
- Upon form submission
  - form data: `name=value`
    - `indoor-outdoor=indoor`
  - by default, value is `on`
- checked input by default
  - `<input type="radio" name="test-name" checked>`
  - `<input type="checkbox" name="test-name" checked>`

## division element

`<div></div>

- general purpose container for other elements.
- all HTML elements are essentially little rectangles.

## Declare the Doctype of an HTML Document

``` html
<!DOCTYPE ...>
  <!--tag on the first line, where the ... part is the version of HTML. 
  For HTML5, you use <!DOCTYPE html>.` -->
</html>
```

- declare HTML version
- The ! and uppercase DOCTYPE is important, especially for older browsers. The html is not case sensitive.

## Define the Head and Body of an HTML Document

``` html
<!DOCTYPE html>
<html>
  <head>
    <!-- metadata elements -->
  </head>
  <body>
    <!-- page contents -->
  </body>
</html>
```

- `head` tag
  - Any markup with information about your page
  - Metadata elements
    - link
    - meta
    - title
    - style
- `body` tag
  - content of the page
  - Every HTML page has a body element.

```html
<!DOCTYPE html>
<html>
  <head>
    <title>The best page ever</title>
  </head>

  <body>
  <h1>The best page ever</h1>
  <p>Cat ipsum dolor sit amet, jump launch to pounce upon little yarn mouse, bare fangs at toy run hide in litter box until treats are fed. Go into a room to decide you didn't want to be in there anyway. .</p>
</body>
</html>
```

## id attribute

You can use an id to style a single element and later you'll learn that you can use them to select and modify specific elements with JavaScript.

- id attributes should be unique

## Resource/s

[FreeCodeCamp](https://www.freecodecamp.org/learn)
