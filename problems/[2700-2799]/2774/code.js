var input = require("fs").readFileSync("/dev/stdin", "utf8").trim().split("\n");

function calculateMean(values) {
    var sum = values.reduce((accumulator, value) => value + accumulator, 0);
    var mean = sum / values.length;

    return mean;
}

function calculateSensorAccuracy(measurements) {
    var mean = calculateMean(measurements);
    var number_of_measurements = measurements.length;
    var summation = 0;

    for (var i = 0; i < number_of_measurements; i++) {
        summation += Math.pow(measurements[i] - mean, 2);
    }

    var sample_variance = summation / (number_of_measurements - 1);
    var accuracy = Math.sqrt(sample_variance);

    return accuracy;
}

for (var i = 0; i < input.length; i += 2) {
    var _interval = input[i].split(" ");
    var measurements = input[i + 1]
        .split(" ")
        .map((measurement) => Number(measurement.trim()));

    var sensorAccuracy = calculateSensorAccuracy(measurements);

    process.stdout.write(`${sensorAccuracy.toFixed(5)}\n`);
}
