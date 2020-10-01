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

## Element position

``` css
p {
  position: relative;
  bottom: 10px;
}
/* 10 pixels away from the bottom */
/* bottom offset moved upwards */
```

-specify how CSS should move it relative to its current position in the normal flow of the page
- pairs with the CSS offset properties of left or right, and top or bottom
- how far (px, %, ems) to move the item away from where it is normally positioned
- does not remove it from the normal flow
- `position: relative`

### CSS offsets

- moves element away from the referenced side
- "a left offset moves an item to the right."
- "top offset moved the element downwards"


## Resource/s

[FreeCodeCamp](https://www.freecodecamp.org/learn)
[w3schools](https://www.w3schools.com)
