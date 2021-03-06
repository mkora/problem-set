const { expect } = require('chai');
const solution = require('../solution/lc110-balanced-binary-tree').isBalanced;
const { TreeNode } = require('../solution/lc110-balanced-binary-tree');

describe('LeetCode: Balanced Binary Tree', () => {
  describe('Determine if a binary tree is height-balanced', () => {
    it('isBalanced', () => {
      expect(solution).to.be.a('function');
    });

    it('[1,2,3,4,5,6] should return true', () => {
      const node = new TreeNode(1);
      const left = node.add(new TreeNode(2));
      const right = node.add(new TreeNode(3));
      left.add(new TreeNode(4));
      left.add(new TreeNode(5));
      right.add(new TreeNode(6));

      expect(solution(node)).to.be.true;
    });

    it('[1,2,3,4,5,6,7] should return false', () => {
      const node = new TreeNode(1);
      const left = node.add(new TreeNode(2));
      const right = node.add(new TreeNode(3));
      const rl = right.add(new TreeNode(6));
      left.add(new TreeNode(4));
      left.add(new TreeNode(5));
      rl.add(new TreeNode(7));

      expect(solution(node)).to.be.false;
    });

    it('[1,null,2,null,3] should return false', () => {
      const node = new TreeNode(1);
      node.add(new TreeNode(null));
      const right = node.add(new TreeNode(2));
      right.add(new TreeNode(null));
      right.add(new TreeNode(3));

      expect(solution(node)).to.be.false;
    });

    it('[1,2,2,3,null,null,3,4,null,null,4] should return false', () => {
      const node = new TreeNode(1);
      const left = node.add(new TreeNode(2));
      const right = node.add(new TreeNode(2));
      const ll = left.add(new TreeNode(3));
      const rr = right.add(new TreeNode(3));
      left.add(new TreeNode(null));
      right.add(new TreeNode(null));
      ll.add(new TreeNode(4));
      ll.add(new TreeNode(null));
      rr.add(new TreeNode(null));
      rr.add(new TreeNode(4));

      expect(solution(node)).to.be.false;
    });

    it('[1] should return true', () => {
      const node = new TreeNode(1);
      expect(solution(node)).to.be.true;
    });
  });
});
