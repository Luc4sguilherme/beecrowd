package main

import (
	"fmt"
	"math"
)

func main() {
	var duration int

	fmt.Scanf("%d", &duration)

	hours := int(math.Floor(float64(duration / 3600)))
	duration = duration % 3600

	minutes := int(math.Floor(float64(duration / 60)))
	duration = duration % 60

	seconds := int(math.Floor(float64(duration)))

	fmt.Printf("%d:%d:%d\n", hours, minutes, seconds)
}
