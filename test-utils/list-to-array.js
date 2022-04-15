export function listToArray(list) {
  if (!list) {
    return [];
  }

  const arr = [];
  let node = list;
  while (node) {
    arr.push(node.val);
    node = node.next;
  }
  return arr;
}
