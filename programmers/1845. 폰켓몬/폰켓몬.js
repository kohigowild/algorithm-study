function solution(nums) {
    const set = Array.from(new Set(nums));
    return set.length < nums.length / 2 ? set.length : nums.length / 2;
}
