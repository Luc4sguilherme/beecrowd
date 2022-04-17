var input = require("fs").readFileSync("/dev/stdin", "utf8"),
    integers = input.split(" ").map((value) => Number(value)),
    size = integers.length,
    numberOfDevices = 0;

for (var i = 0; i < size; i++) {
    var integer = integers[i];
    var positionOfTheLastInteger = size - 1;

    if (i === positionOfTheLastInteger) {
        numberOfDevices += integer;
    } else {
        numberOfDevices += integer - 1;
    }
}

process.stdout.write(`${numberOfDevices}\n`);
