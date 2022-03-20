var input = require("fs").readFileSync("/dev/stdin", "utf8");
var value = Number(input);
var message = "";

for (var i = 0, j = 1; i < value; i++, j++) {
    var line = []
    
    for (var k = 1, l = j; k <= 3; k++, l = Math.pow(j, k)) {
        line.push(l)
    }

    message += `${line.join(' ')}\n`;
}

process.stdout.write(`${message}`);
