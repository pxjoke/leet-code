// https://leetcode.com/explore/interview/card/top-interview-questions-easy/92/array/546/

export function twoSum(nums, target) {
  const pairsMap = new Map();
  const { length } = nums;

  for (let i = 0; i <= length; i++) {
    const currentNumber = nums[i];

    if (pairsMap.has(currentNumber)) {
      return [pairsMap.get(currentNumber), i];
    }

    pairsMap.set(target - currentNumber, i);
  }
}
