var input = require('fs').readFileSync('/dev/stdin', 'utf8');
var lines = input.split('\n');

var i = 0, numberOfEven = 0;
for (; i < 5; i++) {
  if (lines[i] % 2 === 0) {
    numberOfEven += 1;
  }
}

process.stdout.write(`${numberOfEven} valores pares\n`);