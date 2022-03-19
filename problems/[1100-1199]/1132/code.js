var input = require("fs").readFileSync("/dev/stdin", "utf8");

function getSumOfAllNumbersBetweenTheRangeNotDivisibleBy13(start, end) {
    var sum = 0;

    for (var number = start; number <= end; number++) {
        if (number % 13 !== 0) {
            sum += number;
        }
    }

    return sum;
}

function main() {
    var [start, end] = input
        .split("\n")
        .map((value) => Number.parseInt(value))
        .sort((a, b) => a - b);
    var sum = getSumOfAllNumbersBetweenTheRangeNotDivisibleBy13(start, end);

    process.stdout.write(`${sum}\n`);
}

main();
