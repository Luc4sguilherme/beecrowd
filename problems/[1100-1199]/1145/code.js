var input = require("fs").readFileSync("/dev/stdin", "utf8");
var [x, y] = input.split(" ").map((value) => Number(value));
var line = [];

for (var i = 1; i <= y; i++) {
    line.push(i);

    if (i % x === 0) {
        process.stdout.write(`${line.join(" ")}\n`);
        line = [];
    }
}
