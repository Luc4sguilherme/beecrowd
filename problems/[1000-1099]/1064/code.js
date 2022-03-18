var input = require("fs").readFileSync("/dev/stdin", "utf8");

function getTotalOfPosiveNumbers(numbers) {
    var numberOfPositiveNumbers = 0;

    for (var i = 0; i < numbers.length; i++) {
        if (numbers[i] > 0) {
            numberOfPositiveNumbers += 1;
        }
    }

    return numberOfPositiveNumbers;
}

function getPositiveNumbers(numbers) {
    return numbers.filter((number) => number > 0);
}

function getAverageOfPositiveNumbers(numbers) {
    var positiveNumbers = getPositiveNumbers(numbers);
    var sum = positiveNumbers.reduce((acc, cur) => {
        return acc + cur;
    }, 0);

    var average = sum / positiveNumbers.length;

    return average;
}

function main() {
    var numbers = input.split("\n").map((line) => Number(line));
    var numberOfPositiveNumbers = getTotalOfPosiveNumbers(numbers);
    var average = getAverageOfPositiveNumbers(numbers);

    process.stdout.write(`${numberOfPositiveNumbers} valores positivos\n`);
    process.stdout.write(`${average.toFixed(1)}\n`);
}

main();
