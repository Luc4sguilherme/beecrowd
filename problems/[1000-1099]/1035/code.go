package main

import "fmt"

func isEven(number int) bool {
	return number%2 == 0
}

func isPositive(number int) bool {
	return number > 0
}

func main() {
	var a, b, c, d int

	fmt.Scanf("%d %d %d %d", &a, &b, &c, &d)

	if b > c && d > a && (c+d > a+b) && isPositive(c) && isPositive(d) && isEven(a) {
		fmt.Printf("Valores aceitos\n")
	} else {
		fmt.Printf("Valores nao aceitos\n")
	}
}
