var input = require("fs").readFileSync("/dev/stdin", "utf8");
var cases = input.trim().split("\n");

for (var i = 0, j = 1; i < cases.length; i += 2, j++) {
    var num1 = cases[i];
    var num2 = cases[i + 1];
    var quantity = 0;
    var pos = 0;

    for (var k = 0; k <= num2.length - num1.length; k++) {
        var subsequence = true;

        for (var l = 0; l < num1.length; l++) {
            subsequence = subsequence && num1[l] == num2[k + l];
        }

        if (subsequence) {
            quantity += 1;
            pos = k + 1;
        }
    }

    process.stdout.write(`Caso #${j}:\n`);

    if (quantity > 0) {
        process.stdout.write(`Qtd.Subsequencias: ${quantity}\n`);
        process.stdout.write(`Pos: ${pos}\n\n`);
    } else {
        process.stdout.write(`Nao existe subsequencia\n\n`);
    }
}
