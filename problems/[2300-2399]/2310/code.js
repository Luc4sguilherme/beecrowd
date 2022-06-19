var input = require("fs").readFileSync("/dev/stdin", "utf8"),
    lines = input.split("\n"),
    numberOfPlayers = Number(lines.shift()),
    players = lines,
    totalNumberOfServices = 0,
    totalNumberOfBlocks = 0,
    totalNumberOfAttacks = 0,
    totalNumberOfSuccessfulServices = 0,
    totalNumberOfSuccessfulBlocks = 0,
    totalNumberOfSuccessfulAttacks = 0;

for (var i = 0; i < numberOfPlayers * 3; i += 3) {
    var [service, block, attack] = players[i + 1].split(" ").map((value) => Number(value));
    var [servicesSuccessful, blocksSuccessful, attackSuccessful] = players[i + 2].split(" ").map((value) => Number(value));

    totalNumberOfServices += service;
    totalNumberOfBlocks += block;
    totalNumberOfAttacks += attack;
    totalNumberOfSuccessfulServices += servicesSuccessful;
    totalNumberOfSuccessfulBlocks += blocksSuccessful;
    totalNumberOfSuccessfulAttacks += attackSuccessful;
}

var percentageOfSuccessfulServices = (totalNumberOfSuccessfulServices / totalNumberOfServices) * 100;
var percentageOfSuccessfulBlocks = (totalNumberOfSuccessfulBlocks / totalNumberOfBlocks) * 100;
var percentageOfSuccessfulAttacks = (totalNumberOfSuccessfulAttacks / totalNumberOfAttacks) * 100;

process.stdout.write(
    `Pontos de Saque: ${percentageOfSuccessfulServices.toFixed(2)} %.\n`
);
process.stdout.write(
    `Pontos de Bloqueio: ${percentageOfSuccessfulBlocks.toFixed(2)} %.\n`
);
process.stdout.write(
    `Pontos de Ataque: ${percentageOfSuccessfulAttacks.toFixed(2)} %.\n`
);
