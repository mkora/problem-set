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
 * DFS
 *
 * @param {TreeNode} root
 * @return {boolean}
 */
function isSymmetricDFS(root) {
  if (root == null) return true;

  const visit = (left, right) => {
    if (left == null && right == null) return true;
    if (left == null || right == null) return false;
    if (left.val !== right.val) return false;

    return visit(left.left, right.right)
      && visit(left.right, right.left);
  };

  return visit(root.left, root.right);
}


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
    const left = queue.shift();
    const right = queue.shift();

    if (!(left === null && right === null)) {
      if (
        left === null
        || right === null
        || left.val !== right.val
      ) {
        return false;
      }

      queue.push(left.left);
      queue.push(right.right);

      queue.push(left.right);
      queue.push(right.left);
    }
  }

  return true;
}

module.exports = {
  isSymmetricDFS,
  isSymmetricBFS,
  TreeNode,
};
