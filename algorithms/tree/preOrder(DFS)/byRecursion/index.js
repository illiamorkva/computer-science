// good explanation - https://leetcode.com/explore/learn/card/data-structure-tree/134/traverse-a-tree/

/**
 * Pre-order traversal is to visit the root first.
 * Then traverse the left subtree.
 * Finally, traverse the right subtree.
 * 
 * Uses of Preorder
 * Preorder traversal is used to create a copy of the tree.
 * Preorder traversal is also used to get prefix expression on of an expression tree.
 * Please see http://en.wikipedia.org/wiki/Polish_notation to know why prefix expressions are useful.
 * 
 * Time Complexity.
 * O(N),
 * because we visit each node exactly once.
 * And the depth of the tree might be N in the worst case.
 * The level of recursion might be at most N in the worst case.
 * Therefore, taking system stack into consideration,
 * the Space Complexity is O(N) as well.
 * The complexity might be different due to a different implementation.
 * It is comparatively easy to do traversal recursively
 * but when the depth of the tree is too large,
 * we might suffer from `stack overflow` problem.
 * That's one of the main reasons why we want to solve this problem iteratively sometimes. 
 * 
 * Definition for a binary tree node:
 * public class TreeNode {
 *     number val;
 *     TreeNode left;
 *     TreeNode right;
 *     TreeNode(number x) { val = x; }
 * }
 */
class PreOrderTraversal {
  constructor() {}

  /**
   * @param {TreeNode} root 
   * @returns {*[]}
   */
  preorderTraversal(root) {
    const answer = new Array();
    this._preorderTraversal(root, answer);
    return answer;
  }

  /**
   * @param {TreeNode} root 
   * @param {*[]} answer 
   */
  _preorderTraversal(root, answer) {
    if (root === null) {
      return;
    }

    answer.push(root.val); // visit the root
    this._preorderTraversal(root.left, answer) // traverse left subtree
    this._preorderTraversal(root.right, answer) // traverse right subtree
  }
}
