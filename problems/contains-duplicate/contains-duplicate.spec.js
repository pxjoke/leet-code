import { containsDuplicate } from "./contains-duplicate";

describe("contains-duplicate", () => {
  test("empty array has no duplicates", () => {
    expect(containsDuplicate([])).toBe(false);
  });

  test("array of one element has no duplicates", () => {
    expect(containsDuplicate([1])).toBe(false);
  });

  test("array of 2 elements has no duplicates", () => {
    expect(containsDuplicate([1, 2])).toBe(false);
  });

  test("two similar numbers are duplicates", () => {
    expect(containsDuplicate([1, 1])).toBe(true);
  });

  test("three similar numbers are duplicates", () => {
    expect(containsDuplicate([1, 1, 1])).toBe(true);
  });

  test("duplicates at the end of array", () => {
    expect(containsDuplicate([2, 1, 1])).toBe(true);
  });

  test("duplicates at the beginning of array", () => {
    expect(containsDuplicate([1, 1, 2])).toBe(true);
  });

  test("duplicates on the different sides", () => {
    expect(containsDuplicate([1, 2, 3, 1])).toBe(true);
  });

  test("leetcode examples", () => {
    expect(containsDuplicate([1, 2, 3, 1])).toBe(true);
    expect(containsDuplicate([1, 2, 3, 4])).toBe(false);
    expect(containsDuplicate([1, 1, 1, 3, 3, 4, 3, 2, 4, 2])).toBe(true);
  });
});
