var input = require("fs").readFileSync("/dev/stdin", "utf8");

function division(x, y) {
    if (y === 0) {
        return "divisao impossivel";
    }

    return (x / y).toFixed(1);
}

function main() {
    var lines = input.split("\n");
    var totalOfTestCases = Number(lines.shift());

    for (var i = 0; i < totalOfTestCases; i++) {
        var testCase = lines[i].split(" ").map((value) => Number(value));
        var [x, y] = testCase;
        var result = division(x, y);

        process.stdout.write(`${result}\n`);
    }
}

main();
