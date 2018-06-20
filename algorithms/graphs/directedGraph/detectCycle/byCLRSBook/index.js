// https://www.geeksforgeeks.org/detect-cycle-direct-graph-using-colors/

/**
 * Time Complexity.
 * Same as time complexity of DFS traversal which is O(V+E).
 * 
 * Space Complexity.
 * It uses extra space (not including the graph) proportional to V.
 */
class DetectCycle {
  constructor() {
    this._WHITE = -1;
    this._GRAY = 0;
    this._BLACK = 1;
  }

  /**
   * Returns true if there is a cycle in graph.
   * 
   * @param {Graph} G 
   */
  isCyclic(G) {
    // initialize color of all vertices as WHITE
    const color = new Array(G.V());
    for (let v = 0; v < G.V(); v++) {
      color[v] = this._WHITE;
    }

    // do a DFS traversal beginning with all vertices
    for (let v = 0; v < G.V(); v++) {
      if (color[v] === this._WHITE) {
        if (this._isCyclic(v, color, G)) {
          return true;
        }
      }
    }

    return false;
  }

  /**
   * Recursive function to find if there is back edge 
   * in DFS subtree tree rooted with 'v'.
   * 
   * @param {number} v 
   * @param {number[]} color 
   * @param {Graph} G 
   */
  _isCyclic(v, color, G) {
    // GRAY :  this vertex is being processed (DFS
    //         for this vertex has started, but not
    //         ended (or this vertex is in function
    //         call stack)
    color[v] = this._GRAY;

    // iterate through all adjacent vertices
    let adjToV = G.adj(v).toArray();
    
    adjToV.forEach((w) => {
      if (color[w] === this._GRAY) {
        return true;
      }
      // if w is not processed and there is a back
      // edge in subtree rooted with w
      if (color[w] === this._WHITE && this._isCyclic(w, color, G)) {
        return true;
      }
    });

    // mark this vertex as processed
    color[v] = this._BLACK;

    return false;
  }
}
