var input = require('fs').readFileSync('/dev/stdin', 'utf8'),
    n = Number(input),
    result = (((1 + Math.sqrt(5)) / 2) ** n - ((1 - Math.sqrt(5)) / 2) ** n) / Math.sqrt(5);

process.stdout.write(`${result.toFixed(1)}\n`);
