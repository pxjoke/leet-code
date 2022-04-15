import { ListNode } from "../problems/delete-node-in-linked-list/delete-node-in-linked-list";

export function toList(arr) {
  const [firstValue, ...rest] = arr;
  const head = new ListNode(firstValue);

  rest.reduce((node, val) => {
    node.next = new ListNode(val);
    return node.next;
  }, head);

  return head;
}
