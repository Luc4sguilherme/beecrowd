var input = require("fs").readFileSync("/dev/stdin", "utf8");
var lines = input.split("\n");

var even = [];
var odd = [];

function printEvenNumber() {
    for (var j = 0; j < even.length; j++) {
        var evenNumber = even[j];

        process.stdout.write(`par[${j}] = ${evenNumber}\n`);
    }
}

function printOddNumber() {
    for (var j = 0; j < odd.length; j++) {
        var oddNumber = odd[j];

        process.stdout.write(`impar[${j}] = ${oddNumber}\n`);
    }
}

for (var i = 0; i < 15; i++) {
    var number = Number(lines[i]);

    if (even.length === 5) {
        printEvenNumber();

        even = [];
    }

    if (odd.length === 5) {
        printOddNumber();

        odd = [];
    }

    if (number % 2 === 0) {
        even.push(number);
    } else {
        odd.push(number);
    }
}

printOddNumber();
printEvenNumber();
