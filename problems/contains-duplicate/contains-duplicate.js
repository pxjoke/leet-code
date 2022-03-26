//https://leetcode.com/explore/interview/card/top-interview-questions-easy/92/array/578/

export function containsDuplicate(nums) {
  return new Set(nums).size !== nums.length;
}
