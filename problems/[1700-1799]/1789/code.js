var input = require("fs").readFileSync("/dev/stdin", "utf8").trim();
var lines = input.split("\n");

for (var i = 0; i < lines.length; i += 2) {
    var speeds = lines[i + 1].split(" ").map((value) => Number(value));
    var higherSpeed = Math.max(...speeds);
    var levelOfSpeedFasterSlug;

    if (higherSpeed < 10) {
        levelOfSpeedFasterSlug = 1;
    } else if (higherSpeed >= 10 && higherSpeed < 20) {
        levelOfSpeedFasterSlug = 2;
    } else if (higherSpeed >= 20) {
        levelOfSpeedFasterSlug = 3;
    }

    process.stdout.write(`${levelOfSpeedFasterSlug}\n`);
}
