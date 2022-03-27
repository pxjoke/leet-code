import { plusOne } from "./plus-one";

describe("plus-one", () => {
  test("increase one digit number (no carrying)", () => {
    expect(plusOne([0])).toEqual([1]);
    expect(plusOne([8])).toEqual([9]);
  });

  test("increase one digit number (with carrying)", () => {
    expect(plusOne([9])).toEqual([1, 0]);
  });

  test("increase 2-digit number with (no carrying)", () => {
    expect(plusOne([1, 0])).toEqual([1, 1]);
    expect(plusOne([8, 3])).toEqual([8, 4]);
  });

  test("increase 2-digit number with (no carrying)", () => {
    expect(plusOne([1, 9])).toEqual([2, 0]);
    expect(plusOne([9, 9])).toEqual([1, 0, 0]);
  });

  test("leetcode examples", () => {
    expect(plusOne([1, 2, 3])).toEqual([1, 2, 4]);
    expect(plusOne([4, 3, 2, 1])).toEqual([4, 3, 2, 2]);
    expect(plusOne([9])).toEqual([1, 0]);
  });
});
