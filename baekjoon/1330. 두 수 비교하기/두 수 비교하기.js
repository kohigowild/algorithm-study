let input = require('fs').readFileSync('/dev/stdin').toString().split(' ')
let nums = input.map(Number)

const result = nums[0] === nums[1] ? '==' : nums[0] > nums[1] ? '>' : '<'
console.log(result)
