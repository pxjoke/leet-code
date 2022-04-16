import {
  convertSortedArrayToBinarySearchTree,
  TreeNode,
} from "./convert-sorted-array-to-binary-search-tree";

describe("convert-sorted-array-to-binary-search-tree", () => {
  test("array of one element is a tree of just a root", () => {
    const array = [1];
    const expectedList = new TreeNode(1);
    expect(convertSortedArrayToBinarySearchTree(array)).toEqual(expectedList);
  });

  test("array of 2 elements", () => {
    const array = [1, 2];
    const expectedList = new TreeNode(1, undefined, new TreeNode(2));
    expect(convertSortedArrayToBinarySearchTree(array)).toEqual(expectedList);
  });

  test("array of 3 elements", () => {
    const array = [1, 2, 3];
    const expectedList = new TreeNode(2, new TreeNode(1), new TreeNode(3));
    expect(convertSortedArrayToBinarySearchTree(array)).toEqual(expectedList);
  });

  test("array of 4 elements", () => {
    const array = [1, 2, 3, 4];
    const expectedList = new TreeNode(
      2,
      new TreeNode(1),
      new TreeNode(3, undefined, new TreeNode(4))
    );
    expect(convertSortedArrayToBinarySearchTree(array)).toEqual(expectedList);
  });

  test("array of 5 elements", () => {
    const array = [1, 2, 3, 4, 5];
    const expectedList = new TreeNode(
      3,
      new TreeNode(1, undefined, new TreeNode(2)),
      new TreeNode(4, undefined, new TreeNode(5))
    );
    expect(convertSortedArrayToBinarySearchTree(array)).toEqual(expectedList);
  });

  describe("leetcode examples", () => {
    test("1", () => {
      const array = [-10, -3, 0, 5, 9];
      const expectedList = new TreeNode(
        0,
        new TreeNode(-10, undefined, new TreeNode(-3)),
        new TreeNode(5, undefined, new TreeNode(9))
      );
      expect(convertSortedArrayToBinarySearchTree(array)).toEqual(expectedList);
    });

    test("2", () => {
      const array = [1, 3];
      const expectedList = new TreeNode(1, undefined, new TreeNode(3));
      expect(convertSortedArrayToBinarySearchTree(array)).toEqual(expectedList);
    });
  });
});
