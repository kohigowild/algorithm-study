let nums = require('fs').readFileSync('/dev/stdin').toString().split('\n')
let multiply = []
let target = parseInt(nums[0])
nums[1]
  .split('')
  .reverse()
  .map((n) => {
    multiply.push(parseInt(n) * target)
  })
multiply.push(parseInt(nums[1]) * target)

console.log(`${multiply.join('\n')}`)
