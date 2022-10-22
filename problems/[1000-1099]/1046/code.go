package main

import "fmt"

func calculateDuration(startTime, endTime int) int {
	if startTime > endTime {
		return 24 - startTime + endTime
	}

	if startTime < endTime {
		return endTime - startTime
	}

	return 24
}

func main() {
	var startTime, endTime int

	fmt.Scanf("%d %d", &startTime, &endTime)

	duration := calculateDuration(startTime, endTime)

	fmt.Printf("O JOGO DUROU %d HORA(S)\n", duration)
}
