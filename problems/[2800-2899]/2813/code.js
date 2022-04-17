var input = require("fs").readFileSync("/dev/stdin", "utf8"),
    lines = input.split("\n"),
    numberOfDays = Number(lines.shift()),
    buyForTheHouse = 0,
    buyForTheOffice = 0,
    houseStock = 0,
    officeStock = 0;

for (var i = 0; i < numberOfDays; i++) {
    var [sd, sn] = lines[i].split(" ");

    if (sd === "chuva") {
        if (houseStock === 0) {
            buyForTheHouse++;
            officeStock++;
        } else {
            houseStock--;
            officeStock++;
        }
    }

    if (sn === "chuva") {
        if (officeStock === 0) {
            buyForTheOffice++;
            houseStock++;
        } else {
            officeStock--;
            houseStock++;
        }
    }
}

process.stdout.write(`${buyForTheHouse} ${buyForTheOffice}\n`);
