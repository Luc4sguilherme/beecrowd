var input = require("fs").readFileSync("/dev/stdin", "utf8");

function calculateFibonacci(number) {
    var fibonacci = [0, 1];

    for (var i = 2; i <= number; i++) {
        fibonacci[i] = fibonacci[i - 2] + fibonacci[i - 1];
    }

    return fibonacci[number];
}

function main() {
    var lines = input.split("\n");
    var size = lines.shift();

    for (var i = 0; i < size; i++) {
        var number = Number(lines[i]);
        var result = calculateFibonacci(number);

        process.stdout.write(`Fib(${number}) = ${result}\n`);
    }
}

main();
