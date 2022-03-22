var input = require("fs").readFileSync("/dev/stdin", "utf8");

function getAllDivisors(number) {
    var divisors = [];
    var divisor = 1;

    while (divisor < number) {
        if (number % divisor === 0) {
            divisors.push(divisor);
        }

        divisor++;
    }

    return divisors;
}

function sumOfNumbers(numbers) {
    return numbers.reduce((accumulator, current) => accumulator + current, 0);
}

function isPerfectNumber(number) {
    var divisors = getAllDivisors(number);
    var sumOfDivisors = sumOfNumbers(divisors);

    if (sumOfDivisors === number) {
        return true;
    }

    return false;
}

function main() {
    var lines = input.split("\n");
    var numberOfTestCases = Number(lines.shift());

    for (var i = 0; i < numberOfTestCases; i++) {
        var number = Number(lines[i]);

        if (isPerfectNumber(number)) {
            process.stdout.write(`${number} eh perfeito\n`);
        } else {
            process.stdout.write(`${number} nao eh perfeito\n`);
        }
    }
}

main();
