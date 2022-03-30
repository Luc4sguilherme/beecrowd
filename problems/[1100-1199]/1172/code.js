var input = require("fs").readFileSync("/dev/stdin", "utf8");
var lines = input.split("\n");

for (var i = 0; i < lines.length; i++) {
    var number = Number(lines[i]);

    if (number <= 0) {
        number = 1;
    }

    process.stdout.write(`X[${i}] = ${number}\n`);
}
