const { expect } = require('chai');
const solution = require('../solution/lc101-symmetric-tree.js');
const { TreeNode } = require('../solution/lc101-symmetric-tree.js');

describe('LeetCode: Symmetric Tree', () => {
  describe('Check whether a binary tree is a mirror of itself using BFS', () => {
    it('isSymmetricBFS should be a function', () => {
      expect(solution.isSymmetricBFS).to.be.a('function');
    });

    it('[1,2,2,3,4,4,3] should return true', () => {
      const node = new TreeNode(1);
      const left = node.add(new TreeNode(2));
      const right = node.add(new TreeNode(2));
      left.add(new TreeNode(3));
      left.add(new TreeNode(4));
      right.add(new TreeNode(4));
      right.add(new TreeNode(3));

      expect(solution.isSymmetricBFS(node)).to.be.true;
    });

    it('[1,2,2,null,3,null,3] should return false', () => {
      const node = new TreeNode(1);
      const left = node.add(new TreeNode(2));
      const right = node.add(new TreeNode(2));
      left.add(new TreeNode(null));
      left.add(new TreeNode(3));
      right.add(new TreeNode(null));
      right.add(new TreeNode(3));

      expect(solution.isSymmetricBFS(node)).to.be.false;
    });

    it('[1,null,null] should return true', () => {
      const node = new TreeNode(1);
      node.add(new TreeNode(null));
      node.add(new TreeNode(null));

      expect(solution.isSymmetricBFS(node)).to.be.true;
    });

    it('[1] should return true', () => {
      const node = new TreeNode(1);

      expect(solution.isSymmetricBFS(node)).to.be.true;
    });

    it('[null] should return true', () => {
      expect(solution.isSymmetricBFS(null)).to.be.true;
    });
  });

  describe('Check whether a binary tree is a mirror of itself using DFS', () => {
    it('isSymmetricDFS should be a function', () => {
      expect(solution.isSymmetricDFS).to.be.a('function');
    });

    it('[1,2,2,3,4,4,3] should return true', () => {
      const node = new TreeNode(1);
      const left = node.add(new TreeNode(2));
      const right = node.add(new TreeNode(2));
      left.add(new TreeNode(3));
      left.add(new TreeNode(4));
      right.add(new TreeNode(4));
      right.add(new TreeNode(3));

      expect(solution.isSymmetricDFS(node)).to.be.true;
    });

    it('[1,2,2,null,3,null,3] should return false', () => {
      const node = new TreeNode(1);
      const left = node.add(new TreeNode(2));
      const right = node.add(new TreeNode(2));
      left.add(new TreeNode(null));
      left.add(new TreeNode(3));
      right.add(new TreeNode(null));
      right.add(new TreeNode(3));

      expect(solution.isSymmetricDFS(node)).to.be.false;
    });

    it('[null] should return true', () => {
      expect(solution.isSymmetricDFS(null)).to.be.true;
    });
  });
});
