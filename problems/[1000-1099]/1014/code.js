var input = require('fs').readFileSync('/dev/stdin', 'utf8');
var lines = input.split('\n');
var values = lines.map(value => Number(value))

function calculateAverageConsumption(distance, spentFuel) {
    return distance / spentFuel
}

process.stdout.write(`${calculateAverageConsumption(...values).toFixed(3)} km/l\n`)