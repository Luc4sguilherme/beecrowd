var input = require("fs").readFileSync("/dev/stdin", "utf8");
var lines = input.split(' ');
var a = Number(lines.shift());
var sum = 0;

for(var i = 0; i < lines.length; i++) {
    var n = Number(lines[i]);
    
    if(n > 0) {
        for(var j = n - 1; j >= 0; j--) {
            sum += a + j;
        }
    }
}

process.stdout.write(`${sum}\n`);
