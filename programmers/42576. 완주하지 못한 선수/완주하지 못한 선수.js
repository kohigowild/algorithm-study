function solution(participant, completion) {
    participant.sort();
    completion.sort();

    return participant.find((e, i) => e !== completion[i]);
}
