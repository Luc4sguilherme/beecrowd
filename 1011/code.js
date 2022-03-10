var input = require('fs').readFileSync('/dev/stdin', 'utf8').split('\n');
process.stdout.write(`VOLUME = ${((4.0/3) * 3.14159 * (input[0] ** 3)).toFixed(3)}\n`)