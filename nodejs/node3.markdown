# Node.js Architecture & Event Loop Notes

Node.js is built on the **V8 JavaScript engine** (for executing JavaScript) and **C++**, with **libuv** handling asynchronous operations, the event loop, and thread pools.

## 1. How Node.js Handles Requests

When a client sends a request to a Node.js server, the process is as follows:

1. **Request arrives** at the Node.js server.
2. The **event loop** processes the request:
   - **Non-blocking tasks** (e.g., reading a small message) are handled immediately, and a response is sent.
   - **Blocking or CPU-intensive tasks** (e.g., reading a large file, heavy computation) are offloaded to the **thread pool**.
3. The **thread pool** (default: 4 workers) processes blocking tasks.
4. Once the task is complete, the result is sent back to the **event loop**, which delivers the response to the client.

### Simplified Flow Diagram

```
Client Request
       |
       v
  Event Loop
   /      \
Non-blocking   Blocking → Thread Pool (4 workers)
       |                   |
       v                   v
 Response              Back to Event Loop
       |                   |
       ---------------------
               v
            Client
```

## 2. Node.js Under the Hood

Node.js relies on:
- **V8 + C++**: Executes JavaScript and provides native bindings.
- **libuv**: Manages the event loop, thread pool, and asynchronous I/O.
- **Single-threaded JavaScript execution**: Handles JavaScript code in a single thread.
- **Thread pool**: Used for CPU-intensive tasks such as:
  - Cryptographic operations
  - Compression
  - File system operations

### Key Concepts
- **Event Loop**: Orchestrates asynchronous operations and callbacks.
- **Thread Pool**: Offloads heavy CPU tasks.
- **Timers**: Handles `setTimeout` and `setInterval`.
- **Immediate Callbacks**: Executes `setImmediate` callbacks.
- **Close Callbacks**: Runs when resources (e.g., sockets) close.

## 3. Timers and Immediate Callbacks

Node.js provides mechanisms to schedule callbacks, such as `setTimeout` and `setImmediate`.

### Example
```javascript
setImmediate(() => {
    console.log("Immediate callback executed");
});

setTimeout(() => {
    console.log("Timeout callback executed");
}, 0);

console.log("Hello world");
```

### Output Order
1. `Hello world` (synchronous code runs first).
2. `Timeout callback executed` (timers phase).
3. `Immediate callback executed` (check phase).

**Explanation**:
- `setTimeout(..., 0)` schedules callbacks in the **timers phase**.
- `setImmediate` schedules callbacks in the **check phase**.
- Synchronous code executes before asynchronous callbacks, making the order predictable.

### Without Synchronous Code
If there’s no synchronous code (e.g., no `console.log("Hello world")`):

```javascript
setImmediate(() => {
    console.log("Immediate callback executed");
});

setTimeout(() => {
    console.log("Timeout callback executed");
}, 0);
```

**Behavior**:
- Both `setTimeout(..., 0)` and `setImmediate` are asynchronous and scheduled in different event loop phases.
- The execution order is **non-deterministic**:
  - `setImmediate` may run first (check phase).
  - `setTimeout` may run first (timers phase).
- This happens because Node.js decides the phase order based on timing and environment.

**Possible Outputs**:
```
Immediate callback executed
Timeout callback executed
```
*or*
```
Timeout callback executed
Immediate callback executed
```

## 4. Thread Pool Example (Crypto)

CPU-intensive tasks, like cryptographic operations, are offloaded to the thread pool.

### Example
```javascript
const crypto = require('crypto');
console.log('Start');

crypto.pbkdf2('password', 'salt', 100000, 1024, 'sha512', () => {
    console.log('Done 1', Date.now());
});

crypto.pbkdf2('password', 'salt', 100000, 1024, 'sha512', () => {
    console.log('Done 2', Date.now());
});

console.log('End');
```

### Output
```
Start
End
Done 1 <timestamp>
Done 2 <timestamp>
```

**Explanation**:
- The thread pool (default: 4 threads) handles `pbkdf2` tasks.
- Synchronous code (`console.log('Start')` and `console.log('End')`) runs first.
- The `pbkdf2` tasks are processed in the thread pool and their callbacks are executed when complete.

### Adjusting Thread Pool Size
You can increase the thread pool size using the `UV_THREADPOOL_SIZE` environment variable. For example, to set it to 5 threads:

```bash
UV_THREADPOOL_SIZE=5 node app.js
```

### Example with Custom Thread Pool Size
```javascript
const crypto = require('crypto');
console.log('Start');

crypto.pbkdf2('password', 'salt', 100000, 1024, 'sha512', () => {
    console.log('Done 1', Date.now());
});

crypto.pbkdf2('password', 'salt', 100000, 1024, 'sha512', () => {
    console.log('Done 2', Date.now());
});

crypto.pbkdf2('password', 'salt', 100000, 1024, 'sha512', () => {
    console.log('Done 3', Date.now());
});

crypto.pbkdf2('password', 'salt', 100000, 1024, 'sha512', () => {
    console.log('Done 4', Date.now());
});

crypto.pbkdf2('password', 'salt', 100000, 1024, 'sha512', () => {
    console.log('Done 5', Date.now());
});

console.log('End');
```

**Running with Default Thread Pool (4 threads)**:
```bash
node app.js
```

**Output**:
```
Start
End
Done 1 <timestamp>
Done 2 <timestamp>
Done 3 <timestamp>
Done 4 <timestamp>
Done 5 <timestamp>
```

**Running with Increased Thread Pool (5 threads)**:
```bash
UV_THREADPOOL_SIZE=5 node app.js
```

**Explanation**:
- With the default 4 threads, the 5 `pbkdf2` tasks are queued, and the 5th task waits for a thread to become available.
- By setting `UV_THREADPOOL_SIZE=5`, all 5 tasks can run concurrently, potentially reducing the total execution time.

## 5. Key Phases of the Event Loop

The Node.js event loop has the following phases:
1. **Timers**: Executes callbacks for `setTimeout` and `setInterval`.
2. **Pending Callbacks**: Executes deferred I/O callbacks.
3. **Idle, Prepare**: Internal phase for Node.js housekeeping.
4. **Poll**: Fetches new I/O events and executes I/O-related callbacks.
5. **Check**: Executes `setImmediate` callbacks.
6. **Close Callbacks**: Executes callbacks for closed resources (e.g., `socket.on('close', ...)`).