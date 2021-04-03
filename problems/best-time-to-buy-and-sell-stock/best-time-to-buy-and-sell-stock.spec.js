import { maxProfit } from "./best-time-to-buy-and-sell-stock";

describe("bet time to pass and sell stock", () => {
  it("0 profit if no prices", () => {
    expect(maxProfit([])).toBe(0);
  });

  it("0 profit if only one price", () => {
    expect(maxProfit([3])).toBe(0);
  });

  it("0 profit if prices always go down", () => {
    expect(maxProfit([3, 2, 1])).toBe(0);
    expect(maxProfit([3, 2])).toBe(0);
  });

  it("for the same numbers should be 0", () => {
    expect(maxProfit([1, 1, 1])).toBe(0);
  });

  it("for two increasing prices should be the diff", () => {
    expect(maxProfit([1, 5])).toBe(4);
  });

  it("for several increasing prices should be the diff of max and min number", () => {
    expect(maxProfit([1, 2, 3, 4])).toBe(3);
  });

  it("prices has local minimums", () => {
    expect(maxProfit([7, 1, 5, 3, 6, 4])).toBe(7);
  });

  it("prices has platoes", () => {
    expect(maxProfit([7, 7, 7, 1, 1, 1, 5, 5, 3, 3, 6, 6, 4, 4, 4])).toBe(7);
  });

  it("starts with growing, ends with growing", () => {
    expect(maxProfit([1, 2, 3, 2, 5])).toBe(5);
  });

  it("starts with growing, ends with falling", () => {
    expect(maxProfit([1, 2, 3, 2, 5, 3])).toBe(5);
  });

  it("starts with falling, ends with growing", () => {
    expect(maxProfit([6, 4, 7])).toBe(3);
  });

  it("starts with falling, ends with falling", () => {
    expect(maxProfit([6, 4, 7, 2])).toBe(3);
  });
});
