var input = require('fs').readFileSync('/dev/stdin', 'utf8').split('\n'),
    salario = parseFloat(input[1]),
    vendas = parseFloat(input[2]),
    TOTAL = (((vendas * 15) / 100) + salario).toFixed(2);

console.log("TOTAL = R$ " + TOTAL);