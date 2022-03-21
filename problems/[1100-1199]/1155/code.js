function calculate(value = 1) {
    if (value <= 100) {
        return 1 / value + calculate(++value);
    }

    return 0;
}

process.stdout.write(`${calculate().toFixed(2)}\n`);
