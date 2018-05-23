// Representation: adjacency lists (using Bag data type)
class Digraph {
  /**
   * Create an empty digraph with V vertices.
   * 
   * @param {int} V 
   */
  constructor(V) {
    
    this._V = V;
    this._adj = new Array(V); // adjacency lists

    for (let vrtx = 0; vrtx < V; vrtx++) {
      this._adj[vrtx] = new Bag();
    }
  }
  
  /**
   * Add a directed edge v -> w.
   * 
   * @param {int} v 
   * @param {int} w
   * @returns {void}
   */
  addEdge(v, w) {
    this._adj[v].add(w);
  }

  /**
   * Vertices pointing from v.
   * 
   * @param {int} v
   * @returns {Iterable<int>} "Iterator"(Bag) for vertices pointing from v.
   */
  adj(v) {
    return this._adj[v];
  }

  /**
   * Number of vertices.
   * 
   * @returns {int}
   */
  V() {}

  /**
   * Number of edges.
   *
   * @returns {int}
   */
  E() {}

  /**
   * Reverse of this digraph.
   * 
   * @returns {Digraph}
   */
  reverse() {}

  /**
   * String representation.
   * 
   * @returns {string}
   */
  toString() {}
}

// sample client

const G = new Digraph(input); // read digraph from input stream

for (let v = 0; v < G.V(); v++) {
  const adjToV = G.adj(v).toArray();

  // print out each edge (once)
  adjToV.forEach(w => {
    console.log(`${v} -> ${w}`)
  });
}
