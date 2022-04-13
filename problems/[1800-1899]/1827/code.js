var input = require("fs").readFileSync("/dev/stdin", "utf8");
var lines = input.split("\n");

function main() {
    for (var i = 0; i < lines.length; i++) {
        if (lines[i].length === 0) {
            break;
        }

        var n = Number(lines[i]);

        for (var j = 1; j <= n; j++) {
            for (var k = 1; k <= n; k++) {
                var value;

                if (k === 1 + parseInt(n / 2) && j === 1 + parseInt(n / 2)) {
                    value = 4;
                } else if (
                    j > parseInt(n / 3) &&
                    j <= n - parseInt(n / 3) &&
                    k > parseInt(n / 3) &&
                    k <= n - parseInt(n / 3)
                ) {
                    value = 1;
                } else if (j === k) {
                    value = 2;
                } else if (j === n + 1 - k) {
                    value = 3;
                } else {
                    value = 0;
                }

                process.stdout.write(`${value}`);
            }

            process.stdout.write(`\n`);
        }

        process.stdout.write(`\n`);
    }
}

main();
