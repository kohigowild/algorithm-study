function solution(k, tangerine) {
  const freqMap = [
    ...tangerine
      .reduce((map, x) => map.set(x, (map.get(x) || 0) + 1), new Map())
      .values(),
  ]
  const sortedFreq = freqMap.sort((a, b) => b - a)
  let total = 0,
    count = 0

  for (let freq of sortedFreq) {
    total += freq
    count++
    if (total >= k) break
  }

  return count
}
