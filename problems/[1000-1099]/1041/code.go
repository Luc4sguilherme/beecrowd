package main

import (
	"errors"
	"fmt"
)

func pointIsAtTheOrigin(x, y float64) (string, error) {
	if x == 0 && y == 0 {
		return "Origem", nil
	}

	err := errors.New("point is not at the origin")

	return "", err
}

func pointIsAtAxis(x, y float64) (string, error) {
	if y == 0 {
		return "Eixo X", nil
	}

	if x == 0 {
		return "Eixo Y", nil
	}

	err := errors.New("point is not in any axis")

	return "", err
}

func checkQuadrant(x, y float64) (string, error) {
	if x > 0 && y > 0 {
		return "Q1", nil
	}

	if x < 0 && y > 0 {
		return "Q2", nil
	}

	if x < 0 && y < 0 {
		return "Q3", nil
	}

	if x > 0 && y < 0 {
		return "Q4", nil
	}

	err := errors.New("point is not in any quadrant")

	return "", err
}

func main() {
	var x, y float64

	fmt.Scanf("%f %f", &x, &y)

	origin, err := pointIsAtTheOrigin(x, y)

	if err == nil {
		fmt.Printf("%s\n", origin)
		return
	}

	axis, err := pointIsAtAxis(x, y)

	if err == nil {
		fmt.Printf("%s\n", axis)
		return
	}

	quadrant, err := checkQuadrant(x, y)

	if err == nil {
		fmt.Printf("%s\n", quadrant)
		return
	}
}
