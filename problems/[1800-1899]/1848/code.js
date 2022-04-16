var input = require('fs').readFileSync('/dev/stdin', 'utf8');
var lines = input.split("\n");

function main() {
    var result = "";

    for (var i = 0, sum = 0; i < lines.length; i++) {
        var line = lines[i];

        if (line === "caw caw") {
            result += `${sum}\n`;
            sum = 0;
            continue;
        }

        var blink = line.split("").reverse();

        for (var j = 0; j < blink.length; j++) {
            if (blink[j] === "*") {
                sum += Math.pow(2, j);
            }
        }
    }

    process.stdout.write(`${result}`);
}

main();
