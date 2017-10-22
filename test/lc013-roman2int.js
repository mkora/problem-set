const expect = require("chai").expect;
const solution = require('../solution/lc013-roman2int.js').romanToInt;

describe("LeetCode: Roman to Integer", function() {
  describe("Convert a roman number to an integer.", function() {
    it("romanToInt be a function", function() {
      expect(solution).to.be.a('function');
    });

    it("Given 'X' should return 10", function() {
      expect(solution('X')).to.equal(10);
    });

    it("Given 'IV' should return 4", function() {
      expect(solution('IV')).to.equal(4);
    });

    it("Given 'VI' should return 6", function() {
      expect(solution('VI')).to.equal(6);
    });

    it("Given 'XXIX' should return 29", function() {
      expect(solution('XXIX')).to.equal(29);
    });

    it("Given 'MCMXCIX' should return 1999", function() {
      expect(solution('MCMXCIX')).to.equal(1999);
    });
  });

});
