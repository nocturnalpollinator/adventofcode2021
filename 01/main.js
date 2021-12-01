var n = require('fs').readFileSync('./input.txt', 'utf-8').split('\n').map(a => parseInt(a))

var count = n.reduce((p, c, i) => [
    // Counting increments of each step
    p[0] + (c > n[i-1]), 
    // Counting the windows increments
    i < 3 ? 0 : p[1] + (n[i] > n[i-3])
], [0, 0]);

console.log('Part I: ' + count[0], '\nPart II: ' + count[1])