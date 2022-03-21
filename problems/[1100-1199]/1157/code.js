var input = require("fs").readFileSync("/dev/stdin", "utf8");
var number = Number(input);

function computeAllDivisors(number) {
    var divisors = [];
    var divisor = 1;

    while (divisor <= number) {
        if (number % divisor === 0) {
            divisors.push(divisor);
        }

        divisor++;
    }

    process.stdout.write(`${divisors.join("\n")}\n`);
}

computeAllDivisors(number);
