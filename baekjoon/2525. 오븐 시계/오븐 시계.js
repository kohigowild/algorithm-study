let input = require('fs').readFileSync(0, 'utf-8').toString().split('\n')
let [H, M] = input[0].split(' ').map(Number)
let time = Number(input[1])

M += time
H += Math.floor(M / 60)
M = M % 60
H = H % 24

console.log(`${H} ${M}`)
