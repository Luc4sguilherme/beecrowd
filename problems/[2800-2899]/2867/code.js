var input = require("fs").readFileSync("/dev/stdin", "utf8"),
    lines = input.split("\n"),
    size = Number(lines.shift());

for (var i = 0; i < size; i++) {
    var [n, m] = lines[i].split(" ").map((item) => Number(item));
    var numberOfDigits = Math.floor(Math.log10(n) * m + 1);

    process.stdout.write(`${numberOfDigits}\n`);
}
