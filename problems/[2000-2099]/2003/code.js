var input = require("fs").readFileSync("/dev/stdin", "utf8").trim();
var lines = input.split("\n");

for (var i = 0; i < lines.length; i++) {
    var [hours, minutes] = lines[i].split(":").map((value) => Number(value));
    var diff = 8 * 60 - (hours * 60 + minutes);
    var delay = 60 - diff;

    process.stdout.write(`Atraso maximo: ${delay > 0 ? delay : 0}\n`);
}
