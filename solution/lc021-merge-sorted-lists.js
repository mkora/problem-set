/**
 * Definition for singly-linked list.
 * function ListNode(val) {
 *     this.val = val;
 *     this.next = null;
 * }
 */
class ListNode {
  constructor(val = null) {
    this.val = val;
    this.next = null;
  }

  add(data) {
    if (this.val === null) {
      this.val = data;
      return this;
    }
    const node = new ListNode(data);
    let tmp = this;
    while (tmp.next) {
      tmp = tmp.next;
    }
    tmp.next = node;
    return node;
  }
}


/**
 * @param {ListNode} l1
 * @param {ListNode} l2
 * @return {ListNode}
 */
function mergeTwoLists(l1, l2) {
  const res = new ListNode(null);
  let current = res;

  while (l1 && l2) {
    if (l1.val < l2.val) {
      current.next = l1;
      l1 = l1.next;
      current = current.next;
    } else {
      current.next = l2;
      l2 = l2.next;
      current = current.next;
    }
  }

  if (l1) {
    current.next = l1;
  }
  if (l2) {
    current.next = l2;
  }

  return res.next;
}

module.exports = {
  mergeTwoLists,
  ListNode,
};
