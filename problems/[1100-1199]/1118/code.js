var input = require("fs").readFileSync("/dev/stdin", "utf8"),
    lines = input.split("\n"),
    numbers = [];

function calculateAverage(numbers) {
    return numbers.reduce((accumulator, current) => {
        return (accumulator += current / numbers.length);
    }, 0);
}

for (var i = 0; i < lines.length; i++) {
    var number = Number(lines[i]);

    if (numbers.length == 2) {
        process.stdout.write(`novo calculo (1-sim 2-nao)\n`);

        if (number === 1) {
            numbers = [];
            continue;
        } else if (number === 2) {
            break;
        } else {
            continue;
        }
    }

    if (number >= 0 && number <= 10) {
        numbers.push(number);
    } else {
        process.stdout.write(`nota invalida\n`);
    }

    if (numbers.length === 2) {
        var average = calculateAverage(numbers);

        process.stdout.write(`media = ${average.toFixed(2)}\n`);
    }
}
