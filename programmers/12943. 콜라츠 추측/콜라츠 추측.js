function solution(num) {
  let count = 0
  if (num === 1) return 0
  while (count <= 500) {
    num = num % 2 === 0 ? num / 2 : num * 3 + 1
    count++
    if (num === 1) return count
  }
  return -1
}
