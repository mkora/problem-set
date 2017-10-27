const { expect } = require('chai');
const solution = require('../solution/lc014-longest-common-prefix.js').longestCommonPrefix;

describe('LeetCode: Longest Common Prefix', () => {
  describe('Find the longest common prefix string amongst an array of strings', () => {
    it('longestCommonPrefix be a function', () => {
      expect(solution).to.be.a('function');
    });

    it('[\'apple\', \'ape\', \'april\', \'apply\', \'approach\'] should return \'ap\'', () => {
      expect(solution(['apple', 'ape', 'april', 'apply', 'approach'])).to.equal('ap');
    });
    it('[\'aca\',\'cba\'] should return \'\'', () => {
      expect(solution(['aca', 'cba'])).to.equal('');
    });
    it('[] should return \'\'', () => {
      expect(solution([])).to.equal('');
    });
  });
});
