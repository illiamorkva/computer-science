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
 */

class BreadthFirstPaths {
  constructor() {
    this._marked = new Array();
    this._edgeTo = new Array();
    // ...
  }

  /**
   * 
   * @param {Graph} G 
   * @param {int} s 
   */
  _bfs(G, s) {
    const q = new Queue();
     
    q.enqueue(s);
    this._marked[s] = true;

    while (!q.isEmpty()) {
      let v = q.dequeue();

      let adjToV = G.adj(v).toArray();

      adjToV.forEach(w => {
        if (!this._marked[w]) {
          q.enqueue(w);
          this._marked[w] = true;
          this._edgeTo[w] = v;
        }
      });
    }
  }
}
