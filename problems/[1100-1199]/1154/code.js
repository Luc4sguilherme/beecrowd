var input = require("fs").readFileSync("/dev/stdin", "utf8");
var ages = input.split("\n").map((age) => Number(age));

function calculateAverageAge(ages) {
    var sum = 0;
    var averageAge;

    for (var i = 0; i < ages.length; i++) {
        var age = ages[i];

        if (age < 0) {
            averageAge = sum / i;
            break;
        }

        sum += age;
    }

    process.stdout.write(`${averageAge.toFixed(2)}\n`);
}

calculateAverageAge(ages);
