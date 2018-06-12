/**
 * Edge abstraction needed for weighted edges.
 * 
 * Idiom for processing an edge e: let v = e.either(), w = e.other(v);
 */
class Edge {
  /**
   * Create a weighted edge v - w.
   * 
   * @param {int} v
   * @param {int} w
   * @param {double} weight 
   */
  constructor(v, w, weight) {
    this._v = v;
    this._w = w;
    this._weight = weight;
  }

  /**
   * Either endpoint.
   * 
   * @returns {int}
   */
  either() {
    return this._v;
  }

  /**
   * The endpoint that's not v.
   * 
   * @param {int} v 
   * @returns {int}
   */
  other(v) {
    if (v == this._v) {
      return this._w;
    } else {
      return this._v;
    }
  }

  /**
   * Compare this edge to that edge.
   * 
   * @param {Edge} that 
   * @returns {int}
   */
  compareTo(that) {
    // compare edges by weight
    if (this._weight < that.weight()) {
      return -1;
    } else if (this._weight > that.weight()) {
      return 1;
    } else {
      return 0;
    }
  }

  /**
   * The weight.
   * 
   * @returns {double}
   */
  weight() {
    return this._weight;
  }

  /**
   * String representation.
   * 
   * @returns {string}
   */
  toString() {
    return `${this._v}-${this._w} ${this._weight}`;
  }
}

/**
 * Conventions. Allow self-loops and parallel edges.
 * 
 * Time Complexity.
 * All operations take constant time (in the worst case) except
 * iterating over the edges incident to a given vertex, which takes
 * time proportional to the number of such edges.
 */
class EdgeWeightedGraph {
  
  /**
   * Create an empty graph with V vertices.
   * 
   * @param {number} V 
   */
  constructor(V) {
    this._E = 0;

    this._V = V;

    // same as Graph but adjacency lists of Edges instead of integers
    this._adj = new Array(V);

    for (let v = 0; v < V; v++) {
      this._adj[v] = new Bag();
    }
  }

  /**
   * Adds the undirected edge {@code e} to this edge-weighted graph.
   * 
   * @param {Edge} e 
   * @returns {void}
   */
  addEdge(e) {
    let v = e.either();
    let w = e.other(v);

    this._validateVertex(v);
    this._validateVertex(w);

    // add edge to both adjacency lists
    this._adj[v].add(e);
    this._adj[w].add(e);

    this._E++;
  }

  /**
   * Edges incident/pointing to v.
   * 
   * @param {number} v
   * @returns {Iterable<Edge>}
   */
  adj(v) {
    this._validateVertex(v);

    return this._adj[v];
  }

  /**
   * Returns all edges in this edge-weighted graph.
   * 
   * @returns {Iterable<Edge>}
   */
  edges() {
    const list = new Bag();

    for (let v = 0; v < this._V; v++) {
      let selfLoops = 0;

      this._adj[v].entries().forEach(e => {
        if (e.other(v) > v) {
          list.add(e);
        }
        // add only one copy of each self loop (self loops will be consecutive)
        else if (e.other(v) == v) {
          if (selfLoops % 2 == 0) {
            list.add(e);
          }

          selfLoops++;
        }
      });
    }

    return list;
  }

  /**
   * Returns the number of vertices in this edge-weighted graph.
   * 
   * @returns {number}
   */
  V() {
    return this._V;
  }

  /**
   * Returns the number of edges in this edge-weighted graph.
   * 
   * @returns {number}
   */
  E() {
    this._E;
  }

  _validateVertex(v) {
    if (v < 0 || v >= this._V) {
      throw new Error('no valid vertex');
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
   * Time Complexity.
   * This method takes time proportional to E + V.
   * 
   * @returns {string}
   */
  toString() {
    let s = `${this._V} ${this._E}.`;

    for (let v = 0; v < this._V; v++) {
      s = `${s} ${v}: `;

      this._adj[v].entries().forEach(e => {
        s = `${s} ${e},`;
      });

      s = `${s}.`;
    }

    return s;
  }
}
