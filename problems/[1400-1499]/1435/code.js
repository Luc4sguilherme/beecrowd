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

                for (var l = 0; l < n / 2; l++) {
                    if (
                        j === n - l ||
                        j === l + 1 ||
                        k === n - l ||
                        k === l + 1
                    ) {
                        value = l + 1;
                        l = n;
                    }
                }

                var whitespace = " ".repeat(3);
                var text = `${whitespace}${value}`.slice(-4);

                if (k=== 1) {
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
