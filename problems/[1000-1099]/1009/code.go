package main

import "fmt"

func main() {
	var salary float64
	var sales float64

	fmt.Scanf("%s\n%f\n%f", new(string), &salary, &sales)

	total := (((sales * 15) / 100) + salary)

	fmt.Printf("TOTAL = R$ %.2f\n", total)
}
