var text = "x = 35";

for (var i = 1, j = 1; i <= 7; i++) {
    for (var k = 1, l = 0; k <= 39; k++) {
        if (i === 1 || i === 7) {
            process.stdout.write("-");
        } else if (k === 1 || k === 39) {
            process.stdout.write("|");
        } else if (text[l] && i % 2 === 0 && k >= j && k <= text.length + j) {
            process.stdout.write(`${text[l]}`);
            l++;
        } else {
            process.stdout.write(" ");
        }
    }

    if (i % 2 === 0) {
        j += 16;
    }

    process.stdout.write("\n");
}
