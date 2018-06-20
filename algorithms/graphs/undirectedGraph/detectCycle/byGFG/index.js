// https://www.geeksforgeeks.org/detect-cycle-undirected-graph/

/**
 * Time Complexity.
 * Same as time complexity of DFS traversal which is O(V+E).
 * 
 * Space Complexity.
 * It uses extra space (not including the graph) proportional to V.
 * 
 */
class DetectCycle {
  constructor() {}

  /**
   * Returns true if the graph contains a cycle, else false.
   * 
   * @param {Graph} G 
   */
  isCyclic(G) {
    // mark all the vertices as not visited
    const visited = new Array(G.V());
    for (let v = 0; v < G.V(); v++) {
      visited[v] = false;
    }

    // call the recursive helper function to detect cycle in different DFS trees
    for (let v = 0; v < G.V(); v++) {
      if (!visited[v]) {
        const initParent = -1;

        if (this._isCyclic(v, visited, initParent, G)) {
          return true;
        }
      }
    }

    return false;
  }

  /**
   * A recursive function that uses visited[] and parent to detect
   * cycle in subgraph reachable from vertex v.
   * 
   * @param {number} v 
   * @param {boolean[]} visited 
   * @param {number} parent 
   * @param {Graph} G 
   */
  _isCyclic(v, visited, parent, G) {
    // mark the current node as visited
    visited[v] = true;

    let adjToV = G.adj(v).toArray();

    adjToV.forEach((w) => {
      // if an adjacent is not visited, then recur for that adjacent
      if (!visited[w]) {
        if (this._isCyclic(w, visited, v, G)) {
          return true;
        }
      } else if (w !== parent) {
        // if an adjacent is visited and not parent of current
        // vertex, then there is a cycle.
        return true;
      }
    });

    return false;
  }
}
