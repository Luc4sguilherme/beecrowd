package main

import (
	"fmt"
	"math"
)

func calculateVolumeOfSphere(R float64) float64 {
	pi := 3.14159

	return (4.0 / 3) * pi * (math.Pow(R, 3))
}

func main() {
	var R float64

	fmt.Scanf("%f", &R)

	volume := calculateVolumeOfSphere(R)

	fmt.Printf("VOLUME = %.3f\n", volume)
}
