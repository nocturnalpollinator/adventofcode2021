var n = require('fs').readFileSync('./input.txt', 'utf-8').split('\n').map(e => parseInt(e))
var incr = incrW = 0

n.map((e, i) => {
    incr += e > n[i-1]
    if (i < 3) return
    incrW += n.slice(i-2, i+1).reduce((a, b) => a + b) > n.slice(i-3, i).reduce((a, b) => a + b)
})

console.log('Part I: ' + incr, '\nPart II: ' + incrW)