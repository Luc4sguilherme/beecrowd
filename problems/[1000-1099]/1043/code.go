package main

import "fmt"

func calculatePerimeterOfTriangle(a, b, c float64) float64 {
	return a + b + c
}

func calculateAreaOfTrapezium(a, b, c float64) float64 {
	return 0.5 * (a + b) * c
}

func isTriangle(a, b, c float64) bool {
	return a+b > c && b+c > a && a+c > b
}

func main() {
	var a, b, c float64

	fmt.Scanf("%f %f %f", &a, &b, &c)

	if isTriangle(a, b, c) {
		perimeter := calculatePerimeterOfTriangle(a, b, c)

		fmt.Printf("Perimetro = %.1f\n", perimeter)
	} else {
		area := calculateAreaOfTrapezium(a, b, c)

		fmt.Printf("Area = %.1f\n", area)
	}
}
