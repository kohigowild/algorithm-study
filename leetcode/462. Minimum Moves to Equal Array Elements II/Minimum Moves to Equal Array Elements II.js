/**
 * @param {number[]} nums
 * @return {number}
 */
var minMoves2 = function (nums) {
    nums.sort((a, b) => a - b);
    const mid = nums[Math.ceil(nums.length / 2) - 1];
    let sum = 0;
    for (const num of nums) {
        sum += Math.abs(mid - num);
    }
    return sum;
};
