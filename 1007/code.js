var input = require('fs').readFileSync('/dev/stdin', 'utf8').split('\n');
process.stdout.write(`DIFERENCA = ${input[0] * input[1] - input[2] * input[3]}\n`)