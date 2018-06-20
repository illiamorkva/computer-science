class Paths {

  /**
   * Find paths in G from source s.
   * 
   * @param {Graph} G 
   * @param {int} s 
   */
  constructor(G, s) {}

  /**
   * Is there a path from s to v?
   * 
   * @param {int} v 
   */
  hasPathTo(v) {}

  /**
   * Path from s to v; null if no such path
   * 
   * @param {int} v 
   * @returns {Iterable<int>}
   */
  pathTo(v) {}
}

// sample client

const paths = new Paths(G, s);

for (let v = 0; v < G.V(); v++) {
  if (paths.hasPathTo(v)) {
    // print all vertices connected to s
    console.log(v);
  }
}
