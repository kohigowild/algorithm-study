let input = require('fs').readFileSync(0, 'utf-8').toString()
let [H, M] = input.split(' ').map(Number)

M -= 45
if (M < 0) {
  H -= 1
  M += 60
}

if (H < 0) {
  H += 24
}

console.log(`${H} ${M}`)
