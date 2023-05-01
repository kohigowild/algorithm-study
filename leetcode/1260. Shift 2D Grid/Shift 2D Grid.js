/**
 * @param {number[][]} grid
 * @param {number} k
 * @return {number[][]}
 */
var shiftGrid = function (grid, k) {
    const nums = grid[0].length;
    let shiftStr = grid.reduce(function (acc, cur) {
        return acc.concat(cur);
    });
    for (let i = 0; i < k; i++) {
        shiftStr.unshift(shiftStr.pop());
    }
    function division(data = [], size = 1) {
        const items = [...data];
        const arr = [];

        while (items.length) {
            arr.push(items.splice(0, size));
        }

        return arr;
    }
    return division(shiftStr, nums);
};
