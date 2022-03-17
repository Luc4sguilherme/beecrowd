var input = require("fs").readFileSync("/dev/stdin", "utf8");

function getTotalOfEvenNumbers(numbers) {
    var totalOfEvenNumbers = 0;

    for (var i = 0; i < 5; i++) {
        if (Math.abs(numbers[i]) % 2 === 0) {
            totalOfEvenNumbers += 1;
        }
    }

    return totalOfEvenNumbers;
}

function getTotalOfOddNumbers(numbers) {
    var totalOfOddNumbers = 0;

    for (var i = 0; i < 5; i++) {
        if (Math.abs(numbers[i]) % 2 !== 0) {
            totalOfOddNumbers += 1;
        }
    }

    return totalOfOddNumbers;
}

function getTotalOfPosiveNumbers(numbers) {
    var totalOfPositiveNumbers = 0;

    for (var i = 0; i < 5; i++) {
        if (numbers[i] > 0) {
            totalOfPositiveNumbers += 1;
        }
    }

    return totalOfPositiveNumbers;
}

function getTotalOfNegativeNumbers(numbers) {
    var totalOfNegativeNumbers = 0;

    for (var i = 0; i < 5; i++) {
        if (numbers[i] < 0) {
            totalOfNegativeNumbers += 1;
        }
    }

    return totalOfNegativeNumbers;
}

function main() {
    var numbers = input.split("\n").map((line) => Number.parseInt(line));
    var totalOfEvenNumbers = getTotalOfEvenNumbers(numbers);
    var totalOfOddNumbers = getTotalOfOddNumbers(numbers);
    var totalOfPositiveNumbers = getTotalOfPosiveNumbers(numbers);
    var totalOfNegativeNumbers = getTotalOfNegativeNumbers(numbers);

    process.stdout.write(`${totalOfEvenNumbers} valor(es) par(es)\n`);
    process.stdout.write(`${totalOfOddNumbers} valor(es) impar(es)\n`);
    process.stdout.write(`${totalOfPositiveNumbers} valor(es) positivo(s)\n`);
    process.stdout.write(`${totalOfNegativeNumbers} valor(es) negativo(s)\n`);
}

main();
