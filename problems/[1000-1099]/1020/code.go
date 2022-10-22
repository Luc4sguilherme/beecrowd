package main

import (
	"fmt"
	"math"
)

func main() {
	var age int

	fmt.Scanf("%d", &age)

	year := int(math.Floor(float64(age / 365)))
	age = age % 365

	month := int(math.Floor(float64(age / 30)))
	age = age % 30

	days := int(math.Floor(float64(age)))

	fmt.Printf("%d ano(s)\n", year)
	fmt.Printf("%d mes(es)\n", month)
	fmt.Printf("%d dia(s)\n", days)
}
