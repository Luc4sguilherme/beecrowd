var input = require('fs').readFileSync('/dev/stdin', 'utf8');
var lines = input.split(' ');
var values = lines.map(value => Number(value))

function getBiggestInteger(integers: number[]) {
    const integerA = integers.shift()!;
    const integerB = integers.shift()!;

    const biggestInteger = (integerA + integerB + Math.abs(integerA - integerB)) / 2;

    if(integers.length > 0) {
        return getBiggestInteger([biggestInteger, ...integers]);
    } else {
        return biggestInteger;
    }
}

process.stdout.write(`${getBiggestInteger(values)} eh o maior\n`);