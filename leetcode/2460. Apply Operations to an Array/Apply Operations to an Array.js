/**
 * @param {number[]} nums
 * @return {number[]}
 */
var applyOperations = function (nums) {
    for (let i = 0; i < nums.length; i++) {
        if (nums[i] == nums[i + 1]) {
            [nums[i], nums[i + 1]] = [nums[i] * 2, 0];
        }
    }
    const moveZeros = (next, curr) => {
        if (curr !== 0) return 0;
        return curr - next;
    };

    return nums.sort(moveZeros);
};
