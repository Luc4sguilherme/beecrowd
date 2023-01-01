package main

import (
	"fmt"
)

func calculateWeightedAverage(n1, n2, n3 float64) float64 {
	return (n1*2 + n2*3 + n3*5) / 10
}

func main() {
	var count int

	_, err := fmt.Scan(&count)

	if err != nil {
		panic(err)
	}

	for i := 0; i < count; i++ {
		var n1 float64
		var n2 float64
		var n3 float64

		_, err := fmt.Scanf("%f %f %f", &n1, &n2, &n3)

		if err != nil {
			panic(err)
		}

		weightedAverage := calculateWeightedAverage(n1, n2, n3)

		fmt.Printf("%.1f\n", weightedAverage)
	}
}
