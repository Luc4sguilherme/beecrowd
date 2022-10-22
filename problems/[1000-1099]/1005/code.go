package main

import (
	"fmt"
)

func calculateAverage(a, b float64) float64 {
	return ((a * 3.5) + (b * 7.5)) / 11
}

func main() {
	var a float64
	var b float64

	fmt.Scanf("%f\n%f", &a, &b)

	product := calculateAverage(a, b)

	fmt.Printf("MEDIA = %.5f\n", product)
}
