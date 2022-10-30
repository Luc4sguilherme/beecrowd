package main

import (
	"fmt"
	"math"
)

func main() {
	var integer int

	fmt.Scanf("%d", &integer)

	for number := 1; number < 10000; number++ {
		if math.Mod(float64(number), float64(integer)) == 2 {
			fmt.Printf("%d\n", number)
		}
	}
}
