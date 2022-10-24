package main

import (
	"errors"
	"fmt"
)

func calculateTaxes(salary float64) (float64, error) {
	var taxes float64

	if salary > 0 && salary <= 2000 {
		return 0, errors.New("Isento")
	}

	if salary > 2000.01 && salary <= 3000 {
		taxes = (salary - 2000) * 0.08
	}

	if salary > 3000.01 && salary <= 4500 {
		taxes = (salary-3000)*0.18 + 1000*0.08
	}

	if salary >= 4500 {
		taxes = (salary-4500)*0.28 + 1500*0.18 + 1000*0.08
	}

	return taxes, nil
}

func main() {
	var salary float64

	fmt.Scanf("%f", &salary)

	taxes, err := calculateTaxes(salary)

	if err != nil {
		fmt.Printf("%s\n", err.Error())
		return
	}

	fmt.Printf("R$ %.2f\n", taxes)
}
