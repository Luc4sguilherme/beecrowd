var input = require('fs').readFileSync('/dev/stdin', 'utf8');
var lines = input.split('\n');

/**
 * Escreva a sua solução aqui
 * Code your solution here
 * Escriba su solución aquí
 */

let num1 = parseInt(lines.shift())
let num2 = parseInt(lines.shift())

function product(num1, num2) {
    return num1 * num2
}

console.log(`PROD = ${product(num1, num2)}`)