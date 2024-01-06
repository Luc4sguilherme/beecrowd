var input = require('fs').readFileSync('/dev/stdin', 'utf8');
var ageInDays = Number(input)

function calculate(age: number) {
    var year = Math.floor(age / 365);
    age = age % 365;
    
    var month = Math.floor(age / 30);
    age = age % 30;
    
    var days = Math.floor(age);
    
    return `${year} ano(s)\n${month} mes(es)\n${days} dia(s)`
}

process.stdout.write(`${calculate(ageInDays)}\n`)