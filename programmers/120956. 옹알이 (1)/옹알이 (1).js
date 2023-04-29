function solution(babbling) {
    let answer = 0;
    let arr = [];

    let word = ["aya", "ye", "woo", "ma"];

    for (let i = 0; i < babbling.length; i++) {
        for (let j = 0; j < word.length; j++) {
            babbling[i] = babbling[i].replaceAll(word[j], `${j + 1}`);
        }
    }

    filter = babbling.filter((el) => !isNaN(el / 1));

    const split = filter.map((el) => el.split(""));

    for (let i = 0; i < split.length; i++) {
        arr.push([]);
        for (let j = 0; j < split[i].length; j++) {
            if (split[i][j] !== split[i][j + 1]) {
                arr[i].push(split[i][j]);
            }
        }
    }

    answer = arr.filter((el, idx) => el.length === split[idx].length);

    return answer.length;
}
