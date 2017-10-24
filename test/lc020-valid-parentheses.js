const expect = require("chai").expect;
const solution = require('../solution/lc020-valid-parentheses.js').isValid;

describe("LeetCode: Valid Parentheses", function() {
  describe("Determine if a input string is valid", function() {
    it("isValid sould be a function", function() {
      expect(solution).to.be.a('function');
    });
    it("Given string '()[]{}' should return true", function() {
      expect(solution('()[]{}')).to.be.true;
    });
    it("Given string '(]' should return false", function() {
      expect(solution('(]')).to.be.false;
    });
    it("Given string '([)]' should return false", function() {
      expect(solution('([)]')).to.be.false;
    });
    it("Given string '{' should return false", function() {
      expect(solution('{')).to.be.false;
    });
    it("Given string '' should return true", function() {
      expect(solution('')).to.be.true;
    });
  });
});
