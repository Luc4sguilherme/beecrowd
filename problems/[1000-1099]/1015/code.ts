var input = require('fs').readFileSync('/dev/stdin', 'utf8');
var lines = input.split("\n"),
  point1 = lines[0].split(" ") as number,
  point2 = lines[1].split(" ") as number;

function distance(x1: number, x2: number, y1: number, y2: number) {
  return Math.sqrt((x2 - x1) ** 2 + (y2 - y1) ** 2).toFixed(4);
}

process.stdout.write(`${distance(parseFloat(point2[0]), parseFloat(point1[0]), parseFloat(point2[1]), parseFloat(point1[1]))}\n`);