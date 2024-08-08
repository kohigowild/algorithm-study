function solution(t, p) {
  let arr = []
  t.split('').map((_, i) => {
    const str = t.slice(i, p.length + i)
    str.length === p.length && arr.push(str)
  })
  return arr.filter((num) => +num <= p).length
}
