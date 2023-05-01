/**
 * @param {number[]} g
 * @param {number[]} s
 * @return {number}
 */
var findContentChildren = function (g, s) {
    g.sort((a, b) => a - b);
    s.sort((a, b) => a - b);

    let i = 0;
    for (const cookie of s) {
        if (cookie >= g[i]) i++;
    }
    return i;
};
