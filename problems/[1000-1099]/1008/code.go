package main

import (
	"fmt"
)

func calculateSalary(workedHoursAmount int, amountReceivedPerWorkedHour float64) float64 {
	return float64(workedHoursAmount) * amountReceivedPerWorkedHour
}

func main() {
	var employeeNumber int
	var workedHoursAmount int
	var amountReceivedPerWorkedHour float64

	fmt.Scanf("%d\n%d\n%f", &employeeNumber, &workedHoursAmount, &amountReceivedPerWorkedHour)

	employeeSalary := calculateSalary(workedHoursAmount, amountReceivedPerWorkedHour)

	fmt.Printf("NUMBER = %d\nSALARY = U$ %.2f\n", employeeNumber, employeeSalary)
}
