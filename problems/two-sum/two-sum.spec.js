import { twoSum } from "./two-sum";

describe("two-sum", () => {
  test("array of 2 numbers", () => {
    expect(twoSum([3, 4], 7)).toEqual([0, 1]);
  });

  test("array of 3 positive numbers", () => {
    expect(twoSum([3, 4, 1], 7)).toEqual([0, 1]);
    expect(twoSum([4, 3, 1], 7)).toEqual([0, 1]);
    expect(twoSum([1, 3, 4], 7)).toEqual([1, 2]);
    expect(twoSum([1, 4, 3], 7)).toEqual([1, 2]);
    expect(twoSum([4, 1, 3], 7)).toEqual([0, 2]);
    expect(twoSum([3, 1, 4], 7)).toEqual([0, 2]);
  });

  test("pair includes zero and the target", () => {
    expect(twoSum([5, 3, 0, 1], 3)).toEqual([1, 2]);
  });

  test("target is negative number", () => {
    expect(twoSum([1, 10, -20, 3, 4], -10)).toEqual([1, 2]);
  });

  test("target is positive but pair includes negative", () => {
    expect(twoSum([1, -10, 20, 3, 4], 10)).toEqual([1, 2]);
  });

  test("leetcode examples", () => {
    expect(twoSum([2, 7, 11, 15], 9)).toEqual([0, 1]);
    expect(twoSum([3, 2, 4], 6)).toEqual([1, 2]);
    expect(twoSum([3, 3], 6)).toEqual([0, 1]);
  });
});
