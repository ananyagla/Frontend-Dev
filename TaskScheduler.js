console.log("Start");

setTimeout(() => {
    console.log("Timeout Callback");
}, 0);

Promise.resolve().then(() => {
    console.log("Promise Callback");
});

console.log("Synchronous Log");
console.log("End");
