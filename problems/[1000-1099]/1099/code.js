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
    var numberOfTestCases = lines.shift();
    var tests = lines;

    for(var i = 0; i < numberOfTestCases; i++) {
        var [start, end] = tests[i].split(' ').map(el => Number(el)).sort((a, b) => a - b);
        var sumOfOddNumbers = calculateSumOfOddNumbers({ start: start, end: end });

        process.stdout.write(`${sumOfOddNumbers}\n`);
    }
}

main();