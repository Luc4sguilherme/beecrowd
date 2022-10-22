package main

import (
	"fmt"
)

func calculateAverage(a, b, c float64) float64 {
	return ((a * 2) + (b * 3) + (c * 5)) / 10
}

func main() {
	var a float64
	var b float64
	var c float64

	fmt.Scanf("%f\n%f\n%f", &a, &b, &c)

	product := calculateAverage(a, b, c)

	fmt.Printf("MEDIA = %.1f\n", product)
}
