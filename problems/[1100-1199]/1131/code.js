var input = require("fs").readFileSync("/dev/stdin", "utf8").trim(),
    lines = input.split("\n"),
    grenais = 0,
    numberOfVictoriesOfInter = 0,
    numberOfVictoriesOfGremio = 0,
    numberofDraws = 0;

for (var i = 0; i < lines.length; i += 2) {
    var [inter, gremio] = lines[i].split(" ").map((value) => Number(value));
    var action = lines[i + 1];

    process.stdout.write(`Novo grenal (1-sim 2-nao)\n`);

    if (action === 1) {
        continue;
    } else if (action === 2) {
        break;
    }

    if (inter > gremio) {
        numberOfVictoriesOfInter++;
    } else if (inter < gremio) {
        numberOfVictoriesOfGremio++;
    } else {
        numberofDraws++;
    }

    grenais++;
}

process.stdout.write(`${grenais} grenais\n`);
process.stdout.write(`Inter:${numberOfVictoriesOfInter}\n`);
process.stdout.write(`Gremio:${numberOfVictoriesOfGremio}\n`);
process.stdout.write(`Empates:${numberofDraws}\n`);

if (numberOfVictoriesOfInter > numberOfVictoriesOfGremio) {
    process.stdout.write(`Inter venceu mais\n`);
} else if (numberOfVictoriesOfInter < numberOfVictoriesOfGremio) {
    process.stdout.write(`Gremio venceu mais\n`);
} else {
    process.stdout.write(`Não houve vencedor\n`);
}
