function solution(a, b) {
    return Math.max(parseInt(`${a}${b}`, 10), parseInt(`${b}${a}`, 10));
}
