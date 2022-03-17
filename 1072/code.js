var input = require("fs").readFileSync("/dev/stdin", "utf8");

function checkIfTheNumbersIsInTheRange(range, numbers) {
    var inInterval = 0;
    var outInterval = 0;

    for (let i = 0; i < numbers.length; i++) {
        if (numbers[i] >= range.start && numbers[i] <= range.end) {
            inInterval += 1;
        } else {
            outInterval += 1;
        }
    }

    return {
        inInterval: inInterval,
        outInterval: outInterval,
    };
}

function main() {
    var lines = input.split("\n");
    var totalnumbers = lines.shift();
    var numbers = lines
        .map((line) => Number.parseInt(line))
        .filter((number) => Number.isInteger(number));
    var range = {
        start: 10,
        end: 20,
    };

    var { inInterval, outInterval } = checkIfTheNumbersIsInTheRange(
        range,
        numbers
    );

    process.stdout.write(`${inInterval} in\n`);
    process.stdout.write(`${outInterval} out\n`);
}

main();
