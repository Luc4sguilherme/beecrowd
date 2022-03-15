var input = require("fs").readFileSync("/dev/stdin", "utf8");

function getAnimal(first, second, thirty) {
    if (first === "vertebrado") {
        if (second === "ave") {
            if (thirty === "carnivoro") {
                return "aguia";
            }

            if (thirty === "onivoro") {
                return "pomba";
            }
        }

        if (second === "mamifero") {
            if (thirty === "onivoro") {
                return "homem";
            }

            if (thirty === "herbivoro") {
                return "vaca";
            }
        }
    }

    if (first === "invertebrado") {
        if (second === "inseto") {
            if (thirty === "hematofago") {
                return "pulga";
            }

            if (thirty === "herbivoro") {
                return "lagarta";
            }
        }

        if (second === "anelideo") {
            if (thirty === "hematofago") {
                return "sanguessuga";
            }

            if (thirty === "onivoro") {
                return "minhoca";
            }
        }
    }
}

function main() {
    var [first, second, thirty] = input.split("\n");
    var animal = getAnimal(first, second, thirty);

    process.stdout.write(`${animal}\n`);
}

main();
