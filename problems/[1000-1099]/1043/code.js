var input = require("fs").readFileSync("/dev/stdin", "utf8");
var lines = input.split(" ");

function calculatePerimeterOfTriangle(a, b, c) {
    return a + b + c;
}

function calculateAreaOfTrapezium(a, b, c) {
    return 0.5 * (a + b) * c;
}

function isTriangle(a, b, c) {
    if (a + b > c && b + c > a && a + c > b) {
        return true;
    } else {
        return false;
    }
}

function main() {
    var [a, b, c] = lines.map((line) => Number(line));

    if (isTriangle(a, b, c)) {
        var perimeter = calculatePerimeterOfTriangle(a, b, c);
        process.stdout.write(`Perimetro = ${perimeter.toFixed(1)}\n`);
    } else {
        var area = calculateAreaOfTrapezium(a, b, c);
        process.stdout.write(`Area = ${area.toFixed(1)}\n`);
    }
}

main();