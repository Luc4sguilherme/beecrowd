var input = require("fs").readFileSync("/dev/stdin", "utf8");

function increaseSalary(salary) {
    if (salary <= 400) {
        return {
            newSalary: salary * 1.15,
            moneyEarned: salary * 0.15,
            percentage: 15,
        };
    }

    if (salary >= 400.01 && salary <= 800) {
        return {
            newSalary: salary * 1.12,
            moneyEarned: salary * 0.12,
            percentage: 12,
        };
    }

    if (salary >= 800.01 && salary <= 1200) {
        return {
            newSalary: salary * 1.1,
            moneyEarned: salary * 0.1,
            percentage: 10,
        };
    }

    if (salary >= 1200.01 && salary <= 2000) {
        return {
            newSalary: salary * 1.07,
            moneyEarned: salary * 0.07,
            percentage: 7,
        };
    }

    if (salary > 2000) {
        return {
            newSalary: salary * 1.04,
            moneyEarned: salary * 0.04,
            percentage: 4,
        };
    }
}

function main() {
    var salary = Number(input);
    var { newSalary, moneyEarned, percentage } = increaseSalary(salary);

    process.stdout.write(`Novo salario: ${newSalary.toFixed(2)}\n`);
    process.stdout.write(`Reajuste ganho: ${moneyEarned.toFixed(2)}\n`);
    process.stdout.write(`Em percentual: ${percentage} %\n`);
}

main();
