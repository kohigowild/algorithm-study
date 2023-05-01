/**
 * @param {string} s
 * @return {boolean}
 */
var checkZeroOnes = function (s) {
    let ones = 0;
    let zeroes = 0;
    let maxOnes = 0;
    let maxZeroes = 0;
    for (let char of s) {
        if (char === "1") {
            ones++;
            zeroes = 0;
        } else {
            zeroes++;
            ones = 0;
        }
        maxOnes = Math.max(maxOnes, ones);
        maxZeroes = Math.max(maxZeroes, zeroes);
    }
    return maxOnes > maxZeroes;
};
