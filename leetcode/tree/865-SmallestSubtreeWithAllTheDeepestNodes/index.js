/**
865. Smallest Subtree with all the Deepest Nodes
https://leetcode.com/problems/smallest-subtree-with-all-the-deepest-nodes/description/

Given a binary tree rooted at root, the depth of each node is the shortest distance to the root.

A node is deepest if it has the largest depth possible among any node in the entire tree.

The subtree of a node is that node, plus the set of all descendants of that node.

Return the node with the largest depth such that it contains all the deepest nodes in its subtree.

Example 1:
Input: [3,5,1,6,2,0,8,null,null,7,4]
Output: [2,7,4]
Explanation:
We return the node with value 2, colored in yellow in the diagram.
The nodes colored in blue are the deepest nodes of the tree.
The input "[3, 5, 1, 6, 2, 0, 8, null, null, 7, 4]" is a serialization of the given tree.
The output "[2, 7, 4]" is a serialization of the subtree rooted at the node with value 2.
Both the input and output have TreeNode type.

Note:

The number of nodes in the tree will be between 1 and 500.
The values of each node are unique.
*/

/**
 * Definition for a binary tree node.
 * function TreeNode(val) {
 *     this.val = val;
 *     this.left = this.right = null;
 * }
 */
/**
 * @param {TreeNode} root
 * @return {TreeNode}
 */
var subtreeWithAllDeepest = function(root) {
  /**
    [1, 2, 3] => [1, 2, 3]
    [1] => [1]
    [1, 2, 3, 4, 5, 6, 7, null, null, null, null, 12, 13] => [6, 12, 13]
    [1, 2, 3, 4, 5] => [2, 4, 5]
  */
  
  // debug: [1, 2, 3, 4, 5] => [2, 4, 5]
  
  const hashMap = new SeparateChainingHashST();
  hashMap.put(null, -1);

  dfs(root, null);

  let maxDepth = 0;
  
  hashMap.values().forEach((value) => {
    if (value > maxDepth) {
      maxDepth = value;
    }
  });

  return result(root);
  
  function dfs(node, parent) {
    if (node !== null) {
      
      const newDepth = hashMap.get(null || parent && parent.val) + 1;
      hashMap.put(node.val, newDepth);
    
      dfs(node.left, node);
      dfs(node.right, node);
    }
  };
  
  function result(node) {
    if (node === null || hashMap.get(node.val) === maxDepth) {
      return node;
    }
    
    const left = result(node.left);
    const right = result(node.right);
    
    if (left !== null && right !== null) {
      return node;
    }
    
    if (left !== null) {
      return left;
    }
    
    if (right !== null) {
      return right;
    }
    
    return null;
  }
  
};
