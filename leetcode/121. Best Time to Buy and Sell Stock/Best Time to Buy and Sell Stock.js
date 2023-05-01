/**
 * @param {number[]} prices
 * @return {number}
 */
var maxProfit = function (prices) {
    let i = 0;
    let j = 1;
    let maxNum = 0;

    while (j < prices.length) {
        if (prices[i] < prices[j]) {
            let profit = prices[j] - prices[i];
            maxNum = Math.max(maxNum, profit);
        } else {
            i = j;
        }
        j++;
    }
    return maxNum;
};
