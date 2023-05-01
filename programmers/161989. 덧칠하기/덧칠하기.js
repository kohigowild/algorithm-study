function solution(n, m, section) {
    let count = 0;
    let prev = 0;

    for (let i = 0; i < section.length; i++) {
        if (section[i] > prev) {
            count++;
            prev = section[i] + m - 1;
        }
    }

    return count;
}
