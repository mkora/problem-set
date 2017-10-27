const { expect } = require('chai');
const solution = require('../solution/lc020-valid-parentheses.js').isValid;

describe('LeetCode: Valid Parentheses', () => {
  describe('Determine if a input string is valid', () => {
    it('isValid sould be a function', () => {
      expect(solution).to.be.a('function');
    });
    it('Given string ()[]{} should return true', () => {
      expect(solution('()[]{}')).to.be.true;
    });
    it('Given string (] should return false', () => {
      expect(solution('(]')).to.be.false;
    });
    it('Given string ([)] should return false', () => {
      expect(solution('([)]')).to.be.false;
    });
    it('Given string { should return false', () => {
      expect(solution('{')).to.be.false;
    });
    it('Given string "" should return true', () => {
      expect(solution('')).to.be.true;
    });
  });
});
