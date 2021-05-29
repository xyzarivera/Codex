# Build a Tribute Page

What I've learned

-   use `id` property tag to important blocks
-   enclose `<img/>` in `<figure>`
-   if a figure needs a caption, use `<figurecaption>`
-   user CSS selectors

    -   `html tag` - applies to all html tags
    -   `#id_name` - applies to html tags with id = id_name

-   semantics used

```html
<script></script>
<html>
    <main>
        <figure>
            <img />
            <figurecaption> <figurecaption/>
        </figure>
        <div>
            <h1></h1>
            <div>
                <p></p>
            </div>
        </div>
    </main>
</html>
```

-   How to import fonts using url in css

```css
@import url("https://fonts.googleapis.com/css2?family=Press+Start+2P&family=Ubuntu+Mono&display=swap");
```

-   responsive image based on width

```css
img {
    max-width: 100%; /*makes sure the image is never wider than the container*/
    height: auto; /*make image keeps its original aspect ration*/
}
```
