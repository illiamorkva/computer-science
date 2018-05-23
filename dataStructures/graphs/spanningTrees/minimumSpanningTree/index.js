/**
 * How to represent the MST?
 */
class MST {
  /**
   * 
   * @param {EdgeWeightedGraph} G 
   */
  constructor(G) {}

  /**
   * Edges in MST.
   * 
   * @returns {Iterable<Edge>}
   */
  edges() {}

  /**
   * Weight of MST.
   * 
   * @returns {double}
   */
  weight() {}
}

// sample client

const G = new EdgeWeightedGraph(input);
const mst = new MST(G);

mst.edges().toArray().forEach(e => {
  console.log(e);
});

console.log(mst.weight());
