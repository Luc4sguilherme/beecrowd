package main

import (
	"fmt"
	"math"
)

func getTotalOfEvenNumbers(numbers []int) int {
	totalOfEvenNumbers := 0

	for i := 0; i < 5; i++ {
		absoluteValue := math.Abs(float64(numbers[i]))

		if math.Mod(absoluteValue, 2) == 0 {
			totalOfEvenNumbers += 1
		}
	}

	return totalOfEvenNumbers
}

func getTotalOfOddNumbers(numbers []int) int {
	totalOfOddNumbers := 0

	for i := 0; i < 5; i++ {
		absoluteValue := math.Abs(float64(numbers[i]))

		if math.Mod(absoluteValue, 2) != 0 {
			totalOfOddNumbers += 1
		}
	}

	return totalOfOddNumbers
}

func getTotalOfPosiveNumbers(numbers []int) int {
	totalOfPositiveNumbers := 0

	for i := 0; i < 5; i++ {
		if numbers[i] > 0 {
			totalOfPositiveNumbers += 1
		}
	}

	return totalOfPositiveNumbers
}

func getTotalOfNegativeNumbers(numbers []int) int {
	totalOfNegativeNumbers := 0

	for i := 0; i < 5; i++ {
		if numbers[i] < 0 {
			totalOfNegativeNumbers += 1
		}
	}

	return totalOfNegativeNumbers
}

func read(count int) ([]int, error) {
	numbers := make([]int, count)

	for i := range numbers {
		_, err := fmt.Scan(&numbers[i])

		if err != nil {
			return numbers[:i], err
		}
	}

	return numbers, nil
}

func main() {
	numbers, _ := read(5)

	totalOfEvenNumbers := getTotalOfEvenNumbers(numbers)
	totalOfOddNumbers := getTotalOfOddNumbers(numbers)
	totalOfPositiveNumbers := getTotalOfPosiveNumbers(numbers)
	totalOfNegativeNumbers := getTotalOfNegativeNumbers(numbers)

	fmt.Printf("%d valor(es) par(es)\n", totalOfEvenNumbers)
	fmt.Printf("%d valor(es) impar(es)\n", totalOfOddNumbers)
	fmt.Printf("%d valor(es) positivo(s)\n", totalOfPositiveNumbers)
	fmt.Printf("%d valor(es) negativo(s)\n", totalOfNegativeNumbers)
}
