var grades = require('fs').readFileSync('/dev/stdin', 'utf8').split('\n');
process.stdout.write(`MEDIA = ${(((grades[0] * 3.5) + (grades[1] * 7.5)) / 11).toFixed(5)}\n`);   