package main

import "fmt"

func main() {
	var code, quantity int

	fmt.Scanf("%d %d", &code, &quantity)

	items := [5]float64{4, 4.5, 5, 2, 1.5}

	total := items[code-1] * float64(quantity)

	fmt.Printf("Total: R$ %.2f\n", total)
}
