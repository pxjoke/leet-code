import { toList } from "./to-list";
import { listToArray } from "./list-to-array";

test("toList", () => {
  expect(listToArray(toList([]))).toEqual([]);
  expect(listToArray(toList([1, 2]))).toEqual([1, 2]);
  expect(listToArray(toList([1, 2, 3]))).toEqual([1, 2, 3]);
});
