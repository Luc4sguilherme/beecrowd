var input = require('fs').readFileSync('/dev/stdin', 'utf8'),
    [a1, a2, a3] = input.split('\n').map(item => Number(item)),
    totalMinutes = 0,
    t1 = a2 * 2 + a3 * 4,
    t2 = a1 * 2 + a3 * 2,
    t3 = a1 * 4 + a2 * 2;

if (t1 <= t2 && t1 <= t3) {
    totalMinutes = t1;
} else if (t2 <= t3) {
    totalMinutes = t2;
} else {
    totalMinutes = t3;
}

process.stdout.write(`${totalMinutes}\n`);