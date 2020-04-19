// https://leetcode.com/problems/merge-two-sorted-lists/

function ListNode(val, next) {
    this.val = val;
    this.next = null;
}

const printList = (l) => {
    let p = l.next;
    let output = l.val;
    while (p) {
        output += '->' + p.val;
        p = p.next;
    }
    console.log(output);
}

const mergeTwoLists = function (l1, l2) {
    let head = new ListNode(null);
    let current = head;

    while (l1 && l2) {
        if (l1.val < l2.val) {
            current.next = l1;
            l1 = l1.next;
        } else {
            current.next = l2;
            l2 = l2.next;
        }
        current = current.next;
    }

    current.next = l1 ? l1 : l2;

    return head.next;
};

const makeList = array => {
    const head = {};
    let p = head;

    for (let val of array) {
        p.next = {val, next: null};
        p = p.next;
    }

    return head.next;
}

const list1 = makeList([1, 6, 7]);
const list2 = makeList([1, 3, 4]);
printList(mergeTwoLists(list2, list1));
