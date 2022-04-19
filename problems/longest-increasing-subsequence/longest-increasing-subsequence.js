// https://leetcode.com/problems/longest-increasing-subsequence/

export function lengthOfLIS(arr) {
  const knownLIS = [];
  const { length } = arr;

  for (let i = 0; i < length; i++) {
    knownLIS[i] = 1;
    for (let j = i - 1; j >= 0; j--) {
      if (arr[j] < arr[i] && knownLIS[j] + 1 > knownLIS[i]) {
        knownLIS[i] = knownLIS[j] + 1;
      }
    }
  }

  return knownLIS.reduce((max, i) => Math.max(max, i), 0);
}
