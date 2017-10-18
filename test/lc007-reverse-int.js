const expect = require("chai").expect;
const solution = require('../solution/lc007-reverse-int.js').reverse;

describe("LeetCode: Reverse Integer", function() {
  describe("Reverse digits of an integer.", function() {
    it("reverse sould be a function", function() {
      expect(solution).to.be.a('function');
    });

    it("Given integer 132 should return 231", function() {
      expect(solution(132)).to.equal(231);
    });

    it("Given integer -132 should return -231", function() {
      expect(solution(-132)).to.equal(-231);
    });

    it("Given integer 0 should return 0", function() {
      expect(solution(0)).to.equal(0);
    });

    it("Given integer 1534236469 should return 0", function() {
      expect(solution(1534236469)).to.equal(0);
    });

  });

});
