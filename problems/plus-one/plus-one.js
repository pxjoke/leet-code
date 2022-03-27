//Plus One
//https://leetcode.com/explore/interview/card/top-interview-questions-easy/92/array/559/

export function plusOne(digits) {
  let result = digits.slice();

  for (let i = digits.length - 1; i >= 0; i--) {
    if (result[i] !== 9) {
      result[i] = result[i] + 1;
      break;
    }

    if (digits[i] === 9) {
      result[i] = 0;
      if (i === 0) {
        result = [1, ...result];
      }
    }
  }

  return result;
}
