var input = require("fs").readFileSync("/dev/stdin", "utf8");
var lines = input.split("\n");

function table(food) {
    switch (food) {
        case "suco de laranja":
            return 120;
        case "morango fresco":
            return 85;
        case "mamao":
            return 85;
        case "goiaba vermelha":
            return 70;
        case "manga":
            return 56;
        case "laranja":
            return 50;
        case "brocolis":
            return 34;
    }
}

for (let i = 0; i < lines.length; i++) {
    const dailyIntakes = Number(lines[i]);
    let intakeOfVitaminC = 0;

    if (dailyIntakes == 0) {
        break;
    }

    for (let j = 1; j <= dailyIntakes; j++) {
        const { amount, food } = String(lines[i + j].trim()).match(
            /(?<amount>\d+)\s(?<food>\w.*)/
        ).groups;

        intakeOfVitaminC += Number(amount) * table(food);
    }

    i += dailyIntakes;

    if (intakeOfVitaminC >= 110 && intakeOfVitaminC <= 130) {
        process.stdout.write(`${intakeOfVitaminC} mg\n`);
    } else if (intakeOfVitaminC > 130) {
        const recommended = intakeOfVitaminC - 130;

        process.stdout.write(`Menos ${recommended} mg\n`);
    } else if (intakeOfVitaminC < 110) {
        const recommended = 110 - intakeOfVitaminC;

        process.stdout.write(`Mais ${recommended} mg\n`);
    }
}
