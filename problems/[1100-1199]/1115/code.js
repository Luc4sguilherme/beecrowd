var input = require("fs").readFileSync("/dev/stdin", "utf8");

function checkQuadrant(x, y) {
    if (x > 0 && y > 0) return "primeiro";
    if (x < 0 && y > 0) return "segundo";
    if (x < 0 && y < 0) return "terceiro";
    if (x > 0 && y < 0) return "quarto";
}

function main() {
    var points = input.split("\n");

    for (var i = 0; i < points.length; i++) {
        var coordinates = points[i].split(" ").map((value) => Number(value));
        var [x, y] = coordinates;
        var quadrant = checkQuadrant(x, y);

        if (quadrant === undefined) {
            break;
        }

        process.stdout.write(`${quadrant}\n`);
    }
}

main();
