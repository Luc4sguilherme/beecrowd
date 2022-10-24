package main

import (
	"fmt"
	"math"
	"sort"
)

func calculateSumOfOddNumbers(start, end int) int {
	sum := 0

	for number := start + 1; number < end; number++ {
		if math.Mod(math.Abs(float64(number)), 2) != 0 {
			sum += number
		}
	}

	return sum
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
	input, _ := read(2)

	sort.Ints(input)

	sumOfOddNumbers := calculateSumOfOddNumbers(input[0], input[1])

	fmt.Println(sumOfOddNumbers)
}
