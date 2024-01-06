var input = require('fs').readFileSync('/dev/stdin', 'utf8');
var lines = input.split('\n');

let num1 = parseInt(lines.shift())
let num2 = parseInt(lines.shift())

function product(num1: number, num2: number) {
    return num1 * num2
}

console.log(`PROD = ${product(num1, num2)}`)