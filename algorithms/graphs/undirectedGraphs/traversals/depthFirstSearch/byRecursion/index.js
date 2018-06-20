// https://algs4.cs.princeton.edu/code/edu/princeton/cs/algs4/DepthFirstPaths.java.html
// https://algs4.cs.princeton.edu/code/edu/princeton/cs/algs4/DepthFirstSearch.java.html

/**
 * Algorithm.
 * 1. Use recursion (ball of string).
 * 2. Mark each visited vertex (and keep track of edge taken to visit it).
 * 3. Return (retrace steps) when no unvisited options.
 *
 * Data structures.
 * 1. boolean [] marked - to mark visited vertices.
 * 2. number [] edgeTo - to keep tree of paths.
 * (edgeTo[w] == v) means that edge v-w taken to visit w for first time.
 * 
 * Time Complexity.
 * The constructor takes time proportional to <em>V</em> + <em>E</em>,
 * where <em>V</em> is the number of vertices and <em>E</em> is the number of edges.
 * Each call to {@link #hasPathTo(int)} takes constant time;
 * each call to {@link #pathTo(int)} takes time proportional to the length of the path.
 * 
 * Space Complexity.
 * It uses extra space (not including the graph) proportional to <em>V</em>.
 */
class DepthFirstPaths {
  /**
   * Computes a path between {@code s} and every other vertex in graph {@code G}.
   * 
   * @param {Graph} G 
   * @param {number} s 
   */
  constructor(G, s) {
    // initialize data structures

    this._marked = new Array(G.V()); // marked[v] = true if v connected to s
    this._edgeTo = new Array(G.V()); // edgeTo[v] = previous vertex on path from s to v
    this._s = s; // source vertex

    this._validateVertex(s);
    // find vertices connected to s
    this._dfs(G, s);
  }

  /**
   * Recursive DFS does the work.
   * Depth first search from v.
   * 
   * @param {Graph} G 
   * @param {number} v 
   */
  _dfs(G, v) {
    this._marked[v] = true;

    let adjToV = G.adj(v).toArray();

    adjToV.forEach((w) => {
      if (!this._marked[w]) {
        // recursive case
        /* 
          example:
          v - 0
          w - 1
          edge = 0 - 1
        */
        this._edgeTo[w] = v;
        this._dfs(G, w);
      }
      // base case
    });
  }

  /**
   * Is there a path between the source vertex {@code s} and vertex {@code v}?
   * 
   * @param {number} v 
   * @returns {boolean}
   */
  hasPathTo(v) {
    this._validateVertex(v);
    return this._marked[v];
  }

  /**
   * Returns a path between the source vertex {@code s} and vertex {@code v}, or
   * {@code null} if no such path.
   * 
   * @param {number} v
   * @returns {Stack<number>}
   */
  pathTo(v) {
    this._validateVertex(v);

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

  /**
   * Throw an error unless {@code 0 <= v < V}
   * 
   * @param {number} v 
   */
  _validateVertex(v) {
    let V = this._marked.length;
    if (v < 0 || v >= V) {
      throw new Error(`No valid vertex: ${v}`);
    }
  }
}
