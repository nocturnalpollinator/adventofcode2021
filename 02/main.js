var count = require('fs').readFileSync('./input.txt', 'utf-8').split('\n').reduce((p, c) => {
    var dir = c.split(' ')[0]
    var len = parseInt(c.split(' ')[1])
    return [
        dir == 'forward' ? p[0] += len : p[0],
        dir == 'down'    ? p[1] += len : dir == 'up' ? p[1] -= len : p[1],
        dir == 'forward' ? p[2] += len * p[1] : p[2]
    ]
}, [0, 0, 0])

console.log(`Part I: ${count[0] * count[1]}\nPart II: ${count[0] * count[2]}`)