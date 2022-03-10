var input = require('fs').readFileSync('/dev/stdin', 'utf8');
var lines = input.split("\n"),
  N = lines.shift(),
  K;

while (N--) {
  K = lines.shift();
  while (K--) {
    switch (lines[0]) {
      case '1':
        process.stdout.write(`Rolien\n`);
        break;
      case '2':
        process.stdout.write(`Naej\n`);
        break;
      case '3':
        process.stdout.write(`Elehcim\n`);
        break;
      default:
        process.stdout.write(`Odranoel\n`);
        break;
    }

    lines.shift();
  }
}