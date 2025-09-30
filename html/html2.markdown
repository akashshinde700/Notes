# HTML Lists — Easy Notes

In HTML, there are three types of lists:

- **Ordered List** (`<ol>`)
- **Unordered List** (`<ul>`)
- **Description List** (`<dl>`)

## 1. Ordered List (`<ol>`)

👉 Use when the order is important (e.g., steps, rankings).

**Default:**
- Numbers (1, 2, 3, …)
- Starts at 1

**Attributes:**
- `type` → Change style (1, A, a, I, i)
- `start` → Start from any number
- `reversed` → Count down

**Example:**
```html
<ol type="A" start="2" reversed>
  <li>Step 1
    <ol type="i">
      <li>Substep 1</li>
      <li>Substep 2</li>
    </ol>
  </li>
  <li>Step 2</li>
</ol>
```

**📌 Output:**
```
B. Step 1
   i. Substep 1
   ii. Substep 2
A. Step 2
```

## 2. Unordered List (`<ul>`)

👉 Use when the order does not matter (e.g., shopping list, categories).

**Default:**
- Bullets (● disc)

**Nested (inside another list):**
- Level 1 → ● disc
- Level 2 → ○ circle
- Level 3 → ■ square

⚠️ **Note:** The old `type` attribute is not used in HTML5. Use CSS instead:
- `list-style-type: disc | circle | square;`

**Example:**
```html
<ul>
  <li>Fruits
    <ul>
      <li>Apple</li>
      <li>Banana</li>
    </ul>
  </li>
  <li>Vegetables</li>
</ul>
```

**📌 Output:**
```
- Fruits
  ○ Apple
  ○ Banana
- Vegetables
```

## 3. Description List (`<dl>`)

👉 Use for terms and their meanings (like a dictionary).

- `<dt>` = Term
- `<dd>` = Description

**Example:**
```html
<dl>
  <dt>HTML</dt>
  <dd>HyperText Markup Language
    <ul>
      <li>Used for structure</li>
      <li>Has tags</li>
    </ul>
  </dd>
  <dt>CSS</dt>
  <dd>Cascading Style Sheets</dd>
</dl>
```

**📌 Output:**
```
HTML
  HyperText Markup Language
  - Used for structure
  - Has tags
CSS
  Cascading Style Sheets
```

## Bonus: Nested Lists

👉 You can put one list inside another.

- `<ul>` → Bullets change style automatically (disc → circle → square).
- `<ol>` → Numbers stay the same unless you change them.

**Example:**
```html
<ul>
  <li>Categories
    <ol type="I">
      <li>Fruits
        <ul>
          <li>Apple</li>
          <li>Banana</li>
        </ul>
      </li>
      <li>Vegetables
        <ol type="a">
          <li>Carrot</li>
          <li>Broccoli</li>
        </ol>
      </li>
    </ol>
  </li>
  <li>Others</li>
</ul>
```

**📌 Output:**
```
- Categories
  I. Fruits
     ○ Apple
     ○ Banana
  II. Vegetables
     a. Carrot
     b. Broccoli
- Others
```

## 📊 Quick Comparison Table

| List Type     | Tag  | Default                     | Attributes                | Nested Behavior                       |
|---------------|------|-----------------------------|---------------------------|---------------------------------------|
| Ordered       | `<ol>` | Numbers (1, 2, 3)         | `type`, `start`, `reversed` | Same style unless changed             |
| Unordered     | `<ul>` | Bullets (●)               | (type old) use CSS        | Bullets auto-change (disc → circle → square) |
| Description   | `<dl>` | Term + description         | None                      | Lists inside `<dd>` just indent       |