var input = require("fs").readFileSync("/dev/stdin", "utf8");
var value = Number(input);

function factorial(n) {
    if (n <= 1) {
        return 1;
    }

    return n * factorial(n - 1);
}

process.stdout.write(`${factorial(value)}\n`);
