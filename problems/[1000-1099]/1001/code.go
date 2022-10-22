package main

import (
	"fmt"
)

func sum(a, b int) int {
	return a + b
}

func main() {
	var a int
	var b int

	fmt.Scanf("%d\n%d", &a, &b)

	sum := sum(a, b)

	fmt.Printf("X = %d\n", sum)
}
