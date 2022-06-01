var input = require("fs").readFileSync("/dev/stdin", "utf8");
var lines = input.split("\n");
var [initialNumberOfTabs, numberOfActionsPerformed] = lines.shift().split(" ").map(item => Number(item));
var actionsPerformed = lines;
var numberOfTabs = initialNumberOfTabs;

for (var i = 0; i < numberOfActionsPerformed; i++) {
    if (actionsPerformed[i] === "fechou") {
        numberOfTabs += 1;
    } else {
        numberOfTabs -= 1;
    }
}

process.stdout.write(`${numberOfTabs}\n`);
