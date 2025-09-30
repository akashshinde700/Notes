# Advanced HTML Concepts

## ✅ 1. Accessibility (a11y)
Accessibility means making your website usable for everyone, including people with disabilities.

### 🔹 Best Practices:
- Use proper `alt` text for images.
- Use semantic HTML (`<header>`, `<nav>`, etc.).
- Use labels for form elements.
- Ensure good keyboard navigation (Tab, Enter, etc.).
- Use proper color contrast and font sizes.

## ✅ 2. ARIA Roles (Accessible Rich Internet Applications)
ARIA helps screen readers understand elements better when HTML alone is not enough.

### 🔹 Example:
```html
<div role="navigation">Menu</div>
<div role="button" tabindex="0">Click me</div>
```

### ARIA Role Examples:
| ARIA Role          | Meaning                     |
|--------------------|-----------------------------|
| `role="button"`    | Acts like a button          |
| `role="navigation"`| Marks navigation section    |
| `role="dialog"`    | Marks popup dialogs         |

**Note**: Use ARIA only when needed. Prefer semantic HTML first.

## ✅ 3. Using Proper Heading Structure
Headings (`<h1>` to `<h6>`) should follow a logical order, like an outline.

### ✅ Good Example:
```html
<h1>Main Title</h1>
  <h2>Section 1</h2>
    <h3>Subsection</h3>
  <h2>Section 2</h2>
```

❌ **Avoid**: Skipping levels (e.g., jumping from `<h1>` to `<h4>`).

## ✅ 4. Labeling Form Elements
Use `<label>` to connect text with form inputs, improving usability and accessibility for screen readers.

### 🔹 Example:
```html
<label for="email">Email:</label>
<input type="email" id="email" name="email">
```

## ✅ 5. HTML APIs (with JavaScript)
These allow HTML + JavaScript to add interactive features.

### 🟡 a) Drag and Drop API
```html
<div draggable="true">Drag me</div>
```
- Use JS events like `ondragstart`, `ondrop`, etc., to move elements around.

### 🟡 b) Geolocation API
Get the user's current location.
```javascript
navigator.geolocation.getCurrentPosition((position) => {
  console.log(position.coords.latitude, position.coords.longitude);
});
```

### 🟡 c) Web Storage API
Stores data in the browser:
| Type            | Description                     |
|-----------------|---------------------------------|
| `localStorage`  | Saves data permanently          |
| `sessionStorage`| Saves data until tab is closed  |

```javascript
localStorage.setItem("username", "Akash");
const user = localStorage.getItem("username"); // Akash
```

## ✅ 6. Microdata / Schema.org
Helps search engines understand your content using special attributes.

### 🔹 Example:
```html
<div itemscope itemtype="https://schema.org/Person">
  <span itemprop="name">Akash Shinde</span>
  <span itemprop="jobTitle">Web Developer</span>
</div>
```
- Improves SEO and enables rich results (e.g., reviews, events).

## ✅ 7. HTML5 Form Validation
Built-in way to check form fields without JavaScript.

### 🔹 Common Attributes:
| Attribute  | Purpose                            | Example                              |
|------------|------------------------------------|--------------------------------------|
| `required` | Field must be filled               | `<input required>`                   |
| `pattern`  | Must match a regex pattern         | `<input pattern="[A-Za-z]{3,}">`     |
| `min/max`  | Numeric/date input range           | `<input type="number" min="1" max="10">` |
| `type`     | Checks input type like email, number| `<input type="email">`               |

### ✅ Example:
```html
<form>
  <input type="email" required>
  <input type="number" min="1" max="100">
  <input type="text" pattern="[A-Za-z]{3,}">
  <button type="submit">Submit</button>
</form>
```

## ✅ Developer Tools (Chrome DevTools)

### 🔹 What it is:
Chrome DevTools is a built-in tool in Chrome (press F12 or right-click → "Inspect").  
It helps debug, edit, and test your HTML, CSS, and JavaScript directly in the browser.

### 🔹 Key Features:
- **Elements tab**: See and edit HTML/CSS live.
- **Console**: Run JavaScript or check errors.
- **Network**: See how and when files load.
- **Responsive view**: Simulate mobile/tablet screens.

## ✅ SEO Basics with HTML (Search Engine Optimization)
Search engines like Google use your HTML to understand your site.

