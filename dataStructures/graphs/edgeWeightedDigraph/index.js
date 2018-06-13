/**
 * Idiom for processing an edge e: let v = e.from(), w = e.to(); v -> w.
 */
class DirectedEdge {
  /**
   * Weighted edge v -> w.
   * 
   * @param {number} v 
   * @param {number} w 
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
   * @returns {number}
   */
  from() {
    return this._v;
  }

  /**
   * Vertex w.
   * from() and to() replace either() and other().
   * 
   * @returns {number}
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
  toString() {
    return `${this._v}->${this._w} ${this._weight}`;
  }
}

/**
 * Conventions. Allow self-loops and parallel edges.
 * 
 * Time Complexity.
 * All operations take constant time (in the worst case) except
 * iterating over the edges incident from a given vertex, which takes
 * time proportional to the number of such edges.
 */
class EdgeWeightedDigraph {
  /**
   * Edge-weighted digraph with V vertices.
   * 
   * @param {number} V 
   */
  constructor(V) {
    if (V < 0) {
      throw new Error('Number of vertices in a Digraph must be nonnegative');
    }

    this._E = 0; // number of edges in this digraph
    this._V = V; // number of vertices in this digraph
    
    this._indegree = new Array(V); // indegree[v] = indegree of vertex v
    this._adj = new Array(V); // adj[v] = adjacency list for vertex v

    for (let v = 0; v < V; v++) {
      this._adj[v] = new Bag();

      this._indegree[v] = 0;
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
    const v = e.from();
    const w = e.to();

    this._validateVertex(v);
    this._validateVertex(w);

    this._adj[v].add(e);

    this._indegree[w]++;
    
    this._E++;
  }

  /**
   * Edges pointing from v.
   * 
   * @param {number} v 
   * @returns {Iterable<DirectedEdge>}
   */
  adj(v) {
    this._validateVertex(v);

    return this._adj[v];
  }

  /**
   * Returns the number of directed edges incident/pointing from vertex {@code v}.
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
   * Number of vertices.
   * 
   * @returns {number}
   */
  V() {
    return this._V;
  }

  /**
   * Number of edges.
   * 
   * @returns {number}
   */
  E() {
    return this._E;
  }

  /**
   * Throw an errir unless {@code 0 <= v < V}
   * 
   * @param {number} v 
   */
  _validateVertex(v) {
    if (v < 0 || v >= this._V) {
      throw new Error('no valid vertex');
    }
  }

  /**
   * All edges.
   * 
   * @returns {Iterable<DirectedEdge>}
   */
  edges() {
    const list = new Bag();

    for (let v = 0; v < this._V; v++) {
      this._adj[v].entries().forEach(e => {
        list.add(e);
      });
    }

    return list;
  }

  /**
   * String representation.
   * 
   * @returns {string}
   */
  toString() {
    let s = `${this._V} ${this._E}.`

    for (let v = 0; v < this._V; v++)  {
      s = `${s} ${v}: `;

      this._adj[v].entries().forEach(e => {
        s = `${s} ${e},`;
      });

      s = `${s}.`;
    }

    return s;
  }
}
