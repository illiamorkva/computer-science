// Representation: adjacency lists (using Bag data type)
class Graph {
  /**
   * Create an empty graph with v vertices.
   * 
   * @param {int} v Number of vertices.
   */
  constructor(v) {

    // create empty graph with V vertices
    this._V = v;
    this._adj = new Array(v);

    for (let vrtx = 0; vrtx < v; vrtx++) {
      this._adj[vrtx] = new Bag();
    }
  }

  /**
   * Add an edge v-w.
   * 
   * @param {int} v 
   * @param {int} w
   * @returns {void}
   */
  addEdge(v, w) {
    this._adj[v].add(w);
    this._adj[w].add(v);
  }

  /**
   * Vertices adjacent to v.
   *
   * @param {int} v 
   * @returns {Iterable<int>} "Iterator"(Bag) for vertices adjacent to v.
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
   * String representation.
   * 
   * @returns {string}
   */
  toString() {}
}


// sample client

const G = new Graph(10);

for (let v = 0; v < G.V(); v++) {
  let adjToV = G.adj(v).toArray();

  adjToV.forEach(w => console.log(`${v} - ${w}`));
}

// typical graph-processing code

// compute the degree of v
function degree(G, v) {
  let degree = 0;

  let adjToV = G.adj(v).toArray();

  adjToV.forEach(w => (degree++));

  return degree;
}

// compute maximum degree
function maxDegree(G) {
  let max = 0;

  for (let v = 0; v < G.V(); v++) {
    if (degree(G, v) > max) {
      max = degree(G, v);
    }
  }

  return max;
}

// compute average degree
function averageDegree(G) {
  return 2.0 * G.E() / G.V();
}

// count self-loops
function numberOfSelfLoops(G) {
  let count = 0;

  for (let v = 0; v < G.V(); v++) {
    let adjToV = G.adj(v).toArray();

    adjToV.forEach(w => {
      if (v == w) {
        count++;
      }
    });
  }

  // each edge counted twice
  return count / 2;
}
