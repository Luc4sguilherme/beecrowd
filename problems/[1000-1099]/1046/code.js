var input = require("fs").readFileSync("/dev/stdin", "utf8");
var lines = input.split(" ");

function calculateDuration(startTime, endTime) {
    if (startTime > endTime) {
        return 24 - startTime + endTime;
    }

    if (startTime < endTime) {
        return endTime - startTime;
    }

    if (startTime === endTime) {
        return 24;
    }
}

function main() {
    var [startTime, endTime] = lines.map((line) => Number(line));
    var duration = calculateDuration(startTime, endTime);

    process.stdout.write(`O JOGO DUROU ${duration} HORA(S)\n`);
}

main();
