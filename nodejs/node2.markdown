# Node.js File Handling Notes

In Node.js, file handling involves **reading**, **writing**, **updating**, and **deleting** files. Node.js provides the built-in **`fs` (File System)** module for this purpose.

There are two ways to handle files:
- **Synchronous (sync)**: Blocks execution until the operation is complete.
- **Asynchronous (async)**: Non-blocking; operations run in the background, and a callback handles the result.

## 1. Writing to a File

### Synchronous
```javascript
const fs = require('fs');

fs.writeFileSync('hello.txt', 'Hello from Node.js!');
```

### Asynchronous
```javascript
fs.writeFile('hello.txt', 'Hello world, I am async!', (err) => {
    if (err) {
        console.log(err);
    } else {
        console.log('File written successfully!');
    }
});
```

## 2. Reading from a File

### Synchronous
```javascript
const data = fs.readFileSync('hello.txt', 'utf8');
console.log(data);
```

### Asynchronous
```javascript
fs.readFile('hello.txt', 'utf8', (err, data) => {
    if (err) {
        console.log(err);
    } else {
        console.log(data);
    }
});
```

## 3. Appending to a File

### Synchronous
```javascript
fs.appendFileSync('hello.txt', '\nThis is additional text.');
```

### Asynchronous
```javascript
fs.appendFile('hello.txt', '\nAppending text asynchronously', (err) => {
    if (err) {
        console.log(err);
    } else {
        console.log('Text appended successfully!');
    }
});
```

## 4. Deleting a File

### Synchronous
```javascript
fs.unlinkSync('hello.txt'); // Deletes the file
```

### Asynchronous
```javascript
fs.unlink('hello.txt', (err) => {
    if (err) console.log(err);
    else console.log('File deleted!');
});
```

## 5. Callbacks

A **callback** is a function passed into another function to run after a task is done.

**Example**:
```javascript
function setPopcorn(callback) {
    setTimeout(() => {
        console.log("Popcorn is ready!");
        callback();
    }, 2000);
}

setPopcorn(() => {
    console.log("Enjoy your movie!");
});
```

**Explanation**: `setPopcorn` executes the callback after "popcorn is ready."

## 6. Creating Directories

### Synchronous
```javascript
fs.mkdirSync('new_folder');
```

### Asynchronous
```javascript
fs.mkdir('new_folder', (err) => {
    if (err) {
        console.log(err);
    } else {
        console.log('Folder created successfully!');
    }
});
```

## 7. Copying Files

### Synchronous
```javascript
fs.copyFileSync('source.txt', 'copy.txt');
```

### Asynchronous
```javascript
fs.copyFile('source.txt', 'copy.txt', (err) => {
    if (err) {
        console.log(err);
    } else {
        console.log('File copied successfully!');
    }
});
```

## 8. Getting File/Folder Info

### Synchronous
```javascript
const info = fs.statSync('source.txt');
console.log(info);
```

### Asynchronous
```javascript
fs.stat('source.txt', (err, info) => {
    if (err) {
        console.log(err);
    } else {
        console.log(info);
    }
});
```

**Provides details**: Type (file/folder), size, creation date, and more.

---

This covers all major file operations in Node.js with both **synchronous** and **asynchronous** versions.