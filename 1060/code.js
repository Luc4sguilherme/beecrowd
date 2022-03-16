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

function main() {
    var numbers = input.split("\n").map((line) => Number(line));
    var numberOfPositiveNumbers = getTotalOfPosiveNumbers(numbers);

    process.stdout.write(`${numberOfPositiveNumbers} valores positivos\n`);
}

main();
