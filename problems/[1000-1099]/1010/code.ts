var input = require('fs').readFileSync('/dev/stdin', 'utf8').split('\n'),
    product1 = input[0].split(' ') as number,
    product2 = input[1].split(' ') as number;
    
process.stdout.write(`VALOR A PAGAR: R$ ${Number((product1[1] * product1[2]) + (product2[1] * product2[2])).toFixed(2)}\n`)