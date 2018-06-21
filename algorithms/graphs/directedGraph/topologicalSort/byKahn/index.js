// https://www.geeksforgeeks.org/topological-sorting-indegree-based-solution/
// https://en.wikipedia.org/wiki/Topological_sorting

/**
 * Time Complexity.
 * O(V + E),
 * running time linear in the number of nodes plus the number of edges.
 * 
 * Space Complexity.
 * O(V), by Sedgewick
 * O(V + E), by bigocheatsheet
 */
class TopologicalSort {
  constructor() {}

  /**
   * Returns a topologically sorted order of a graph or null.
   * 
   * @param {Graph} G 
   * @returns {number[]|null}
   */
  topologicalSort(G) {
    // create an array to store indegrees of all vertices. Initialize all indegrees as 0
    const indegree = new Array(G.V());
    for (let v = 0; v < G.V(); v++) {
      indegree[v] = 0;
    }

    // traverse adjacency lists to fill indegrees of
    // vertices. This step takes O(V+E) time
    for (let v = 0; v < G.V(); v++) {
      const temp = G.adj(v).toArray()

      temp.forEach((w) => {
        indegree[w]++;
      });
    }

    // Create a queue and enqueue all vertices with indegree 0
    const q = new Queue();
    for (let v = 0; v < G.V(); v++) {
      if (indegree[v] === 0) {
        q.enqueue(v); // add()
      }
    }

    // initialize count of visited vertices
    let count = 0;

    // create an array to store result (a topological ordering of the vertices).
    const topOrder = new Array(G.V());

    while (!q.isEmpty()) {
      // extract front of queue (or perform dequeue) and add it to topological order
      let u = q.dequeue(); // poll()
      topOrder.push(u);
      
      // iterate through all its neighbouring nodes
      // of dequeued node u and decrease their in-degree by 1 (remove edge from the graph)
      const adjToU = G.adj(u).toArray();
      adjToU.forEach((w) => {
        // if in-degree becomes zero, add it to queue
        if (--indegree[w] === 0) {
          q.enqueue(w); // add()
        }
      });

      count++;
    }

    // check if there was a cycle 
    if (count !== G.V()) {
      console.log('There exists a cycle in the graph.');
      return null;
    }
  
    // a topologically sorted order
    return topOrder;
  }
}
