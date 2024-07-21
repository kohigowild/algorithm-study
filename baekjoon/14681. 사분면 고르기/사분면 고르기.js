let input = require('fs').readFileSync(0, 'utf-8').toString().split('\n')
let x = parseInt(input[0])
let y = parseInt(input[1])

console.log(x > 0 ? (y > 0 ? 1 : 4) : y > 0 ? 2 : 3)
