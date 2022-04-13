// https://leetcode.com/explore/interview/card/top-interview-questions-easy/93/linked-list/553/

export function ListNode(val) {
  this.val = val;
  this.next = null;
}

export function deleteNodeInLinkedList(node) {
  const next = node.next;
  node.val = next.val;
  node.next = next.next;
}
