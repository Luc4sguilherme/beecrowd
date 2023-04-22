package main

import "fmt"

func main() {
	for i, j := 1, 60; j >= 0; i, j = i+3, j-5 {
		fmt.Printf("I=%d J=%d\n", i, j)
	}
}
