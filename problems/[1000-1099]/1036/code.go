package main

import (
	"errors"
	"fmt"
	"math"
)

func calculateDelta(a, b, c float64) float64 {
	return math.Pow(b, 2) - 4*a*c
}

func isNegative(number float64) bool {
	return number < 0
}

func bhaskara(a, b, c float64) (float64, float64, error) {
	delta := calculateDelta(a, b, c)

	if isNegative(delta) || a == 0 {
		err := errors.New("Impossivel calcular\n")

		return 0, 0, err
	}

	r1 := (-b + math.Sqrt(delta)) / (2 * a)
	r2 := (-b - math.Sqrt(delta)) / (2 * a)

	return r1, r2, nil
}

func main() {
	var a, b, c float64

	fmt.Scanf("%f %f %f", &a, &b, &c)

	r1, r2, err := bhaskara(a, b, c)

	if err != nil {
		fmt.Printf(err.Error())
		return
	}

	fmt.Printf("R1 = %.5f\n", r1)
	fmt.Printf("R2 = %.5f\n", r2)
}
