// good explanation - https://www.geeksforgeeks.org/?p=2686

/**
 * Time Complexity.
 * O(N),
 * since each node in the tree will be pushed into the queue exactly once,
 * where N is the total number of nodes in the tree.
 * 
 * Space Complexity.
 * O(N),
 * the size of the queue will be at most N because
 * each node will be pushed into the queue exactly once.
 * 
 * Definition for a binary tree node:
 * public class TreeNode {
 *     number val;
 *     TreeNode left;
 *     TreeNode right;
 *     TreeNode(number x) { val = x; }
 * }
 */
class LevelOrderTraversal {
  constructor() {}

  /**
   * @param {TreeNode} root 
   * @returns {*[]}
   */
  levelorderTraversal(root) {
    const answer = new Array();
    const queue = new Queue();

    if (root !== null) {
      queue.enqueue(root); // add to tail of queue
    }

    while (!queue.empty()) {
      let item = queue.dequeue(); // like poll() removes the present head
      answer.push(item);

      // enqueue left child
      if (item.left !== null) {
        queue.enqueue(item.left); // add to tail of queue
      }
      // enqueue right child
      if (item.right !== null) {
        queue.enqueue(item.right); // add to tail of queue
      }

    }

    return answer;
  }
}
