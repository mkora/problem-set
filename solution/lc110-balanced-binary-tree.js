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
  if (this.left === null) return this.left = node;
  else if (this.right === null) return this.right = node;
  throw new Error('Can\'t add a new leaf');
}

/**
 * @param {TreeNode} root
 * @return {boolean}
 */
function isBalanced(root) {
  let depth = function(node) {
    if (node === null || node.val === null) return 0;

    const left = depth(node.left),
      right = depth(node.right),
      diff = (left > right) ? (left - right) :
        (right - left); // works faster then Math.abs

    if ((left === -1) || (right === -1) ||
      (diff > 1)) return -1;

    if (left > right)  // works faster then Math.max
      return (left + 1);
    return (right + 1);
  }

  return (depth(root) != -1);
};

module.exports.isBalanced = isBalanced;
module.exports.TreeNode = TreeNode;
