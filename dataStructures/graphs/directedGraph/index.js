/**
 * Representation: adjacency lists (using Bag data type).
 * 
 * Time Complexity.
 * All operations take constant time (in the worst case) except
 * iterating over the vertices adjacent from a given vertex, which takes
 * time proportional to the number of such vertices.
 */
class Digraph {
  /**
   * Create an empty digraph with V vertices.
   * 
   * @param {number} V 
   */
  constructor(V) {
    this._E = 0; // number of edges in this digraph
    this._indegree = new Array(V); // indegree[v] = indegree of vertex v

    this._V = V; // number of vertices in this digraph
    this._adj = new Array(V); // adjacency lists

    for (let vrtx = 0; vrtx < V; vrtx++) {
      this._adj[vrtx] = new Bag();

      this._indegree[vrtx] = 0;
    }
  }
  
  /**
   * Adds the directed edge v -> w to this digraph.
   * 
   * @param {number} v 
   * @param {number} w
   * @returns {void}
   */
  addEdge(v, w) {
    this._validateVertex(v);
    this._validateVertex(w);

    this._adj[v].add(w);

    this._indegree[w]++;
    this._E++;
  }

  /**
   * Returns the vertices pointing from v in this digraph.
   * 
   * @param {number} v
   * @returns {Iterable<int>} "Iterator"(Bag) for vertices pointing from v.
   */
  adj(v) {
    this._validateVertex(v);

    return this._adj[v];
  }

  /**
   * Returns the number of vertices in this digraph.
   * 
   * @returns {number}
   */
  V() {
    return this._V;
  }

  /**
   * Returns the number of edges in this digraph.
   *
   * @returns {number}
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
      throw new Error('no valid vertex');
    }
  }


  /**
   * Returns the number of directed edges incident/pointing from vertex {@code v}
   * 
   * @param {number} v 
   */
  outdegree(v) {
    this._validateVertex(v);

    return this._adj[v].size();
  }

  /**
   * Returns the number of directed edges incident/pointing to vertex {@code v}.
   * 
   * @param {number} v 
   */
  indegree(v) {
    this._validateVertex(v);

    return this._indegree[v];
  }

  /**
   * Returns the reverse of the digraph.
   * 
   * @returns {Digraph}
   */
  reverse() {
    const reverse = new Digraph(this._V);

    for (let v = 0; v < this._V; v++) {
      this._adj[v].entries().forEach(w => {
        reverse.addEdge(w, v);
      });
    }

    return reverse;
  }

  /**
   * Returns a string representation of the graph.
   * 
   * @returns {string}
   */
  toString() {
    let s = `${this._V} vertices, ${this._E} edges.`;

    for (let v = 0; v < this._V; v++) {
      s = `${s} ${v}:`;
      
      this._adj[v].entries().forEach(w => {
        s = `${s} ${w},`;
      });

      s = `${s}.`;
    }

    return s;
  }
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
