var input = require("fs").readFileSync("/dev/stdin", "utf8");

function calculateTheAmountOfCustomersWhoFueledEachFuelType(values) {
    var alcohol = 0;
    var gasoline = 0;
    var diesel = 0;

    for (var i = 0; i < values.length; i++) {
        var value = Number(values[i]);

        if (value === "End") {
            break;
        }

        if (value === 1) alcohol++;
        if (value === 2) gasoline++;
        if (value === 3) diesel++;
    }

    return {
        alcohol: alcohol,
        gasoline: gasoline,
        diesel: diesel,
    };
}

function main() {
    var values = input.split("\n");
    var { alcohol, gasoline, diesel } = calculateTheAmountOfCustomersWhoFueledEachFuelType(values);

    process.stdout.write("MUITO OBRIGADO\n");
    process.stdout.write(`Alcool: ${alcohol}\n`);
    process.stdout.write(`Gasolina: ${gasoline}\n`);
    process.stdout.write(`Diesel: ${diesel}\n`);
}

main();
