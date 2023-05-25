function solution(answers) {
    const first = [1, 2, 3, 4, 5];
    const second = [2, 1, 2, 3, 2, 4, 2, 5];
    const third = [3, 3, 1, 1, 2, 2, 4, 4, 5, 5];
    const countArr = [0, 0, 0];
    const result = [];

    for (let i = 0; i < answers.length; i++) {
        if (answers[i] === first[i % first.length]) countArr[0]++;
        if (answers[i] === second[i % second.length]) countArr[1]++;
        if (answers[i] === third[i % third.length]) countArr[2]++;
    }

    for (let i = 0; i < countArr.length; i++) {
        if (Math.max.apply(null, countArr) === countArr[i]) {
            result.push(i + 1);
        }
    }
    return result;
}
