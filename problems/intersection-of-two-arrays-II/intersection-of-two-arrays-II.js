// https://leetcode.com/explore/interview/card/top-interview-questions-easy/92/array/674/

const countElements = (arr) =>
  arr.reduce(
    (acc, v) => acc.set(v, acc.get(v) ? acc.get(v) + 1 : 1),
    new Map()
  );

export function intersect(arr1, arr2) {
  const arr1CountedElements = countElements(arr1);

  return arr2.reduce((acc, v) => {
    if (arr1CountedElements.get(v) > 0) {
      arr1CountedElements.set(v, arr1CountedElements.get(v) - 1);
      return acc.concat(v);
    }
    return acc;
  }, []);
}
