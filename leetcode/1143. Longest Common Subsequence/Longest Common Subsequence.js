/**
 * @param {string} text1
 * @param {string} text2
 * @return {number}
 */
var longestCommonSubsequence = function (text1, text2) {
    if (text1.length == 0 || text2.length == 0) return 0;
    let m = text1.length,
        n = text2.length;
    let dp = new Array(n + 1).fill(0);

    for (let i = 1; i <= m; i++) {
        let prev = dp[0];
        for (let j = 1; j <= n; j++) {
            let temp = dp[j];
            if (text1.charAt(i - 1) == text2.charAt(j - 1)) {
                dp[j] = prev + 1;
            } else {
                dp[j] = Math.max(dp[j], dp[j - 1]);
            }
            prev = temp;
        }
    }
    return dp[n];
};
