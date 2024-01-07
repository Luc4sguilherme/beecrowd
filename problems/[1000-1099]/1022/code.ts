var input = require("fs").readFileSync("/dev/stdin", "utf8");
var lines = input.split("\n");

function sum(n1: number, n2: number, d1: number, d2: number) {
    return `${n1 * d2 + n2 * d1}/${d1 * d2}`;
}

function subtraction(n1: number, n2: number, d1: number, d2: number) {
    return `${n1 * d2 - n2 * d1}/${d1 * d2}`;
}

function multiplication(n1: number, n2: number, d1: number, d2: number) {
    return `${n1 * n2}/${d1 * d2}`;
}

function division(n1: number, n2: number, d1: number, d2: number) {
    return `${n1 * d2}/${n2 * d1}`;
}

function getNumbers(expression: string) {
    var [n1, d1, n2, d2] = expression.match(/\d+/g)?.map(n => Number(n))!;

    return [n1, d1, n2, d2];
}

function getOperator(expression: string) {
    var operator = expression.match(/(?:\d+\s\/\s\d+)\s([\-\+\*\/])\s(?:\d+\s\/\s\d+)/)?.[1]!;

    return operator;
}

function getOperation(operator: string) {
    switch (operator) {
        case "+":
            return sum;
        case "-":
            return subtraction;
        case "*":
            return multiplication;
        case "/":
            return division;
        default:
            throw new Error('invalid operator');
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

function calculateGCD(numerator: number, denominator: number) {
    return denominator ? calculateGCD(denominator, numerator % denominator) : numerator;
}

function simplify(numerator: number, denominator: number) {
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
