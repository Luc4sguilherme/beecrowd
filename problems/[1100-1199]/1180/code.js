var input = require("fs").readFileSync("/dev/stdin", "utf8"),
    lines = input.split("\n"),
    size = Number(lines[0]),
    numbers = lines[1].split(" "),
    lowestNumber = Infinity,
    position,
    i = 0;

for (; i < size; i++) {
    if (lowestNumber > numbers[i]) {
        lowestNumber = Number(numbers[i]);
        position = i;
    }
}

process.stdout.write(`Menor valor: ${lowestNumber}\nPosicao: ${position}\n`);
