package main

import (
	"fmt"
)

func getHighestValue(numbers []int) (int, int) {
	var max = numbers[0]
	var position int

	for i := 1; i < len(numbers); i++ {
		if numbers[i] > max {
			max = numbers[i]
			position = i + 1
		}
	}

	return max, position
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
	input, _ := read(100)
	highestValue, position := getHighestValue(input)

	fmt.Println(highestValue)
	fmt.Println(position)
}
