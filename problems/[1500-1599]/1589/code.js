var input = require("fs").readFileSync("/dev/stdin", "utf8");
var lines = input.split("\n");
var size = Number(lines.shift());

for (var i = 0; i < size; i++) {
    var [r1, r2] = lines[i].split(" ").map((value) => Number(value));
    var value = r1 + r2;

    process.stdout.write(`${value}\n`);
}
