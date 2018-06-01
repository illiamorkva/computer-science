/**
 * Idiom for processing an edge e: let v = e.from(), w = e.to(); v -> w.
 */
class DirectedEdge {
  /**
   * Weighted edge v -> w.
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
   * Vertex v.
   * from() and to() replace either() and other().
   * 
   * @returns {int}
   */
  from() {
    return this._v;
  }

  /**
   * Vertex w.
   * from() and to() replace either() and other().
   * 
   * @returns {int}
   */
  to() {
    return this._w;
  }

  /**
   * Weight of this edge.
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
  toString() {}
}

/**
 * Conventions. Allow self-loops and parallel edges.
 */
class EdgeWeightedDigraph {
  /**
   * Edge-weighted digraph with V vertices.
   * 
   * @param {int} V 
   */
  constructor(V) {
    this._V = V;
    this._adj = new Array(V);

    for (let v = 0; v < V; v++) {
      this._adj[v] = new Bag();
    }
  }

  /**
   * Add weighted directed edge e.
   * 
   * @param {DirectedEdge} e 
   * @returns {void}
   */
  addEdge(e) {
    // add edge e = v -> w to only v's adjacency list
    let v = e.from();
    this._adj[v].add(e);
  }

  /**
   * Edges pointing from v.
   * 
   * @param {int} v 
   * @returns {Iterable<DirectedEdge>}
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
   * All edges.
   * 
   * @returns {Iterable<DirectedEdge>}
   */
  edges() {}

  /**
   * String representation.
   * 
   * @returns {string}
   */
  toString() {}
}