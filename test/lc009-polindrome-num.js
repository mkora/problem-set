const { expect } = require('chai');
const solution = require('../solution/lc009-polindrome-num.js').isPalindrome;

describe('LeetCode: Palindrome Number', () => {
  describe('Determine whether an integer is a palindrome', () => {
    it('isPalindrome sould be a function', () => {
      expect(solution).to.be.a('function');
    });
    it('Given integer 213456 should return false', () => {
      expect(solution(213456)).to.be.false;
    });
    it('Given integer 616 should return true', () => {
      expect(solution(616)).to.be.true;
    });
    it('Given integer 1221 should return true', () => {
      expect(solution(1221)).to.be.true;
    });
    it('Given integer 3 should return true', () => {
      expect(solution(3)).to.be.true;
    });
    it('Given integer 11 should return true', () => {
      expect(solution(11)).to.be.true;
    });
    it('Given integer 1000021 should return false', () => {
      expect(solution(1000021)).to.be.false;
    });
    it('Given integer 10 should return false', () => {
      expect(solution(10)).to.be.false;
    });
    it('Given integer 0 should return true', () => {
      expect(solution(0)).to.be.true;
    });
  });
});
