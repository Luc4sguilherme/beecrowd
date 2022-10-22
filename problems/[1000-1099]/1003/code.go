package main

import "fmt"

func calculateSum(a, b int) int {
	return a + b
}

func main() {
	var a int
	var b int

	fmt.Scanf("%d\n%d", &a, &b)

	sum := calculateSum(a, b)

	fmt.Printf("SOMA = %d\n", sum)
}
