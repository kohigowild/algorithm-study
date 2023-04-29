/**
 * @param {number} n
 * @return {number}
 */
var countLargestGroup = function (n) {
    let arr = [];
    let nums = [];
    for (let i = 1; i <= n; i++) {
        let sum = +String(i)
            .split("")
            .reduce((a, b) => +a + +b);
        if (arr.includes(sum)) {
            nums[arr.indexOf(sum)] += 1;
        } else {
            arr.push(sum);
            nums.push(1);
        }
    }
    let max = Math.max(...nums);
    let num = 0;
    for (let k = 0; k < nums.length; k++) {
        if (nums[k] === max) {
            num++;
        }
    }
    return num;
};
