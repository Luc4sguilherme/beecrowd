var input = require("fs").readFileSync("/dev/stdin", "utf8");
var [oldValue, newValue] = input.split(" ").map((value) => Number(value));
var result = (newValue / oldValue) * 100 - 100;

process.stdout.write(`${result.toFixed(2)}%\n`);
