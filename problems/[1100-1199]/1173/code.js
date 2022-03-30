var input = require("fs").readFileSync("/dev/stdin", "utf8");
var number = Number(input);

for (var i = 0, k = number; i < 10; i++, k *= 2) {
    process.stdout.write(`N[${i}] = ${k}\n`);
}
