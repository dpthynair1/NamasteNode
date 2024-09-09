const fs = require("fs");

setImmediate(() => {
  console.log("setimmediate");
});

setTimeout(() => {
  console.log("Timer expired");
}, 0);

Promise.resolve("Promise").then(console.log);

fs.readFile("./file.txt", "utf-8", () => {
  console.log("File reading CB");
});
process.nextTick(() => {
  process.nextTick(() => console.log("inner tick"));
  console.log("next tick");
});

console.log("Last line of the file");
