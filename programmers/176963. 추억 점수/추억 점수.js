function solution(name, yearning, photo) {
    let scores = [];
    for (let i = 0; i < photo.length; i++) {
        let photoScore = 0;
        for (let j = 0; j < photo[i].length; j++) {
            let idx = name.indexOf(photo[i][j]);
            if (idx !== -1) photoScore += yearning[idx];
        }
        scores.push(photoScore);
    }
    return scores;
}
