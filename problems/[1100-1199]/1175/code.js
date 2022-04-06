var input = require("fs").readFileSync("/dev/stdin", "utf8");
var array = input.split("\n");
var arrayLength = array.length;

for (var i = 0; i < arrayLength; i++) {
    process.stdout.write(`N[${i}] = ${array[arrayLength - i - 1]}\n`);
}
