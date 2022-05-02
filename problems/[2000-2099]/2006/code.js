var input = require("fs").readFileSync("/dev/stdin", "utf8"),
    [teaType, answers] = input.split("\n"),
    correctAnswer = answers
        .split(" ")
        .filter((answer) => answer == teaType).length;

process.stdout.write(`${correctAnswer}\n`);
