var input = require("fs").readFileSync("/dev/stdin", "utf8");

function isEvenNumber(number) {
    if (number % 2 === 0) {
        return true;
    }

    return false;
}

function calculateSumOfConsecutiveEvenNumbers(x) {
    var sum = 0;
    var number = isEvenNumber(x) ? x : x + 1;

    for (var i = 1; i <= 5; number++) {
        if (isEvenNumber(number)) {
            sum += number;
            i++;
        }
    }

    process.stdout.write(`${sum}\n`);
}

function main() {
    var lines = input.split("\n");

    for (var i = 0; i < lines.length; i++) {
        var x = Number(lines[i]);

        if (x === 0) {
            break;
        }

        calculateSumOfConsecutiveEvenNumbers(x);
    }
}

main();
