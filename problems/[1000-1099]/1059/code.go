package main

import (
	"fmt"
	"math"
)

func main() {
	for i := 1; i <= 100; i++ {
		if math.Mod(float64(i), 2) == 0 {
			fmt.Printf("%d\n", i)
		}
	}
}
