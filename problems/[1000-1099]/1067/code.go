package main

import (
	"fmt"
	"math"
)

func listOddNumbers(start, end int) {
	if 1 <= end && end <= 1000 {
		for number := start; number <= end; number++ {
			if math.Mod(float64(number), 2) != 0 {
				fmt.Println(number)
			}
		}
	}
}

func main() {
	var start = 1
	var end int

	fmt.Scanf("%d", &end)

	listOddNumbers(start, end)
}
