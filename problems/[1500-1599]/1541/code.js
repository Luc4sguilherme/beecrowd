var input = require("fs").readFileSync("/dev/stdin", "utf8");
var lines = input.split("\n");

for (var i = 0; i < lines.length; i++) {
    if (lines[i] == 0) {
        break;
    }

    var [a, b, p] = lines[i].split(" ");
    var value = parseInt(Math.sqrt(a * b * (100 / p), 2));

    process.stdout.write(`${value}\n`);
}
