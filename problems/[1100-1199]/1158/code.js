var input = require('fs').readFileSync('/dev/stdin', 'utf8');

function isOddNumber(number) {
    if (number % 2 !== 0) {
        return true;
    }

    return false;
}

function calculateSumOfConsecutiveOddNumbers(x, y) {
    var sum = 0;
    var number = isOddNumber(x) ? x : x + 1;

    for (var i = 1; i <= y; number++) {
        if (isOddNumber(number)) {
            sum += number;
            i++;
        }
    }

    process.stdout.write(`${sum}\n`);
}

function main() {
    var lines = input.split("\n");
    var quantity = Number(lines.shift());

    for (var i = 0; i < quantity; i++) {
        var [x, y] = lines[i].split(" ").map((value) => Number(value));

        calculateSumOfConsecutiveOddNumbers(x, y);
    }
}

main();
