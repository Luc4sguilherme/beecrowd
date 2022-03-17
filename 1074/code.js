var input = require("fs").readFileSync("/dev/stdin", "utf8");

function isOddNumber(number) {
    if (Math.abs(number) % 2 !== 0) {
        return true;
    }
}

function isEvenNumber(number) {
    if (Math.abs(number) % 2 === 0) {
        return true;
    }
}

function isNevativeNumber(number) {
    if (number < 0) {
        return true;
    }
}

function isPositiveNumber(number) {
    if (number > 0) {
        return true;
    }
}

function numberIsZero(number) {
    if (number === 0) {
        return true;
    }
}

function checkIfTheNumberIsEvenOrOdd(number) {
    if (isOddNumber(number)) {
        return "ODD";
    }

    if (isEvenNumber(number)) {
        return "EVEN";
    }
}

function checkIfTheNumberIsPositiveOrNegative(number) {
    if (isPositiveNumber(number)) {
        return "POSITIVE";
    }

    if (isNevativeNumber(number)) {
        return "NEGATIVE";
    }
}

function main() {
    var lines = input.split("\n");
    var totalOfNumbers = lines.shift();
    var numbers = lines.map((line) => Number.parseInt(line));

    for (var i = 0; i < totalOfNumbers; i++) {
        var number = numbers[i];

        if (numberIsZero(number)) {
            process.stdout.write("NULL\n");
        } else {
            var evenOrOdd = checkIfTheNumberIsEvenOrOdd(number);
            var positiveOrNegative = checkIfTheNumberIsPositiveOrNegative(number);

            process.stdout.write(`${evenOrOdd} ${positiveOrNegative}\n`);
        }
    }
}

main();
