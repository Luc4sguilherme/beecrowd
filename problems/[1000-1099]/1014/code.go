package main

import "fmt"

func calculateAverageConsumption(distance, spentFuel float64) float64 {
	return distance / spentFuel
}

func main() {
	var distance float64
	var spentFuel float64

	fmt.Scanf("%f\n%f", &distance, &spentFuel)

	averageConsumption := calculateAverageConsumption(distance, spentFuel)

	fmt.Printf("%.3f km/l\n", averageConsumption)
}
