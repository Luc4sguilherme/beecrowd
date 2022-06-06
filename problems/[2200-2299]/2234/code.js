var input = require('fs').readFileSync('/dev/stdin', 'utf8');
var [m, p] = input.split(" ").map((item) => Number(item));
var result = (m / p).toFixed(2);

process.stdout.write(`${result}\n`);
