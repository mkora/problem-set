const { expect } = require('chai');
const solution = require('../solution/lc035-search-insert.js').searchInsert;

describe('LeetCode: Search Insert Position', () => {
  describe('Given a sorted array and a target value, return the index whre target is found / would be inserted', () => {
    it('searchInsert sould be a function', () => {
      expect(solution).to.be.a('function');
    });
    it('Given [1,3,5,6] and 5, should return 2', () => {
      expect(solution([1, 3, 5, 6], 5)).to.equal(2);
    });
    it('Given [1,3,5,6] and 2, should return 1', () => {
      expect(solution([1, 3, 5, 6], 2)).to.equal(1);
    });
    it('Given [1,3,5,6] and 7, should return 4', () => {
      expect(solution([1, 3, 5, 6], 7)).to.equal(4);
    });
    it('Given [1,3,5,6] and 0, should return 0', () => {
      expect(solution([1, 3, 5, 6], 0)).to.equal(0);
    });
  });
});
