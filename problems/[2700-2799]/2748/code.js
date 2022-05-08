var list = ["Roberto", "5786", "UNIFEI"];

for (var i = 1, j = 0; i <= 7; i++) {
    for (var k = 1, l = 0; k <= 39; k++) {
        if (i === 1 || i === 7) {
            process.stdout.write("-");
        } else if (k === 1 || k === 39) {
            process.stdout.write("|");
        } else if (
            list[j][l] &&
            k >= 10 &&
            k <= list[j].length + 10 &&
            i % 2 === 0
        ) {
            process.stdout.write(`${list[j][l]}`);
            l++;
        } else {
            process.stdout.write(" ");
        }
    }

    if (i % 2 === 0) {
        j++;
    }

    process.stdout.write("\n");
}
