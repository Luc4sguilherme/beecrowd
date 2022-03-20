var input = require("fs").readFileSync("/dev/stdin", "utf8");
var value = Number(input);
var message = "";

for (var i = 1, j = 0, k = 1; i <= value; i++, j++) {
    for (var l = 1; l <= 2; l++) {
        var line = [i, k];
        var result = i * k;

        if (l === 1) {
            k += 1;
        } else {
            result -= j;
            k += 2 * i;
        }

        line.push(result);

        message += `${line.join(" ")}\n`;
    }
}

process.stdout.write(`${message}`);
