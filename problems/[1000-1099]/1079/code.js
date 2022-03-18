var input = require("fs").readFileSync("/dev/stdin", "utf8");

function calculateWeightedAverage(n1, n2, n3) {
    return (n1 * 2 + n2 * 3 + n3 * 5) / 10;
}

function main() {
    var lines = input.split("\n");
    var totalTestCases = Number(lines.shift());

    for (var i = 0; i < totalTestCases; i++) {
        var testCase = lines[i].split(" ").map((elem) => Number(elem));
        var weightedAverage = calculateWeightedAverage(...testCase).toFixed(1);

        process.stdout.write(`${weightedAverage}\n`);
    }
}

main();
