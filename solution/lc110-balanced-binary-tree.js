/**
 * Definition for a binary tree node.
 * function TreeNode(val) {
 *     this.val = val;
 *     this.left = this.right = null;
 * }
 */
class TreeNode {
  constructor(val) {
    this.val = val;
    this.left = null;
    this.right = null;
  }

  /**
   * Add a node to a binary tree
   */
  add(node) {
    if (this.left === null) {
      this.left = node;
      return this.left;
    } else if (this.right === null) {
      this.right = node;
      return this.right;
    }
    return null;
  }
}

/**
 * @param {TreeNode} root
 * @return {boolean}
 */
function isBalanced(root) {
  const depth = (node) => {
    if (node === null || node.val === null) return 0;

    const left = depth(node.left);
    const right = depth(node.right);
    const diff = (left > right)
      ? (left - right)
      : (right - left); // works faster then Math.abs

    if (
      (left === -1)
      || (right === -1)
      || (diff > 1)
    ) {
      return -1;
    }

    // simple comparation works faster then Math.max
    if (left > right) {
      return (left + 1);
    }

    return (right + 1);
  };
  return (depth(root) !== -1);
}

module.exports = {
  isBalanced,
  TreeNode,
};
