var input = require("fs").readFileSync("/dev/stdin", "utf8");

function calculateTaxes(salary) {
    var taxes;

    if (salary > 0 && salary <= 2000) {
        return "Isento";
    }

    if (salary > 2000.01 && salary <= 3000) {
        taxes = (salary - 2000) * 0.08;
    }

    if (salary > 3000.01 && salary <= 4500) {
        taxes = (salary - 3000) * 0.18 + 1000 * 0.08;
    }

    if (salary >= 4500) {
        taxes = (salary - 4500) * 0.28 + 1500 * 0.18 + 1000 * 0.08;
    }

    return `R$ ${taxes.toFixed(2)}`;
}

function main() {
    var salary = Number(input);
    var taxes = calculateTaxes(salary);

    process.stdout.write(`${taxes}\n`);
}

main();
