// good explanation - https://leetcode.com/explore/learn/card/data-structure-tree/134/traverse-a-tree/

/**
 * There are several iterative solutions for tree traversal.
 * One of the solutions is to use a stack to simulate the recursion process. 
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
 * It is comparatively easy to do traversal recursively
 * but when the depth of the tree is too large,
 * we might suffer from `stack overflow` problem.
 * That's one of the main reasons why we want to solve this problem iteratively sometimes. 
 * 
 * Space Complexity.
 * O(N),
 * since in the worst case, we will have all the nodes in the stack.
 * There are some other solutions (Morris Traversal) for iterative traversal
 * which can reduce the space complexity to O(1).
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
    const s = new Stack();

    if (root !== null) {
      s.push(root);
    }
    
    let cur;
    while (!s.empty()) {
      cur = s.pop();
      answer.push(cur.val); // visit the root

      if (cur.right !== null) {
        s.push(cur.right); // push right child to stack if it is not null
      }
      if (cur.left !== null) {
        s.push(cur.left); // push left child to stack if it is not null
      }
    }

    return answer;
  }
}
