var input = require("fs").readFileSync("/dev/stdin", "utf8"),
    repetitions = Number(input),
    fraction = 0;

for (var i = 1; i <= repetitions; i++) {
    fraction = 1 / (6 + fraction);
}

process.stdout.write(`${(3 + fraction).toFixed(10)}\n`);
