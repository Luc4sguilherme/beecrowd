var input = require('fs').readFileSync('/dev/stdin', 'utf8');
var lines = input.split('\n');

let A = parseInt(lines.shift());
let B = parseInt(lines.shift());
 
function sum(A: number, B: number) {
    return A + B;
}
 
process.stdout.write(`X = ${sum(A, B)}\n`);