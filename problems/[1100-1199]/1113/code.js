var input = require("fs").readFileSync("/dev/stdin", "utf8");

function main() {
    var valuesPairs = input.split("\n");

    for (var i = 0; i < valuesPairs.length; i++) {
        var valuesPair = valuesPairs[i]
            .split(" ")
            .map((value) => Number(value));
        var [n1, n2] = valuesPair;

        if (n1 === n2) {
            break;
        }

        if (n1 < n2) {
            process.stdout.write(`Crescente\n`);
        }

        if (n1 > n2) {
            process.stdout.write(`Decrescente\n`);
        }
    }
}

main()