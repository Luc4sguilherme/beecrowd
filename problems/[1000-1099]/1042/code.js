var input = '-14 21 7'
var numbers = input.split(' ');

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