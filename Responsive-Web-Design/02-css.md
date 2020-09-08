# Introduction to CSS

Cascading Style Sheets (CSS) tell the browser how to display the text and other content that you write in HTML.

- case-sensitive
- The idea behind CSS is that you can use a selector to target an HTML element in the DOM (Document Object Model) and then apply a variety of attributes to that element to change the way it is displayed on the page.
- you can apply multiple classes to an element using its class attribute, by separating each class name with a space

## Ways to apply CSS styling

1. inline styles - directly to HTML elements with the style attribute
2. style tags -  HTML document
3. external style sheet - reference that file in the HTML document

## Common Properties

- `color` - font color
- `font-size`
- `font-family: FAMILY_NAME, GENERIC_NAME;`
  - `FAMILY_NAME` - case-sensitive. need to wrapped in `""` if there is space in the name
  - `GENERIC_NAME` - optional, fallback font in case the other font is not available [monospace, serif,  sans-serif]. not case-sensitive. CSS keywords.
- `width`
- borders
  - `border-color`
  - `border-width`
  - `border-style`
  - `border-radius`

## Inline CSS

``` html
<h2 style="color: blue;">CatPhotoApp</h2>
```

## CSS Selectors

``` html
<style>
  h2 {
    color: red;
  }
</style>
```

- CSS selector for h2 elements

## CSS class

``` html
<style>
  .blue-text {
    color: blue;
  }
</style>

<h2 class="blue-text">CatPhotoApp</h2>
```

- reusable styles
- class names start with a period in CSS style element

## id selector

``` css
#cat-photo-element {
  background-color: green;
}
```

- `id` is not reusable. should only be applied to one element.
- An `id` also has a higher specificity (importance) than a `class`
  - if both are applied to the same element and have conflicting styles, the styles of the id will be applied.

## other HTML attribute CSS selectors

``` css
[type='radio'] {
  margin: 20px 0px 20px 0px;
}
```

- `[attr=value]` attribute selector
  - matches and styles elements with a specific attribute value.

## Importing fonts from internet

``` html
<link href="https://fonts.googleapis.com/css?family=Lobster" rel="stylesheet" type="text/css">

<style>
...
```

## padding, border, margin

- important properties control the space that surrounds each HTML element
- padding
  - `padding`
  - `padding-top`
  - `padding-right`
  - `padding-bottom`
  - `padding-left`
  - `padding: 10px 20px 10px 20px; // t-r-b-l or clockwise`
  - controls the amount of space between the element's content and its border
- margin
  - `margin`
  - `margin-top`
  - `margin-right`
  - `margin-bottom`
  - `margin-left`
  - `margin: 10px 20px 10px 20px; // t-r-b-l or clockwise`
  - margin controls the amount of space between an element's border and surrounding elements
  - If you set an element's margin to a negative value, the element will grow larger.

## Absolute and Relative Units

- pixels `px`
- Absolute units tie to physical units of length
  - `in` inches
  - `mm` millimeters
- Relative units are relative to another length value
  - `em`
    - based on the size of an element's font
  - `rem`

## CSS Inheritance

- the HTML body element can also be styled with CSS
  - all your other elements will inherit your body element's styles
- overriding
  - browsers read CSS from top to bottom in order of their declaration
  - classes will override the body element's CSS
    - multiple classes
      - order of the class declarations in the `<style>` section is what is important
      - The second declaration will always take precedence over the first.
  - id declarations override class declarations, regardless of where they are declared in your style element CSS
  - inline styles will override all the CSS declarations in your style element
  - `!important`
    - In many situations, you will use CSS libraries. These may accidentally override your own CSS. So when you absolutely need to be sure that an element has specific CSS, you can use !important

## HEX code for Specific Colors

`#000000 or #000 // 0 to F`

In CSS, we can use 6 hexadecimal digits to represent colors, two each for the red (R), green (G), and blue (B) components. For example, #000000 is black and is also the lowest possible value. You can find more information about the RGB color system here.

## RGB values to Color Elements

`rgb(0, 0, 0) // 0 to 255`

## CSS Variables

``` css
.penguin {
    --penguin-skin: gray;
    --penguin-belly: white;
    --penguin-beak: orange;
  }

.penguin-top {
    background: var(--penguin-skin, gray);
  }

.belly {
    background: var(--penguin-belly, white);
  }

.beak-top {
    background: var(--penguin-beak, orange);
  }

```

- Fallback value is not used to increase browser compatibility, and it will not work on IE browsers. Rather, it is used so that the browser has a color to display if it cannot find your variable.

``` html
<style>
  :root {
    --penguin-belly: pink;
  }

  body {
    background: var(--penguin-belly, #c6faf1);
  }
</style>
```

- To make use of inheritance, CSS variables are often defined in the `:root` element.
  - `:root` is a pseudo-class selector that matches the root element of the document, usually the html element.
  - By creating your variables in :root, they will be available globally and can be accessed from any other selector in the style sheet.

``` css
:root {
    --penguin-skin: gray;
    --penguin-belly: pink;
    --penguin-beak: orange;
  }

  body {
    background: var(--penguin-belly, #c6faf1);
  }

  .penguin {
    --penguin-belly: white;
  }
```

- over-write these variables by setting them again within a specific element.

``` css
:root {
    --penguin-size: 300px;
    --penguin-skin: gray;
    --penguin-belly: white;
    --penguin-beak: orange;
  }

  @media (max-width: 350px) {
    :root {
      /* Only change code below this line */
      --penguin-size: 200px;
      --penguin-skin: black;
      /* Only change code above this line */
    }
  }
```

- when your screen is smaller or larger than your media query break point, you can change the value of a variable, and it will apply its style wherever it is used.

## Improve Compatibility with Browser Fallbacks

``` html
<style>
  :root {
    --red-color: red;
  }
  .red-box {
    background: red;
    background: var(--red-color);
    height: 200px;
    width:200px;
  }
</style>
<div class="red-box"></div>
```

- browser compatibility issues
  - important to provide browser fallbacks to avoid potential problems
  - If it can't find any other value set for that property, it will revert to the default value, which is typically not ideal.
- Internet Explorer will ignore the background color because it does not support CSS variables

## Resource/s

[FreeCodeCamp](https://www.freecodecamp.org/learn)
