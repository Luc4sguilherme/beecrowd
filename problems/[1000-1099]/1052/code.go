package main

import "fmt"

func getMonth(number int) string {
	switch number {
	case 1:
		return "January"
	case 2:
		return "February"
	case 3:
		return "March"
	case 4:
		return "April"
	case 5:
		return "May"
	case 6:
		return "June"
	case 7:
		return "July"
	case 8:
		return "August"
	case 9:
		return "September"
	case 10:
		return "October"
	case 11:
		return "November"
	case 12:
		return "December"
	default:
		return "invalid"
	}
}

func main() {
	var number int

	fmt.Scanf("%d", &number)

	month := getMonth(number)

	fmt.Printf("%s\n", month)
}
