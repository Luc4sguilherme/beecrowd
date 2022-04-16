var input = require("fs").readFileSync("/dev/stdin", "utf8");
var lines = input.split("\n").map((value) => Number(value));
var size = lines.shift();

for (var i = 0; i < size; i++) {
    var number = lines[i];
    var sum = 0;

    for (var j = 0; j < number; j++) {
        if (j % 2 === 0) {
            sum += 1;
        } else {
            sum -= 1;
        }

    }

    process.stdout.write(`${sum}\n`);
}
