var input = require("fs").readFileSync("/dev/stdin", "utf8");

if (input.length <= 141) {
    process.stdout.write("TWEET\n");
} else {
    process.stdout.write("MUTE\n");
}
