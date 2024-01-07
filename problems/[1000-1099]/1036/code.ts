var input = require("fs").readFileSync("/dev/stdin", "utf8");
var lines = input.split(" ");

function calculateDelta(a: number, b: number, c: number) {
    return Math.pow(b, 2) - 4 * a * c;
}

function isNegative(number: number) {
    return number < 0;
}

function bhaskara(a: number, b: number, c: number) {
    var delta = calculateDelta(a, b, c);

    if (isNegative(delta) || a === 0) {
        throw new Error("Impossivel calcular\n");
    }

    var r1 = (-b + Math.sqrt(delta)) / (2 * a);
    var r2 = (-b - Math.sqrt(delta)) / (2 * a);

    return [r1, r2];
}

function calculateRoots() {
    try {
        var [a, b, c] = lines.map((value) => Number(value));
        var [r1, r2] = bhaskara(a, b, c);

        process.stdout.write(`R1 = ${r1.toFixed(5)}\nR2 = ${r2.toFixed(5)}\n`);
    } catch (error) {
        process.stdout.write(error.message);
    }
}

calculateRoots();
