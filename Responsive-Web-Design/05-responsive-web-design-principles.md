# Responsive Web Design Principles

- different devices have different screen sizes, resolutions, and processing power
- page structure and CSS rules should be flexible 
- in genneral, desing the page's CSS to your target CSS
  - mobile-first approach, then add conditional rules for larger screens
    - if you expect most of your traffic to be from mobile

## Create a Media Query

- Media Query
  - changes content presentaion based on different viewport sizes
  - CSS3
  - consists of a media type
    - applies styles based on this
    - no limit on selectors ansd styltes inside a media query
- Viewport
  - a user's visible are of a webpage

``` css
@media (max-width: 100px) { /* CSS Rules */ }
@media (min-height: 350px) { /* CSS Rules */ }
```

## Make an Image Responsive

``` css
img {
  max-width: 100%; /*makes sure the image is never wider than the container*/
  height: auto; /*make image keeps its original aspect ration*/
}
```

## Use a Retina Image for Higher Resolution Displays

- pixel debsity
  - Pixel per Inch (PPI)
  - Dots per Inch (DPI)
- retina display
  - found on lateset Apple MacBook Pro notebooks
  - images not for High-Resolution Display could look pixelated 
- remedy
  - define `width` and `height` as only half of what the original file is

## Make Typograpy Responsive

- viewport units can be used
  - relative units to viewport dimensions (width or height)
  - `vh` or `vw`
  - `vmin` - x% of viewport's smaller dimension
  - `vmasx` - x% of viewport's bigger dimension
- percentages
  - relative units to size of the parent container



## Resource/s

[FreeCodeCamp](https://www.freecodecamp.org/learn)