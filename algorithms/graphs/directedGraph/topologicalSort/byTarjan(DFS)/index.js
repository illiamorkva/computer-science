// https://en.wikipedia.org/wiki/Topological_sorting
// https://www.geeksforgeeks.org/topological-sorting/

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

  topologicalSort(G) {
    const stack = new Stack();

    // mark all the vertices as not visited
    const visited = new Array(G.V());
    for (let v = 0; v < G.V(); v++) {
      visited[v] = false;
    }

    // call the recursive helper function to store
    // Topological Sort starting from all vertices one by one
    for (let v = 0; v < G.V(); v++) {
      if (visited[v] === false) {
        this._topologicalSort(v, visited, stack, G);
      }
    }

    const sortOrder = new Array(G.V());
    // sortOrder = stack.reverse()
    while (!stack.isEmpty()) {
      let item = stack.pop()

      sortOrder.push(item);
    }

    return sortOrder;
  }

  _topologicalSort(v, visited, stack, G) {
    // mark the current node as visited
    visited[v] = true;
    // recur for all the vertices adjacent to this vertex
    const adjToV = G.adj(v).toArray();
    adjToV.forEach((w) => {
      if (!visited[w]) {
        this._topologicalSort(w, visited, stack, G);
      }
    });

    stack.push(v);
  }
}
