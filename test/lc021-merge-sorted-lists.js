const { expect } = require('chai');
const solution = require('../solution/lc021-merge-sorted-lists.js').mergeTwoLists;
const { ListNode } = require('../solution/lc021-merge-sorted-lists.js');

describe('LeetCode: Merge Two Sorted Lists', () => {
  describe('Merge two sorted linked lists and return it as a new list', () => {
    it('mergeTwoList should be a function', () => {
      expect(solution).to.be.a('function');
    });

    it('Merging [3, 4, 5] and [2, 7, 8] should return [2, 3, 4, 5, 7, 8]', () => {
      const l1 = new ListNode();
      [3, 4, 5].forEach((v) => {
        l1.add(v);
      });
      const l2 = new ListNode();
      [2, 7, 8].forEach((v) => {
        l2.add(v);
      });
      const l = new ListNode();
      [2, 3, 4, 5, 7, 8].forEach((v) => {
        l.add(v);
      });

      expect(solution(l1, l2)).to.deep.equal(l);
    });
  });
});
