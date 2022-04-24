var input = require("fs").readFileSync("/dev/stdin", "utf8"),
    lines = input.split("\n"),
    size = Number(lines.shift()),
    studentWithTheHighestScore = {};

for (var i = 0; i < size; i++) {
    var [registration, score] = lines[i].split(" ").map(Number);

    if (
        studentWithTheHighestScore.score == undefined ||
        studentWithTheHighestScore.score < score
    ) {
        studentWithTheHighestScore.registration = registration;
        studentWithTheHighestScore.score = score;
    }
}

if (studentWithTheHighestScore.score >= 8) {
    process.stdout.write(`${studentWithTheHighestScore.registration}\n`);
} else {
    process.stdout.write(`Minimum note not reached\n`);
}
