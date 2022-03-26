// https://leetcode.com/explore/interview/card/top-interview-questions-easy/92/array/646/

import { rotate } from "./rotate-array";

describe("Rotate array", () => {
  test("return empty array for empty array", () => {
    expect(rotate([], 0)).toEqual([]);
    expect(rotate([], 5)).toEqual([]);
  });

  test("return the same array for one-element array", () => {
    expect(rotate([5], 0)).toEqual([5]);
    expect(rotate([5], 1)).toEqual([5]);
  });

  test("return the same array if k = 0", () => {
    expect(rotate([1, 2], 0)).toEqual([1, 2]);
  });

  test("on [x, y] return [y, x] if k = 1", () => {
    expect(rotate([1, 2], 1)).toEqual([2, 1]);
  });

  test("on [x, y] return [x, y] if k = 2", () => {
    expect(rotate([1, 2], 2)).toEqual([1, 2]);
  });

  test("return the same array if k = array.length", () => {
    expect(rotate([1, 2, 3, 4], 4)).toEqual([1, 2, 3, 4]);
  });

  test("return the same array if k = N * array.length", () => {
    expect(rotate([1, 2, 3, 4], 4)).toEqual([1, 2, 3, 4]);
    expect(rotate([1, 2, 3, 4], 8)).toEqual([1, 2, 3, 4]);
    expect(rotate([1, 2, 3, 4], 16)).toEqual([1, 2, 3, 4]);
  });

  test("rotate one", () => {
    expect(rotate([1, 2, 3], 1)).toEqual([3, 1, 2]);
  });

  test("rotate k < array.length", () => {
    expect(rotate([1, 2, 3], 2)).toEqual([2, 3, 1]);
    expect(rotate([4, 2, 3, 8], 3)).toEqual([2, 3, 8, 4]);
  });

  test("rotate k > array.length", () => {
    expect(rotate([1, 2, 3], 5)).toEqual([2, 3, 1]);
    expect(rotate([4, 2, 3, 8], 7)).toEqual([2, 3, 8, 4]);
  });

  test("leetcode check: arr = [1,2,3,4,5,6,7], k = 3, return [5,6,7,1,2,3,4]", () => {
    expect(rotate([1, 2, 3, 4, 5, 6, 7], 3)).toEqual([5, 6, 7, 1, 2, 3, 4]);
  });
});
