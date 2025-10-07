🧾 1. Cascading Style Sheets (CSS) 🔹 What is CSS? CSS stands for
Cascading Style Sheets. It is used to style and design web pages ---
colors, fonts, layout, spacing, etc. HTML builds the structure, and CSS
decorates it. 🔹 Basic Format of CSS A CSS rule = Selector + Property +
Value selector { property: value; } Example: p { color: blue; font-size:
20px; }
\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_
🔹 Types of CSS 1. Inline CSS 2.
```{=html}
<h1 style="color:red;">
```
Hello World
```{=html}
</h1>
```
3.  Internal CSS

4.  ```{=html}
    <style>
    ```

5.  h1 { color: blue; }

6.  ```{=html}
    </style>
    ```

7.  External CSS

8.  `<link rel="stylesheet" href="style.css">`{=html}
    \_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_
    🎨 Color Property Used to set the text color. h1 { color: red; }
    \_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_
    🌈 Color System • Named Colors: red, blue, green • RGB: rgb(255,
    0, 0) • RGBA: rgba(255, 0, 0, 0.5) • HEX: #FF0000 • HSL: hsl(0,
    100%, 50%)
    \_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_
    💠 Hexadecimal Colors Six-digit code → #RRGGBB Each pair (RR, GG,
    BB) represents a color value (0--255). Example: body {
    background-color: #00FF00; }
    \_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_
    🔢 Binary Relation RGB values are based on binary (0--255 = 8-bit).
    rgb(255,0,0) = #FF0000
    \_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_
    ✍️ 2. Text Properties Property Description Example color Sets text
    color color: blue; font-size Sets font size font-size: 18px;
    font-family Sets font style font-family: Arial; font-weight Boldness
    font-weight: bold; text-align Aligns text text-align: center;
    text-decoration Underline/none text-decoration: underline;
    text-transform Uppercase/lowercase text-transform: uppercase;
    letter-spacing Space between letters letter-spacing: 2px;
    line-height Space between lines line-height: 1.5;
    \_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_
    🎯 3. Selectors in CSS Selectors decide which element to style.
    Selector Type Example Description Element p {} Selects all
    ```{=html}
    <p>
    ```
    ID #main {} Selects element with id="main" Class .box {} Selects
    elements with class="box" Universal \* {} Selects all elements
    Grouping h1, p {} Styles multiple selectors Descendant div p {}
    Selects
    ```{=html}
    <p>
    ```
    inside
    ```{=html}
    <div>
    ```
    Attribute input\[type="text"\] {} Selects by attribute
    \_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_
    🎭 4. Pseudo Classes Used to style elements in a special state.
    Pseudo Class Example Meaning :hover button:hover When hovered
    :active a:active When clicked :focus input:focus When focused
    :first-child li:first-child First item :last-child li:last-child
    Last item
    \_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_
    ⚖️ 5. Selector Specificity If multiple styles target the same
    element: Inline \> ID \> Class \> Element Type Example Weight Inline
    ```{=html}
    <p style="">
    ```
    1000 ID #id 100 Class .class 10 Element p 1
    \_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_
    🌳 6. Inheritance in CSS Some properties automatically pass to child
    elements (like color, font). Others (like margin, padding) do not.
    Use inherit keyword to force inheritance. p { color: inherit; }
    \_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_
    📦 7. Box Model Every element is a box → Content → Padding → Border
    → Margin div { width: 200px; padding: 10px; border: 2px solid black;
    margin: 20px; }
    \_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_
    🟢 8. Border Radius Used to make rounded corners. div {
    border-radius: 10px; }
    \_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_
    🧩 9. Padding Space between content and border. div { padding: 20px;
    }
    \_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_
    ✴️ 10. Padding Shorthand padding: top right bottom left; padding:
    10px 20px 30px 40px;
    \_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_
    🟣 11. Margin Space outside the border. div { margin: 20px; }
    \_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_
    💡 12. Display Property Type Description block Takes full width
    inline Takes only required width inline-block Inline + allows
    height/width none Hides element div { display: block; } span {
    display: inline; }
    \_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_
    💧 13. Alpha Channel Defines transparency in RGBA color. color:
    rgba(255, 0, 0, 0.5);
    \_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_
    🌫️ 14. Opacity Controls the transparency of the entire element. div
    { opacity: 0.7; }
    \_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_
    🔁 15. CSS Transition Smoothly changes a property from one value to
    another. div { transition: background-color 0.5s ease; }
    \_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_
    ⏩ 16. Transition Shorthand transition: property duration
    timing-function delay; transition: all 0.3s ease-in-out;
    \_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_
    🔄 17. CSS Transform Function Description Example rotate() Rotates
    element transform: rotate(45deg); scale() Grows/Shrinks transform:
    scale(1.5); translate() Moves element transform: translate(20px,
    50px); skew() Tilts element transform: skew(20deg, 10deg);
    \_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_
    🌫️ 18. Box Shadow Adds shadow behind elements. div { box-shadow: 5px
    5px 10px gray; }
    \_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_
    🖼️ 19. Background Image Adds an image to the background. body {
    background-image: url('image.jpg'); background-size: cover;
    background-repeat: no-repeat; }
    \_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_
    📍 20. Position Property Controls element positioning. Value
    Description static Default relative Relative to itself absolute
    Relative to parent fixed Fixed on screen sticky Sticks when
    scrolling
    \_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_

9.  Position: Static Default behavior (no positioning). div { position:
    static; }
    \_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_

10. Position: Relative Moves element relative to its normal position.
    div { position: relative; top: 20px; left: 30px; }
    \_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_

11. Position: Absolute Positions relative to the nearest positioned
    parent. div { position: absolute; top: 50px; right: 30px; }
    \_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_

12. Position: Fixed Stays fixed even when scrolling. nav { position:
    fixed; top: 0; width: 100%; }
    \_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_
    🧭 25. Flexbox A layout model that aligns items easily in a row or
    column. .container { display: flex; }
    \_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_
    ⚙️ 26. Flex Model Defines direction, alignment, and spacing. Main
    Axis = direction items flow Cross Axis = perpendicular to main axis
    \_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_
    ↔️ 27. Flex Direction Controls layout direction. .container {
    flex-direction: row; /\* default \*/ flex-direction: column;
    flex-direction: row-reverse; }
    \_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_
    🎯 28. Justify Content Aligns items horizontally along the main
    axis. .container { justify-content: center; } Value Meaning
    flex-start Left flex-end Right center Center space-between Equal
    space between items space-around Equal space around items
