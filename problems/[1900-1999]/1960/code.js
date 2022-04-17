var input = require("fs").readFileSync("/dev/stdin", "utf8");

function decimalToRoman(number) {
    var symbols = "";
    var roman = {
        M: 1000,
        CM: 900,
        D: 500,
        CD: 400,
        C: 100,
        XC: 90,
        L: 50,
        XL: 40,
        X: 10,
        IX: 9,
        V: 5,
        IV: 4,
        I: 1,
    };

    for (var i of Object.keys(roman)) {
        var q = Math.floor(number / roman[i]);
        number -= q * roman[i];
        symbols += i.repeat(q);
    }

    return symbols;
}

var romanNumeral = decimalToRoman(Number(input));

process.stdout.write(`${romanNumeral}\n`)