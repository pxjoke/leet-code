import { toList } from "../../test-utils/to-list";
import { reverseLinkedList } from "./reverse-linked-list";

describe("reverse-linked-list", () => {
  test("list of one node is already reversed", () => {
    const list = toList([1]);
    const expected = toList([1]);
    expect(reverseLinkedList(list)).toEqual(expected);
  });

  test("reverse list of 2 elements", () => {
    const list = toList([1, 2]);
    const expected = toList([2, 1]);
    expect(reverseLinkedList(list)).toEqual(expected);
  });

  test("reverse list of 3 elements", () => {
    const list = toList([1, 2, 3]);
    const expected = toList([3, 2, 1]);
    expect(reverseLinkedList(list)).toEqual(expected);
  });

  test("reverse list of 4 elements", () => {
    const list = toList([1, 2, 3, 4]);
    const expected = toList([4, 3, 2, 1]);
    expect(reverseLinkedList(list)).toEqual(expected);
  });

  test("leetcode examples", () => {
    expect(reverseLinkedList(toList([1, 2, 3, 4, 5]))).toEqual(toList([5, 4, 3, 2, 1]));
    expect(reverseLinkedList(toList([1, 2]))).toEqual(toList([2, 1]));
    expect(reverseLinkedList(toList([]))).toEqual(toList([]));
  });
});
