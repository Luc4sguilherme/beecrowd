var input = require("fs").readFileSync("/dev/stdin", "utf8"),
    lines = input.split("\n"),
    operation = lines.shift(),
    result = 0;

for (var i = 1, j = 0; i < 144; i++) {
    if (operation === "S") {
        result += Number(lines[i]);
    } else {
        result += Number(lines[i]) / 66;
    }

    if ((i + 1) % 12 === 0) {
        j += 1;
        i += j + 1;
    }
}

process.stdout.write(`${result.toFixed(1)}\n`);
