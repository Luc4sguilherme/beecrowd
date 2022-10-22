package main

import (
	"fmt"
)

func calculateProduct(a, b int) int {
	return a * b
}

func main() {
	var a int
	var b int

	fmt.Scanf("%d\n%d", &a, &b)

	product := calculateProduct(a, b)

	fmt.Printf("PROD = %d\n", product)
}
