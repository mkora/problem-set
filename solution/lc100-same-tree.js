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
 * @param {TreeNode} p
 * @param {TreeNode} q
 * @return {boolean}
 */
function isSameTree(p, q) {
  if (p === null && q === null) return true;
  if (p === null || q === null) return false;

  if (p.val === q.val) {
    return isSameTree(p.left, q.left)
      && isSameTree(p.right, q.right);
  }

  return false;
}

module.exports = {
  isSameTree,
  TreeNode,
};
