export function listToArray(list) {
  const arr = [];
  let node = list;
  while (node) {
    arr.push(node.val);
    node = node.next;
  }
  return arr;
}
