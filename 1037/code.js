var input = require('fs').readFileSync('/dev/stdin', 'utf8');

function verify(number) {
    if(number >= 0 && number <= 25) return `Intervalo [0,25]`;
    if(number > 25 && number <= 50) return `Intervalo (25,50]`;
    if(number > 50 && number <= 75) return `Intervalo (50,75]`;
    if(number > 75 && number <= 100) return `Intervalo (75,100]`;

    return `Fora de intervalo`;
}

process.stdout.write(`${verify(input)}\n`)