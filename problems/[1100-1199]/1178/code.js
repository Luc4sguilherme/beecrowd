var input = require("fs").readFileSync("/dev/stdin", "utf8"),
    x = Number(input),
    y = x,
    i = 0;

function formatNumber(number, precision) {
    return Number(number).toLocaleString("en-US", {
        useGrouping: false,
        minimumFractionDigits: precision,
        maximumFractionDigits: precision,
    });
}

for (; i < 100; i++, y /= 2) {
    process.stdout.write(`N[${i}] = ${formatNumber(y, 4)}\n`);
}
