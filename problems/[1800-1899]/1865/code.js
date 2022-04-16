var input = require("fs").readFileSync("/dev/stdin", "utf8");
var lines = input.split("\n");
var size = Number(lines.shift());

for (var i = 0; i < size; i++) {
    var [name] = lines[i].split(' ');

    if (name === "Thor") {
        process.stdout.write(`Y\n`);
    } else {
        process.stdout.write(`N\n`);
    }
}
