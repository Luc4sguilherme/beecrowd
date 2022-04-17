var input = require("fs").readFileSync("/dev/stdin", "utf8");
var [numberOfSides, lengthOfEachSide] = input.split(" ").map((value) => Number(value));
var perimeter = numberOfSides * lengthOfEachSide;

process.stdout.write(`${perimeter}\n`);