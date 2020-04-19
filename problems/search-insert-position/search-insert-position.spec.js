import { searchInsert } from "./search-insert-position";

test("[1,3,5,6], 5 => 2", () => {
  expect(searchInsert([1, 3, 5, 6], 5)).toBe(2);
});

test("[1,3,5,6], 2 => 1", () => {
  expect(searchInsert([1, 3, 5, 6], 2)).toBe(1);
});

test("[1,3,5,6], 7 => 4", () => {
  expect(searchInsert([1, 3, 5, 6], 7)).toBe(4);
});

test("[1,3,5,6], 0 => 0", () => {
  expect(searchInsert([1, 3, 5, 6], 0)).toBe(0);
});

test("[], 0 => 0", () => {
  expect(searchInsert([], 0)).toBe(0);
});

test("[1], 0 => 0", () => {
  expect(searchInsert([1], 0)).toBe(0);
});

test("[1], 1 => 0", () => {
  expect(searchInsert([1], 1)).toBe(0);
});

test("[1, 3], 0 => 0", () => {
  expect(searchInsert([1, 3], 0)).toBe(0);
});
