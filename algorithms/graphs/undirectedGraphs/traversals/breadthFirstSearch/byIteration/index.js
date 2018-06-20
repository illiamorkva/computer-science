/**
 * Depth-first search. Put unvisited vertices on a stack.
 * Breadth-first search. Put unvisited vertices on a queue.
 * 
 * Shortest path. Find path from s to t that uses fewest number of edges.
 * 
 * BFS (from source vertex s)
 * Put s onto a FIFO queue, and mark s as visited.
 * Repeat until the queue is empty:
 * - remove the least recently added vertex v
 * - add each of v's unvisited neighbors to the queue,
 * and mark them as visited.
 * 
 * Intuition. BFS examines vertices in increasing distance from s.
 * 
 * Time Complexity.
 * The constructor takes time proportional to <em>V</em> + <em>E</em>,
 * where <em>V</em> is the number of vertices and <em>E</em> is the number of edges.
 * Each call to {@link #distTo(int)} and {@link #hasPathTo(int)} takes constant time;
 * each call to {@link #pathTo(int)} takes time proportional to the length
 * of the path.
 * 
 * Space Complexity.
 * It uses extra space (not including the graph) proportional to <em>V</em>.
 */
class BreadthFirstPaths {
  /**
   * Computes the shortest path between the source vertex {@code s}
   * and every other vertex in the graph {@code G}.
   * 
   * @param {Graph} G 
   * @param {number} s 
   */
  constructor(G, s) {
    this._marked = new Array(G.V()); // marked[v] = is there an s-v path
    this._edgeTo = new Array(G.V()); // edgeTo[v] = previous edge on shortest s-v path
    this._distTo = new Array(G.V()); // distTo[v] = number of edges shortest s-v path

    this._validateVertex(s);

    this._bfs(G, s);
  }

  /**
   * Breadth-first search from a single source.
   * 
   * @param {Graph} G 
   * @param {number} s 
   */
  _bfs(G, s) {
    const q = new Queue();
    for (let v = 0; v < G.V(); v++) {
      this._distTo[v] = Infinity;
    }
    this._distTo[s] = 0;
    this._marked[s] = true;

    q.enqueue(s);

    while (!q.isEmpty()) {
      let v = q.dequeue();

      let adjToV = G.adj(v).toArray();

      adjToV.forEach(w => {
        if (!this._marked[w]) {
          this._edgeTo[w] = v;
          this._distTo[w] = this._distTo[v] + 1;
          this._marked[w] = true;

          q.enqueue(w);          
        }
      });
    }
  }

  /**
   * Is there a path between the source vertex {@code s} and vertex {@code v}?
   * 
   * @param {number} v 
   */
  hasPathTo(v) {
    this._validateVertex(v);

    return this._marked[v];
  }

  /**
   * Returns the number of edges in a shortest path between the source vertex {@code s}
   * and vertex {@code v}?
   * 
   * @param {number} v 
   */
  distTo(v) {
    this._validateVertex(v);

    return this.distTo[v];
  }

  /**
   * Returns a shortest path between the source vertex {@code s}
   * and {@code v}, or {@code null} if no such path.
   * 
   * @param {number} v 
   */
  pathTo(v) {
    this._validateVertex(v);

    if (!this.hasPathTo(v)) {
      return null;
    }

    const path = new Stack();
    let x;
    for (x = v; this._distTo[x] != 0; x = this._edgeTo[x]) {
      path.push(x);
    }
    path.push(x);

    return path;
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
