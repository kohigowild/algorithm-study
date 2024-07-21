let input = require('fs')
  .readFileSync(0, 'utf-8')
  .toString()
  .split(' ')
  .map(Number)
let set = new Set(input)

if (set.size === 1) {
  console.log(10000 + input[0] * 1000)
} else if (set.size === 2) {
  let repeated =
    input[0] === input[1] || input[0] === input[2] ? input[0] : input[1]
  console.log(1000 + repeated * 100)
} else {
  console.log(Math.max(...input) * 100)
}
