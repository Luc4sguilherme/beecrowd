var input = require('fs').readFileSync('/dev/stdin', 'utf8');
var lines = input.split("\n");

function main() {
    for (var i = 0; i < lines.length; i++) {
        var n = Number(lines[i]);

        if (n === 0) {
            break;
        }

        for (var j = 1; j <= n; j++) {
            for (var k = 1; k <= n; k++) {
                var value;

                if (j === 0) {
                    value = i + j + 1;
                } else if (j + 1 - k > 0) {
                    value = j + 1 - k;
                } else {
                    value = k - (j - 1);
                }

                var whitespace = " ".repeat(3);
                var text = `${whitespace}${value}`.slice(-4);

                if (k === 1) {
                    text = text.substring(1);
                }

                process.stdout.write(`${text}`);
            }

            process.stdout.write(`\n`);
        }

        process.stdout.write(`\n`);
    }
}

main();
