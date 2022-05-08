for (var i = 1; i <= 7; i++) {
    for (var j = 1; j <= 39; j++) {
        if (i === 1 || i === 7) {
            process.stdout.write("-");
        } else if (j === 1 || j === 39) {
            process.stdout.write("|");
        } else {
            process.stdout.write(" ");
        }
    }

    process.stdout.write("\n");
}
