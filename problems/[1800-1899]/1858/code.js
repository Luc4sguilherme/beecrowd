var input = require("fs").readFileSync("/dev/stdin", "utf8"),
    lines = input.split("\n"),
    size = Number(lines.shift()),
    persons = lines[0].split(" ").map((person) => Number(person)),
    minimum = Infinity,
    i = 0,
    person = 1;

while (i < size) {
    if (persons[i] < minimum) {
        minimum = persons[i];
        person = i + 1;
    }

    i++;
}

process.stdout.write(`${person}\n`);
