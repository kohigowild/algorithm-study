var findLength = function (nums1, nums2) {
    let n = nums1.length;
    let m = nums2.length;

    let dp = new Array(n + 1);

    for (let i = 0; i <= n; i++) {
        dp[i] = new Array(m + 1);
        for (let j = 0; j <= m; j++) {
            dp[i][j] = 0;
        }
    }

    for (let i = n - 1; i >= 0; i--) {
        for (let j = m - 1; j >= 0; j--) {
            if (nums1[i] == nums2[j]) dp[i][j] = dp[i + 1][j + 1] + 1;
        }
    }

    let result = 0;

    for (let i = 0; i < n; i++) {
        for (let j = 0; j < m; j++) {
            if (dp[i][j] > result) {
                result = dp[i][j];
            }
        }
    }

    return result;
};
