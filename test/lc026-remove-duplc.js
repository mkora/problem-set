const { expect } = require('chai');
const solution = require('../solution/lc026-remove-duplc.js').removeDuplicates;

describe('LeetCode: Remove Duplicates from Sorted Array', () => {
  describe('Remove the duplicates in a sorted array and return the new length', () => {
    it('removeDuplicates sould be a function', () => {
      expect(solution).to.be.a('function');
    });
    it('Given [1,1,2,3] should return 3', () => {
      expect(solution([1, 1, 2, 3])).to.equal(3);
    });
    it('Given [1,2] should return 2', () => {
      expect(solution([1, 2])).to.equal(2);
    });
    it('Given [1,1] should return 1', () => {
      expect(solution([1, 1])).to.equal(1);
    });
  });
});
