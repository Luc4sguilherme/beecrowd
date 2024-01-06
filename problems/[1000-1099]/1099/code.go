package main

import (
	"fmt"
	"sort"
)

type Interval struct {
	x int
	y int
}

func calculateSumOfOddNumbers(interval Interval) int {
	var sum int

	for i := interval.x + 1; i < interval.y; i++ {
		if i%2 != 0 {
			sum += i
		}
	}

	return sum
}

func read() ([]Interval, error) {
	var count int

	_, err := fmt.Scan(&count)

	if err != nil {
		return nil, err
	}

	intervals := make([]Interval, count)

	for i := range intervals {
		integers := make([]int, 2)

		_, err := fmt.Scanf("%d %d", &integers[0], &integers[1])

		if err != nil {
			return intervals[:i], err
		}

		sort.Ints(integers)

		intervals[i].x = integers[0]
		intervals[i].y = integers[1]
	}

	return intervals, nil
}

func main() {
	intervals, _ := read()

	for _, interval := range intervals {
		sum := calculateSumOfOddNumbers(interval)
		fmt.Printf("%d\n", sum)
	}
}
