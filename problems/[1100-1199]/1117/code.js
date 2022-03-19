var input = require("fs").readFileSync("/dev/stdin", "utf8");

function calculateAverageScore(scores) {
    return (
        scores.reduce((accumulator, current) => accumulator + current, 0) /
        scores.length
    ).toFixed(2);
}

function isValidScore(score) {
    if (score >= 0 && score <= 10) {
        return true;
    }

    return false;
}

function main() {
    var scores = input.split("\n");
    var validScores = [];

    for (var i = 0; i < scores.length; i++) {
        var score = Number(scores[i]);

        if (validScores.length === 2) {
            break;
        }

        if (isValidScore(score)) {
            validScores.push(score);
        } else {
            process.stdout.write(`nota invalida\n`);
        }
    }

    var averageScore = calculateAverageScore(validScores);

    process.stdout.write(`media = ${averageScore}\n`);
}

main();
