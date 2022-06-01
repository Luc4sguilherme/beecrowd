var input = require("fs").readFileSync("/dev/stdin", "utf8"),
    lines = input.split(" ").map((line) => Number(line)),
    isPossibleToFormTheTriangle;

function isTriangle(a, b, c) {
    if (a + b > c && b + c > a && a + c > b) {
        return true;
    } else {
        return false;
    }
}

for (var i = 0; i <= 3; i++) {
    var sides = [...lines];

    sides.splice(i, 1);

    var [a, b, c] = sides;

    if (isTriangle(a, b, c)) {
        isPossibleToFormTheTriangle = `S\n`;
        break;
    } else {
        isPossibleToFormTheTriangle = `N\n`;
    }
}

process.stdout.write(isPossibleToFormTheTriangle);
