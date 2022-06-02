var input = require("fs").readFileSync("/dev/stdin", "utf8"),
    repetitions = Number(input),
    fraction = 0;

for (var i = 1; i <= repetitions; i++) {
    fraction = 1 / (2 + fraction);
}

process.stdout.write(`${(1 + fraction).toFixed(10)}\n`);
