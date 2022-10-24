package main

import (
	"fmt"
	"math"
)

func listOddNumbers(start, quantity int) {
	count := 0

	for number := start; quantity > count; number++ {
		if math.Mod(float64(number), 2) != 0 {
			fmt.Println(number)
			count++
		}
	}
}

func main() {
	var start int
	var quantity = 6

	fmt.Scanf("%d", &start)

	listOddNumbers(start, quantity)
}
