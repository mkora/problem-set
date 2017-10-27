const { expect } = require('chai');
const solutionNewton = require('../solution/lc069-sqrt.js').mySqrtNewton;
const solutionBinary = require('../solution/lc069-sqrt.js').mySqrtBinary;

describe('LeetCode: Sqrt(x)', () => {
  describe('Implement int sqrt(int x) using Newton\'s method', () => {
    it('reverse sould be a function', () => {
      expect(solutionNewton).to.be.a('function');
    });
    it('Given integer 0 should return 0', () => {
      expect(solutionNewton(0)).to.equal(0);
    });
    it('Given integer 1 should return 1', () => {
      expect(solutionNewton(1)).to.equal(1);
    });
    it('Given integer 2 should return 1', () => {
      expect(solutionNewton(2)).to.equal(1);
    });
    it('Given integer 3 should return 1', () => {
      expect(solutionNewton(3)).to.equal(1);
    });
    it('Given integer 4 should return 2', () => {
      expect(solutionNewton(4)).to.equal(2);
    });
    it('Given integer 2004 should return 44', () => {
      expect(solutionNewton(2004)).to.equal(44);
    });
    it('Given integer 10009999 should return 3163', () => {
      expect(solutionNewton(10009999)).to.equal(3163);
    });
  });

  describe('Implement int sqrt(int x) using Binary method', () => {
    it('reverse sould be a function', () => {
      expect(solutionBinary).to.be.a('function');
    });
    it('Given integer 0 should return 0', () => {
      expect(solutionBinary(0)).to.equal(0);
    });
    it('Given integer 1 should return 1', () => {
      expect(solutionBinary(1)).to.equal(1);
    });
    it('Given integer 2 should return 1', () => {
      expect(solutionBinary(2)).to.equal(1);
    });
    it('Given integer 3 should return 1', () => {
      expect(solutionBinary(3)).to.equal(1);
    });
    it('Given integer 4 should return 2', () => {
      expect(solutionBinary(4)).to.equal(2);
    });
    it('Given integer 2004 should return 44', () => {
      expect(solutionBinary(2004)).to.equal(44);
    });
    it('Given integer 2147483647 should return 46340', () => {
      expect(solutionBinary(2147483647)).to.equal(46340);
    });
  });
});
