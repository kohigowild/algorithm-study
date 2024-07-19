const input = require('fs')
  .readFileSync('/dev/stdin', 'utf-8')
  .trim()
  .split('\n')
  .map((line) => line.split(' ').map(Number))

const result = input.reduce(
  (acc, row, rowIndex) => {
    row.forEach((value, colIndex) => {
      if (value > acc.max) {
        acc.max = value
        acc.pos = [rowIndex + 1, colIndex + 1]
      }
    })
    return acc
  },
  { max: -Infinity, pos: [1, 1] }
)

console.log(`${result.max}\n${result.pos.join(' ')}`)
