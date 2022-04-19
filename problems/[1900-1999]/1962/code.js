var input = require("fs").readFileSync("/dev/stdin", "utf8");
var lines = input.split("\n");
var size = Number(lines.shift());

function getTime(year) {
    var time = 2015 - year;

    if (time <= 0) {
        return `${Math.abs(time) + 1} A.C.`;
    } else {
        return `${time} D.C.`;
    }
}

for (var i = 0; i < size; i++) {
    var year = Number(lines[i]);
    var time = getTime(year);

    process.stdout.write(`${time}\n`);
}
