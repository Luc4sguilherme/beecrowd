package main

import "fmt"

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

func getEvenNumbers(numbers []int) int {
	numberOfEven := 0
	i := 0

	for ; i < len(numbers); i++ {
		if numbers[i]%2 == 0 {
			numberOfEven += 1
		}
	}

	return numberOfEven
}

func main() {
	numbers, _ := read(5)

	numberOfEven := getEvenNumbers(numbers)

	fmt.Printf("%d valores pares\n", numberOfEven)
}
