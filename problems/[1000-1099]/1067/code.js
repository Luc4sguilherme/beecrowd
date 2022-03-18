var input = require("fs").readFileSync("/dev/stdin", "utf8");
var end = Number(input);

function listOddNumbers(range) {
    if (1 <= range.end && range.end <= 1000) {
        for (let number = range.start; number <= range.end; number++) {
            if (number % 2 !== 0) {
                process.stdout.write(`${number}\n`);
            }
        }
    }
}

listOddNumbers({ start: 1, end: end });
