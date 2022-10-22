package main

import (
	"fmt"
	"math"
)

func calculateAreaOfCircle(R float64) float64 {
	pi := 3.14159
	area := pi * (math.Pow(R, 2))

	return area
}

func main() {
	var R float64

	fmt.Scanf("%f\n", &R)

	area := calculateAreaOfCircle(R)

	fmt.Printf("A=%.4f\n", area)
}
