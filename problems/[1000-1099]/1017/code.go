package main

import "fmt"

func calculateSpentFuel(spentTime, averageSpeed, carFuelConsumption int) float64 {
	return float64(spentTime*averageSpeed) / float64(carFuelConsumption)
}

func main() {
	var spentTime int
	var averageSpeed int
	carFuelConsumption := 12

	fmt.Scanf("%d\n%d", &spentTime, &averageSpeed)

	spentFuel := calculateSpentFuel(spentTime, averageSpeed, carFuelConsumption)

	fmt.Printf("%.3f\n", spentFuel)
}
