var input = require('fs').readFileSync('/dev/stdin', 'utf8');
var [a, b] = input.split(" ").map((value) => Number(value));

function divide(a, b) {
    if (b === 0) {
        throw new Error("Division by zero");
    }

    if (b < 0) {
        var [q, r] = divide(a, -b);

        return [-q, r];
    }

    if (a < 0) {
        var [q, r] = divide(-a, b);

        if (r === 0) {
            return [-q, 0];
        } else {
            return [-q - 1, b - r];
        }
    }

    return divide_unsigned(a, b);
}

function divide_unsigned(a, b) {
    var q = 0;
    var r = a;

    while (r >= b) {
        q = q + 1;
        r = r - b;
    }

    return [q, r];
}

var [x, y] = divide(a, b);

process.stdout.write(`${x} ${y}\n`);
