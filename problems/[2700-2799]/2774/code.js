var input = require("fs").readFileSync("/dev/stdin", "utf8").trim().split("\n");

function calculateMean(values) {
    var sum = values.reduce((accumulator, value) => value + accumulator, 0);
    var mean = sum / values.length;

    return mean;
}

function calculateSensorAccuracy(measures) {
    var mean = calculateMean(measures);
    var number_of_measures = measures.length;
    var summation = 0;

    for (var i = 0; i < number_of_measures; i++) {
        summation += Math.pow(measures[i] - mean, 2);
    }

    var sample_variance = summation / (number_of_measures - 1);
    var accuracy = Math.sqrt(sample_variance);

    return accuracy;
}

for (var i = 0; i < input.length; i += 2) {
    var _interval = input[i].split(" ");
    var measures = input[i + 1]
        .split(" ")
        .map((measure) => Number(measure.trim()));

    var sensorAccuracy = calculateSensorAccuracy(measures);

    process.stdout.write(`${sensorAccuracy.toFixed(5)}\n`);
}
