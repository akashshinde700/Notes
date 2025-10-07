# Cascading Style Sheets (CSS)

## 1. What is CSS?
CSS stands for **Cascading Style Sheets**. It is used to style and design web pages — colors, fonts, layout, spacing, etc. HTML builds the structure, and CSS decorates it.

### Basic Format of CSS
A CSS rule = **Selector + Property + Value**

```css
selector {
    property: value;
}
```

**Example:**
```css
p {
    color: blue;
    font-size: 20px;
}
```

---

## 2. Types of CSS
1. **Inline CSS**
   ```html
   <h1 style="color: red;">Hello World</h1>
   ```

2. **Internal CSS**
   ```html
   <style>
       h1 {
           color: blue;
       }
   </style>
   ```

3. **External CSS**
   ```html
   <link rel="stylesheet" href="style.css">
   ```

---

## 3. Color Property
Used to set the text color.

```css
h1 {
    color: red;
}
```

---

## 4. Color System
- **Named Colors**: red, blue, green
- **RGB**: `rgb(255, 0, 0)`
- **RGBA**: `rgba(255, 0, 0, 0.5)`
- **HEX**: `#FF0000`
- **HSL**: `hsl(0, 100%, 50%)`

---

## 5. Hexadecimal Colors
Six-digit code → `#RRGGBB`
Each pair (RR, GG, BB) represents a color value (0–255).

**Example:**
```css
body {
    background-color: #00FF00;
}
```

---

## 6. Binary Relation
RGB values are based on binary (0–255 = 8-bit).
`rgb(255, 0, 0)` = `#FF0000`

---

## 7. Text Properties
| Property          | Description                     | Example                       |
|-------------------|---------------------------------|-------------------------------|
| `color`           | Sets text color                | `color: blue;`               |
| `font-size`       | Sets font size                 | `font-size: 18px;`           |
| `font-family`     | Sets font style                | `font-family: Arial;`        |
| `font-weight`     | Boldness                       | `font-weight: bold;`         |
| `text-align`      | Aligns text                    | `text-align: center;`        |
| `text-decoration` | Underline/none                 | `text-decoration: underline;`|
| `text-transform`  | Uppercase/lowercase            | `text-transform: uppercase;` |
| `letter-spacing`  | Space between letters          | `letter-spacing: 2px;`       |
| `line-height`     | Space between lines            | `line-height: 1.5;`          |

---

## 8. Selectors in CSS
Selectors decide which element to style.

| Selector Type    | Example                          | Description                              |
|------------------|----------------------------------|------------------------------------------|
| Element          | `p {}`                          | Selects all `<p>` elements               |
| ID               | `#main {}`                      | Selects element with `id="main"`         |
| Class            | `.box {}`                       | Selects elements with `class="box"`      |
| Universal        | `* {}`                          | Selects all elements                     |
| Grouping         | `h1, p {}`                      | Styles multiple selectors                 |
| Descendant       | `div p {}`                      | Selects `<p>` inside `<div>`             |
| Attribute        | `input[type="text"] {}`         | Selects by attribute                     |

---

## 9. Pseudo Classes
Used to style elements in a special state.

| Pseudo Class      | Example                   | Meaning                     |
|-------------------|---------------------------|-----------------------------|
| `:hover`          | `button:hover`            | When hovered                |
| `:active`         | `a:active`                | When clicked                |
| `:focus`          | `input:focus`             | When focused                |
| `:first-child`    | `li:first-child`          | First item                  |
| `:last-child`     | `li:last-child`           | Last item                   |

---

## 10. Selector Specificity
If multiple styles target the same element:

| Type       | Example                  | Weight |
|------------|--------------------------|--------|
| Inline     | `<p style="">`           | 1000   |
| ID         | `#id`                    | 100    |
| Class      | `.class`                 | 10     |
| Element    | `p`                      | 1      |

---

## 11. Inheritance in CSS
Some properties automatically pass to child elements (e.g., `color`, `font`). Others (e.g., `margin`, `padding`) do not.

