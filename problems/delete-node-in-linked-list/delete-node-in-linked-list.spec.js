// https://leetcode.com/explore/interview/card/top-interview-questions-easy/93/linked-list/553/

import { deleteNodeInLinkedList, ListNode } from "./delete-node-in-linked-list";

function listFromArray(arr) {
  const [firstValue, ...rest] = arr;
  const head = new ListNode(firstValue);

  rest.reduce((node, val) => {
    node.next = new ListNode(val);
    return node.next;
  }, head);

  return head;
}

function listToArray(list) {
  const arr = [];
  let node = list;
  while (node) {
    arr.push(node.val);
    node = node.next;
  }
  return arr;
}

test("listFromArray", () => {
  expect(listToArray(listFromArray([1, 2]))).toEqual([1, 2]);
  expect(listToArray(listFromArray([1, 2, 3]))).toEqual([1, 2, 3]);
});

describe("Delete Node in a Linked List", () => {
  test("delete head node", () => {
    const list = listFromArray([1, 2]);
    deleteNodeInLinkedList(list);
    expect(list).toEqual(listFromArray([2]));
  });

  test("delete second node node", () => {
    const list = listFromArray([1, 2, 3]);
    deleteNodeInLinkedList(list.next);
    expect(list).toEqual(listFromArray([1, 3]));
  });
});
