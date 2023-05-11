function solution(k, m, score) {
    score.sort((a, b) => a - b);
    let result = 0;

    while (score.length >= m) {
        let box = [];
        for (let i = 0; i < m; i++) {
            box.push(score.pop());
        }
        let minNums = Math.min.apply(null, box);
        result += minNums * m;
    }
    return result;
}
