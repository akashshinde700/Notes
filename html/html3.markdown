# HTML Links, Images, Tables, and Forms

## HTML Links

### What is the `<a>` tag?
The `<a>` tag defines a **hyperlink** in HTML.  
It’s used to link to another page, different parts of the same page, or external resources like email or phone.  
The `href` attribute specifies the destination URL or link target.

#### Examples:
1. **Basic Link**
```html
<a href="https://www.example.com">Visit Example</a>
```
- `href` = “Hypertext Reference” — tells where the link goes.
- The text between `<a>` and `</a>` is what the user clicks on.
- Clicking “Visit Example” opens https://www.example.com.

2. **Open Link in New Tab**
```html
<a href="https://www.example.com" target="_blank">Open in New Tab</a>
```
- `target="_blank"` opens the link in a new browser tab.

3. **Email Link**
```html
<a href="mailto:someone@example.com">Send Email</a>
```
- The `mailto:` link opens the user's default email client to send an email to someone@example.com.  
- ⚠️ **Note**: Works only if an email client is set up on the device.

4. **Phone Link**
```html
<a href="tel:+1234567890">Call Us</a>
```
- On mobile or supported devices, this starts a phone call to the number.

5. **Link with Tooltip**
```html
<a href="https://www.example.com" title="Visit Example Site">Hover me!</a>
```
- When you hover over “Hover me!”, a tooltip shows “Visit Example Site”.

6. **Link that Downloads a File**
```html
<a href="file.pdf" download>Download PDF</a>
```
- Instead of opening `file.pdf`, the browser downloads it when clicked.

## 🖼️ Images in HTML
Use the `<img>` tag to display images. It is a **self-closing tag** with no end tag.

### 🔹 Syntax:
```html
<img src="image_url" alt="description" width="300" height="200">
```

### 🔹 Attributes:
- `src`: (required) URL or path of the image file.
- `alt`: (recommended) Text shown if the image cannot be displayed.
- `width` & `height`: (optional) Specify the size of the image.

### ✅ Example:
```html
<img src="cat.jpg" alt="A cute cat" width="300" height="200">
```

### 🔸 Output:
Displays an image with the specified size and alternate text if it fails to load.

## 📊 Tables in HTML
Tables are created using the `<table>` element. Rows are defined by `<tr>`, headers by `<th>`, and data cells by `<td>`.

### 🔹 Basic Structure:
```html
<table>
  <tr>
    <th>Header 1</th>
    <th>Header 2</th>
  </tr>
  <tr>
    <td>Row1 Cell1</td>
    <td>Row1 Cell2</td>
  </tr>
  <tr>
    <td>Row2 Cell1</td>
    <td>Row2 Cell2</td>
  </tr>
</table>
```

### 🔹 Description:
- `<table>`: Wraps the whole table.
- `<tr>` (table row): Defines a row.
- `<th>` (table heading): Defines a heading (bold & centered).
- `<td>` (table data): Defines a standard data cell.

### 🔸 Output:
```
Header 1    Header 2
Row1 Cell1  Row1 Cell2
Row2 Cell1  Row2 Cell2
```

## 📝 Forms in HTML
HTML forms are used to collect user input.

### 1. `<form>`
The `<form>` tag wraps all the input elements.

#### 🔹 Syntax:
```html
<form action="submit.php" method="post">
  <!-- form elements go here -->
</form>
```

#### 🔹 Attributes:
- `action`: Where to send form data (usually a backend file like `.php` or `.js`).
- `method`:
  - `"get"`: Appends data in URL (for simple searches).
  - `"post"`: Sends data securely (for login, signup, etc.).

### 2. `<input>`
Used to take various types of input.

#### 🔹 Common Types:
```html
<input type="text" name="username" placeholder="Enter username">
<input type="email" name="email" placeholder="Enter email">
<input type="password" name="password" placeholder="Enter password">
<input type="checkbox" name="subscribe"> Subscribe
<input type="radio" name="gender" value="male"> Male
<input type="radio" name="gender" value="female"> Female
<input type="submit" value="Submit">
```

#### 🔹 Attributes:
- `type`: text, email, password, checkbox, radio, submit, etc.
- `name`: The key used when sending data.
- `value`: The value that gets sent to the server.
- `placeholder`: Shows light grey hint text inside the box.

### 3. `<textarea>`
For multiline text input (e.g., comments or messages).

#### 🔹 Syntax:
```html
<textarea name="message" rows="4" cols="30" placeholder="Type your message"></textarea>
```

### 4. `<select>` and `<option>`
Dropdown list with multiple choices.

#### 🔹 Syntax:
```html
<select name="country">
  <option value="india">India</option>
  <option value="usa">USA</option>
  <option value="uk">UK</option>
</select>
```

### 5. `<button>`
Clickable button for submitting or other actions.

#### 🔹 Syntax:
```html
<button type="submit">Submit</button>
<button type="reset">Reset</button>
```

### ✅ Full Example Form:
```html
<form action="/submit" method="post">
  <label>Username:</label>
  <input type="text" name="username" placeholder="Enter username"><br><br>

  <label>Email:</label>
  <input type="email" name="email" placeholder="Enter email"><br><br>

  <label>Message:</label><br>
  <textarea name="message" rows="4" cols="30"></textarea><br><br>

  <label>Gender:</label>
  <input type="radio" name="gender" value="male"> Male
  <input type="radio" name="gender" value="female"> Female<br><br>

  <label>Country:</label>
  <select name="country">
    <option value="india">India</option>
    <option value="usa">USA</option>
  </select><br><br>

  <button type="submit">Send</button>
</form>
```