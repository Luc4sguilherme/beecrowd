var input = require("fs").readFileSync("/dev/stdin", "utf8");
var start = Number(input);

function listOddNumbers(start, quantity) {
    for (var number = start, count = 0; quantity > count; number++) {
        if (number % 2 !== 0) {
            process.stdout.write(`${number}\n`);
            count++;
        }
    }
}

listOddNumbers(start, 6);
