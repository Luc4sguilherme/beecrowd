var input = require("fs").readFileSync("/dev/stdin", "utf8");
var points = input.split(" ");

function pointIsAtTheOrigin(x, y) {
    if (x === 0 && y === 0) return "Origem";
}

function pointIsAtAxis(x, y) {
    if (y === 0) return "Eixo X";
    if (x === 0) return "Eixo Y";
}

function checkQuadrant(x, y) {
    if (x > 0 && y > 0) return "Q1";
    if (x < 0 && y > 0) return "Q2";
    if (x < 0 && y < 0) return "Q3";
    if (x > 0 && y < 0) return "Q4";
}

function main() {
    var [x, y] = points.map((point) => Number(point));

    var origin = pointIsAtTheOrigin(x, y);
    var axis = pointIsAtAxis(x, y);
    var quadrant = checkQuadrant(x, y);

    if (origin) {
        process.stdout.write(`${origin}\n`);
    } else if (axis) {
        process.stdout.write(`${axis}\n`);
    } else if (quadrant) {
        process.stdout.write(`${quadrant}\n`);
    }
}

main();
