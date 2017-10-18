const expect = require("chai").expect;
const solution = require('../solution/lc100-same-tree.js').isSameTree;
const TreeNode = require('../solution/lc100-same-tree.js').TreeNode;

describe("LeetCode: Same Tree", function() {
  describe("Check if two binary trees are equal or no", function() {
    it("isSameTree should be a function", function() {
      expect(solution).to.be.a('function');
    });

    it("Comparing [5, 7, 10, 9] and [5, 7, 10, 9] should return true", function() {
      const nodeP = new TreeNode(5),
        leftP = nodeP.add(new TreeNode(7)),
        rightP = nodeP.add(new TreeNode(10));
      leftP.add(new TreeNode(9));
      const nodeQ = new TreeNode(5),
        leftQ = nodeQ.add(new TreeNode(7)),
        rightQ = nodeQ.add(new TreeNode(10));
      leftQ.add(new TreeNode(9));

      expect(solution(nodeP, nodeQ)).to.be.true;
    });

    it("Comparing [5, 7, 10, 1] and [5, 7, 10, 9] should return false", function() {
      const nodeP = new TreeNode(5),
        leftP = nodeP.add(new TreeNode(7)),
        rightP = nodeP.add(new TreeNode(10));
      leftP.add(new TreeNode(1));
      const nodeQ = new TreeNode(5),
        leftQ = nodeQ.add(new TreeNode(7)),
        rightQ = nodeQ.add(new TreeNode(10));
      leftQ.add(new TreeNode(9));

      expect(solution(nodeP, nodeQ)).to.be.false;
    });

    it("Comparing [5] and [5] should return true", function() {
      expect(solution(new TreeNode(5), new TreeNode(5))).to.be.true;
    });

    it("Comparing [5] and [null] should return false", function() {
      expect(solution(new TreeNode(5), new TreeNode(null))).to.be.false;
    });

    it("Comparing [null] and [] should return false", function() {
      expect(solution(new TreeNode(null), null)).to.be.false;
    });

    it("Comparing [] and [] should return true", function() {
      expect(solution(null, null)).to.be.true;
    });
  });

});
