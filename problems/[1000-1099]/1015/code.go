package main

import (
	"fmt"
	"math"
)

type Point struct {
	x float64
	y float64
}

func calculateDistance(point1, point2 Point) float64 {
	return math.Sqrt(math.Pow(point2.x-point1.x, 2) + math.Pow(point2.y-point1.y, 2))
}

func main() {
	var point1 Point
	var point2 Point

	fmt.Scanf("%f %f", &point1.x, &point1.y)
	fmt.Scanf("%f %f", &point2.x, &point2.y)

	distance := calculateDistance(point1, point2)

	fmt.Printf("%.4f\n", distance)
}
