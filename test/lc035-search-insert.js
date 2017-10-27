const expect = require("chai").expect;
const solution = require('../solution/lc035-search-insert.js').searchInsert;

describe("LeetCode: Search Insert Position", function() {
  describe("Given a sorted array and a target value, return the index whre target is found / would be inserted", function() {
    it("searchInsert sould be a function", function() {
      expect(solution).to.be.a('function');
    });
    it("Given [1,3,5,6] and 5, should return 2", function() {
      expect(solution([1,3,5,6], 5)).to.equal(2);
    });
    it("Given [1,3,5,6] and 2, should return 1", function() {
        expect(solution([1,3,5,6], 2)).to.equal(1);
    });
    it("Given [1,3,5,6] and 7, should return 4", function() {
       expect(solution([1,3,5,6], 7)).to.equal(4);
    });
    it("Given [1,3,5,6] and 0, should return 0", function() {
        expect(solution([1,3,5,6], 0)).to.equal(0);
    });  
  });
});
