var input = require("fs").readFileSync("/dev/stdin", "utf8");
var [day1, day2, day3] = input.split(" ").map((value) => Number(value));

function checkHumour() {
    if (day1 > day2 && day2 <= day3) {
        return ":)";
    }

    if (day1 < day2 && day2 >= day3) {
        return ":(";
    }

    if (day1 < day2 && day3 > day2) {
        if (Math.abs(day2 - day1) > Math.abs(day3 - day2)) {
            return ":(";
        }

        if (Math.abs(day2 - day1) <= Math.abs(day3 - day2)) {
            return ":)";
        }
    }

    if (day1 > day2 && day3 < day2) {
        if (Math.abs(day1 - day2) > Math.abs(day2 - day3)) {
            return ":)";
        }

        if (Math.abs(day1 - day2) <= Math.abs(day2 - day3)) {
            return ":(";
        }
    }

    if (day1 === day2 && day2 < day3) {
        return ":)";
    }

    if (day1 === day2 && day2 >= day3) {
        return ":(";
    }
}

var humour = checkHumour();

process.stdout.write(`${humour}\n`);
