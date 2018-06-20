// good explanation - https://www.geeksforgeeks.org/inorder-tree-traversal-without-recursion/
// Morris Traversal:
// https://www.geeksforgeeks.org/inorder-tree-traversal-without-recursion-and-without-stack/, 
// https://www.youtube.com/watch?v=YA-nB2wjVcI&feature=youtu.be&t=11m42s

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
class InOrderTraversal {
  constructor() {}

  /**
   * @param {TreeNode} root 
   * @returns {*[]}
   */
  inorderTraversal(root) {
    if (root === null) {
      return;
    }

    // keep the nodes in the path that are waiting to be visited
    const answer = new Array();
    const s = new Stack();
    let cur = root;

    // first node to be visited will be the left one
    while (cur !== null) {
      s.push(cur);
      cur = cur.left;
    }

    // traverse the tree
    while (!s.empty()) {
      cur = s.pop();
      answer.push(cur); // visit the top node

      if (cur.right !== null) {
        cur = cur.right;

        // the next node to be visited is the leftmost
        while (cur !== null) {
          s.push(cur);
          cur = cur.left;
        }
      }
    }

    return answer;
  }
}
