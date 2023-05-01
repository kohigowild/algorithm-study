/**
 * @param {number[]} temperatures
 * @return {number[]}
 */
var dailyTemperatures = function (temperatures) {
    let result = new Array(temperatures.length).fill(0);
    const stack = [];

    for (let i = 0; i < temperatures.length; i++) {
        if (i == 0) stack.push([temperatures[i], i]);
        else {
            while (stack.length && stack.at(-1)[0] < temperatures[i]) {
                const prev = stack.pop()[1];
                result[prev] = i - prev;
            }
            stack.push([temperatures[i], i]);
        }
    }
    return result;
};
