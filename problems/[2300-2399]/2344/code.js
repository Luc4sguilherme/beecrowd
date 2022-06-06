var input = require('fs').readFileSync('/dev/stdin', 'utf8');

function getConcept(score) {
    if (score === 0) {
        return "E";
    }

    if (score >= 1 && score <= 35) {
        return "D";
    }

    if (score >= 36 && score <= 60) {
        return "C";
    }

    if (score >= 61 && score <= 85) {
        return "B";
    }

    if (score >= 86 && score <= 100) {
        return "A";
    }
}

var result = getConcept(Number(input));

process.stdout.write(`${result}\n`);
