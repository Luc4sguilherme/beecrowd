var input = require("fs").readFileSync("/dev/stdin", "utf8"),
    localTime,
    [timeOfDeparture, travelTime, destinationTimeZone] = input
        .split(" ")
        .map((item) => Number(item)),
    totalHours = timeOfDeparture + travelTime + destinationTimeZone;

if (totalHours >= 24) {
    localTime = totalHours - 24;
} else if (totalHours < 0) {
    localTime = totalHours + 24;
} else {
    localTime = totalHours;
}

process.stdout.write(`${localTime}\n`);
