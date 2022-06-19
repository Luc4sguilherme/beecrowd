var input = require("fs").readFileSync("/dev/stdin", "utf8");
var lines = input.split("\n");
var numberOfDivers = Number(lines.shift());

for (var i = 0; i < numberOfDivers * 3; i += 3) {
    var nameOfEachCompetitor = lines[i];
    var difficulty = Number(lines[i + 1]);
    var dive = lines[i + 2]
        .split(" ")
        .map((value) => Number(value))
        .sort((a, b) => b - a)
        .slice(1, 6);

    var sum = dive.reduce((accumulator, current) => accumulator + current, 0);
    var scored = sum * difficulty;

    process.stdout.write(`${nameOfEachCompetitor} ${scored.toFixed(2)}\n`);
}
