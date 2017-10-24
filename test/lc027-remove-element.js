const expect = require("chai").expect;
const solution = require('../solution/lc027-remove-element.js').removeElement;

describe("LeetCode: Remove Element", function() {
  describe("Remove all instances of a value in a sorted array and return the new length", function() {
    it("removeElement sould be a function", function() {
      expect(solution).to.be.a('function');
    });
    it("Given [3,2,2,3] and a value 3 should return 2", function() {
      expect(solution([3,2,2,3], 3)).to.equal(2);
    });
    it("Given [3,2,2,3,3,4,5,3,3,1,1] and a value 3 should return 6", function() {
      expect(solution([3,2,2,3,3,4,5,3,3,1,1], 3)).to.equal(6);
    });
    it("Given [2] and a value 3 should return 1", function() {
      expect(solution([2], 3)).to.equal(1);
    });
  });

});
