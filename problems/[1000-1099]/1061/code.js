var input = require("fs").readFileSync("/dev/stdin", "utf8");
var lines = input.split("\n");

function calculateDuration(
    initialDay,
    initialHour,
    initialMinute,
    initialSecond,
    finalDay,
    finalHour,
    finalMinute,
    finalSecond
) {
    var days = finalDay - initialDay;
    var hours = 0;
    var minutes = 0;
    var seconds = 0;

    if (initialSecond > finalSecond) {
        seconds = 60 - (initialSecond - finalSecond);
        minutes -= 1;
    } else if (initialSecond < finalSecond) {
        seconds = finalSecond - initialSecond;
    } else if (initialSecond === finalSecond) {
        seconds = 0;
    }

    if (initialMinute > finalMinute) {
        minutes += 60 - (initialMinute - finalMinute);
        hours -= 1;
    } else if (initialMinute < finalMinute) {
        minutes += finalMinute - initialMinute;
    } else if (initialMinute === finalMinute) {
        minutes = 0;
    }

    if (initialHour > finalHour) {
        hours += 24 - initialHour + finalHour;
        days -= 1;
    } else if (initialHour < finalHour) {
        hours += finalHour - initialHour;
    } else if (initialHour === finalHour) {
        if(hours < 0) {
            hours += 24;
            days -= 1;
        } else {
            hours = 0;
        }
    }

    return {
        days: days,
        hours: hours,
        minutes: minutes,
        seconds: seconds,
    };
}

function parseInput(input) {
    if (input.includes("Dia")) {
        return Number(input.replace("Dia ", ""));
    }

    if (input.search(/dd : dd : dd/)) {
        return input.split(" : ").map(el => Number(el));
    }
}

function main() {
    var [initialDay, initialHour, initialMinute, initialSecond, finalDay, finalHour, finalMinute, finalSecond] = lines
        .map(parseInput)
        .flat();

    var duration = calculateDuration(
        initialDay,
        initialHour,
        initialMinute,
        initialSecond,
        finalDay,
        finalHour,
        finalMinute,
        finalSecond
    );

    var {
        days,
        hours,
        minutes,
        seconds,
    } = duration

    process.stdout.write(`${days} dia(s)\n${hours} hora(s)\n${minutes} minuto(s)\n${seconds} segundo(s)\n`);
}

main();
