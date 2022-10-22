package main

import "fmt"

func getAnimal(first, second, thirty string) string {
	if first == "vertebrado" {
		if second == "ave" {
			if thirty == "carnivoro" {
				return "aguia"
			}

			if thirty == "onivoro" {
				return "pomba"
			}
		}

		if second == "mamifero" {
			if thirty == "onivoro" {
				return "homem"
			}

			if thirty == "herbivoro" {
				return "vaca"
			}
		}
	}

	if first == "invertebrado" {
		if second == "inseto" {
			if thirty == "hematofago" {
				return "pulga"
			}

			if thirty == "herbivoro" {
				return "lagarta"
			}
		}

		if second == "anelideo" {
			if thirty == "hematofago" {
				return "sanguessuga"
			}

			if thirty == "onivoro" {
				return "minhoca"
			}
		}
	}

	return ""
}

func main() {
	var first, second, thirty string

	fmt.Scanf("%s\n%s\n%s", &first, &second, &thirty)

	animal := getAnimal(first, second, thirty)

	fmt.Printf("%s\n", animal)
}
