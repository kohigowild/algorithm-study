/**
 * @param {string} s
 * @return {string}
 */
let reverseVowels = function (s) {
    let result = s.split("");
    let left = 0;
    let right = s.length - 1;
    let vowels = ["a", "i", "e", "o", "u", "A", "I", "E", "O", "U"];
    while (left < right) {
        if (vowels.includes(s[left])) {
            let idx1 = left;
            if (vowels.includes(s[right])) {
                [result[idx1], result[right]] = [result[right], result[idx1]];
                left++;
            }
            right--;
        } else left++;
    }
    return result.join("");
};
