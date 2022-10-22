package main

import (
	"fmt"
	"math"
	"sort"
)

func notIsTriangle(a, b, c float64) bool {
	return (a >= (b + c))
}

func isRightTriangle(a, b, c float64) bool {
	return (math.Pow(a, 2) == (math.Pow(b, 2) + math.Pow(c, 2)))
}

func isObtuseTriangle(a, b, c float64) bool {
	return (math.Pow(a, 2) > (math.Pow(b, 2) + math.Pow(c, 2)))
}

func isAcuteTriangle(a, b, c float64) bool {
	return (math.Pow(a, 2) < (math.Pow(b, 2) + math.Pow(c, 2)))
}

func isEquilateralTriangle(a, b, c float64) bool {
	return (a == b && a == c)
}

func isIsoscelesTriangle(a, b, c float64) bool {
	return ((a == b) && a != c || a == c && a != b || b == c && b != a)
}

func read(count int) ([]float64, error) {
	integers := make([]float64, count)

	for i := range integers {
		_, err := fmt.Scan(&integers[i])

		if err != nil {
			return integers[:i], err
		}
	}

	return integers, nil
}

func main() {
	integers, _ := read(3)

	sort.Sort(sort.Reverse(sort.Float64Slice(integers)))

	a, b, c := integers[0], integers[1], integers[2]

	if notIsTriangle(a, b, c) {
		fmt.Printf("NAO FORMA TRIANGULO\n")
	} else if isRightTriangle(a, b, c) {
		fmt.Printf("TRIANGULO RETANGULO\n")
	} else if isObtuseTriangle(a, b, c) {
		fmt.Printf("TRIANGULO OBTUSANGULO\n")
	} else if isAcuteTriangle(a, b, c) {
		fmt.Printf("TRIANGULO ACUTANGULO\n")
	}

	if isEquilateralTriangle(a, b, c) {
		fmt.Printf("TRIANGULO EQUILATERO\n")
	} else if isIsoscelesTriangle(a, b, c) {
		fmt.Printf("TRIANGULO ISOSCELES\n")
	}
}
