var input = require("fs").readFileSync("/dev/stdin", "utf8");

if (input.length <= 81) {
    process.stdout.write("YES\n");
} else {
    process.stdout.write("NO\n");
}
