var input = require("fs").readFileSync("/dev/stdin", "utf8").trim();
var numbers = input.split("\n");

for (var i = 1; i <= numbers.length; i++) {
    var number = Number(numbers[i - 1]);
    var c = 1 + (number * (number + 1)) / 2;
    var sequence = [];

    if (c == 1) {
        process.stdout.write(`Caso ${i}: ${c} numero\n0`);
    } else {
        process.stdout.write(`Caso ${i}: ${c} numeros\n0 `);
    }

    for (var j = 1; j <= number; j++) {
        for (var k = 1; k <= j; k++) {
            sequence.push(j);
        }
    }

    process.stdout.write(`${sequence.join(" ")}\n\n`);
}
