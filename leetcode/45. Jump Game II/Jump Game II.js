/**
 * @param {number[]} nums
 * @return {number}
 */
var jump = function (nums) {
    let left = 0;
    let right = 0;
    let jump = 0;

    while (right < nums.length - 1) {
        let max = 0;
        for (let i = left; i < right + 1; i++) {
            max = Math.max(max, i + nums[i]);
        }
        left = right + 1;
        right = max;
        jump++;
    }
    return jump;
};
