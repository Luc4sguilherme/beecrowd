var input = require("fs").readFileSync("/dev/stdin", "utf8"),
    lines = input.trim().split("\n").map((item) => Number(item));

for (var i = 0; i < lines.length; i++) {
    process.stdout.write(`${lines[i] - 1}\n`);
}
