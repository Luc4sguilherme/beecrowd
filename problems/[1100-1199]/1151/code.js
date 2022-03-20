var input = require("fs").readFileSync("/dev/stdin", "utf8");
var value = Number(input);
var fibonacci = [0, 1];

for (var i = 2; i < value; i++) {
    fibonacci[i] = fibonacci[i - 2] + fibonacci[i - 1];
}

process.stdout.write(`${fibonacci.join(" ")}\n`);
