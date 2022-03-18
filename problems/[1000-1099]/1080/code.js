var input = require("fs").readFileSync("/dev/stdin", "utf8");

function getHighestValue(numbers) {
    var size = 100,
        max = -Infinity;

    while (size--) {
        if (Number(numbers[size]) > max) {
            max = Number(numbers[size]);
        }
    }

    return max;
}

function main() {
    var numbers = input.split("\n");
    var highestValue = getHighestValue(numbers);
    var position = numbers.indexOf(`${highestValue}`) + 1;

    process.stdout.write(`${highestValue}\n${position}\n`);
}

main();