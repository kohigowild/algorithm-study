function solution(numbers, Pos) {
    const phone = [
        [1, 2, 3],
        [4, 5, 6],
        [7, 8, 9],
        ["*", 0, "#"],
    ];
    let result = "";

    // 초기 왼손, 오른손 위치
    let leftPos = [3, 0];
    let rightPos = [3, 2];

    // 왼손과 오른손으로 숫자를 누르는데 필요한 숫자들
    const leftNums = [1, 4, 7];
    const rightNums = [3, 6, 9];

    for (let i = 0; i < numbers.length; i++) {
        const num = numbers[i];
        let numPos = [0, 0]; // 누를 숫자의 위치

        // 누를 숫자가 있는 위치 찾기
        for (let j = 0; j < phone.length; j++) {
            if (phone[j].indexOf(num) > -1) {
                numPos = [j, phone[j].indexOf(num)];
                break;
            }
        }

        if (leftNums.includes(num)) {
            // 왼손으로 누를 수 있는 숫자인 경우
            result += "L";
            leftPos = numPos; // 왼손 위치 업데이트
        } else if (rightNums.includes(num)) {
            // 오른손으로 누를 수 았는 숫자인 경우
            result += "R";
            rightPos = numPos; // 오른손 위치 업데이트
        } else {
            // 양손으로 누를 수 있는 경우
            // 왼손과 오른손의 위치에서 숫자까지 거리 계산
            const leftDist = Math.abs(leftPos[0] - numPos[0]) + Math.abs(leftPos[1] - numPos[1]);
            const rightDist = Math.abs(rightPos[0] - numPos[0]) + Math.abs(rightPos[1] - numPos[1]);

            if (leftDist < rightDist) {
                // 왼손이 더 가까움
                result += "L";
                leftPos = numPos;
            } else if (leftDist > rightDist) {
                // 오른손이 더 가까움
                result += "R";
                rightPos = numPos;
            } else {
                // 거리가 같은 경우
                // Pos에 따라
                if (Pos === "left") {
                    result += "L";
                    leftPos = numPos;
                } else {
                    result += "R";
                    rightPos = numPos;
                }
            }
        }
    }

    return result;
}
