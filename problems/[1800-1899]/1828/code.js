var input = require("fs").readFileSync("/dev/stdin", "utf8");
var lines = input.split("\n");

function rockPaperScissorsLizardSpock(input1, input2) {
    if (input1 === "tesoura" && input2 === "papel") {
        return 1;
    }

    if (input1 === "papel" && input2 === "pedra") {
        return 1;
    }

    if (input1 === "pedra" && input2 === "lagarto") {
        return 1;
    }

    if (input1 === "lagarto" && input2 === "Spock") {
        return 1;
    }

    if (input1 === "Spock" && input2 === "tesoura") {
        return 1;
    }

    if (input1 === "tesoura" && input2 === "lagarto") {
        return 1;
    }

    if (input1 === "lagarto" && input2 === "papel") {
        return 1;
    }

    if (input1 === "papel" && input2 === "Spock") {
        return 1;
    }

    if (input1 === "Spock" && input2 === "pedra") {
        return 1;
    }

    if (input1 === "pedra" && input2 === "tesoura") {
        return 1;
    }

    if (input1 === input2) {
        return 0;
    }

    return 2;
}

function SheldonReaction(testcase) {
    var [input1, input2] = testcase.split(" ");

    var result = rockPaperScissorsLizardSpock(input1, input2);

    switch (result) {
        case 1: {
            return "Bazinga!";
        }

        case 2: {
            return "Raj trapaceou!";
        }

        default: {
            return "De novo!";
        }
    }
}

function main() {
    var size = Number(lines.shift());

    for (var i = 0; i < size; i++) {
        var testcase = lines[i];
        var result = SheldonReaction(testcase);

        process.stdout.write(`Caso #${i + 1}: ${result}\n`);
    }
}

main();
