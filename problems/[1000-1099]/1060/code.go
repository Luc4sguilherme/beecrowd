package main

import "fmt"

func getTotalOfPosiveNumbers(numbers ...float64) int {
	var numberOfPositiveNumbers = 0

	for _, number := range numbers {
		if number > 0 {
			numberOfPositiveNumbers++
		}
	}

	return numberOfPositiveNumbers
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
	numbers, _ := read(6)

	numberOfPositiveNumbers := getTotalOfPosiveNumbers(numbers...)

	fmt.Printf("%d valores positivos\n", numberOfPositiveNumbers)
}
