// good explanation - https://leetcode.com/explore/learn/card/data-structure-tree/134/traverse-a-tree/

/**
 * Post-order traversal is to traverse the left subtree first.
 * Then traverse the right subtree. Finally, visit the root.
 * 
 * It is worth noting that when you delete nodes in a tree,
 * deletion process will be in post-order. That is to say,
 * when you delete a node, you will delete its left child
 * and its right child before you delete the node itself.
 * Also, post-order is widely use in mathematical expression.
 * It is easier to write a program to parse a post-order expression.
 * 
 * Uses of Postorder
 * Postorder traversal is used to delete the tree.
 * Postorder traversal is also useful to get the postfix expression of an expression tree.
 * Please see http://en.wikipedia.org/wiki/Reverse_Polish_notation to for the usage of postfix expression.
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
class PostOrderTraversal {
  constructor() {}

  /**
   * @param {TreeNode} root 
   * @returns {*[]}
   */
  postorderTraversal(root) {
    const answer = new Array();
    this._postorderTraversal(root, answer);
    return answer;
  }

  _postorderTraversal(root, answer) {
    if (root === null) {
      return;
    }
    
    this._postorderTraversal(root.left, answer); // traverse left subtree
    this._postorderTraversal(root.right, answer); // traverse right subtree
    answer.push(root.val); // visit the root
  }
}
