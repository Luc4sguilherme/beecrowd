for (var i = 1, j = 7; i <= 9; i += 2, j += 5) {
    for (var k = 1; k <= 3; k++, j -= 1) {
        console.log(`I=${i} J=${j}\n`);
    }
}
