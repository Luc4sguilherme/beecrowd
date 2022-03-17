var input = require("fs").readFileSync("/dev/stdin", "utf8");

function calculateSumOfOddNumbers(range) {
    var sum = 0;

    for (let number = range.start + 1; number < range.end; number++) {
        if (Math.abs(number) % 2 !== 0) {
            sum += number;
        }
    }

    return sum;
}

function main() {
    var lines = input.split("\n");
    var [start, end] = lines
        .map((line) => Number.parseInt(line))
        .filter((number) => Number.isInteger(number))
        .sort((a, b) => a - b);
    var sumOfOddNumbers = calculateSumOfOddNumbers({ start: start, end: end });

    process.stdout.write(`${sumOfOddNumbers}\n`);
}

main();
