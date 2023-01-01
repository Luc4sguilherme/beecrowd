package main

import (
	"fmt"
)

type Test struct {
	animal   string
	quantity int
}

func read() ([]Test, error) {
	var count int

	_, err := fmt.Scan(&count)

	if err != nil {
		return nil, err
	}

	tests := make([]Test, count)

	for i := range tests {
		var test Test

		_, err := fmt.Scanf("%d %s", &test.quantity, &test.animal)

		if err != nil {
			return tests[:i], err
		}

		tests[i] = test
	}

	return tests, nil
}

func main() {
	tests, _ := read()

	var totalNumberOfRabbit = 0
	var totalNumberOfRat = 0
	var totalNumberOfFrog = 0

	for _, test := range tests {
		switch test.animal {
		case "C":
			totalNumberOfRabbit += test.quantity
		case "R":
			totalNumberOfRat += test.quantity
		case "S":
			totalNumberOfFrog += test.quantity
		}
	}

	var totalNumberOfAnimals = totalNumberOfRabbit + totalNumberOfRat + totalNumberOfFrog
	var percentageOfRabbit = (float64(totalNumberOfRabbit*100) / float64(totalNumberOfAnimals))
	var percentageOfRat = (float64(totalNumberOfRat*100) / float64(totalNumberOfAnimals))
	var percentageOfFrog = (float64(totalNumberOfFrog*100) / float64(totalNumberOfAnimals))

	fmt.Printf("Total: %d cobaias\n", totalNumberOfAnimals)
	fmt.Printf("Total de coelhos: %d\n", totalNumberOfRabbit)
	fmt.Printf("Total de ratos: %d\n", totalNumberOfRat)
	fmt.Printf("Total de sapos: %d\n", totalNumberOfFrog)
	fmt.Printf("Percentual de coelhos: %.2f %%\n", percentageOfRabbit)
	fmt.Printf("Percentual de ratos: %.2f %%\n", percentageOfRat)
	fmt.Printf("Percentual de sapos: %.2f %%\n", percentageOfFrog)
}
