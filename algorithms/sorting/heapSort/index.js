// good theory - https://www.geeksforgeeks.org/heap-sort/
// JS implementation - https://github.com/trekhleb/javascript-algorithms/tree/master/src/algorithms/sorting/heap-sort
// Java implementation - https://algs4.cs.princeton.edu/code/edu/princeton/cs/algs4/Heap.java.html

/**
 * Heap Sort is an in-place algorithm.
 * Its typical implementation is Not Stable, but can be made stable.
 * 
 * Time Complexity.
 * Best
 * O(N * log N)
 * Average
 * O(N * log N)
 * Worst
 * O(N * log N)
 * 
 * Time complexity of heapify is O(log N).
 * Time complexity of createAndBuildHeap() is O(N) and
 * overall time complexity of Heap Sort is O(N * log N).
 * 
 * Space Complexity.
 * O(1),
 * but practically very slow due to cache-inefficiency.
 * 
 * Heap Sort algorithm has limited uses because Quick Sort and
 * Merge Sort are better in practice.
 */
class HeapSort {
  constructor() {}

  /**
   * Rearranges the array in ascending order, using the natural order.
   * 
   * Mutable function.
   * 
   * @param {*[]} array the array to be sorted
   */
  sort(array) {
    let n = array.length;
    
    // build a MAX heap from the input data
    for (let k = n / 2; k >= 1; k--) {
      this.sink(array, k, n);
    }

    // repeat below steps while size of heap is greater than 1
    while (n > 1) {
      // at this point, the largest item is stored at the root of the heap.
      // replace it with the last item of the heap followed by reducing
      // the size of heap by 1
      this.exch(array, 1, n--);
      // finally, heapify the root of tree
      this.sink(array, 1, n);
    }
  }

  /**
   * Helper function to restore the MAX heap invariant.
   * (aka. heapifyDown)
   * 
   * Time Complexity.
   * O(log N)
   * 
   * @param {*[]} pq 
   * @param {number} k root of heap
   * @param {number} n size of heap 
   */
  sink(pq, k, n) {
    // compare the root element to its children and swap root with the biggest
    // of children. do the same for next children after swap
    while (2 * k <= n) {
      // children of node at k are 2 * k and 2 * k + 1
      let j = 2 * k;

      if (j < n && this.less(pq, j, j + 1)) {
        // choose larger child because we will exchange key
        // in parent with key in larger child
        j++;
      }

      if (!this.less(pq, k, j)) {
        break;
      }

      this.exch(pq, k, j);
      k = j;
    }
  }

  // Helper functions for comparisons and swaps.
  // Indices are "off-by-one" to support 1-based indexing.
  
  less(pq, i, j) {
    return pq[i - 1].localeCompare(pq[j - 1]) < 0;
  }

  exch(pq, i, j) {
    const swap = pq[i - 1];
    pq[i - 1] = pq[j - 1];
    pq[j - 1] = swap;
  }
}
