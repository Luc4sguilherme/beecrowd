var input = require("fs").readFileSync("/dev/stdin", "utf8"),
    lines = input.split("\n"),
    line = Number(lines.shift()),
    operation = lines.shift(),
    result = 0,
    startOfTheLine = line * 12,
    endOfTheLine = startOfTheLine + 12,
    i = startOfTheLine;

for (; i < endOfTheLine; i++) {
    if (operation === "S") {
        result += Number(lines[i]);
    } else {
        result += Number(lines[i]) / 12;
    }
}

process.stdout.write(`${result.toFixed(1)}\n`);
