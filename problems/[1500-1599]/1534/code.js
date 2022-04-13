var input = require('fs').readFileSync('/dev/stdin', 'utf8');
var lines = input.split("\n");

function main() {
    for (var i = 0; i < lines.length; i++) {
        var n = Number(lines[i]);

        if (n === 0) {
            break;
        }

        for (var j = 0; j < n; j++) {
            for (var k = 0; k < n; k++) {
                var value;

                if (j + k === n - 1) {
                    value = 2;
                } else if (j === k) {
                    value = 1;
                } else {
                    value = 3;
                }

                process.stdout.write(`${value}`);
            }

            process.stdout.write(`\n`);
        }
    }
}

main();
