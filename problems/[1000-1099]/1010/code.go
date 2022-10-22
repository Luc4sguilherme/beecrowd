package main

import "fmt"

type Product struct {
	code     int
	quantity int
	value    float64
}

func (p *Product) calculateValue() float64 {
	return float64(p.quantity) * (p.value)
}

func main() {
	var product1 Product
	var product2 Product

	fmt.Scanf("%d %d %f", &product1.code, &product1.quantity, &product1.value)
	fmt.Scanf("%d %d %f", &product2.code, &product2.quantity, &product2.value)

	total := product1.calculateValue() + product2.calculateValue()

	fmt.Printf("VALOR A PAGAR: R$ %.2f\n", total)
}
