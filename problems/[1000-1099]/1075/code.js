var input = require("fs").readFileSync("/dev/stdin", "utf8");
var integer = Number.parseInt(input);

for (var number = 1; number < 10000; number++) {
    if (number % integer === 2) {
        process.stdout.write(`${number}\n`);
    }
}
