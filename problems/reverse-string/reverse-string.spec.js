import { reverseString } from "./reverse-string";

describe("reverse string", () => {
  test("reversed empty string is empty string", () => {
    const str = [];
    reverseString(str);
    expect(str).toEqual([]);
  });

  test("reversed one-letter string is the same string", () => {
    const str = ["x"];
    reverseString(str);
    expect(str).toEqual(["x"]);
  });

  test("reverse even number of letters", () => {
    const str = ["a", "b", "c", "d"];
    reverseString(str);
    expect(str).toEqual(["d", "c", "b", "a"]);
  });

  test("reverse odd number of letters", () => {
    const str = ["a", "b", "c"];
    reverseString(str);
    expect(str).toEqual(["c", "b", "a"]);
  });

  test("leetcode example", () => {
    const str1 = ["h", "e", "l", "l", "o"];
    reverseString(str1);
    expect(str1).toEqual(["o", "l", "l", "e", "h"]);

    const str2 = ["H", "a", "n", "n", "a", "h"];
    reverseString(str2);
    expect(str2).toEqual(["h", "a", "n", "n", "a", "H"]);
  });
});
