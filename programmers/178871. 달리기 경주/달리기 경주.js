function solution(players, callings) {
    let rank = new Map();
    for (let i = 0; i < players.length; i++) {
        rank.set(players[i], i);
    }
    for (let i = 0; i < callings.length; i++) {
        let idx = rank.get(callings[i]);
        if (idx === 0) continue;
        let temp = players[idx - 1];
        players[idx - 1] = callings[i];
        players[idx] = temp;
        rank.set(players[idx], idx);
        rank.set(players[idx - 1], idx - 1);
    }
    return players;
}
