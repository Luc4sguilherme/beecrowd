package main

import "fmt"

func calculateAverage(notes ...float64) float64 {
	return (notes[0]*2 + notes[1]*3 + notes[2]*4 + notes[3]*1) / 10
}

func calculateFinalAverage(n1, n2 float64) float64 {
	return (n1 + n2) / 2
}

func checkExamStatus(score float64) string {
	if score >= 7.0 {
		return "Aluno aprovado."
	}

	if score < 5.0 {
		return "Aluno reprovado."
	}

	return "Aluno em exame."
}

func recalculateExamStatus(score float64) string {
	if score >= 5.0 {
		return "Aluno aprovado."
	}

	return "Aluno reprovado."
}

func read(count int) ([]float64, error) {
	notes := make([]float64, count)

	for i := range notes {
		_, err := fmt.Scan(&notes[i])

		if err != nil {
			return notes[:i], err
		}
	}

	return notes, nil
}

func main() {
	score1, _ := read(4)

	var score2 float64

	fmt.Scanf("%f", &score2)

	average := calculateAverage(score1...)
	status := checkExamStatus(average)

	fmt.Printf("Media: %.1f\n", average)
	fmt.Printf("%s\n", status)

	if score2 > 0 {
		newStatus := recalculateExamStatus(score2)
		finalAverage := calculateFinalAverage(average, score2)

		fmt.Printf("Nota do exame: %.1f\n", score2)
		fmt.Printf("%s\n", newStatus)
		fmt.Printf("Media final: %.1f\n", finalAverage)
	}
}
