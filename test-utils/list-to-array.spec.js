import { toList } from "./to-list";
import { listToArray } from "./list-to-array";

test("listToArray", () => {
  expect(listToArray(toList([]))).toEqual([]);
  expect(listToArray(toList([1]))).toEqual([1]);
  expect(listToArray(toList([1, 2, 3]))).toEqual([1, 2, 3]);
});
