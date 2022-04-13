var input = require("fs").readFileSync("/dev/stdin", "utf8");
var size = Number(input);

for (var i = 1; i <= size; i++) {
    if (i === size) {
        process.stdout.write("Ho!\n");
    } else {
        process.stdout.write("Ho ");
    }
}
