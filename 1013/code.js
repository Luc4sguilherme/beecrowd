var input = require('fs').readFileSync('/dev/stdin', 'utf8');
var lines = input.split(' ');
var values = lines.map(value => Number(value))

function getBiggestInteger(integerA, integerB) {
    return (integerA + integerB + Math.abs(integerA - integerB)) / 2
}

process.stdout.write(`${getBiggestInteger(values[2], getBiggestInteger(values[0],values[1]))} eh o maior\n`)