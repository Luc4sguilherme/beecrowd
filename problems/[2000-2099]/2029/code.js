var input = require('fs').readFileSync('/dev/stdin', 'utf8');
var lines = input.split("\n");

for (var i = 0; i < lines.length; i += 2) {
    if (lines[i] === "" || lines[i + 1] === "") {
        break;
    }

    var volume = lines[i];
    var diameter = lines[i + 1];
    var radius = diameter / 2;
    var area = 3.14 * radius ** 2;
    var height = volume / area;

    process.stdout.write(`ALTURA = ${height.toFixed(2)}\n`);
    process.stdout.write(`AREA = ${area.toFixed(2)}\n`);
}
