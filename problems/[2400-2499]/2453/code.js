var input = require('fs').readFileSync('/dev/stdin', 'utf8');
process.stdout.write(`${input.replace(/(pp)|(p)/g, (_, p1, p2) => {if (p1) return 'p';return ''})}`);