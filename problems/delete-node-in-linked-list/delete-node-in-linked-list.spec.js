// https://leetcode.com/explore/interview/card/top-interview-questions-easy/93/linked-list/553/

import { deleteNodeInLinkedList } from "./delete-node-in-linked-list";
import { toList } from "../../test-utils/to-list";



describe("Delete Node in a Linked List", () => {
  test("delete head node", () => {
    const list = toList([1, 2]);
    deleteNodeInLinkedList(list);
    expect(list).toEqual(toList([2]));
  });

  test("delete second node node", () => {
    const list = toList([1, 2, 3]);
    deleteNodeInLinkedList(list.next);
    expect(list).toEqual(toList([1, 3]));
  });
});
