import { climbStairs } from "./climbing-stairs";

describe("climbing-stairs", () => {
  test("we're already at the top", () => {
    expect(climbStairs(1)).toEqual(1);
  });

  test("2 steps", () => {
    expect(climbStairs(2)).toEqual(2);
  });

  test("3 steps", () => {
    expect(climbStairs(3)).toEqual(3);
  });

  test("4 steps", () => {
    expect(climbStairs(4)).toEqual(5);
  });
});
