# CSS Flexbox

- website User Interface (UI) components
  - visual elements
    - colors, fonts, images
  - placement/positioning of the elemetns
- responsive web design
  - ui layout must accommodate many different browsers and devices 

- CSS3 introduced Flexible Boxes (flexbox)
  - create layouts for dynamic UI
- flexbox is a layout mode
  - arranges elements in a predictable way 
- all popular browsers support flexbox

## Use `display:flex` to position two boxes

- `display:flex`
  - allows to use other flex properties to build a responsive page
  - turns an element into a flex container

## Use `flex-direction` property to make a row

- `flex-direction`
  - aligns any children of that element into rows or columns
  - added to parent item
  - `row`, `column`, `row-reverse`, `column-reverse`
    - default: `row`

## Align elements using the `justify-content` property

- how to space the flex items along the main axis
- main axis 
  - if `flex-direction: row`, main axis is a horizontal line
  - if `flex-direction: column`, main axis is a vertical line
- default: `flex-start`

| value | behavior | row | column | 
| --- | --- | --- | --- |
| `center` | aligns center inside | - | - |
| `flex-start` | aligns items to the start of the flex container | left | top |
| `flex-end` | aligns items to the end of the flex container | right | bottom|
|  `space-between` | aligns item to the center of the main axis. first and last items are pushed to the very edge of the flex container. space distributed evenly between the items | - | - |
| `space-around` | similar to `space-between` but first and last items are not locked to the edges. space is distributed arount all the items with half-space on either end of the container | - | - |
| `space-evenly` | distributes space between the flex items with fulls pace at either end of the container | - | - |

## Align elements using the `aign-items` property

- how to space the flex items along the cross axis
- cross axis 
  - if `flex-direction: row`, main axis is a vertical line
  - if `flex-direction: column`, main axis is a column line
- default: `stretch`
- baseline 
  - line that the letters sit on

| value | behavior | row | column | 
| --- | --- | --- | --- |
| `center` | aligns to center | equal space above and below the item | - |
| `flex-start` | aligns items to the start of the flex container | top | left |
| `flex-end` | aligns items to the end of the flex container | bottom | right|
|  `stretch` | stretch items to fill the flex container | items streched to fill the container top-to-bottom | - |
| `baseline` | align items to their baselines | - | - |

## Use the `flex-wrap` property to wrap a row or column

- split a flex item into multiple rows/column
- by default, a flex container will fit all flex items together
  - a row will all be on one line
- `flex-wrap`
  - tells CSS to wrap items
  - extra items move into a new row or coclumn
  - the break point of where the wrapping happens depends on the size of the items and the size of the container
- default: `nowrap`

| value | behavior | row | column | 
| --- | --- | --- | --- |
| `nowrap` | does npt wrap items | - | - |
| `wrap` | wraps item | left-to-right | top-to-bottom |
| `wrap-reverse` | wraps | right-to-left | bottom-to-top |

## Use the `flex-shrink` property to shrink items

- `flex-shrink`
  - allows an item to shrink if the flex container is too small
  - items shrink when the width of the parent container is smaller than all the combined widths of all the flex items within it
  - values: integers
    - the higher the number, the more it will shrink compared to other items in the container
    - example 
      - a has shrink value of 1
      - b has shrink value of 3
      - b will shrink 3 times as much as the other

## Use `flex-grow` property to expand items

- `flex-grow`
  - controls the size of the items when the parent container expands
  - values: integers
    - example 
      - a has shrink value of 1
      - b has shrink value of 3
      - b will grow 3 times as much as the other

## Use `flex-basis` property to set the initial size of an item

- `flex-basis`
  - specifies the initial size of the item before CSS makes adjustments with `flex-shrink` or `flex-grow`
  - units: `px`, `em`, `%`
  - value: integer
    - `auto` - sizes items based on the content

## Use the `flex` shorthand property

- shortcut for `flex-grow`, `flex-shrink`, and `flex-basis`
- `flex {a} {b} {c}`
  - a - value for `flex-grow`
  - b - value for `flex-shrink`
  - c - value for `flex-basis`
  - default: `flex: 0 1 auto;`

## Use the `order` property to rearrange items

- ider of how flex items appear in the flex container
- default: same order in the source html
- values: integerr (including negative numbers)

## Use the `align-self` property

- `align-self`
  - allows to adjust each item's alignment individually instead of setting them all at once
  - useful since `float`, `clear` and `vertical-align` do not work on flex items
  - overrides any value set by `align-items` property

| value | behavior | row | column | 
| --- | --- | --- | --- |
| `center` | aligns to center | equal space above and below the item | - |
| `flex-start` | aligns items to the start of the flex container | top | left |
| `flex-end` | aligns items to the end of the flex container | bottom | right|
|  `stretch` | stretch items to fill the flex container | items streched to fill the container top-to-bottom | - |
| `baseline` | align items to their baselines | - | - |

## Resource/s

- [FreeCodeCamp](https://www.freecodecamp.org/learn)
- [CSS Flexbox - Flex-direction Terms](https://www.w3.org/TR/css-flexbox-1/images/flex-direction-terms.svg)