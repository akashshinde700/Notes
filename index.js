setImmediate(() => {
    console.log("Immediate callback executed");
});

setTimeout(() => {
    console.log("Timeout callback executed");
}, 0);

console.log("Hello world");