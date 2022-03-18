var input = require("fs").readFileSync("/dev/stdin", "utf8");
var lines = input.split(" ");

function calculateDuration(initialHour, initialMinute, finalHour, finalMinute) {
    var hours = 0;
    var minutes = 0;
    
    if (initialMinute > finalMinute) {
        minutes = 60 - (initialMinute - finalMinute);
        hours -= 1;
    } else if (initialMinute < finalMinute) {
        minutes = finalMinute - initialMinute;
    } else if (initialMinute === finalMinute) {
        minutes = 0;
    }
    
    if (initialHour > finalHour) {
        hours += 24 - initialHour + finalHour;
    } else if (initialHour < finalHour) {
        hours += finalHour - initialHour;
    } else if (initialHour === finalHour) {
        hours += 24;
    }

    if(hours === 24 && minutes > 0) {
        hours = 0; 
    }
    
    return {
        hours: hours,
        minutes: minutes,
    };
}

function main() {
    var [initialHour, initialMinute, finalHour, finalMinute] = lines.map((line) => Number(line));
    var duration = calculateDuration(initialHour, initialMinute, finalHour, finalMinute);

    process.stdout.write(`O JOGO DUROU ${duration.hours} HORA(S) E ${duration.minutes} MINUTO(S)\n`);
}

main();
