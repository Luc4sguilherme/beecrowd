var input = require("fs").readFileSync("/dev/stdin", "utf8");
var number = Number(input);

function multiplicationTable(number) {
    for (var i = 1; i <= 10; i++) {
        var result = i * number;

        process.stdout.write(`${i} x ${number} = ${result}\n`);
    }
}

multiplicationTable(number);
