package main

import "fmt"

func getDestination(code int) string {
	switch code {
	case 61:
		return "Brasilia"
	case 71:
		return "Salvador"
	case 11:
		return "Sao Paulo"
	case 21:
		return "Rio de Janeiro"
	case 32:
		return "Juiz de Fora"
	case 19:
		return "Campinas"
	case 27:
		return "Vitoria"
	case 31:
		return "Belo Horizonte"

	default:
		return "DDD nao cadastrado"
	}
}

func main() {
	var code int

	fmt.Scanf("%d", &code)

	destination := getDestination(code)

	fmt.Printf("%s\n", destination)
}
