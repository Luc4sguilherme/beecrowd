var input = require('fs').readFileSync('/dev/stdin', 'utf8'),
    lines = input.split("\n"),
    size = Number(lines.shift()),
    stolenSheep = 0,
    sheeps = lines[0].split(" ").map((value) => Number(value)),
    totalNumberOfSheep = sheeps.reduce(
        (accumulator, current) => accumulator + current,
        0
    ),
    visitedStars = [],
    i = 0;

while (i < size) {
    var sheep = sheeps[i];

    if (Number.isNaN(sheep) || sheep === 0 || i < 0 || i > size) {
        break;
    }

    visitedStars[i] = 1;
    stolenSheep++;
    sheeps[i] = sheep - 1;

    if (sheep % 2 !== 0) {
        i++;
    } else {
        i--;
    }
}

process.stdout.write(
    `${visitedStars.filter((v) => v === 1).length} ${
        totalNumberOfSheep - stolenSheep
    }\n`
);
