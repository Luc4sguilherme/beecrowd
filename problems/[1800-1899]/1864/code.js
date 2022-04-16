var input = require("fs").readFileSync("/dev/stdin", "utf8"),
    lines = Number(input),
    sentence = "LIFE IS NOT A PROBLEM TO BE SOLVED",
    result = "";

for (var i = 0; i < lines; i++) {
    result += sentence[i];
}

process.stdout.write(`${result}\n`);
