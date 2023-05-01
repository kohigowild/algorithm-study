/**
 * @param {number} num
 * @return {number}
 */
var addDigits = function (num) {
    function sumDigits(num) {
        const numStr = String(num).split("");
        let sum = numStr.reduce((a, b) => parseInt(a) + parseInt(b));
        return sum > 9 ? sumDigits(sum) : sum;
    }
    return sumDigits(num);
};
