var input = require("fs").readFileSync("/dev/stdin", "utf8");

function isRabbit(animal) {
    if (animal.includes("C")) {
        return true;
    }

    return false;
}

function isRat(animal) {
    if (animal.includes("R")) {
        return true;
    }

    return false;
}

function isFrog(animal) {
    if (animal.includes("S")) {
        return true;
    }

    return false;
}

function main() {
    var lines = input.split("\n");
    var totalOfTests = Number(lines.shift());
    var tests = lines;

    var totalNumberOfRabbit = 0;
    var totalNumberOfRat = 0;
    var totalNumberOfFrog = 0;

    for (let i = 0; i < totalOfTests; i++) {
        var test = tests[i].split(" ");
        var [quantity, animal] = test;

        if (isRabbit(animal)) {
            totalNumberOfRabbit += Number(quantity);
        }

        if (isRat(animal)) {
            totalNumberOfRat += Number(quantity);
        }

        if (isFrog(animal)) {
            totalNumberOfFrog += Number(quantity);
        }
    }

    var totalNumberOfAnimals = totalNumberOfRabbit + totalNumberOfRat + totalNumberOfFrog;
    var PercentageOfRabbit = ((totalNumberOfRabbit * 100) / totalNumberOfAnimals).toFixed(2);
    var PercentageOfRat = ((totalNumberOfRat * 100) / totalNumberOfAnimals).toFixed(2);
    var PercentageOfFrog = ((totalNumberOfFrog * 100) / totalNumberOfAnimals).toFixed(2);

    process.stdout.write(`Total: ${totalNumberOfAnimals} cobaias\n`);
    process.stdout.write(`Total de coelhos: ${totalNumberOfRabbit}\n`);
    process.stdout.write(`Total de ratos: ${totalNumberOfRat}\n`);
    process.stdout.write(`Total de sapos: ${totalNumberOfFrog}\n`);
    process.stdout.write(`Percentual de coelhos: ${PercentageOfRabbit} %\n`);
    process.stdout.write(`Percentual de ratos: ${PercentageOfRat} %\n`);
    process.stdout.write(`Percentual de sapos: ${PercentageOfFrog} %\n`);
}

main();
