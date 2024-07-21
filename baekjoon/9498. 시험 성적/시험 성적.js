let input = require('fs').readFileSync('/dev/stdin').toString()
let score = parseInt(input)

const grades = ['D', 'C', 'B', 'A', 'A']
const index = Math.floor(score / 10) - 6
const grade = index >= 0 ? grades[index] : 'F'
console.log(grade)
