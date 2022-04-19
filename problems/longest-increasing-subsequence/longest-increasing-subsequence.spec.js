import { lengthOfLIS } from "./longest-increasing-subsequence";

describe("longest-increasing-subsequence", () => {
  test("empty array have zero LIS", () => {
    expect(lengthOfLIS([])).toBe(0);
  });

  test("LIS of one element array is 1", () => {
    expect(lengthOfLIS([6])).toBe(1);
  });

  test("LIS of two increasing neighbor elements is 2", () => {
    expect(lengthOfLIS([1, 2])).toBe(2);
  });

  test("LIS of two equal elements is 1", () => {
    expect(lengthOfLIS([1, 1])).toBe(1);
  });

  test("LIS of two decreasing elements is 1", () => {
    expect(lengthOfLIS([3, 1])).toBe(1);
  });

  test("LIS of 2 increasing elements is 2", () => {
    expect(lengthOfLIS([3, 1, 4])).toBe(2);
  });

  test("leetcode examples", () => {
    expect(lengthOfLIS([10, 9, 2, 5, 3, 7, 101, 18])).toBe(4);
    expect(lengthOfLIS([0, 1, 0, 3, 2, 3])).toBe(4);
    expect(lengthOfLIS([7, 7, 7, 7, 7, 7, 7])).toBe(1);
  });
});
