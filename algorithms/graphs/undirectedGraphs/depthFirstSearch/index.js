/**
 * Algorithm.
 * 1. Use recursion (ball of string).
 * 2. Mark each visited vertex (and keep track of edge taken to visit it).
 * 3. Return (retrace steps) when no unvisited options.
 *
 * Data structures.
 * 1. boolean [] marked - to mark visited vertices.
 * 2. int [] edgeTo - to keep tree of paths.
 * (edgeTo[w] == v) means that edge v-w taken to visit w for first time.
 */

class DepthFirstPaths {
  /**
   * 
   * @param {Graph} G 
   * @param {int} s 
   */
  constructor(G, s) {
    // initialize data structures

    // marked[v] = true if v connected to s
    this._marked = new Array();
    // edgeTo[v] = previous vertex on path from s to v
    this._edgeTo = new Array();
    this._s = s;

    // find vertices connected to s

    this._dfs(G, s);
  }

  /**
   * Recursive DFS does the work
   * 
   * @param {Graph} G 
   * @param {int} v 
   */
  _dfs(G, v) {
    this._marked[v] = true;

    let adjToV = G.adj(v).toArray();

    adjToV.forEach(w => {
      if (!this._marked[w]) {
        // recursive case

        this._dfs(G, w);
        
        /* 
          example:
          v - 0
          w - 1
          edge = 0 - 1
        */
        this._edgeTo[w] = v;
      }
      // base case
    });
  }

  /**
   * 
   * @param {int} v 
   * @returns {boolean}
   */
  hasPathTo(v) {
    return this._marked[v];
  }

  /**
   * 
   * @param {int} v
   * @returns {Iterable<int>}
   */
  pathTo(v) {
    if (!this.hasPathTo(v)) {
      return null;
    }

    const path = new Stack();

    for (let x = v; x != this._s; x = this._edgeTo[x]) {
      path.push(x);
    }

    path.push(this._s);

    return path;
  }
}