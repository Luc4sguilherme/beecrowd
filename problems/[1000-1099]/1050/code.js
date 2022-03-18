var input = require("fs").readFileSync("/dev/stdin", "utf8");

function getDestination(code) {
    switch (code) {
        case 61:
            return "Brasilia";
        case 71:
            return "Salvador";
        case 11:
            return "Sao Paulo";
        case 21:
            return "Rio de Janeiro";
        case 32:
            return "Juiz de Fora";
        case 19:
            return "Campinas";
        case 27:
            return "Vitoria";
        case 31:
            return "Belo Horizonte";

        default:
            return "DDD nao cadastrado";
    }
}

function main() {
    var code = Number(input);
    var destination = getDestination(code);

    process.stdout.write(`${destination}\n`);
}

main();