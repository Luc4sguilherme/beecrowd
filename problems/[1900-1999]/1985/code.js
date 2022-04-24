var input = require("fs").readFileSync("/dev/stdin", "utf8"),
    lines = input.split("\n"),
    numberOfPurchasedProducts = Number(lines.shift()),
    total = 0;

function getProductPrice(code) {
    switch (code) {
        case 1001:
            return 1.5;
        case 1002:
            return 2.5;
        case 1003:
            return 3.5;
        case 1004:
            return 4.5;
        case 1005:
            return 5.5;
    }
}

for (var i = 0; i < numberOfPurchasedProducts; i++) {
    var [code, quantity] = lines[i].split(" ").map(Number);
    var price = getProductPrice(code) * quantity;

    total += price;
}

process.stdout.write(`${total.toFixed(2)}\n`);
