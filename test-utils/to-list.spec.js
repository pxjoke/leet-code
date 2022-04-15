import { toList } from "./to-list";

test("toList", () => {
  expect(toList(toList([1, 2]))).toEqual([1, 2]);
  expect(toList(toList([1, 2, 3]))).toEqual([1, 2, 3]);
});
