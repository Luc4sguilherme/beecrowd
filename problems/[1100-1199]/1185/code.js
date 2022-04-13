var input = require("fs").readFileSync("/dev/stdin", "utf8"),
    lines = input.split("\n"),
    operation = lines.shift(),
    result = 0;

for (var i = 0, j = 11, k = 0; i < 144; i++) {
    if (i === 143 - j * 12 - k) {
        j--;
        k++;
        i = 12 * k;
    }

    if (j === 0) {
        break;
    }

    if (operation === "S") {
        result += Number(lines[i]);
    } else {
        result += Number(lines[i]) / 66;
    }
}

process.stdout.write(`${result.toFixed(1)}\n`);
