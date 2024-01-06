var input = require('fs').readFileSync('/dev/stdin', 'utf8');
process.stdout.write(`${input * 2} minutos\n`);