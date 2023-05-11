function solution(babbling) {
    const words = ["aya", "ye", "woo", "ma"];
    let count = 0;

    for (let i = 0; i < babbling.length; i++) {
        for (let j = 0; j < words.length; j++) {
            babbling[i] = babbling[i].replaceAll(words[j], `${j}`);
            babbling[i] = babbling[i].replaceAll(`${j}${j}`, "z");
        }
    }
    for (let i = 0; i < babbling.length; i++) {
        if (isNaN(babbling[i]) == false) {
            count++;
        }
    }
    return count;
}
