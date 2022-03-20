var input = require("fs").readFileSync("/dev/stdin", "utf8");
var lines = input.split("\n");
var x = Number(lines.shift());
var quantity = 1;

for (var i = 0; i < lines.length; i++) {
    var z = Number(lines[i]);

    if (z > x) {
        for (var j = x, sum = x; sum <= z; j++, sum += j) {
            quantity++;
        }
    }
}

process.stdout.write(`${quantity}\n`);