Use `inherit` keyword to force inheritance:
```css
p {
    color: inherit;
}
```

---

## 12. Box Model
Every element is a box → **Content → Padding → Border → Margin**

```css
div {
    width: 200px;
    padding: 10px;
    border: 2px solid black;
    margin: 20px;
}
```

---

## 13. Border Radius
Used to make rounded corners.

```css
div {
    border-radius: 10px;
}
```

---

## 14. Padding
Space between content and border.

```css
div {
    padding: 20px;
}
```

---

## 15. Padding Shorthand
`padding: top right bottom left;`

```css
padding: 10px 20px 30px 40px;
```

---

## 16. Margin
Space outside the border.

```css
div {
    margin: 20px;
}
```

---

## 17. Display Property
| Type          | Description                     |
|---------------|---------------------------------|
| `block`       | Takes full width                |
| `inline`      | Takes only required width       |
| `inline-block`| Inline + allows height/width    |
| `none`        | Hides element                   |

```css
div {
    display: block;
}
span {
    display: inline;
}
```

---

## 18. Alpha Channel
Defines transparency in RGBA color.

```css
color: rgba(255, 0, 0, 0.5);
```

---

## 19. Opacity
Controls the transparency of the entire element.

```css
div {
    opacity: 0.7;
}
```

---

## 20. CSS Transition
Smoothly changes a property from one value to another.

```css
div {
    transition: background-color 0.5s ease;
}
```

---

## 21. Transition Shorthand
`transition: property duration timing-function delay;`

```css
transition: all 0.3s ease-in-out;
```

---

## 22. CSS Transform
| Function         | Description               | Example                        |
|------------------|---------------------------|--------------------------------|
| `rotate()`       | Rotates element           | `transform: rotate(45deg);`    |
| `scale()`        | Grows/Shrinks             | `transform: scale(1.5);`       |
| `translate()`    | Moves element             | `transform: translate(20px, 50px);` |
| `skew()`         | Tilts element             | `transform: skew(20deg, 10deg);` |

---

## 23. Box Shadow
Adds shadow behind elements.

```css
div {
    box-shadow: 5px 5px 10px gray;
}
```

---

## 24. Background Image
Adds an image to the background.

```css
body {
    background-image: url('image.jpg');
    background-size: cover;
    background-repeat: no-repeat;
}
```

---

## 25. Position Property
Controls element positioning.

| Value       | Description                     |
|-------------|---------------------------------|
| `static`    | Default                         |
| `relative`  | Relative to itself              |
| `absolute`  | Relative to parent              |
| `fixed`     | Fixed on screen                 |
| `sticky`    | Sticks when scrolling           |

---

## 26. Position: Static
Default behavior (no positioning).

```css
div {
    position: static;
}
```

---

## 27. Position: Relative
Moves element relative to its normal position.

```css
div {
    position: relative;
    top: 20px;
    left: 30px;
}
```

---

## 28. Position: Absolute
Positions relative to the nearest positioned parent.

```css
div {
    position: absolute;
    top: 50px;
    right: 30px;
}
```

---

## 29. Position: Fixed
Stays fixed even when scrolling.

```css
nav {
    position: fixed;
    top: 0;
    width: 100%;
}
```

---

## 30. Flexbox
A layout model that aligns items easily in a row or column.

```css
.container {
    display: flex;
}
```

---

## 31. Flex Model
Defines direction, alignment, and spacing.
- **Main Axis**: Direction items flow
- **Cross Axis**: Perpendicular to main axis

---

## 32. Flex Direction
Controls layout direction.

```css
.container {
    flex-direction: row; /* default */
    flex-direction: column;
    flex-direction: row-reverse;
}
```

---

## 33. Justify Content
Aligns items horizontally along the main axis.

```css
.container {
    justify-content: center;
}
```

| Value            | Meaning                          |
|------------------|----------------------------------|
| `flex-start`     | Left                             |
| `flex-end`       | Right                            |
| `center`         | Center                           |
| `space-between`  | Equal space between items        |
| `space-around`   | Equal space around items         |

