// https://algs4.cs.princeton.edu/code/edu/princeton/cs/algs4/NonrecursiveDFS.java.html

/**
 * Time Complexity.
 * The constructor takes time proportional to <em>V</em> + <em>E</em>,
 * where <em>V</em> is the number of vertices and <em>E</em> is the number of edges.
 * 
 * Space Complexity.
 * It uses extra space (not including the graph) proportional to <em>V</em>.
 */
class NonrecursiveDFS {
  /**
   * Computes the vertices connected to the source vertex {@code s} in the graph {@code G}.
   * 
   * @param {Graph} G 
   * @param {number} s 
   */
  constructor(G, s) {
    this._marked = new Array(G.V()); // marked[v] = is there an s-v path?

    this._validateVertex(s);

    // to be able to iterate over each adjacency list, keeping track of which
    // vertex in each adjacency list needs to be explored next
    const adj = new Array();
    for (let v = 0; v < G.V(); v++) {
      adj[v] = G.adj(v).iterator();
    }

    // depth-first search using an explicit stack
    const stack = new Stack();
    this._marked[s] = true;

    stack.push(s);

    while (!stack.isEmpty()) {
      let v = stack.peek(); // Returns (but does not remove) the item most recently added to this stack

      if (adj[v].hasNext()) {
        let w = adj[v].next();

        if (!this._marked[w]) {
          // discovered vertex w for the first time
          this._marked[w] = true;
          // edgeTo[w] = v;
          stack.push(w);
        }
      } else {
        stack.pop();
      }
    }
  }

  /**
   * Is vertex {@code v} connected to the source vertex {@code s}?
   * 
   * @param {number} v 
   */
  marked(v) {
    this._validateVertex(v);
    return this._marked[v];
  }

  /**
   * Throw an error unless {@code 0 <= v < V}
   * 
   * @param {number} v 
   */
  _validateVertex(v) {
    const V = this._marked.length;

    if (v < 0 || v >= V) {
      throw new Error(`no valid vertex: ${v}`);
    }
  }
}
