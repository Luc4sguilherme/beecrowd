package main

import "fmt"

func main() {
	for i := 0.0; i <= 2; i = i + 0.2 {
		for j := 1 + i; j <= 3+i; j++ {
			fmt.Printf("I=%.12g J=%.12g\n", i, j)

		}
	}
}
