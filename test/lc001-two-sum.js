const expect = require("chai").expect;
const solution = require('../solution/lc001-two-sum.js').twoSum;

describe("LeetCode: Two Sums", function() {
  describe("Return indices of the two numbers as they add up to a target", function() {
    it("twoSum sould be a function", function() {
      expect(solution).to.be.a('function');
    });

    it("Given nums = [2, 7, 11, 15], target = 9 should return [0, 1]", function() {
      expect(solution([2, 7, 11, 15], 9)).to.deep.equal([0, 1]);
    });

    it("Given nums = [3, 2, 4], target = 6 should return [1, 2]", function() {
      expect(solution([3, 2, 4], 6)).to.deep.equal([1, 2]);
    });
  });

});
