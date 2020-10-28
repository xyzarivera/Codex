# Applied Visual Design

## text-align property

``` css
text-align: justify;
text-align: center;
text-align: right;
text-align: left;
```

- `text-align`
  - `justify` - causes all lines of text except the last line to meet the left and right edges of the line box.
  - `center`
  - `right`
  - `left` - default

## strong tag

``` html
<p>Google was founded by Larry Page and Sergey Brin while they were Ph.D. students at <strong>Stanford University</strong>.</p>
```

- With the strong tag, the browser applies the CSS of `font-weight: bold;` to the element.
- to draw attention to text and symbolize that it is important

## u tag

``` html
<p>Google was founded by Larry Page and Sergey Brin while they were <u>Ph.D. students</u> at <strong>Stanford University</strong>.</p>
```

- With the `u` tag, the browser applies the CSS of `text-decoration: underline;` to the element.
- to signify that a section of text is important, or something to remember
-Anchor tags also have a default underlined formatting.

## em tag

``` html
<p>Google was founded by Larry Page and Sergey Brin while they were <u>Ph.D. students</u> at <strong>Stanford University</strong>.</p>
```

- With the `em` tag, the browser applies the CSS of `font-style: italic;` to the element.

## s tag

``` html
<h4><s>Google</s>Alphabet</h4>
```

- With the `s` tag, the browser applies the CSS of `text-decoration: line-through;` to the element.

## hr tag

``` html
<hr>
```

- to add a horizontal line across the width of its containing element
- to define a change in topic or to visually separate groups of content
- a self-closing tag

## header tags

- The font size of header tags (`h1` through `h6`) should generally be larger than the font size of paragraph tags.

## box-shadow property

``` css
box-shadow: offset-x offset-y blur-radius spread-radius color |inset|initial|inherit;

box-shadow: 0 10px 20px rgba(0,0,0,0.19), 0 6px 6px rgba(0,0,0,0.23)
```

- applies one or more shadows to an element
-`box-shadow`
  - `offset-x` - how far to push the shadow horizontally from the element
  - `offset-y` - how far to push the shadow vertically from the element),
  - `blur-radius` - Optional. The blur radius. The higher the number, the more blurred the shadow will be
  - `spread-radius` - Optional. The spread radius. A positive value increases the size of the shadow, a negative value decreases the size of the shadow
  - `color` - Optional. The spread radius. A positive value increases the size of the shadow, a negative value decreases the size of the shadow
  - `inset` - Optional. Changes the shadow from an outer shadow (outset) to an inner shadow
  - `initial` - Sets this property to its default value.
  - `inherit` - Inherits this property from its parent element.

## opacity property

- `opacity`
  - `1` - opaque
  - `0.5` - half see-through
  - `0` - transparent

## text-transform property

- `text-transform`
  - `lowercase`
  - `uppercase`
  - `capitalize`
  - `initial`
  - `inherit`
  - `none`

## font-size property

- specify how large the text is in a given element
- `font-size`
  - px

## font-weight property

- sets how thick or thin characters are in a section of text
- `font-weight`
  - 200 - 800, 100 intervals

## line-height property

- change the height of each line in a block of text.
- changes the amount of vertical space that each line of text gets.
- `line-height`
  - px

## pseudo-classes

- a keyword that can be added to selectors, in order to select a specific state of the element
- `:hover`

## CSS Box Model

- CSS treats each HTML element as its own box
  - default
  - *normal flow*
- Block-level items automatically start on a new line 
  - `<hX>`
  - `<p>`
  - `<div>`
- inline items sit within surrounding content
  - `<img>`
  - `<span>`

## CSS offset properties

- how far (px, %, ems) to move the item away from where it is normally positioned
- moves element away from the referenced side
- "a left offset moves an item to the right."
- "top offset moved the element downwards"
- `top`, `bottom`, `left`, `right`
  - `px`, `%`, `ems`

## Relative element position

``` css
p {
  position: relative;
  bottom: 10px;
}
/* 10 pixels away from the bottom */
/* bottom offset moved upwards */
```

- specify how CSS should move it relative to its current position in the normal flow of the page
- pairs with the CSS offset properties
- does not remove it from the normal flow
  - other elements around it still behave as if that item were in its default position
- `position: relative`

## Absolute element position

``` html
<style>
  #searchbar {
    position: absolute;
    top: 50px;
    right: 50px;
  }
  section {
    position: relative;
  }
</style>
<body>
  <h1>Welcome!</h1>
  <section>
    <form id="searchbar">
      <label for="search">Search:</label>
      <input type="search" id="search" name="search">
      <input type="submit" name="submit" value="Go!">
    </form>
  </section>
</body>

```

- locks the element in place relative to its closest parent container with css style `position: relative`
  - If forgetten to add a position rule to the parent item, the browser will keep looking up the chain and ultimately default to the body tag.
- removes the element from the normal flow of the document
- `position: absolute`

## Fixed element position

