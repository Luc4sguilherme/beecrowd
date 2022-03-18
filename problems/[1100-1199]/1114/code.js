var input = require("fs").readFileSync("/dev/stdin", "utf8");

var VALID_PASSWORD = 2002;

function main() {
    var passwords = input.split("\n").map((value) => Number(value));

    for (var i = 0; i < passwords.length; i++) {
        var password = passwords[i];

        if (password === VALID_PASSWORD) {
            process.stdout.write(`Acesso Permitido\n`);
            break;
        } else {
            process.stdout.write(`Senha Invalida\n`);
        }
    }
}

main()