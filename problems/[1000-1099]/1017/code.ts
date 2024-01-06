var input = require('fs').readFileSync('/dev/stdin', 'utf8'),
    lines = input.split('\n'),
    values = lines.map(value => Number(value));

function calculateSpentFuel(spentTime: number, averageSpeed: number, carFuelConsumption: number) {
    return (spentTime * averageSpeed) / carFuelConsumption
}

process.stdout.write(`${calculateSpentFuel(values[0], values[1], 12).toFixed(3)}\n`)