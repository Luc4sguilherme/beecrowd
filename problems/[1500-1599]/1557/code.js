var input = require("fs").readFileSync("/dev/stdin", "utf8");
var lines = input.split("\n");

function main() {
    for (var i = 0; i < lines.length; i++) {
        var n = Number(lines[i]);

        if (n === 0) {
            break;
        }

        for (var j = 0; j <= n - 1; j++) {
            var t = String((2 ** (n - 1)) ** 2).length;
            var text = "";

            for (var k = 0, l = 2 ** j; k <= n - 1; k++, l *= 2) {
                var whitespace = " ".repeat(t);

                text += `${whitespace}${l}`.slice(-t - 1);

                if (k === 0) {
                    text = text.substring(1);
                }
            }

            process.stdout.write(`${text}\n`);
        }

        process.stdout.write(`\n`);
    }
}

main();
