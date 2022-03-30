var input = require("fs").readFileSync("/dev/stdin", "utf8");

function isPrimeNumber(number) {
    for (var i = 1; i <= number; i++) {
        if (i !== 1 && i !== number && number % i === 0) {
            return false;
        }
    }

    return true;
}

function main() {
    var lines = input.split("\n");
    var quantity = Number(lines.shift());

    for (var i = 0; i < quantity; i++) {
        var number = Number(lines[i]);

        if (isPrimeNumber(number)) {
            process.stdout.write(`${number} eh primo\n`);
        } else {
            process.stdout.write(`${number} nao eh primo\n`);
        }
    }
}

main();
