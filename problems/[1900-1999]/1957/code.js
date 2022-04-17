var input = require("fs").readFileSync("/dev/stdin", "utf8"),
    number = Number(input, 10),
    hexadecimal = number.toString(16).toUpperCase();

process.stdout.write(`${hexadecimal}\n`);
