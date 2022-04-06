var input = require("fs").readFileSync("/dev/stdin", "utf8"),
    t = Number(input),
    i = 0,
    x = 0;

for(; i < 1000; x++, i++) {
    if (x === t) {
        x = 0;
    }

    process.stdout.write(`N[${i}] = ${x}\n`);
}