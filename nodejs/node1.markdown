# Node.js Overview

## 1️⃣ What is Node.js?

Node.js is a runtime environment that lets you run JavaScript outside the browser.

It is built using:
- **JavaScript**: Main language
- **V8 Engine**: Google’s JavaScript engine used in Chrome
- **C++**: For low-level system access

**Created by**: Ryan Dahl in 2009.

**In short**: Node.js helps you use JavaScript to build backend systems, web servers, and tools.

## 2️⃣ Why Use Node.js?

- **Fast and scalable**: Handles many users at once.
- **Good for building**:
  - Web servers 🌍
  - Backend systems ⚙️
  - Command-line tools 💻

## 3️⃣ Browser JS vs Node.js (Environment Differences)

JavaScript can run in two places:
- **Browser** (like Chrome, Firefox)
- **Node.js** (outside the browser, usually on a server)

| Feature         | Browser JS | Node.js          |
|-----------------|------------|------------------|
| `window` object | ✅ Yes     | ❌ No            |
| `alert()`       | ✅ Yes     | ❌ No            |
| `console.log()` | ✅ Yes     | ✅ Yes           |
| `setTimeout()`  | ✅ Yes     | ✅ Yes           |
| Global object   | ❌ No      | ✅ Yes (`global`) |

### 🖼 Explanation + Examples

#### 1. `window` object
- **Browser**: Top-level object is `window`.
- **Node.js**: No `window`, instead uses `global`.

```javascript
// Browser
console.log(window);

// Node.js
console.log(global);
```

#### 2. `alert()`
- **Browser**: Shows popup message.
- **Node.js**: ❌ Not available.

```javascript
// Browser
alert("Hello from Browser!");

// Node.js
alert("Hi"); // ❌ Error: alert is not defined
```

#### 3. `console.log()`
- Works in both Browser and Node.js.

```javascript
console.log("Hello World"); // ✅ Works everywhere
```

#### 4. `setTimeout()`
- Works in both.
- Runs code after a delay.

```javascript
console.log("Start");

setTimeout(() => {
  console.log("Runs after 2 seconds");
}, 2000);

console.log("End");
```

**Output**:
```
Start
End
Runs after 2 seconds
```

#### 5. Global Object
- **Browser**: `window` is the global object.
- **Node.js**: `global` is the global object.

```javascript
// Browser
console.log(window.setTimeout === setTimeout); // true

// Node.js
console.log(global.setTimeout === setTimeout); // true
```

## 4️⃣ Asynchronous Programming in Node.js

- Node.js is **single-threaded** but uses **non-blocking I/O** (does not wait).
- Works with events: Starts a task and moves on to the next.

**Example**:
```javascript
console.log("Start");

setTimeout(() => {
  console.log("This runs later");
}, 2000);

console.log("End");
```

**Output**:
```
Start
End
This runs later
```

**Note**: Node.js does not wait for `setTimeout`, it moves ahead.

## 5️⃣ Common Terms

| Term            | Meaning                                  |
|-----------------|------------------------------------------|
| `require()`     | Import another module                    |
| `module.exports`| Export functions or variables from a module |
| `npm`           | Node Package Manager                     |
| `console.log()` | Output to terminal                       |

## 6️⃣ Initializing a Node.js Project

**Command**:
```bash
npm init -y
```

**What it does**:
- Creates a `package.json` file in your current project.
- Uses default values (no prompts).

**Example `package.json`**:
```json
{
  "name": "my-node-app",
  "version": "1.0.0",
  "description": "A simple Node.js app",
  "main": "index.js",
  "scripts": {
    "start": "node index.js"
  },
  "author": "Your Name",
  "license": "ISC"
}
```

### 🔧 Key Fields Explained
- **name**: Project name
- **version**: Version of app
- **description**: Short info about app
- **main**: Entry file (`index.js`)
- **scripts**: Commands you can run with `npm run <script>`
- **author**: Your name
- **license**: Type of license (ISC by default)

## 7️⃣ Running Your Project

Add this in `package.json`:
```json
"scripts": {
  "start": "node index.js"
}
```

Run your app:
```bash
npm start
```
(Same as `node index.js`)

**Extra scripts**:
```json
"scripts": {
  "start": "node index.js",
  "dev": "nodemon index.js",
  "test": "echo \"No test specified\" && exit 0"
}
```

Run them with:
```bash
npm run dev
npm run test
```

## 8️⃣ Modules in Node.js

- Breaking code into smaller files makes it cleaner and easier to manage.
- Use `module.exports` to export, and `require()` to import.

**Example: `math.js`**:
```javascript
function add(a, b) {
  return a + b;
}

function sub(a, b) {
  return a - b;
}

module.exports = { add, sub };
```

**Example: `hello.js`**:
```javascript
const maths = require('./math');

console.log("Hello world");
console.log("Add:", maths.add(12, 54));
console.log("Sub:", maths.sub(10, 2));
```

**Key**:
- `require()`: Import modules
- `module.exports`: Export functions/data