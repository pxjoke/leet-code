// https://leetcode.com/explore/interview/card/top-interview-questions-easy/94/trees/631/

export function TreeNode(val, left, right) {
  this.val = val === undefined ? 0 : val;
  this.left = left === undefined ? null : left;
  this.right = right === undefined ? null : right;
}

function makeTree(start, end, array) {
  if (start > end) {
    return null;
  }

  if (start === end) {
    return new TreeNode(array[start]);
  }

  const middle = Math.floor(start + (end - start) / 2);

  const left = makeTree(start, middle - 1, array);
  const right = makeTree(middle + 1, end, array);

  return new TreeNode(array[middle], left, right);
}

export function convertSortedArrayToBinarySearchTree(arr) {
  return makeTree(0, arr.length - 1, arr);
}
