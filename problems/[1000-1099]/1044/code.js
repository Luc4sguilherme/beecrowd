var input = require("fs").readFileSync("/dev/stdin", "utf8");
var lines = input.split(" ");

function isMultiple(a, b) {
	if (Number.isInteger(a / b)) {
		return true;
	}

	return false;
}

function main() {
	var [a, b] = lines.map((line) => Number(line)).sort((a, b) => b - a);

	if (isMultiple(a, b)) {
		process.stdout.write("Sao Multiplos\n");
	} else {
		process.stdout.write("Nao sao Multiplos\n");
	}
}

main();
