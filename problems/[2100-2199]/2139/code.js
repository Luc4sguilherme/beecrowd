var input = require("fs").readFileSync("/dev/stdin", "utf8");
var lines = input.trim().split("\n");

function getDaysInMonth(month) {
    switch (month) {
        case 1:
            return 31;
        case 2:
            return 29;
        case 3:
            return 31;
        case 4:
            return 30;
        case 5:
            return 31;
        case 6:
            return 30;
        case 7:
            return 31;
        case 8:
            return 31;
        case 9:
            return 30;
        case 10:
            return 31;
        case 11:
            return 30;
        case 12:
            return 31;
    }
}

function totalOfDays(month) {
    var total = 0;

    for (var i = 1; i <= month; i++) {
        total += getDaysInMonth(i);
    }

    return total;
}

var christmasDay = totalOfDays(12) - 6;

for (var i = 0; i < lines.length; i++) {
    var [month, day] = lines[i].split(" ").map((item) => Number(item));

    if (month == 12) {
        if (day == 24) {
            process.stdout.write("E vespera de natal!\n");
        } else if (day == 25) {
            process.stdout.write("E natal!\n");
        } else if (day > 25) {
            process.stdout.write("Ja passou!\n");
        }
    } else {
        var numberOfDaysLeftUntilChristmas = christmasDay - totalOfDays(month - 1) - day;

        process.stdout.write(
            `Faltam ${numberOfDaysLeftUntilChristmas} dias para o natal!\n`
        );
    }
}
