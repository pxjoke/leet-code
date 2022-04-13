// https://leetcode.com/explore/interview/card/top-interview-questions-easy/127/strings/879/

export function reverseString(str) {
  const { length } = str;
  for (let i = 0; i < Math.floor(length / 2); i++) {
    const tmp = str[i];
    const oppositeIdx = length - i - 1;
    str[i] = str[oppositeIdx];
    str[oppositeIdx] = tmp;
  }
}
