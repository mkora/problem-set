const expect = require("chai").expect;
const solution = require('../solution/lc014-longest-common-prefix.js').longestCommonPrefix;

describe("LeetCode: Longest Common Prefix", function() {
  describe("Find the longest common prefix string amongst an array of strings", function() {
    it("longestCommonPrefix be a function", function() {
      expect(solution).to.be.a('function');
    });

    it(`["apple", "ape", "april", "apply", "approach"] should return "ap"`, function() {
      expect(solution(["apple", "ape", "april", "apply", "approach"])).to.equal("ap");
    });
    it(`["aca","cba"] should return ""`, function() {
      expect(solution(["aca","cba"])).to.equal("");
    });
    it(`[] should return ""`, function() {
      expect(solution([])).to.equal("");
    });
  });

});
