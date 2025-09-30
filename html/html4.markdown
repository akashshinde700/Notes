# Semantic HTML, Audio, Video, Iframe, and Meta Tags

## 🌐 What is Semantic HTML?
**Semantic HTML** uses meaningful tags that clearly describe their purpose in the page.  
It helps search engines, screen readers, and developers understand the structure of a webpage.

## 🏷️ Common Semantic Tags

### 1. `<header>`
Defines the top section of a webpage or a section. Usually includes logos, titles, or navigation links.

#### 🔹 Example:
```html
<header>
  <h1>My Website</h1>
  <p>Welcome to my world</p>
</header>
```

### 2. `<nav>`
Defines the navigation bar. It holds links to other pages or sections.

#### 🔹 Example:
```html
<nav>
  <a href="/">Home</a>
  <a href="/about">About</a>
  <a href="/contact">Contact</a>
</nav>
```

### 3. `<section>`
Defines a thematic section of content, like a chapter or group of related content.

#### 🔹 Example:
```html
<section>
  <h2>Our Services</h2>
  <p>We offer web development, design, and more.</p>
</section>
```

### 4. `<article>`
Used for independent content like blog posts, news articles, or user comments.

#### 🔹 Example:
```html
<article>
  <h2>How to Learn HTML</h2>
  <p>Start with basic tags and build projects.</p>
</article>
```

### 5. `<aside>`
Defines side content like ads, tips, or extra info. Often used in sidebars.

#### 🔹 Example:
```html
<aside>
  <h3>Tip:</h3>
  <p>Use semantic tags to improve SEO.</p>
</aside>
```

### 6. `<footer>`
Defines the bottom section of a page or section. Usually contains copyright, contact, or links.

#### 🔹 Example:
```html
<footer>
  <p>&copy; 2025 My Website. All rights reserved.</p>
</footer>
```

### ✅ Full Example Using Semantic Tags:
```html
<header>
  <h1>My Blog</h1>
  <nav>
    <a href="#">Home</a>
    <a href="#">Posts</a>
    <a href="#">About</a>
  </nav>
</header>

<section>
  <article>
    <h2>Semantic HTML</h2>
    <p>Semantic tags make your HTML meaningful and easier to read.</p>
  </article>
</section>

<aside>
  <p>Subscribe for more HTML tips!</p>
</aside>

<footer>
  <p>Copyright &copy; 2025 My Blog</p>
</footer>
```

## 🎵 `<audio>` Tag – For Playing Sound
The `<audio>` tag is used to play audio files like music or voice.

### 🔹 Basic Syntax:
```html
<audio controls>
  <source src="song.mp3" type="audio/mpeg">
  Your browser does not support the audio element.
</audio>
```

### 🔹 Attributes:
- `controls`: Shows play, pause, volume buttons.
- `autoplay`: Plays the audio automatically when the page loads.
- `loop`: Repeats the audio after it ends.

## 🎥 `<video>` Tag – For Playing Videos
The `<video>` tag is used to play video files.

### 🔹 Basic Syntax:
```html
<video width="320" height="240" controls>
  <source src="movie.mp4" type="video/mp4">
  Your browser does not support the video tag.
</video>
```

### 🔹 Attributes:
- `controls`: Shows play, pause, volume, etc.
- `autoplay`: Plays the video automatically.
- `loop`: Repeats the video.
- `poster`: Image shown before video plays.
- `muted`: Video starts with no sound.

## 🔄 `<source>` Tag – For Multiple Media Formats
The `<source>` tag is used inside `<audio>` or `<video>` to define media files and their formats.

### 🔹 Why use `<source>`?
- Some browsers support only certain file types.
- You can provide multiple formats — the browser picks the one it supports.

### 🔹 Example:
```html
<video controls>
  <source src="video.mp4" type="video/mp4">
  <source src="video.ogg" type="video/ogg">
  Your browser does not support this video.
</video>
```

### ✅ Summary Table
| Tag        | Use for         | Inside            | Notes                              |
|------------|-----------------|-------------------|------------------------------------|
| `<audio>`  | Sound/music     | —                 | Needs `<source>` or `src`          |
| `<video>`  | Video clips     | —                 | Needs `<source>` or `src`          |
| `<source>` | Add file formats| `<audio>`, `<video>` | Use multiple formats for safety |

## 🖼️ `<iframe>` – Inline Frame
The `<iframe>` tag is used to embed another webpage inside your current webpage.  
It’s like a window inside your page that shows another site or file.

```html
<iframe 
  src="https://www.wikipedia.org" 
  width="600" 
  height="400" 
  title="Wikipedia Page" 
  frameborder="0">
</iframe>
```
**📝 Output**: Shows Wikipedia’s homepage inside your webpage in a 600x400 box.

## 🧠 What are `<meta>` Tags?
`<meta>` tags provide information about the webpage, called **metadata**.  
They go inside the `<head>` tag and are not visible on the page.

They help:
- Browsers understand how to show the page.
- Search engines know what your page is about.
- Responsive design on mobile devices.

### ✅ Common `<meta>` Tags:
1. **`<meta charset="UTF-8">`**
   - Sets the character encoding — how text is stored and displayed.
   - ✅ UTF-8 supports all languages and symbols (safe default for all websites).
   ```html
   <meta charset="UTF-8">
   ```

2. **`<meta name="viewport">`**
   - Makes your website responsive (mobile-friendly).
   ```html
   <meta name="viewport" content="width=device-width, initial-scale=1.0">
   ```
   - ✅ Makes your page fit the screen on phones and tablets.

3. **`<meta name="description">`**
   - Gives a short summary of your webpage. May show up in Google search results.
   ```html
   <meta name="description" content="Learn HTML basics with simple examples.">
   ```
   - ✅ Helps improve SEO (search engine optimization).

4. **`<meta name="keywords">` (less used today)**
   - A list of words related to your page (for search engines). Most modern search engines ignore this tag now.
   ```html
   <meta name="keywords" content="HTML, web development, coding, tutorial">
   ```

5. **`<meta name="author">`**
   - Tells who created the webpage.
   ```html
   <meta name="author" content="Akash Shinde">
   ```

6. **`<meta http-equiv="refresh">`**
   - Refreshes the page after some time or redirects to another URL.
   - Example (refresh after 5 seconds):
     ```html
     <meta http-equiv="refresh" content="5">
     ```
   - Example (redirect to another page after 3 seconds):
     ```html
     <meta http-equiv="refresh" content="3; url=https://example.com">
     ```

### ✅ Full Example in `<head>`:
```html
<head>
  <meta charset="UTF-8">
  <meta name="viewport" content="width=device-width, initial-scale=1.0">
  <meta name="description" content="Learn HTML basics with simple examples.">
  <meta name="author" content="Akash Shinde">
  <title>My HTML Page</title>
</head>
```