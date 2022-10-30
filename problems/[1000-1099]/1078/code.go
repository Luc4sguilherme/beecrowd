package main

import (
	"fmt"
)

func main() {
	var number int

	fmt.Scanf("%d", &number)

	for i := 1; i <= 10; i++ {
		result := i * number

		fmt.Printf("%d x %d = %d\n", i, number, result)
	}
}
