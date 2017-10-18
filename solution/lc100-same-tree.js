/**
 * Definition for a binary tree node.
 * function TreeNode(val) {
 *     this.val = val;
 *     this.left = this.right = null;
 * }
 */

function TreeNode(val) {
  this.val = val;
  this.left = this.right = null;
}

/**
 * Add to a binary tree
 */
TreeNode.prototype.add = function(node) {
  if (this.left === null) {
    return this.left = node;
  } else if (this.right === null) {
    return this.right = node;
  } else {
    throw new Error('Can\'t add a new leaf');
  }
}

/**
 * @param {TreeNode} p
 * @param {TreeNode} q
 * @return {boolean}
 */
var isSameTree = function(p, q) {
  if (p == null && q == null) return true;
  if (p == null || q == null) return false;

  if (p.val == q.val)
    return isSameTree(p.left, q.left) &&
      isSameTree(p.right, q.right);

  return false;
};

module.exports.isSameTree = isSameTree;
module.exports.TreeNode = TreeNode;
