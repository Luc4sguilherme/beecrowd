var input = require("fs").readFileSync("/dev/stdin", "utf8"),
  lines = input.split(" "),
  values = lines.map((value) => Number(value)),
  PI = 3.14159;

function areaOfRectangledTriangle(base: number, height: number) {
    return 0.5 * base * height
}

function areaOfCircle(radius: number) {
    return PI * Math.pow(radius, 2)
}

function areaOfTrapezium(baseA: number, baseB: number, height: number) {
    return 0.5 * (baseA + baseB) * height
}

function areaOfSquare(side: number) {
    return Math.pow(side, 2)
}

function areaOfRectangle(sideA: number, sideB: number) {
    return sideA * sideB
}

process.stdout.write(`TRIANGULO: ${areaOfRectangledTriangle(values[0],values[2]).toFixed(3)}\nCIRCULO: ${areaOfCircle(values[2]).toFixed(3)}\nTRAPEZIO: ${areaOfTrapezium(values[0], values[1], values[2]).toFixed(3)}\nQUADRADO: ${areaOfSquare(values[1]).toFixed(3)}\nRETANGULO: ${areaOfRectangle(values[0], values[1]).toFixed(3)}\n`)