import { intersect } from "./intersection-of-two-arrays-II";

describe("intersection-of-two-arrays-II", () => {
  test("intersection is empty if two arrays are empty", () => {
    expect(intersect([], [])).toEqual([]);
  });

  test("intersection is empty if one of the arrays is empty", () => {
    expect(intersect([1, 2], [])).toEqual([]);
    expect(intersect([], [1, 2])).toEqual([]);
  });

  test("single similar number in both arrays", () => {
    expect(intersect([1], [1])).toEqual([1]);
  });

  test("single different number in both arrays", () => {
    expect(intersect([1], [2])).toEqual([]);
  });

  test("two equal arrays (full intersection)", () => {
    expect(intersect([1, 2, 3], [1, 2, 3])).toEqual([1, 2, 3]);
  });

  test("one array is subset of another", () => {
    expect(intersect([1, 2, 3, 4], [2, 3])).toEqual([2, 3]);
    expect(intersect([2, 3], [1, 2, 3, 4])).toEqual([2, 3]);
  });

  test("two different arrays", () => {
    expect(intersect([1, 2, 3, 4], [5, 6])).toEqual([]);
  });

  test("two different arrays with some similar values ", () => {
    expect(intersect([1, 2, 3, 4], [5, 6, 4, 1])).toEqual([4, 1]);
  });

  test("leetcode examples", () => {
    expect(intersect([1, 2, 2, 1], [2, 2])).toEqual([2, 2]);
    expect(intersect([4, 9, 5], [9, 4, 9, 8, 4])).toEqual([9, 4]);
  });
});
