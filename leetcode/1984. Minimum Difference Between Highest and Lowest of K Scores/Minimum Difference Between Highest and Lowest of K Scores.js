/**
 * @param {number[]} nums
 * @param {number} k
 * @return {number}
 */

var minimumDifference = function (nums, k) {
    nums.sort((a, b) => a - b);
    let left = 0,
        right = k - 1;
    let minNum = Number.MAX_SAFE_INTEGER;
    while (right < nums.length) {
        minNum = Math.min(minNum, nums[right] - nums[left]);
        left++;
        right++;
    }

    return minNum;
};
