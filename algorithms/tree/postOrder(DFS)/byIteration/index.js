// good explanation (two stacks) - https://www.geeksforgeeks.org/iterative-postorder-traversal/

/**
 * Post-order traversal is to traverse the left subtree first.
 * Then traverse the right subtree. Finally, visit the root.
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
 * 
 * Space Complexity.
 * O(N),
 * since in the worst case, we will have all the nodes in stacks.
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
class PostOrderTraversal {
  constructor() {}

  /**
   * @param {TreeNode} root 
   * @returns {*[]}
   */
  postorderTraversalByTwoStacks(root) {
    const answer = new Array();

    // create two stacks
    const tempStack = new Stack();
    const resultStack = new Stack();

    if (root === null) {
      return;
    }

    // push root to temp stack
    tempStack.push(root);

    // run while temp stack is not empty
    while (!tempStack.empty()) {
      // pop an item from tempStack and push it to resultStack
      let item = tempStack.pop();
      resultStack.push(item);

      // push left and right children of removed item to tempStack
      if (item.left !== null) {
        tempStack.push(item.left);
      }
      if (item.right !== null) {
        tempStack.push(item.right);
      }
    }

    // collect all elements of result stack for answer
    while (!resultStack.empty()) {
      let item = resultStack.pop();
      answer.push(item);
    }

    return answer;
  }

  postorderTraversalByOneStack() {
    // https://www.geeksforgeeks.org/iterative-postorder-traversal-using-stack/
  }
}
