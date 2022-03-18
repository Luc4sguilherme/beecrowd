var input = require("fs").readFileSync("/dev/stdin", "utf8");
var lines = input.split(" ");

function notIsTriangle(a, b, c) {
    if (a >= b + c) {
        return true;
    } else {
        return false;
    }
}

function isRightTriangle(a, b, c) {
    if (Math.pow(a, 2) === Math.pow(b, 2) + Math.pow(c, 2)) {
        return true;
    } else {
        return false;
    }
}

function isObtuseTriangle(a, b, c) {
    if (Math.pow(a, 2) > Math.pow(b, 2) + Math.pow(c, 2)) {
        return true;
    } else {
        return false;
    }
}

function isAcuteTriangle(a, b, c) {
    if (Math.pow(a, 2) < Math.pow(b, 2) + Math.pow(c, 2)) {
        return true;
    } else {
        return false;
    }
}

function isEquilateralTriangle(a, b, c) {
    if (a === b && a === c) {
        return true;
    } else {
        return false;
    }
}

function isIsoscelesTriangle(a, b, c) {
    if ((a == b) && a !== c || a == c && a !== b || b == c && b !== a) {
        return true;
    } else {
        return false;
    }
}

function main() {
    var [a, b, c] = lines.map((line) => Number(line)).sort((a, b) => b - a);

    if (notIsTriangle(a, b, c)) {
        process.stdout.write("NAO FORMA TRIANGULO\n");
    } else if (isRightTriangle(a, b, c)) {
        process.stdout.write("TRIANGULO RETANGULO\n");
    } else if (isObtuseTriangle(a, b, c)) {
        process.stdout.write("TRIANGULO OBTUSANGULO\n");
    } else if (isAcuteTriangle(a, b, c)) {
        process.stdout.write("TRIANGULO ACUTANGULO\n");
    } 
    
    if (isEquilateralTriangle(a, b, c)) {
        process.stdout.write("TRIANGULO EQUILATERO\n");
    } else if (isIsoscelesTriangle(a, b, c)) {
        process.stdout.write("TRIANGULO ISOSCELES\n");
    }
}

main();
