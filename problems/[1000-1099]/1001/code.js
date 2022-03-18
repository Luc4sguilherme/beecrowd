var input = require('fs').readFileSync('/dev/stdin', 'utf8');
var lines = input.split('\n');

/**
 * Escreva a sua solução aqui
 * Code your solution here
 * Escriba su solución aquí
 */
 
 let A = parseInt(lines.shift());
 let B = parseInt(lines.shift());
 
 function sum(A, B) {
     return A + B
 }
 
 process.stdout.write(`X = ${sum(A, B)}\n`)