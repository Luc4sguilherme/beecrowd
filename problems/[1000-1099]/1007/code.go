package main

import (
	"fmt"
)

func calculateDifference(a, b, c, d int) int {
	return (a * b) - (c * d)
}

func main() {
	var a int
	var b int
	var c int
	var d int

	fmt.Scanf("%d\n%d\n%d\n%d", &a, &b, &c, &d)

	difference := calculateDifference(a, b, c, d)

	fmt.Printf("DIFERENCA = %d\n", difference)
}
