import { moveZeroes } from "./move-zeroes";

describe("move-zeroes", () => {
  test("keep an empty array as is", () => {
    const nums = [];
    moveZeroes(nums);
    expect(nums).toEqual([]);
  });

  test("keep zeroes-only array as is", () => {
    const nums1 = [0];
    moveZeroes(nums1);
    expect(nums1).toEqual([0]);

    const nums2 = [0, 0, 0];
    moveZeroes(nums2);
    expect(nums2).toEqual([0, 0, 0]);
  });

  test("keep non-zeroes-only array as is", () => {
    const nums1 = [1];
    moveZeroes(nums1);
    expect(nums1).toEqual([1]);

    const nums2 = [1, 4, 2];
    moveZeroes(nums2);
    expect(nums2).toEqual([1, 4, 2]);
  });

  test("keep array with trailing zeroes as is", () => {
    const nums1 = [1, 0];
    moveZeroes(nums1);
    expect(nums1).toEqual([1, 0]);

    const nums2 = [1, 4, 2, 0, 0, 0];
    moveZeroes(nums2);
    expect(nums2).toEqual([1, 4, 2, 0, 0, 0]);
  });

  test("move one zero from start to end", () => {
    const nums1 = [0, 1];
    moveZeroes(nums1);
    expect(nums1).toEqual([1, 0]);
  });

  test("move one zero from center to end", () => {
    const nums1 = [2, 0, 1];
    moveZeroes(nums1);
    expect(nums1).toEqual([2, 1, 0]);
  });

  test("move zeroes from start and center to end", () => {
    const nums1 = [0, 0, 2, 0, 1, 3, 0];
    moveZeroes(nums1);
    expect(nums1).toEqual([2, 1, 3, 0, 0, 0, 0]);
  });

  test("leetcode examples", () => {
    const nums1 = [0, 1, 0, 3, 12];
    moveZeroes(nums1);
    expect(nums1).toEqual([1, 3, 12, 0, 0]);

    const nums2 = [0];
    moveZeroes(nums2);
    expect(nums2).toEqual([0]);
  });
});
