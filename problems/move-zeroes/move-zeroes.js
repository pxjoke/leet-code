// https://leetcode.com/explore/interview/card/top-interview-questions-easy/92/array/567/

export function moveZeroes(nums) {
  let readyPartEndIdx = 0;
  let currentElementIdx = 0;

  for (
    currentElementIdx;
    currentElementIdx < nums.length;
    currentElementIdx++
  ) {
    const currentElement = nums[currentElementIdx];

    if (currentElement !== 0) {
      nums[readyPartEndIdx] = currentElement;
      readyPartEndIdx++;
    }
  }

  for (readyPartEndIdx; readyPartEndIdx < nums.length; readyPartEndIdx++) {
    nums[readyPartEndIdx] = 0;
  }
}
