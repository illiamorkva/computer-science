/**
 * A graph, implemented using an array of sets.
 * Parallel edges and self-loops allowed.
 * 
 * Representation: adjacency lists (using Bag data type).
 * 
 * Time Complexity.
 * All operations take constant time (in the worst case) except
 * iterating over the vertices adjacent to a given vertex, which takes
 * time proportional to the number of such vertices.
 */
class Graph {
  /**
   * Create an empty graph with v vertices.
   * 
   * @param {int} v Number of vertices.
   */
  constructor(v) {
    this._E = 0;

    if (v < 0) {
      throw new Error('Number of vertices must be nonnegative');
    }

    // create empty graph with V vertices
    this._V = v;
    this._adj = new Array(v);

    for (let vrtx = 0; vrtx < v; vrtx++) {
      this._adj[vrtx] = new Bag();
    }
  }

  /**
   * Adds the undirected edge v-w to this graph.
   * 
   * @param {int} v 
   * @param {int} w
   * @returns {void}
   */
  addEdge(v, w) {
    this._validateVertex(v);
    this._validateVertex(w);

    this._E++;

    this._adj[v].add(w);
    this._adj[w].add(v);
  }

  /**
   * Returns the vertices adjacent to vertex {@code v}.
   *
   * @param {int} v 
   * @returns {Iterable<int>} "Iterator"(Bag) for vertices adjacent to v.
   */
  adj(v) {
    this._validateVertex(v);

    return this._adj[v];
  }

  /**
   * Returns the number of vertices in this graph.
   * 
   * @returns {int}
   */
  V() {
    return this._V;
  }

  /**
   * Returns the number of edges in this graph.
   * 
   * @returns {int}
   */
  E() {
    return this._E;
  }

  /**
   * Throw an error unless {@code 0 <= v < V}
   * 
   * @param {number} v 
   */
  _validateVertex(v) {
    if (v < 0 || v >= this._V) {
      throw new Error('No valid vertex');
    }
  }

  /**
   * Returns the degree of vertex {@code v}.
   * 
   * @param {number} v 
   */
  degree(v) {
    this._validateVertex(v);

    return this._adj[v].size();
  }

  /**
   * String representation.
   * 
   * @returns {string}
   */
  toString() {
    let s = '';

    s = `${this._V} vertices, ${this._E} edges.`

    for (let v = 0; v < this._V; v++) {
      s = `${s}${v}: `;

      this._adj[v].entries().forEach(w => {
        s = `${s}${w}, `;
      });

      s = `${s}.`;
    }

    return s;
  }
}


// sample client

const G = new Graph(10);

for (let v = 0; v < G.V(); v++) {
  let adjToV = G.adj(v).entries();

  adjToV.forEach(w => console.log(`${v} - ${w}`));
}

// typical graph-processing code

// compute the degree of v
function degree(G, v) {
  let degree = 0;

  let adjToV = G.adj(v).entries();

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
    let adjToV = G.adj(v).entries();

    adjToV.forEach(w => {
      if (v == w) {
        count++;
      }
    });
  }

  // each edge counted twice
  return count / 2;
}
