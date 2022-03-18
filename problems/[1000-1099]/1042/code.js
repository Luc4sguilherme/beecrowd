var input = require('fs').readFileSync('/dev/stdin', 'utf8');
var numbers = input.split(' ').map(Number);

function sort(numbers) {
    return [...numbers].sort((a, b) => a - b)
}

function print(numbers) {
    numbers.forEach(number => {
        process.stdout.write(`${number}\n`)
    })
}

print(sort(numbers));
process.stdout.write('\n');
print(numbers);