/**
 * Def. Vertices v and w are connected if there is a path between them.
 * 
 * Goal. Preprocess graph to answer queries of the form is v connected to w?
 * in constant time.
 * 
 * Goal. Partition vertices into connected components.
 * 
 * Connected components
 * 1. Initialize all vertices v as unmarked.
 * 2. For each unmarked vertex v, run DFS to identify all
 * vertices discovered as part of the same component.
 * 
 */

// Finding connected components with DFS.
class CC {
  /**
   * Find connected components in G.
   * 
   * @param {Graph} G 
   */
  constructor(G) {
    this._count = 0; // number of components

    this._marked = new Array(G.V());
    this._id = new Array(G.V()); // id[v] = id of component containing v 

    // run DFS from one vertex in each component
    for (let v = 0; v < G.V(); v++) {
      if (!this._marked[v]) {
        this._dfs(G, v);
        this._count++;
      }
    }
    
  }

  /**
   * Are v and w connected?
   * 
   * @param {int} v 
   * @param {int} w 
   * @returns {boolean}
   */
  connected(v, w) {}

  /**
   * Number of connected components.
   * 
   * @returns {int}
   */
  count() {
    return this._count;
  }

  /**
   * Component identifier for v.
   * 
   * @param {int} v
   * @returns {int}
   */
  id(v) {
    return this._id[v];
  }

  /**
   * 
   * @param {Graph} G
   * @param {int} v
   * @returns {void}
   */
  _dfs(G, v) {
    this._marked[v] = true;
    this._id[v] = this._count; // all vertices discovered in same call of dfs have same id

    const adjToV = G.adj(v).toArray();
    adjToV.forEach(w => {
      if (!this._marked[w]) {
        // recursive case
        this._dfs(G, w);
      }
      // base case
    });
  }
}
