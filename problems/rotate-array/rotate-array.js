// https://leetcode.com/explore/interview/card/top-interview-questions-easy/92/array/646/

export function rotate(arr, k) {
  const rotateBy = k % arr.length;

  const last = [...arr];
  const first = last.splice(0, arr.length - rotateBy);
  return [...last, ...first];
}
