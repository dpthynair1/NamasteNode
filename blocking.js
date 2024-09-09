const crypto = require("crypto");

var a = 1078698;
var b = 20986;

// Sync function will block the main thread
crypto.pbkdf2Sync("password", "salt", 5000000, 50, "sha512");
console.log("Key generated in Sync");

crypto.pbkdf2("password", "salt", 500000, 50, "sha512", (err, key) => {
  console.log("Key generated Async");
});

function multiplyfn(x, y) {
  return x * y;
}

var c = multiplyfn(a, b);
console.log("Product is : ", c);
