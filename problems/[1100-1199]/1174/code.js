var input = require("fs").readFileSync("/dev/stdin", "utf8");
var lines = input.split("\n");

for (var i = 0; i < 100; i++) {
    var number = Number(lines[i]);

    if (number <= 10) {
        process.stdout.write(`A[${i}] = ${number.toFixed(1)}\n`);
    }
}
