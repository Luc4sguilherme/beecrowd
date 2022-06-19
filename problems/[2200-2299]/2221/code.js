var input = require("fs").readFileSync("/dev/stdin", "utf8");
var lines = input.split("\n");
var size = Number(lines.shift());
var battles = lines;

function calculate(attack, defense, bonus = 0) {
    return (attack + defense) / 2 + bonus;
}

var attributes = ["attack", "defense", "level"];

function transform(array) {
    return attributes.reduce((accumulator, element, index) => {
        return { ...accumulator, [element]: array[index] };
    }, {});
}

for (var i = 0; i < size * 3; i += 3) {
    var bonus = battles[i];
    var pomekonOfDabriel = transform(battles[i + 1].split(" ").map(Number));
    var pomekonOfGuarte = transform(battles[i + 2].split(" ").map(Number));
    var powerOfDabrielsPomekon;
    var powerOfGuartesPomekon;

    if (pomekonOfDabriel.level % 2 === 0) {
        powerOfDabrielsPomekon = calculate(
            pomekonOfDabriel.attack,
            pomekonOfDabriel.defense,
            bonus
        );
    } else {
        powerOfDabrielsPomekon = calculate(
            pomekonOfDabriel.attack,
            pomekonOfDabriel.defense
        );
    }

    if (pomekonOfGuarte.level % 2 === 0) {
        powerOfGuartesPomekon = calculate(
            pomekonOfGuarte.attack,
            pomekonOfGuarte.defense,
            bonus
        );
    } else {
        powerOfGuartesPomekon = calculate(
            pomekonOfGuarte.attack,
            pomekonOfGuarte.defense
        );
    }

    if (powerOfDabrielsPomekon > powerOfGuartesPomekon) {
        process.stdout.write("Dabriel\n");
    } else if (powerOfDabrielsPomekon < powerOfGuartesPomekon) {
        process.stdout.write("Guarte\n");
    } else {
        process.stdout.write("Empate\n");
    }
}
