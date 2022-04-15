// https://leetcode.com/explore/interview/card/top-interview-questions-easy/93/linked-list/560/

export function reverseLinkedList(head) {
  let previous = null;
  let current = head;
  let next;

  while (current) {
    next = current.next;
    current.next = previous;
    previous = current;
    current = next;
  }

  return previous;
}
