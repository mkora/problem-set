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
  if (this.left === null)
    return this.left = node;
  else if (this.right === null)
    return this.right = node;
  throw new Error('Can\'t add a new leaf');
}


/**
 * DFS
 *
 * @param {TreeNode} root
 * @return {boolean}
 */
function isSymmetricDFS(root) {
  if (root == null) return true;

  let visit = (left, right) => {
    if (left == null && right == null) return true;
    if (left == null || right == null) return false;
    if (left.val != right.val) return false;
    return visit(left.left, right.right) && visit(left.right, right.left);
  }

  return visit(root.left, root.right);
};


/**
 * BFS
 *
 * @param {TreeNode} root
 * @return {boolean}
 */
function isSymmetricBFS(root) {
  if (root === null) return true;

  const queue = [root.left, root.right];

  while (queue.length > 0) {
    let left = queue.shift(),
      right = queue.shift();

    if (left === null && right === null) continue;
    if (left === null || right === null ||
      left.val !== right.val) return false;

    queue.push(left.left);
    queue.push(right.right);

    queue.push(left.right);
    queue.push(right.left);
  }

  return true;
};


module.exports.isSymmetricDFS = isSymmetricDFS;
module.exports.isSymmetricBFS = isSymmetricBFS;
module.exports.TreeNode = TreeNode;
