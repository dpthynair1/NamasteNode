const fs = require("fs");

const https = require("https");

console.log("Hello World");
var a = 1078698;
var b = 20986;

https.get("https://dummyjson.com/products/1", (res) => {
  console.log("Https call");
});

setTimeout(() => {
  console.log("setTimeout called after 5 secs");
});

fs.readFile("./file.txt", "utf8", (err, data) => {
  console.log("File data :", data);
});
function multiplyfn(x, y) {
  return x * y;
}

var c = multiplyfn(a, b);
console.log("Product is : ", c);
