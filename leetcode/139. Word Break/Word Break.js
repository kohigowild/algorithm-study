/**
 * @param {string} s
 * @param {string[]} wordDict
 * @return {boolean}
 */
var wordBreak = function (s, wordDict) {
    const dp = new Array(s.length + 1).fill(false).fill(true, 0, 1);
    for (let i = 0; i <= s.length; i++) {
        if (dp[i]) {
            for (let word of wordDict) {
                const newword = s.substring(i);
                if (newword.indexOf(word) === 0) {
                    dp[i + word.length] = true;
                }
            }
        }
    }
    return dp[s.length];
};
