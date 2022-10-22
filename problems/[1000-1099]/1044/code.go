package main

import (
	"fmt"
	"math"
)

func isMultiple(a, b float64) bool {
	if a > b {
		return math.Mod(a, b) == 0
	}

	return math.Mod(b, a) == 0
}

func main() {
	var a, b int

	fmt.Scanf("%d %d", &a, &b)

	if isMultiple(float64(a), float64(b)) {
		fmt.Printf("Sao Multiplos\n")
	} else {
		fmt.Printf("Nao sao Multiplos\n")
	}
}
