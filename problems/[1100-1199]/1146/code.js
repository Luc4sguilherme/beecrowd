var input = require("fs").readFileSync("/dev/stdin", "utf8");

function getAllNumbersBetweenTheRange(start, end) {
    var numbers = [];

    for (var i = start; i <= end; i++) {
        numbers.push(i);
    }

    return numbers.join(" ");
}

function main() {
    var lines = input.split("\n");

    for (var i = 0; i < lines.length; i++) {
        var x = Number(lines[i]);

        if (x === 0) {
            break;
        }

        var sequence = getAllNumbersBetweenTheRange(1, x);

        process.stdout.write(`${sequence}\n`);
    }
}

main();
