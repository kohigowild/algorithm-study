const input = require('fs').readFileSync(filePath).toString().trim()

let num = Number(input)
let result = 0

while (true) {
  if (num % 5 === 0) {
    result += num / 5
    break
  }

  num -= 3
  result += 1

  if (num < 0) {
    result = -1
    break
  }
}

console.log(result)
