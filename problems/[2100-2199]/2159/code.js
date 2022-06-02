var input = require("fs").readFileSync("/dev/stdin", "utf8"),
    n = Number(input),
    p = n / Math.log(n),
    m = 1.25506 * p;

process.stdout.write(`${p.toFixed(1)} ${m.toFixed(1)}\n`);
