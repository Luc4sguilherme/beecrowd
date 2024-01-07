var input = require('fs').readFileSync('/dev/stdin', 'utf8');
var lines = input.split(" "),
  items = [4, 4.5, 5, 2, 1.5],
  code = lines[0] - 1,
  quantity = lines[1],
  total = (items[code] * quantity).toFixed(2);

process.stdout.write(`Total: R$ ${total}\n`);
