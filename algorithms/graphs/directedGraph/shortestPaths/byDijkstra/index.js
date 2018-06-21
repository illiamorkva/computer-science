// https://en.wikipedia.org/wiki/Dijkstra%27s_algorithm
// https://stackoverflow.com/questions/9255620/why-does-dijkstras-algorithm-use-decrease-key
// https://algs4.cs.princeton.edu/44sp/DijkstraSP.java.html

/**
 * Time Complexity.
 * O(E * log V), by Sedgewick
 * 
 * Average
 * O(E * log V), by bigocheatsheet
 * Worst
 * O(V^2), by bigocheatsheet
 * 
 * Space Complexity.
 * O(V), by Sedgewick
 * 
 * Worst
 * O(V + E), by bigocheatsheet
 */
class DijkstraSP {
  /**
   * Computes a shortest-paths tree from the source vertex {@code s} to every other
   * vertex in the edge-weighted digraph {@code G}.
   * 
   * @param {EdgeWeightedDigraph} G 
   * @param {number} source 
   */
  constructor(G, source) {
    this._source = source;

    this.edgeTo = new Array(G.V()); // edgeTo[v] = last edge on shortest s->v path
    this.distTo = new Array(G.V()); // distTo[v] = distance  of shortest s->v path

    for (let v = 0; v < G.V(); v++) {
      this.distTo[v] = Infinity;
    }
    this.distTo[source] = 0;

    // relax vertices in order of distance from s
    this.pq = new IndexMinPQ(G.V()); // priority queue of vertices
    this.pq.insert(source, this.distTo[source]);

    while (!this.pq.isEmpty()) {
      let v = this.pq.delMin();

      let adjToV = G.adj(v).toArray();
      adjToV.forEach((e) => { // e - instance of DirectedEdge class
        this._relax(e);
      });
    }
  }

  /**
   * Relax edge e and update pq if changed.
   * 
   * @param {DirectedEdge} e 
   */
  _relax(e) {
    let v = e.from();
    let w = e.to();

    if (this.distTo[w] > (this.distTo[v] + e.weight())) {
      this.distTo[w] = this.distTo[v] + e.weight();
      this.edgeTo[w] = e;

      if (this.pq.contains(w)) {
        this.pq.decreaseKey(w, this.distTo[w]);
      } else {
        this.pq.insert(w, this.distTo[w]);
      }
    }
  }

  /**
   * Returns a shortest path from the source vertex {@code s} to vertex {@code v}.
   * 
   * @param {number} v 
   */
  pathTo(v) {
    // TODO: validate v (validateVertex, hasPathTo...)

    const path = new Stack();

    for (let e = this.edgeTo[v]; e !== null; e = this.edgeTo[e.from()]) {
      path.push(e);
    }

    return path;
  }
}
