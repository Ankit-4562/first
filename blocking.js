const crypto = require("node:crypto");

console.log("Hello World");

var a = 1078968;
var b = 20986;
crypto.pbkdf2Sync("password", "salt", 5000000, 50, "sha512");
console.log("first Key is generated");
// Password Base Key Derivative Function
crypto.pbkdf2("password", "salt", 500000, 50, "sha512", (err, key) => {
  console.log("Key is generated");
});

function multiplyFn(x, y) {
  const result = x * y;
  return result;
}

var c = multiplyFn(a, b);

console.log("Multiplication result is: ", c);
