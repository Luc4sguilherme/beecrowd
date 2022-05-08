var input = require('fs').readFileSync('/dev/stdin', 'utf8');
var lines = input.split("\n");
var size = Number(lines.shift());

function rockPaperAirstrike(player1, player2) {
    if (player1 === "pedra" && player2 === "pedra") {
        return "Sem ganhador";
    }

    if (player1 === "ataque" && player2 === "ataque") {
        return "Aniquilacao mutua";
    }

    if (player1 === "papel" && player2 === "papel") {
        return "Ambos venceram";
    }

    if (player1 === "ataque") {
        return "Jogador 1 venceu";
    }

    if (player2 === "ataque") {
        return "Jogador 2 venceu";
    }

    if (player1 === "pedra") {
        return "Jogador 1 venceu";
    }

    if (player2 === "pedra") {
        return "Jogador 2 venceu";
    }
}

for (var i = 0; i < size * 2; i += 2) {
    var player1Choice = lines[i];
    var player2Choice = lines[i + 1];

    var result = rockPaperAirstrike(player1Choice, player2Choice);

    process.stdout.write(`${result}\n`);
}
