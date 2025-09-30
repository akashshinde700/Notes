# HTML Overview

HTML stands for **HyperText Markup Language**.  
It is the basic language used to create websites.  
HTML gives structure and meaning to web content.

## 🌐 What does HyperText mean?
**HyperText** means clickable links.  
These links help you move from one page to another on the internet.

For example:  
When you click on a word or picture and it takes you to a new page — that's HyperText!

## 🧱 What is Markup?
**Markup** means adding labels to parts of a web page.  
It tells the browser what each part is, like a heading, paragraph, or image.

HTML uses **tags** (like `<p>` or `<h1>`) to do this.  
These tags help the web browser know how to show the content.

## 🏷️ What are HTML Tags?
Tags look like this: `<tagname>`.  
Example: `<p>` for a paragraph.  
Most tags come in pairs:  
- Opening tag: `<p>`  
- Closing tag: `</p>`

Tags are not case-sensitive, but it’s best to write them in **lowercase**.

## 🧩 Common HTML Elements
- `<head>` – Info about the page
- `<title>` – Page title (seen on browser tab)
- `<body>` – Main content
- `<p>` – Paragraph
- `<div>` – Container for content
- `<img>` – Image
- `<a>` – Link
- `<ul>`, `<ol>`, `<li>` – Lists (unordered, ordered, list items)
- `<video>`, `<audio>` – Media

## `<!DOCTYPE html>`
This line is called the **DOCTYPE declaration**.  
It tells the browser that the page is written in **HTML5** (the latest version of HTML).  
It must be the **first line** in every HTML document.  
It helps browsers display the page correctly.

## What is Boilerplate Code in HTML?
**Boilerplate code** is the basic structure of an HTML page.  
You use it as a starting point for every new webpage.

### 🧱 Explanation of Each Part:
- `<!DOCTYPE html>`  
  This tells the browser: "This is an HTML5 document."
- `<html>`  
  The root element. All content of the web page goes inside this.
- `<head>`  
  Contains information about the page (not shown to users).  
  Examples: title, links to CSS, meta tags.
- `<title>My First Page</title>`  
  Sets the title shown in the browser tab.
- `</head>`
- `<body>`  
  Everything inside `<body>` is visible on the webpage.  
  You put text, images, buttons, etc., here.
  - `<h1>Hello, world!</h1>`  
    This is a main heading. It appears big and bold on the page.
- `</body>`
- `</html>`  
  Closes the `<body>` and `<html>` tags. This is the end of the HTML page.

## 💬 HTML Comments
Used to add notes in the code.  
Not shown on the webpage.  
Example: `<!-- This is a comment -->`

## ✍️ Attributes in HTML
Attributes give extra information about an element.  
Written inside the opening tag.  
Example: `<img src="image.jpg" alt="My Image">`  
- `src` = image source  
- `alt` = alternative text

## 🌍 HTML + CSS + JavaScript
- **HTML** = Structure  
- **CSS** = Appearance (colors, layout)  
- **JavaScript** = Behavior (what the page does)

## 📄 Forms and Media
Forms help with actions like login, register, or send info.  
HTML supports media like audio and video using tags like `<audio>` and `<video>`.

## Block vs Inline Elements
- **Block-level**: Takes full width (e.g., `<div>`, `<p>`)  
- **Inline-level**: Only takes up as much space as needed (e.g., `<span>`, `<a>`)

## Extra Tips
- Use `<link rel="preload">` to load important files early.  
- Use **responsive images** for better performance on different devices.

## 🧾 HTML Text Formatting Tags – Summary with Examples

| Tag            | Use                       | Example Code                                          | Output                            |
|----------------|---------------------------|-------------------------------------------------------|-----------------------------------|
| `<p>`          | Paragraph                 | `<p>This is a paragraph.</p>`                         | This is a paragraph.              |
| `<br>`         | Line break                | `Line one<br>Line two`                                | Line one<br>Line two              |
| `<hr>`         | Horizontal line           | `<hr>`                                                | ――――――――――――                      |
| `<h1>`–`<h6>`  | Headings (big to small)   | `<h2>Subheading</h2>`                                 | Subheading                        |
| `<strong>`     | Bold (important)          | `This is <strong>important</strong>`                  | This is **important**             |
| `<b>`          | Bold (styling only)       | `This is <b>bold</b>`                                 | This is **bold**                  |
| `<em>`         | Italic (emphasis)         | `This is <em>emphasized</em>`                         | This is *emphasized*              |
| `<i>`          | Italic (styling only)     | `This is <i>italic</i>`                               | This is *italic*                  |
| `<u>`          | Underline                 | `This is <u>underlined</u>`                           | This is <u>underlined</u>         |
| `<mark>`       | Highlight                 | `This is <mark>highlighted</mark>`                    | This is <mark>highlighted</mark>  |
| `<small>`      | Smaller text              | `This is <small>small text</small>`                   | This is <small>small text</small> |
| `<del>`        | Strikethrough             | `<del>Old Price</del>`                                | ~~Old Price~~                     |
| `<ins>`        | Inserted (underlined)     | `<ins>New Text</ins>`                                 | <ins>New Text</ins>               |
| `<sub>`        | Subscript                 | `H<sub>2</sub>O`                                      | H₂O                               |
| `<sup>`        | Superscript               | `X<sup>2</sup>`                                       | X²                                |
| `<code>`       | Code snippet              | `Use <code>alert()</code>`                            | Use `alert()`                     |
| `<pre>`        | Preformatted text         | `<pre>Line 1\n  Line 2</pre>`                         | Line 1<br>  Line 2                |
| `<kbd>`        | Keyboard input            | `<kbd>Ctrl</kbd> + <kbd>C</kbd>`                      | Ctrl + C                          |
| `<samp>`       | Program output            | `<samp>Error 404</samp>`                              | Error 404                         |
| `<var>`        | Variable name             | `<var>x</var> = 5`                                    | *x* = 5                           |
| `<q>`          | Short quote               | `<q>Hello</q>`                                        | “Hello”                           |
| `<blockquote>` | Long quote                | `<blockquote>This is quoted</blockquote>`             | (Indented quote)                  |
| `<abbr>`       | Abbreviation with tooltip | `<abbr title="HyperText Markup Language">HTML</abbr>` | HTML (hover shows full)           |
| `<time>`       | Time/date info            | `<time datetime="2025-07-17">July 17</time>`          | July 17                           |
| `<cite>`       | Cites a source            | `<cite>Wikipedia</cite>`                              | *Wikipedia*                       |
| `<dfn>`        | Defines a term            | `<dfn>HTML</dfn> is a markup language.`               | *HTML* is a markup language.      |