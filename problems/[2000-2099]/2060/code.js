var input = require("fs").readFileSync("/dev/stdin", "utf8");
var lines = input.split("\n");
var size = lines.shift();
var list = lines[0].split(" ").map((item) => Number(item));

function isMultipleOf(number, multiple) {
    if (number % multiple === 0) {
        return true;
    } else {
        return false;
    }
}

for (var i = 2; i <= 5; i++) {
    var multiples = 0;

    for (var j = 0; j <= size; j++) {
        if (isMultipleOf(list[j], i)) {
            multiples += 1;
        }
    }

    process.stdout.write(`${multiples} Multiplo(s) de ${i}\n`);
}
