var input = require('fs').readFileSync('/dev/stdin', 'utf8');
var lines = input.split("\n");
var availableBills = [2, 5, 10, 20, 50, 100];

function generatePossibleChanges() {
    var possibleChanges = [];

    for (var i = 0; i < availableBills.length; i++) {
        for (var j = 0; j < availableBills.length; j++) {
            if (availableBills[i] !== availableBills[j]) {
                possibleChanges.push(availableBills[i] + availableBills[j]);
            }
        }
    }

    return possibleChanges;
}

var possibleChanges = generatePossibleChanges();

for (var i = 0; i < lines.length; i++) {
    var [n, m] = lines[i].split(" ").map((value) => Number(value));
    var change = m - n;
    var isPossible = possibleChanges.some((value) => value === change);

    if (m === 0 && n === 0) {
        break;
    }

    if (isPossible) {
        process.stdout.write("possible\n");
    } else {
        process.stdout.write("impossible\n");
    }
}
