/**
785. Is Graph Bipartite?
https://leetcode.com/problems/is-graph-bipartite/description/

Given an undirected graph, return true if and only if it is bipartite.

Recall that a graph is bipartite if we can split it's set of nodes into two independent subsets
A and B such that every edge in the graph has one node in A and another node in B.

The graph is given in the following form: graph[i] is a list of indexes j for which the edge
between nodes i and j exists.  Each node is an integer between 0 and graph.length - 1. 
There are no self edges or parallel edges: graph[i] does not contain i, and it doesn't contain any element twice.

Example 1:
Input: [[1,3], [0,2], [1,3], [0,2]]
Output: true
Explanation: 
The graph looks like this:
0----1
|    |
|    |
3----2
We can divide the vertices into two groups: {0, 2} and {1, 3}.

Example 2:
Input: [[1,2,3], [0,2], [0,1,3], [0,2]]
Output: false
Explanation: 
The graph looks like this:
0----1
| \  |
|  \ |
3----2
We cannot find a way to divide the set of nodes into two independent subsets.

Note:

- graph will have length in range [1, 100].
- graph[i] will contain integers in range [0, graph.length - 1].
- graph[i] will not contain i or duplicate values.
- The graph is undirected: if any element j is in graph[i], then i will be in graph[j].
*/

/**
 * Approach #1: Coloring by Depth-First Search
 * 
 * Implemented DFS iteratively
 * 
 * Time Complexity.
 * O(V + E),
 * where V is number of vertices and E is number of edges because 
 * we need to traverse each vertex and edge.
 * 
 * Space Complexity.
 * O(V),
 * we use explicitly stack to process vertices +
 * an array to know color of a vertex
 * 
 * @param {number[][]} graph
 * @return {boolean}
 */
const isBipartite = function(graph) {
  // debug:
  //     0      1     2      3
  //     v
  // [[1,2,3], [0], [0,3], [0,2]]
  
  const stack = new Stack(); // [ 1, 2 ]
  const marked = new Array(graph.length).fill(-1); // [true, false, false, false]
  
  for (let v = 0; v < graph.length; v++) {
    if (marked[v] === -1) {
      marked[v] = true; // +
      stack.push(v); // +

      while (!stack.isEmpty()) { // +
        let parent = stack.pop(); // 3
        
        let isValid = true; // false
        
        // [0,2]
        graph[parent].forEach((child) => { //
          if (marked[child] === -1) { // 
            
            marked[child] = !marked[parent]; // 
            stack.push(child); // 
          
          } else if (marked[child] === marked[parent]) {
          
            isValid = false;
            
          }
        });
        
        if (!isValid) {
          // +
          return false;
        }     
      }
      
    }
  }
  
  return true;
};
