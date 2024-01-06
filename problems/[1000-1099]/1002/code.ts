var input = require('fs').readFileSync('/dev/stdin', 'utf8');
var lines = input.split('\n');

let R = lines.shift()

function circumference(R: number) {
    let n = 3.14159
    let A = (n * Math.pow(R,2)).toFixed(4)
    
    return A
}

console.log(`A=${circumference(R)}`)