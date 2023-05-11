function solution(lottos, win_nums) {
    let correctCount = lottos.filter((v) => win_nums.includes(v)).length;
    let zeroCount = lottos.filter((v) => v === 0).length;
    let maxRank = Math.min(7 - (correctCount + zeroCount), 6);
    let minRank = Math.min(7 - correctCount, 6);
    return [maxRank, minRank];
}
