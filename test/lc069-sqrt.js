const expect = require("chai").expect;
const solutionNewton = require('../solution/lc069-sqrt.js').mySqrtNewton;
const solutionBinary = require('../solution/lc069-sqrt.js').mySqrtBinary;

describe("LeetCode: Sqrt(x)", function() {
  describe("Implement int sqrt(int x) using Newton's method", function() {
    it("reverse sould be a function", function() {
      expect(solutionNewton).to.be.a('function');
    });
    it("Given integer 0 should return 0", function() {
      expect(solutionNewton(0)).to.equal(0);
    });
    it("Given integer 1 should return 1", function() {
      expect(solutionNewton(1)).to.equal(1);
    });
    it("Given integer 2 should return 1", function() {
      expect(solutionNewton(2)).to.equal(1);
    });
    it("Given integer 3 should return 1", function() {
      expect(solutionNewton(3)).to.equal(1);
    });
    it("Given integer 4 should return 2", function() {
      expect(solutionNewton(4)).to.equal(2);
    });
    it("Given integer 2004 should return 44", function() {
      expect(solutionNewton(2004)).to.equal(44);
    });
    it("Given integer 10009999 should return 3163", function() {
      expect(solutionNewton(10009999)).to.equal(3163);
    });
  });

  describe("Implement int sqrt(int x) using Binary method", function() {
    it("reverse sould be a function", function() {
      expect(solutionBinary).to.be.a('function');
    });
    it("Given integer 0 should return 0", function() {
      expect(solutionBinary(0)).to.equal(0);
    });
    it("Given integer 1 should return 1", function() {
      expect(solutionBinary(1)).to.equal(1);
    });
    it("Given integer 2 should return 1", function() {
      expect(solutionBinary(2)).to.equal(1);
    });
    it("Given integer 3 should return 1", function() {
      expect(solutionBinary(3)).to.equal(1);
    });
    it("Given integer 4 should return 2", function() {
      expect(solutionBinary(4)).to.equal(2);
    });
    it("Given integer 2004 should return 44", function() {
      expect(solutionBinary(2004)).to.equal(44);
    });
    it("Given integer 2147483647 should return 46340", function() {
      expect(solutionBinary(2147483647)).to.equal(46340);
    });
  });

});
