function solution(s) {
  const result = s
    .split('')
    .map((el) => {
      return el === '(' ? 1 : -1
    })
    .reduce((acc, cur) => {
      if (acc === -1) return -1
      return acc + cur
    }, 0)
  return result === 0
}
