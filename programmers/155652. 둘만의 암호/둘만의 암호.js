function solution(s, skip, index) {
  const validAlphabet = Array.from({ length: 26 }, (_, i) =>
    String.fromCharCode(97 + i)
  ).filter((char) => !skip.includes(char))

  return s
    .split('')
    .map((char) => {
      const currentIndex = validAlphabet.indexOf(char)
      const newIndex = (currentIndex + index) % validAlphabet.length
      return validAlphabet[newIndex]
    })
    .join('')
}
