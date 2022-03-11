var input = require("fs").readFileSync("/dev/stdin", "utf8");
var lines = input.split("\n");

function sum(n1, n2, d1, d2) {
    return `${n1 * d2 + n2 * d1}/${d1 * d2}`;
}

function subtraction(n1, n2, d1, d2) {
    return `${n1 * d2 - n2 * d1}/${d1 * d2}`;
}

function multiplication(n1, n2, d1, d2) {
    return `${n1 * n2}/${d1 * d2}`;
}

function division(n1, n2, d1, d2) {
    return `${n1 * d2}/${n2 * d1}`;
}

function getNumbers(expression) {
    var [n1, d1, n2, d2] = expression.match(/\d+/g);

    return [n1, d1, n2, d2];
}

function getOperator(expression) {
    var operator = expression.match(/(?:\d+\s\/\s\d+)\s([\-\+\*\/])\s(?:\d+\s\/\s\d+)/)[1];

    return operator;
}

function getOperation(operator) {
    switch (operator) {
        case "+":
            return sum;
        case "-":
            return subtraction;
        case "*":
            return multiplication;
        case "/":
            return division;
    }
}

function calculate() {
    var amountOfCases = lines.splice(0, 1);
    var result = lines
        .filter((line) => line.match(/\s/))
        .map((expression) => {
            var [n1, d1, n2, d2] = getNumbers(expression);
            var operator = getOperator(expression);
            var operation = getOperation(operator);

            return operation(n1, n2, d1, d2);
        });

    return result;
}

function calculateGCD(numerator, denominator) {
    return denominator ? calculateGCD(denominator, numerator % denominator) : numerator;
}

function simplify(numerator, denominator) {
    const gcd = Math.abs(calculateGCD(numerator, denominator));
    return [numerator / gcd, denominator / gcd];
}

function main() {
    var result = calculate();
    var output = result.reduce((acumulator, expression) => {
        var [numerator, denominator] = expression.split("/");
        var simplified = simplify(numerator, denominator).join("/");

        return acumulator + `${expression} = ${simplified}\n`;
    }, "");

    process.stdout.write(output);
}

main();
