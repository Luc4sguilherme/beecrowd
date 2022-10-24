package main

import "fmt"

func getTotalOfPosiveNumbers(numbers []float64) int {
	numberOfPositiveNumbers := 0

	for _, number := range numbers {
		if number > 0 {
			numberOfPositiveNumbers += 1
		}
	}

	return numberOfPositiveNumbers
}

func getPositiveNumbers(numbers []float64) []float64 {
	var positiveNumbers []float64

	for _, number := range numbers {
		if number > 0 {
			positiveNumbers = append(positiveNumbers, number)
		}
	}

	return positiveNumbers
}

func getAverageOfPositiveNumbers(numbers []float64) float64 {
	positiveNumbers := getPositiveNumbers(numbers)
	numberOfPositiveNumbers := getTotalOfPosiveNumbers(positiveNumbers)
	sum := 0.0

	for _, positiveNumber := range positiveNumbers {
		sum += positiveNumber
	}

	average := sum / float64(numberOfPositiveNumbers)

	return average
}

func read(count int) ([]float64, error) {
	numbers := make([]float64, count)

	for i := range numbers {
		_, err := fmt.Scan(&numbers[i])

		if err != nil {
			return numbers[:i], err
		}
	}

	return numbers, nil
}

func main() {
	numbers, _ := read(6)

	numberOfPositiveNumbers := getTotalOfPosiveNumbers(numbers)
	average := getAverageOfPositiveNumbers(numbers)

	fmt.Printf("%d valores positivos\n", numberOfPositiveNumbers)
	fmt.Printf("%.1f\n", average)
}