### 🔹 Key HTML Tips for SEO:
- Use semantic tags (`<header>`, `<article>`, `<footer>`).
- Use `<title>` and `<meta name="description">` in `<head>`.
- Use `alt` attributes on images.
- Use proper heading structure (`<h1>`, `<h2>`, etc.).
- Link pages with meaningful anchor text.

### ✅ Example:
```html
<head>
  <title>Learn HTML in Simple Steps</title>
  <meta name="description" content="This tutorial helps you learn HTML easily.">
</head>
<img src="dog.jpg" alt="Golden Retriever puppy">
```

## ✅ Responsive Design Foundations
Making your website look good on all devices: mobile, tablet, desktop.

### 🔹 1. Viewport Meta Tag
Tells the browser how to scale the page on mobile.
```html
<meta name="viewport" content="width=device-width, initial-scale=1.0">
```

### 🔹 2. Mobile-First Design
- Start designing for small screens first.
- Then use media queries to adjust for larger screens.

### ✅ Example (CSS):
```css
/* Base (mobile-first) */
body {
  font-size: 16px;
}

/* For larger screens */
@media (min-width: 768px) {
  body {
    font-size: 18px;
  }
}
```

## ✅ Linting HTML (W3C Validator)
### 🔹 What is Linting?
Linting = Checking your code for errors or warnings.  
Use tools like: 🔗 [https://validator.w3.org/](https://validator.w3.org/)

- Paste your HTML or URL and get a report.

### ✅ It helps you fix:
- Missing tags
- Wrong nesting
- Outdated attributes

## ✅ Code Organization & Formatting
Keeping your HTML clean, readable, and maintainable.

### 🔹 Best Practices:
- Indent properly (usually 2 or 4 spaces).
- Close all tags.
- Group related elements.
- Use comments:
  ```html
  <!-- Main Navigation -->
  <nav>...</nav>
  ```
- Break code into sections (`<header>`, `<main>`, `<footer>`).
- Name files clearly (e.g., `about.html`, `contact.html`).

## ✨ Summary Checklist
| Topic               | Key Point                                              |
|---------------------|--------------------------------------------------------|
| Chrome DevTools     | Inspect & debug HTML/CSS/JS                            |
| SEO with HTML       | Use title, description, headings, alt text             |
| Responsive Design   | Use viewport tag & mobile-first CSS                    |
| Linting HTML        | Use W3C Validator to check for errors                  |
| Code Formatting     | Indent, comment, structure with semantic tags          |

## Additional Semantic Tags

### 1. `<main>` – Main Content
Represents the central content of the page (used once per page).
```html
<main>
  <h1>Welcome</h1>
  <p>This is the main content of the page.</p>
</main>
```
- Helps screen readers & SEO.

### 2. `<figure>` & `<figcaption>`
Used for images, diagrams, or media with captions.
```html
<figure>
  <img src="dog.jpg" alt="A dog">
  <figcaption>This is a dog</figcaption>
</figure>
```

### 3. `<details>` & `<summary>`
For collapsible/expandable content.
```html
<details>
  <summary>Click to expand</summary>
  <p>Hidden details shown after expanding.</p>
</details>
```

### 4. `<progress>` & `<meter>`
Used to show progress or measurement.
```html
<progress value="60" max="100"></progress>   <!-- Progress bar (60%) -->
<meter value="0.7">70%</meter>               <!-- Measurement -->
```

### 5. `<template>` & `<slot>`
For reusable content with JavaScript / Web Components.
```html
<template id="card">
  <div class="card">Content goes here</div>
</template>
```

### 6. `<canvas>`
For drawing graphics and animations using JavaScript.
```html
<canvas width="300" height="200"></canvas>
```

## 7. Global Attributes (Work on Almost All Tags)
Attributes that can be applied to most HTML elements.

| Attribute         | Use                              |
|-------------------|----------------------------------|
| `id`              | Unique identifier for an element |
| `class`           | Used for grouping & CSS styling  |
| `style`           | Inline CSS styles                |
| `title`           | Tooltip text on hover            |
| `hidden`          | Hides an element                 |
| `lang`            | Defines language of element      |
| `tabindex`        | Controls tab order               |
| `draggable`       | Makes an element draggable       |
| `contenteditable` | Makes text editable              |

### ✅ Example:
```html
<p id="para1" class="highlight" contenteditable="true">
  Editable text
</p>
```