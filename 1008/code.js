var input = require('fs').readFileSync('/dev/stdin', 'utf8').split('\n');
process.stdout.write(`NUMBER = ${input[0]}\nSALARY = U$ ${(input[1] * input[2]).toFixed(2)}\n`)
