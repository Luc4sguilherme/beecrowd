var input = require('fs').readFileSync('/dev/stdin', 'utf8');
var lines = input.split("\n");
var size = Number(lines.shift()) * 2;

function evenOrOddGame(player1, player2) {
    if ((player1.number + player2.number) % 2 === 0) {
        if (player1.choose === "PAR" && player2.choose === "IMPAR") {
            return player1.name;
        } else {
            return player2.name;
        }
    }

    if ((player1.number + player2.number) % 2 !== 0) {
        if (player1.choose === "IMPAR" && player2.choose === "PAR") {
            return player1.name;
        } else {
            return player2.name;
        }
    }
}

for (var i = 0; i < size; i += 2) {
    var [player1Name, player1Choose, player2Name, player2Choose] = lines[i].split(" ");
    var [number1, number2] = lines[i + 1].split(" ").map((value) => Number(value));

    var result = evenOrOddGame(
        { name: player1Name, choose: player1Choose, number: number1 },
        { name: player2Name, choose: player2Choose, number: number2 }
    );

    process.stdout.write(`${result}\n`);
}
