var input = require('fs').readFileSync('/dev/stdin', 'utf8').trim(),
    inverted = "",
    i = input.length - 1;

while (i >= 0) {
    inverted += input[i];
    i--;
}

process.stdout.write(`${inverted}\n`);
