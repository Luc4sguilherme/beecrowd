package main

import (
	"fmt"
	"sort"
)

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

func print(numbers []int) {
	for _, number := range numbers {
		fmt.Printf("%d\n", number)
	}
}

func main() {
	integers, _ := read(3)

	sortedIntegers := make([]int, len(integers))
	copy(sortedIntegers, integers)

	sort.Ints(sortedIntegers)
	print(sortedIntegers)

	fmt.Printf("\n")
	print(integers)
}
