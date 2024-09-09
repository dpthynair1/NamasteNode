const fs = require("fs");

setImmediate(() => console.log("setImmediate"));
setTimeout(() => {
  console.log("timeout 1");
}, 0);

Promise.resolve("Promise").then(console.log);

fs.readFile("./file.txt", "utf-8", () => {
  setTimeout(() => console.log(""));
  process.nextTick(() => console.log("next tick 2"));

  setImmediate(() => console.log("2nd immediate"));
  console.log("file reading CB");
});

process.nextTick(() => console.log("next tick"));

console.log("last line of the code");
