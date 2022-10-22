package main

import (
	"fmt"
	"math"
)

func getBiggestInteger(integers ...int) int {
	a := integers[0]
	b := integers[1]

	biggestInteger := (a + b + int(math.Abs(float64(a-b)))) / 2

	if len(integers) > 2 {
		integers = integers[2:]

		return getBiggestInteger(append(integers, biggestInteger)...)
	} else {
		return biggestInteger
	}
}

func read(count int) ([]int, error) {
	integers := make([]int, count)

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

	biggestInteger := getBiggestInteger(integers...)

	fmt.Printf("%d eh o maior\n", biggestInteger)
}
