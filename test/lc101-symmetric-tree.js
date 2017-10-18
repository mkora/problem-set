const expect = require("chai").expect;
const solution = require('../solution/lc101-symmetric-tree.js');
const TreeNode = solution.TreeNode;

describe("LeetCode: Symmetric Tree", function() {
  describe("Check whether a binary tree is a mirror of itself using BFS", function() {
    it("isSymmetricBFS should be a function", function() {
      expect(solution.isSymmetricBFS).to.be.a('function');
    });

    it("[1,2,2,3,4,4,3] should return true", function() {
      const node = new TreeNode(1),
        left = node.add(new TreeNode(2)),
        right = node.add(new TreeNode(2));
      left.add(new TreeNode(3)),
      left.add(new TreeNode(4));
      right.add(new TreeNode(4)),
      right.add(new TreeNode(3));

      expect(solution.isSymmetricBFS(node)).to.be.true;
    });

    it("[1,2,2,null,3,null,3] should return false", function() {
      const node = new TreeNode(1),
        left = node.add(new TreeNode(2)),
        right = node.add(new TreeNode(2));
      left.add(new TreeNode(null)),
      left.add(new TreeNode(3));
      right.add(new TreeNode(null)),
      right.add(new TreeNode(3));

      expect(solution.isSymmetricBFS(node)).to.be.false;
    });

    it("[1,null,null] should return true", function() {
      const node = new TreeNode(1),
        left = node.add(new TreeNode(null)),
        right = node.add(new TreeNode(null));
      expect(solution.isSymmetricBFS(node)).to.be.true;
    });

    it("[1] should return true", function() {
      const node = new TreeNode(1);
      expect(solution.isSymmetricBFS(node)).to.be.true;
    });

    it("[null] should return true", function() {
      expect(solution.isSymmetricBFS(null)).to.be.true;
    });

  });

  describe("Check whether a binary tree is a mirror of itself using DFS", function() {
    it("isSymmetricDFS should be a function", function() {
      expect(solution.isSymmetricDFS).to.be.a('function');
    });

    it("[1,2,2,3,4,4,3] should return true", function() {
      const node = new TreeNode(1),
        left = node.add(new TreeNode(2)),
        right = node.add(new TreeNode(2));
      left.add(new TreeNode(3)),
      left.add(new TreeNode(4));
      right.add(new TreeNode(4)),
      right.add(new TreeNode(3));

      expect(solution.isSymmetricDFS(node)).to.be.true;
    });

    it("[1,2,2,null,3,null,3] should return false", function() {
      const node = new TreeNode(1),
        left = node.add(new TreeNode(2)),
        right = node.add(new TreeNode(2));
      left.add(new TreeNode(null)),
      left.add(new TreeNode(3));
      right.add(new TreeNode(null)),
      right.add(new TreeNode(3));

      expect(solution.isSymmetricDFS(node)).to.be.false;
    });

    it("[null] should return true", function() {
      expect(solution.isSymmetricDFS(null)).to.be.true;
    });

  });
});
