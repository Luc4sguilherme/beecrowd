package main

import (
	"fmt"
	"math"
)

func calculateAreaOfRectangledTriangle(base, height float64) float64 {
	return 0.5 * base * height
}

func calculateAreaOfCircle(radius float64) float64 {
	pi := 3.14159

	return pi * math.Pow(radius, 2)
}

func calculateAreaOfTrapezium(baseA, baseB, height float64) float64 {
	return 0.5 * (baseA + baseB) * height
}

func calculateAreaOfSquare(side float64) float64 {
	return math.Pow(side, 2)
}

func calculateAreaOfRectangle(sideA, sideB float64) float64 {
	return sideA * sideB
}

func main() {
	var a float64
	var b float64
	var c float64

	fmt.Scanf("%f %f %f", &a, &b, &c)

	areaOfRectangledTriangle := calculateAreaOfRectangledTriangle(a, c)
	areaOfCircle := calculateAreaOfCircle(c)
	areaOfTrapezium := calculateAreaOfTrapezium(a, b, c)
	areaOfSquare := calculateAreaOfSquare(b)
	areaOfRectangle := calculateAreaOfRectangle(a, b)

	fmt.Printf("TRIANGULO: %.3f\n", areaOfRectangledTriangle)
	fmt.Printf("CIRCULO: %.3f\n", areaOfCircle)
	fmt.Printf("TRAPEZIO: %.3f\n", areaOfTrapezium)
	fmt.Printf("QUADRADO: %.3f\n", areaOfSquare)
	fmt.Printf("RETANGULO: %.3f\n", areaOfRectangle)
}
