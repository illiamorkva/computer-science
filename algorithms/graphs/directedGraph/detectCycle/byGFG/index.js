// https://www.geeksforgeeks.org/detect-cycle-in-a-graph/

/**
 * Time Complexity.
 * Same as time complexity of DFS traversal which is O(V+E).
 * 
 * Space Complexity.
 * It uses extra space (not including the graph) proportional to V.
 */
class DetectCycle {
  constructor() {}

  /**
   * Returns true if the graph contains a cycle, else false.
   * 
   * @param {Graph} G
   */
  isCyclic(G) {
    // Mark all the vertices as not visited and
    // not part of recursion stack
    const visited = new Array(G.V());
    const recStack = new Array(G.V());

    // Call the recursive helper function to
    // detect cycle in different DFS trees
    for (let v = 0; v < G.V(); v++) {
      if (this._isCyclic(v, visited, recStack, G)) {
        return true;
      }
    }

    return false;
  }

  _isCyclic(v, visited, recStack, G) {
    // Mark the current node as visited and
    // part of recursion stack
    if (recStack[v]) {
      return true;
    }
    if (visited[v]) {
      return false;
    }

    visited[v] = true;
    recStack[v] = true;

    let adjToV = G.adj(v).toArray();

    adjToV.forEach((w) => {
      if (this._isCyclic(w, visited, recStack, G)) {
        return true;
      }
    });

    recStack[v] = false;

    return false;
  }
}
