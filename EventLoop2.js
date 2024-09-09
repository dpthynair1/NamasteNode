const fs = require("fs");

let a = 100;
console.log("Last line of the file");

setImmediate(() => {
  console.log("Immediate");
});

Promise.resolve("Promise").then(console.log);
fs.readFile("./file.txt", "utf-8", () => {
  console.log("File reading CB");
});
setTimeout(() => {
  console.log("Timer expired");
});

process.nextTick(() => console.log("process.nextTick is called "));

function b() {
  console.log("a", a);
}
b();
console.log("Last line is called");
