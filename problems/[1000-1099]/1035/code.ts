var input = require("fs").readFileSync("/dev/stdin", "utf8");
var lines = input.split(" ");
var values = lines.map((value) => Number(value));
var [a, b, c, d] = values;

function isEven(number: number) {
    return number % 2 === 0;
}

function isPositive(number: number) {
    return number > 0;
}

function verify() {
    if (b > c && d > a && (c + d > a + b) && isPositive(c) && isPositive(d) && isEven(a)) {
        return "Valores aceitos\n";
    }

    return "Valores nao aceitos\n";
}

process.stdout.write(verify());