``` html
<style>
  body {
    min-height: 150vh;
  }
  #navbar {
    position: fixed;
    top: 0px;
    left: 0px;
    width: 100%;
    background-color: #767676;
  }
  nav ul {
    margin: 0px;
    padding: 5px 0px 5px 30px;
  }
  nav li {
    display: inline;
    margin-right: 20px;
  }
  a {
    text-decoration: none;
  }
</style>
<body>
  <header>
    <h1>Welcome!</h1>
    <nav id="navbar">
      <ul>
        <li><a href="">Home</a></li>
        <li><a href="">Contact</a></li>
      </ul>
    </nav>
  </header>
  <p>I shift up when the #navbar is fixed to the browser window.</p>
</body>
```

- type of absolute positioning
- locks an element relative to the browser window
- removes the element from the normal flow of the document
- an element with a fixed position won't move when the user scrolls
- `position: fixed`

## Float Property

``` html
<head>
  <style>
    #left {
      float: left;
      width: 50%;
    }
    #right {
      float: right;
      width: 40%;
    }
    aside, section {
      padding: 2px;
      background-color: #ccc;
    }
  </style>
</head>
<body>
  <header>
    <h1>Welcome!</h1>
  </header>
  <section id="left">
    <h2>Content</h2>
    <p>Good stuff</p>
  </section>
  <aside id="right">
    <h2>Sidebar</h2>
    <p>Links</p>
  </aside>
</body>
```

- removed from the normal flow of a document 
- pushed to either the left or right of their containing parent element
- commonly used with the width property

## z-index property

``` html
<style>
  div {
    width: 60%;
    height: 200px;
    margin-top: 20px;
  }

  .first {
    background-color: red;
    position: absolute;
    z-index: 2;
  }
  .second {
    background-color: blue;
    position: absolute;
    left: 40px;
    top: 50px;
    z-index: 1;
  }
</style>

<div class="first"></div>
<div class="second"></div>
```

- think of it as layers in photoshop lol
- when elements are positioned to overlap using `(position: absolute | relative | fixed | sticky)`
- specify order of elements are stacked on top of one another
- `z-index`
  - integer number
  - higher the number, the higher in the stack

## Center Horizontally a Block Element

``` css
margin: auto
```

## Changing Inline elements to Block using display

```css
img {
  display: block;
}
```
- images are inline images by default
- changed to block elements using `display`

## Colors

- RYB color model
  - outdated
- additive RGB color model
  - computer screens 
  - primary colors
    - Red
    - Green
    - Blue
  - Secondary Colors
    - Cyan (G + B)
    - Magenta (R + B)
    - Yellow ( R + G)
    - complimentary to primary colors not used in creation
      - Magenta is complimentary to Green
- subtractive CMY(K) color model
  - printing


### Complimentary Colors

- opposite from each other in the color wheel
- when combined, cancels each other
  - creates a gray color 

### Tertiary Colors

- result of combining a primary color with one of its secondary color neighbors
- various methods of selecting different colors
  - split-complementary color scheme

### Hue, Saturation, Lightness

- introduced in CCS3
- hsl()
- tint
  - adding white
- shade 
  - adding black
- tone
  - adding gray
  - or both tinting and shading

```
red	hsl(0, 100%, 50%)
yellow	hsl(60, 100%, 50%)
green	hsl(120, 100%, 50%)
cyan	hsl(180, 100%, 50%)
blue	hsl(240, 100%, 50%)
magenta	hsl(300, 100%, 50%)
```

#### Hue

- uses color wheel concept
- 0 -360

#### Saturation

- amount of gray in color
- fully saturated, no gray
- percentage

#### Lightness

- amount of white or black 
- 0% black, 100% white, 50% normal color

## Linear Gradient

``` css
background: linear-gradient(gradient_direction, color 1, color 2, color 3, ...);

background: linear-gradient(90deg, red, yellow, rgb(204, 204, 255));
```

### Repeating Linear Gradient

``` css
background: repeating-linear-gradient(
      90deg,
      yellow 0px,
      blue 40px,
      green 40px,
      red 80px
    );
/* 0px [yellow -- blend -- blue] 40px [green -- blend -- red] 80px */
```

``` css
background: repeating-linear-gradient(
      45deg,
      yellow 0px,
      yellow 40px,
      black 40px,
      black 80px
    );
/* Make stripes by changing the repeating-linear-gradient() to use a gradient angle of 45deg, then set the first two color stops to yellow, and finally the second two color stops to black. */
```

- accepts a variety of values
  - angle value - direction of gradient
  - color stops - width values that mark where a transition takes place (% or px)

## Adding background image

``` css
body {
    background: url("https://cdn-media-1.freecodecamp.org/imgr/MJAkxbh.png")
  }
```

-The background property supports the url() function in order to link to an image   
  - link address is wrapped in quotes inside the parentheses

## Transform property

``` css
p {
  transform: scale(2);
}
/* doubles the size of all the paragraph */
p {
  transform: skewX(-32deg);
}
/* skews the paragraph element by -32 degrees along the X-axis. */
```

- Transform has a variety of functions
  - `scale()`
  - move
  - rotate
  - `skewX()`
    - which skews the selected element along its X (horizontal) axis by a given degree
  - `skewY()` 
    - skews an element along the Y (vertical) axis.
  - etc
- applying transform to a `div` element will also affect any child elements contained in the div


## Resource/s

[FreeCodeCamp](https://www.freecodecamp.org/learn)
[w3schools](https://www.w3schools.com)
