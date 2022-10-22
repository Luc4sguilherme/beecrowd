package main

import "fmt"

func increaseSalary(salary float64) (float64, float64, int) {
	if salary <= 400 {
		return salary * 1.15, salary * 0.15, 15
	}

	if salary >= 400.01 && salary <= 800 {
		return salary * 1.12, salary * 0.12, 12
	}

	if salary >= 800.01 && salary <= 1200 {
		return salary * 1.1, salary * 0.1, 10
	}

	if salary >= 1200.01 && salary <= 2000 {
		return salary * 1.07, salary * 0.07, 7
	}

	return salary * 1.04, salary * 0.04, 4
}

func main() {
	var salary float64

	fmt.Scanf("%f", &salary)

	newSalary, moneyEarned, percentage := increaseSalary(salary)

	fmt.Printf("Novo salario: %.2f\n", newSalary)
	fmt.Printf("Reajuste ganho: %.2f\n", moneyEarned)
	fmt.Printf("Em percentual: %d %s\n", percentage, "%")
}
