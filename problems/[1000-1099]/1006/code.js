var grades = require('fs').readFileSync('/dev/stdin', 'utf8').split('\n');
process.stdout.write(`MEDIA = ${(((grades[0] * 2) + (grades[1] * 3) + (grades[2] * 5)) / 10).toFixed(1)}\n`)