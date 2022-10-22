package main

import "fmt"

func calculateDuration(initialHour, initialMinute, finalHour, finalMinute int) (int, int) {
	hours := 0
	minutes := 0

	if initialMinute > finalMinute {
		minutes = 60 - (initialMinute - finalMinute)
		hours -= 1
	} else if initialMinute < finalMinute {
		minutes = finalMinute - initialMinute
	} else if initialMinute == finalMinute {
		minutes = 0
	}

	if initialHour > finalHour {
		hours += 24 - initialHour + finalHour
	} else if initialHour < finalHour {
		hours += finalHour - initialHour
	} else if initialHour == finalHour {
		hours += 24
	}

	if hours == 24 && minutes > 0 {
		hours = 0
	}

	return hours, minutes
}

func main() {
	var initialHour, initialMinute, finalHour, finalMinute int

	fmt.Scanf("%d %d %d %d", &initialHour, &initialMinute, &finalHour, &finalMinute)

	hours, minutes := calculateDuration(initialHour, initialMinute, finalHour, finalMinute)

	fmt.Printf("O JOGO DUROU %d HORA(S) E %d MINUTO(S)\n", hours, minutes)
}
