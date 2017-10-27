const { expect } = require('chai');
const solution = require('../solution/lc013-roman2int.js').romanToInt;

describe('LeetCode: Roman to Integer', () => {
  describe('Convert a roman number to an integer.', () => {
    it('romanToInt be a function', () => {
      expect(solution).to.be.a('function');
    });

    it('Given X should return 10', () => {
      expect(solution('X')).to.equal(10);
    });

    it('Given IV should return 4', () => {
      expect(solution('IV')).to.equal(4);
    });

    it('Given VI should return 6', () => {
      expect(solution('VI')).to.equal(6);
    });

    it('Given XXIX should return 29', () => {
      expect(solution('XXIX')).to.equal(29);
    });

    it('Given MCMXCIX should return 1999', () => {
      expect(solution('MCMXCIX')).to.equal(1999);
    });
  });
});
