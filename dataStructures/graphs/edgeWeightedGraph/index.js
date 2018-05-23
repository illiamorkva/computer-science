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
  weight() {}

  /**
   * String representation.
   * 
   * @returns {string}
   */
  toString() {}
}

/**
 * Conventions. Allow self-loops and parallel edges.
 */
class EdgeWeightedGraph {
  
  /**
   * Create an empty graph with V vertices.
   * 
   * @param {int} V 
   */
  constructor(V) {
    this._V = V;

    // same as Graph but adjacency lists of Edges instead of integers
    this._adj = new Array(V);

    for (let v = 0; v < V; v++) {
      this._adj[v] = new Bag();
    }
  }

  /**
   * Add weighted edge e to this graph.
   * 
   * @param {Edge} e 
   * @returns {void}
   */
  addEdge(e) {
    let v = e.either();
    let w = e.other(v);

    // add edge to both adjacency lists
    this._adj[v].add(e);
    this._adj[w].add(e);
  }

  /**
   * Edges incident to v.
   * 
   * @param {int} v
   * @returns {Iterable<Edge>}
   */
  adj(v) {
    return this._adj[v];
  }

  /**
   * All edges in this graph.
   * 
   * @returns {Iterable<Edge>}
   */
  edges() {}

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
