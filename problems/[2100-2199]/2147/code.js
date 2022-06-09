var input = require("fs").readFileSync("/dev/stdin", "utf8"),
    lines = input.split("\n"),
    size = Number(lines.shift());

for (var i = 0; i < size; i++) {
    var word = lines[i];
    var time = word.length / 100;

    process.stdout.write(`${time.toFixed(2)}\n`);
}
