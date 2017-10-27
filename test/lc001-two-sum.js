const { expect } = require('chai');
const solution = require('../solution/lc001-two-sum').twoSum;

describe('LeetCode: Two Sums', () => {
  describe('Return indices of the two numbers as they add up to a target', () => {
    it('twoSum sould be a function', () => {
      expect(solution).to.be.a('function');
    });

    it('Given nums = [2, 7, 11, 15], target = 9 should return [0, 1]', () => {
      expect(solution([2, 7, 11, 15], 9)).to.deep.equal([0, 1]);
    });

    it('Given nums = [3, 2, 4], target = 6 should return [1, 2]', () => {
      expect(solution([3, 2, 4], 6)).to.deep.equal([1, 2]);
    });
  });
});
