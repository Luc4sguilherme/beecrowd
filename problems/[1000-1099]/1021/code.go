package main

import (
	"fmt"
	"math"
)

func main() {
	var balance float64

	fmt.Scanf("%f", &balance)

	notes_100 := int(math.Floor(balance / 100))
	balance = math.Mod(balance, 100)

	notes_50 := int(math.Floor(balance / 50))
	balance = math.Mod(balance, 50)

	notes_20 := int(math.Floor(balance / 20))
	balance = math.Mod(balance, 20)

	notes_10 := int(math.Floor(balance / 10))
	balance = math.Mod(balance, 10)

	notes_5 := int(math.Floor(balance / 5))
	balance = math.Mod(balance, 5)

	notes_2 := int(math.Floor(balance / 2))
	balance = math.Mod(balance, 2)

	balanceInCents := balance * 100

	coin_100 := int(math.Floor(balanceInCents / 100))
	balanceInCents = math.Mod(balanceInCents, 100)

	coin_50 := int(math.Floor(balanceInCents / 50))
	balanceInCents = math.Mod(balanceInCents, 50)

	coin_25 := int(math.Floor(balanceInCents / 25))
	balanceInCents = math.Mod(balanceInCents, 25)

	coin_10 := int(math.Floor(balanceInCents / 10))
	balanceInCents = math.Mod(balanceInCents, 10)

	coin_5 := int(math.Floor(balanceInCents / 5))
	balanceInCents = math.Mod(balanceInCents, 5)

	coin_1 := int(math.Floor(balanceInCents / 1))

	fmt.Printf("NOTAS:\n")
	fmt.Printf("%d nota(s) de R$ 100.00\n", notes_100)
	fmt.Printf("%d nota(s) de R$ 50.00\n", notes_50)
	fmt.Printf("%d nota(s) de R$ 20.00\n", notes_20)
	fmt.Printf("%d nota(s) de R$ 10.00\n", notes_10)
	fmt.Printf("%d nota(s) de R$ 5.00\n", notes_5)
	fmt.Printf("%d nota(s) de R$ 2.00\n", notes_2)

	fmt.Printf("MOEDAS:\n")
	fmt.Printf("%d moeda(s) de R$ 1.00\n", coin_100)
	fmt.Printf("%d moeda(s) de R$ 0.50\n", coin_50)
	fmt.Printf("%d moeda(s) de R$ 0.25\n", coin_25)
	fmt.Printf("%d moeda(s) de R$ 0.10\n", coin_10)
	fmt.Printf("%d moeda(s) de R$ 0.05\n", coin_5)
	fmt.Printf("%d moeda(s) de R$ 0.01\n", coin_1)
}
