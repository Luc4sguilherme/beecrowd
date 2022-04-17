var input = require("fs").readFileSync("/dev/stdin", "utf8");

function formatToScientificNotation(number) {
    var [mantissa, exponent] = Math.abs(number).toExponential(4).split("e");
    var exponentSign = exponent.slice(0, 1);
    var mantissaSign = Math.sign(number) === 1 || Object.is(Math.sign(number), 0) ? "+" : "-";

    exponent = `0${exponent.substring(1)}`.slice(
        Math.min(-(exponent.length - 1), -2)
    );

    return `${mantissaSign}${mantissa}E${exponentSign}${exponent}`;
}

var scientificNotation = formatToScientificNotation(Number(input));

process.stdout.write(`${scientificNotation}\n`);
