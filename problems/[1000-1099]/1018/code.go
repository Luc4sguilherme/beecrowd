package main

import (
	"fmt"
	"math"
)

func main() {
	var balance int

	fmt.Scanf("%d", &balance)
	fmt.Printf("%d\n", balance)

	notes_100 := int(math.Floor(float64(balance / 100)))
	balance = balance % 100

	notes_50 := int(math.Floor(float64(balance / 50)))
	balance = balance % 50

	notes_20 := int(math.Floor(float64(balance / 20)))
	balance = balance % 20

	notes_10 := int(math.Floor(float64(balance / 10)))
	balance = balance % 10

	notes_5 := int(math.Floor(float64(balance / 5)))
	balance = balance % 5

	notes_2 := int(math.Floor(float64(balance / 2)))
	balance = balance % 2

	notes_1 := int(math.Floor(float64(balance / 1)))

	fmt.Printf("%d nota(s) de R$ 100,00\n", notes_100)
	fmt.Printf("%d nota(s) de R$ 50,00\n", notes_50)
	fmt.Printf("%d nota(s) de R$ 20,00\n", notes_20)
	fmt.Printf("%d nota(s) de R$ 10,00\n", notes_10)
	fmt.Printf("%d nota(s) de R$ 5,00\n", notes_5)
	fmt.Printf("%d nota(s) de R$ 2,00\n", notes_2)
	fmt.Printf("%d nota(s) de R$ 1,00\n", notes_1)
}
