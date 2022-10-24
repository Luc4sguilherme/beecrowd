package main

import "fmt"

func calculateDuration(
	initialDay,
	initialHour,
	initialMinute,
	initialSecond,
	finalDay,
	finalHour,
	finalMinute,
	finalSecond int,
) (int, int, int, int) {
	days := finalDay - initialDay
	hours := 0
	minutes := 0
	seconds := 0

	if initialSecond > finalSecond {
		seconds = 60 - (initialSecond - finalSecond)
		minutes -= 1
	} else if initialSecond < finalSecond {
		seconds = finalSecond - initialSecond
	} else if initialSecond == finalSecond {
		seconds = 0
	}

	if initialMinute > finalMinute {
		minutes += 60 - (initialMinute - finalMinute)
		hours -= 1
	} else if initialMinute < finalMinute {
		minutes += finalMinute - initialMinute
	} else if initialMinute == finalMinute {
		minutes = 0
	}

	if initialHour > finalHour {
		hours += 24 - initialHour + finalHour
		days -= 1
	} else if initialHour < finalHour {
		hours += finalHour - initialHour
	} else if initialHour == finalHour {
		if hours < 0 {
			hours += 24
			days -= 1
		} else {
			hours = 0
		}
	}

	return days, hours, minutes, seconds
}

func main() {
	var initialDay, initialHour, initialMinute, initialSecond, finalDay, finalHour, finalMinute, finalSecond int

	fmt.Scanf("Dia %d\n%d : %d : %d", &initialDay, &initialHour, &initialMinute, &initialSecond)
	fmt.Scanf("Dia %d\n%d : %d : %d", &finalDay, &finalHour, &finalMinute, &finalSecond)

	days, hours, minutes, seconds := calculateDuration(
		initialDay,
		initialHour,
		initialMinute,
		initialSecond,
		finalDay,
		finalHour,
		finalMinute,
		finalSecond,
	)

	fmt.Printf("%d dia(s)\n%d hora(s)\n%d minuto(s)\n%d segundo(s)\n", days, hours, minutes, seconds)
}
