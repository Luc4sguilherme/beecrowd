var input = require('fs').readFileSync('/dev/stdin', 'utf8');
var lines = input.split('\n');

/**
 * Escreva a sua solução aqui
 * Code your solution here
 * Escriba su solución aquí
 */
function getNumberOfStepLadder() {
  var lengthOfLadder = lines[0], sequence = lines[1].split(' ');

  if (lengthOfLadder === 1 || lengthOfLadder === 2) {
    return 1;
  }

  var current, i = 2, stepLadder = 1, before = sequence[0] - sequence[1];  
  for (; i < lengthOfLadder; ++i) {
    current = sequence[i - 1] - sequence[i];

    if (current != before) {
      before = current;
      stepLadder++;
    }
  }

  return stepLadder;
}

console.log(getNumberOfStepLadder())