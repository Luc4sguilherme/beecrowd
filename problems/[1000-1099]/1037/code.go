package main

import "fmt"

func main() {
	var number float64

	fmt.Scanf("%f", &number)

	if number >= 0 && number <= 25 {
		fmt.Printf("Intervalo [0,25]\n")
	} else if number > 25 && number <= 50 {
		fmt.Printf("Intervalo (25,50]\n")
	} else if number > 50 && number <= 75 {
		fmt.Printf("Intervalo (50,75]\n")
	} else if number > 75 && number <= 100 {
		fmt.Printf("Intervalo (75,100]\n")
	} else {
		fmt.Printf("Fora de intervalo\n")
	}
}
