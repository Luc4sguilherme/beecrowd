var input = require("fs").readFileSync("/dev/stdin", "utf8"),
    cards = input.split(" ").map((value) => Number(value)),
    bestCard = Math.max(...cards);

process.stdout.write(`${bestCard}\n`);
