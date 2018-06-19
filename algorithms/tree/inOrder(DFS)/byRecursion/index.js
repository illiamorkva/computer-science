// good explanation - https://leetcode.com/explore/learn/card/data-structure-tree/134/traverse-a-tree/

/**
 * In-order traversal is to traverse the left subtree first.
 * Then visit the root. Finally, traverse the right subtree.
 * Typically, for binary search tree, we can retrieve all
 * the data in sorted order using in-order traversal.
 * 
 * Uses of Inorder
 * In case of binary search trees (BST),
 * Inorder traversal gives nodes in non-decreasing order.
 * To get nodes of BST in non-increasing order,
 * a variation of Inorder traversal where Inorder itraversal s reversed, can be used.
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
 * 
 */
class InOrderTraversal {
  constructor() {}

  /**
   * @param {TreeNode} root 
   * @returns {*[]}
   */
  inorderTraversal(root) {
    const answer = new Array();
    this._inorderTraversal(root, answer);
    return answer;
  }

  /**
   * @param {TreeNode} root 
   * @param {*[]} answer 
   */
  _inorderTraversal(root, answer) {
    if (root === null) {
      return;
    }

    this._inorderTraversal(root.left, answer); // traverse left subtree
    answer.push(root.val); // visit the root
    this._inorderTraversal(root.right, answer); // traverse right subtree
  }
}
