# CSS Grid

- turn an element to a grid container with rows and columns for you to place children elements

## Use `display:flex` to position two boxes

- `display: grid`
  - turns an element into a grid container

## Add columns and rows with `grid-template-columns` and `grid-template-rows`

- add columns/rows to the grid
  - number of parameters = number of columns/rows
  - value of parameter = width/height of each column/row

``` css
.container {
  display: grid;
  grid-template-columns: 50px 50px;
  grid-template-rows: 100px 100px
}
```

## Use CSS Grid units to change the size of columns and rows

- absolute (`px`) and relative (`em`) units
- `fr` - sets column/row to a fraction of the available space
- `auto` - sets column/row to width/height of its content automatically
- `%` - adjusts the column/row to the percent width of its container

## Create Gaps using `grid-column-gap`, `grid-row-gap`, `grid-gap`

- creates gaps between all columns/row
  - `grid-column-gap: 10px;`
  - `grid-row-gap: 5px;`

- shorthand property
- creates a gap between all rows and columns
  - `grid-gap: 5px;`
  - `grid-gap: {row-gap} {column-gap};`

## Use `grid-column` and `grid-row` to control spacing

- for grid items
- lines
  - hypothetical horizontal and vertical lines that create the drid
  - numbered starting with 1 at top left corner
    - move right for columns
    - move down for rows 
- `grid-column: {line-start} / {line-end};`
  - control the amount of columns an item will consume
- `grid-row: {line-start} / {line-end};`
  - control the amount of row an item will consume

## Align an Item Horizontally using `justify-self`

- cell
  - box where content of each item is located
- `justify-self`
  - align content's position in its cell horizontally
  - default: `stretch` - make content fill the whole width of the cell
  - `start` - aligns the content at the left of the cell
  - `center` - aligns the content in the center of the cell
  - `end` - aligns the content at the right of the cell

## Align an Item Vertically using `align-self`

- `align-self`
  - align content's position in its cell vertically
  - default: `stretch` - make content fill the whole height of the cell
  - `start` - aligns the content at the top of the cell
  - `center` - aligns the content in the center of the cell
  - `end` - aligns the content at the bottom of the cell

## Align All items horizontally using `justify-items`

- `justify-items`
  - align all items in its container horizontally
  - default: `stretch` - make content fill the whole width of the cell
  - `start` - aligns the content at the left of the cell
  - `center` - aligns the content in the center of the cell
  - `end` - aligns the content at the right of the cell

## Align All items vertically using `align-items`

- `align-items`
  - align all items in its container vertically
  - default: `stretch` - make content fill the whole width of the cell
  - `start` - aligns the content at the top of the cell
  - `center` - aligns the content in the center of the cell
  - `end` - aligns the content at the bottom of the cell

## Divide the Grid into and Area Template

- `grid-template-areas`
  - group cells of grid into an area
  - every word (area name) represents a cell
  - every pair of quotation marks represent a row
  - `.` = empty cell in a grid

``` css
grid-template-areas:
  "header header header"
  "advert content content"
  "footer footer footer";
```

## Place Items in Grid Areas using teh `grid-area` property

- `grid-area`
  - place an item in custom are by referencing the name

``` css
.item1 {
  grid-area: header;
}
```

## Use `grid-area` without creating an Areas Template

- create an area on the fly

``` css
grid-area: horizontal line to start at / vertical line to start at / horizontal line to end at / vertical line to end at;

grid-area: {row-line-start} / {column-line-start} / {row-line-end} / {column-line-end};

item1 {
  grid-area: 1/1/2/4;
}
```

## Reduce Repetition Using the `repeat` function

- to use with `grid-template-columns` and `grid-tempalte-rows`

``` css
grid-template-rows: repeat(100, 50px);
/* creates 100 row grid, each 50px tall */

grid-template-columns: repeat(2, 1fr 50px) 20px;

/*  is tthe same as */

grid-template-columns: 1fr 50px 1fr 50px 20px;
```

## Limit Item Size using `minmax` function

- to use with `grid-template-columns` and `grid-tempalte-rows`
- limit the size of items when the grid container changes size
  - specify acceptable size range 
- `grid-template-columns: 100px minmax(50px, 200px);`
  - create two columns
    - a: 100px wide
    - b: min width of 50px and max width of 200px

## Create Flexible Layouts using `auto-fill`

- `repeat`function's `auto-fill`
  - -automatically insert as many rows or columns of desired size depending on the size of the container
  - if container can't fit all items in one row, it will move them down to a new one
- `repeat(auto-fill, minmax(60px, 1fr));`

## Create Flexible Layouts using `auto-fit`

- `repeat`function's `auto-fill`
  - when the container's size exceeds the size of the items combined, items are stretched to fit the size of the container
  - if container can't fit all items in one row, it will move them down to a new one

## Use Media Querues to Create Responsive Layouts

- to rearrange grid areas
- change dimensions of a grid
- rearrange placement of items

``` css
@media (min-width: 300px){
    .container{
      grid-template-columns: auto 1fr;
      grid-template-rows: auto 1fr auto;
      grid-template-areas:
        "advert header"
        "advert content"
        "advert footer";
    }
  }

  @media (min-width: 400px){
    .container{
      grid-template-areas:
      /* Only change code below this line */
        "header header"
        "advert content"
        "footer footer";
      /* Only change code above this line */
    }
```

## Create Grids within Grids

- turning an element into a grid only affects the behavior of its direct descendants.
- turning a direct descendant into a grid, a grid within a grid is created

## Resource/s

- [FreeCodeCamp](https://www.freecodecamp.org/learn)