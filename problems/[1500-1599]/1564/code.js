var input = require("fs").readFileSync("/dev/stdin", "utf8");
var lines = input.split("\n");

for (var i = 0; i < lines.length; i++) {
    if (lines[i].length === 0) {
        break;
    }

    var complaints = Number(lines[i]);

    if (complaints !== 0) {
        process.stdout.write(`vai ter duas!\n`);
    } else {
        process.stdout.write(`vai ter copa!\n`);
    }
}
