/**
 * @param {number[]} nums
 * @return {number}
 */
var zeroFilledSubarray = function (nums) {
    let curCount = 0;
    let totalCount = 0;
    for (const num of nums) {
        if (num == 0) {
            curCount++;
            totalCount += curCount;
        } else {
            curCount = 0;
        }
    }
    return totalCount;
};
