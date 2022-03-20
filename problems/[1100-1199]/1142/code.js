var input = require("fs").readFileSync("/dev/stdin", "utf8");
var value = Number(input);
var message = "";

for (var i = 1, j = 1; i <= value; i++, j += 4) {
    for (var k = j; k < j + 3; k++) {
        message += `${k} `;
    }

    message += "PUM\n";
}

process.stdout.write(message);
