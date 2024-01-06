var input = require('fs').readFileSync('/dev/stdin', 'utf8');
var lines = input.split('\n');

let A = parseInt(lines.shift())
let B = parseInt(lines.shift())

function SOMA(A: number, B: number) {
    return A + B
}

console.log(`SOMA = ${SOMA(A,B)}`)