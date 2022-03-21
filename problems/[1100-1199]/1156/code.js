function calculate(numerator = 1, denominator = 1) {
    if (numerator <= 39) {
        return (
            numerator / denominator + calculate(numerator + 2, denominator * 2)
        );
    }

    return 0;
}

process.stdout.write(`${calculate().toFixed(2)}\n`);
