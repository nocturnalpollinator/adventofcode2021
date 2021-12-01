var n = require('fs').readFileSync('./input.txt', 'utf-8').split('\n').map(a => parseInt(a))

var count = n.reduce((p, c, i) => [
    p[0] + (c > n[i-1]),
    i < 3 ? 0 : p[1] + (n.slice(i-2, i+1).reduce((a, b) => a + b) > n.slice(i-3, i).reduce((a, b) => a + b))
], [0, 0]);

console.log('Part I: ' + count[0], '\nPart II: ' + count[1])