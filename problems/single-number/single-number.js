// https://leetcode.com/explore/interview/card/top-interview-questions-easy/92/array/549/

export function singleNumber(nums) {
  return nums.reduce((acc, n) => n ^ acc, 0);
}
