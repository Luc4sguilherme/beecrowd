var input = require("fs").readFileSync("/dev/stdin", "utf8");

function calculateSquareOfNumber(number) {
    return Math.pow(number, 2);
}

function printSquareOfNumber(number) {
    var square = calculateSquareOfNumber(number);

    process.stdout.write(`${number}^2 = ${square}\n`);
}

function isEvenNumber(number) {
    if (number % 2 === 0) {
        return true;
    }
}

function listSquareOfEvenNumbers(range) {
    for (var number = range.start; number <= range.end; number++) {
        if (isEvenNumber(number)) {
            printSquareOfNumber(number);
        }
    }
}

function main() {
    var range = {
        start: 1,
        end: Number(input),
    };

    listSquareOfEvenNumbers(range);
}

main();
