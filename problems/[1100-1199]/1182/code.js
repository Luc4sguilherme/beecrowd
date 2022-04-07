var input = require('fs').readFileSync('/dev/stdin', 'utf8'),
    columns = input.split("\n"),
    column = Number(columns.shift()),
    operation = columns.shift(),
    result = 0;

for (var i = 0, j = column; i < 12; i++, j = 12 * i + column) {
    if (operation === "S") {
        result += Number(columns[j]);
    } else {
        result += Number(columns[j]) / 12;
    }
}

process.stdout.write(`${result.toFixed(1)}\n`);