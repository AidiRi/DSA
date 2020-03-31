/**
 * Definition for a binary tree node.
 * function TreeNode(val) {
 *     this.val = val;
 *     this.left = this.right = null;
 * }
 */
/**
 * @param {TreeNode} root
 * @return {string[]}
 */

const binaryTreePaths = root => {
  if (root == null) {
    return [];
  } else if (root.left == null && root.right == null) {
    return [root];
  }

  let result = [];

  const findPath = (root, str) => {
    if (!root.left && !root.right) {
      str += root.val;
      result.push(str);
      return;
    }

    if (root.left) {
      findPath(root.left, str + root.val + "->");
    }
    if (root.right) {
      findPath(root.right, str + root.val + "->");
    }
  };

  findPath(root, "");
  return result;
};
