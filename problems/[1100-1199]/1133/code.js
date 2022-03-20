var input = require("fs").readFileSync("/dev/stdin", "utf8");

function main() {
    var [start, end] = input
        .split("\n")
        .map((value) => Number.parseInt(value))
        .sort((a, b) => a - b);

    for (var number = start + 1; number < end; number++) {
        if (number % 5 === 2 || number % 5 === 3) {
            process.stdout.write(`${number}\n`);
        }
    }
}

main();
