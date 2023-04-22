package main

import "fmt"

func main() {
	for i, j := 1, 7; i <= 9; i, j = i+2, j+5 {
		for k := 1; k <= 3; k, j = k+1, j-1 {
			fmt.Printf("I=%d J=%d\n", i, j)
		}
	}
}
