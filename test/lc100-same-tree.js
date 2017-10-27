const { expect } = require('chai');
const solution = require('../solution/lc100-same-tree.js').isSameTree;
const { TreeNode } = require('../solution/lc100-same-tree.js');

describe('LeetCode: Same Tree', () => {
  describe('Check if two binary trees are equal or no', () => {
    it('isSameTree should be a function', () => {
      expect(solution).to.be.a('function');
    });

    it('Comparing [5, 7, 10, 9] and [5, 7, 10, 9] should return true', () => {
      const nodeP = new TreeNode(5);
      const leftP = nodeP.add(new TreeNode(7));
      nodeP.add(new TreeNode(10));
      leftP.add(new TreeNode(9));

      const nodeQ = new TreeNode(5);
      const leftQ = nodeQ.add(new TreeNode(7));
      nodeQ.add(new TreeNode(10));
      leftQ.add(new TreeNode(9));

      expect(solution(nodeP, nodeQ)).to.be.true;
    });

    it('Comparing [5, 7, 10, 1] and [5, 7, 10, 9] should return false', () => {
      const nodeP = new TreeNode(5);
      const leftP = nodeP.add(new TreeNode(7));
      nodeP.add(new TreeNode(10));
      leftP.add(new TreeNode(1));

      const nodeQ = new TreeNode(5);
      const leftQ = nodeQ.add(new TreeNode(7));
      nodeQ.add(new TreeNode(10));
      leftQ.add(new TreeNode(9));

      expect(solution(nodeP, nodeQ)).to.be.false;
    });

    it('Comparing [5] and [5] should return true', () => {
      expect(solution(new TreeNode(5), new TreeNode(5))).to.be.true;
    });

    it('Comparing [5] and [null] should return false', () => {
      expect(solution(new TreeNode(5), new TreeNode(null))).to.be.false;
    });

    it('Comparing [null] and [] should return false', () => {
      expect(solution(new TreeNode(null), null)).to.be.false;
    });

    it('Comparing [] and [] should return true', () => {
      expect(solution(null, null)).to.be.true;
    });
  });
});
