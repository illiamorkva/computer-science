// good explanation -  https://algs4.cs.princeton.edu/23quicksort/

/**
 * It is a randomized algorithm, because it randomly shuffles the array before sorting it.
 * Not Stable.
 * 
 * Time Complexity.
 * Worst Case: O(N^2)
 * Average Case: O(N * log N)
 * Best Case: O(N * log N)
 * 
 * O(N * log N) probabilistic guarantee; fastest in practice.
 * 
 * Space Complexity:
 * O(log N),
 * Since the best case makes at most O(log N)
 * nested recursive calls, it uses O(log N) space.
 * However, without Sedgewick's trick to limit
 * the recursive calls, in the worst case quicksort
 * could make O(N) nested recursive calls and need
 * O(N) auxiliary space.
 * 
 */
class QuickSortInPlace {
  constructor(comparatorCallback) {
    this.comparator = new Comparator(comparatorCallback);
  }
  
  /**
   * Rearranges the array in ascending order, using the natural order.
   * 
   * @param {*[]} a 
   */
  sort(a) {
    // StdRandom.shuffle(a);
    this._sort(a, 0, a.length - 1);
  }

  /**
   * Quicksort the subarray from a[lo] to a[hi].
   * @param {*[]} a 
   * @param {number} lo 
   * @param {number} hi 
   */
  _sort(a, lo, hi) {
    if (hi <= lo) {
      return;
    }

    const partitionIndex = this.partition(a, lo, hi);

    this._sort(a, lo, partitionIndex - 1); // Before partitionIndex
    this._sort(a, partitionIndex + 1, hi); // After partitionIndex
  }

  /**
   * Partition the subarray a[lo..hi] so that a[lo..j-1] <= a[j] <= a[j+1..hi]
   * and return the index j.
   */
  _partition(a, lo, hi) {
    let i = lo;
    let j = hi + 1;

    const pivot = a[lo];

    while (true) {
      // find item on lo to swap
      while (this.comparator.lessThan(a[++i], pivot)) {
        if (i == hi) {
          break;
        }
      }

      // find item on hi to swap
      while (this.comparator.lessThan(pivot, a[--j])) {
        if (j == lo) {
          break; // redundant since a[lo] acts as sentinel
        }
      }

      // check if pointers cross
      if (i >= j) {
        break;
      }

      this._exch(a, i, j);
    }

    // put partitioning item pivot at a[j]
    this._exch(a, lo, j);

    // now, a[lo .. j-1] <= a[j] <= a[j+1 .. hi]
    return j;
  }

  /**
   * Exchange a[i] and a[j].
   * 
   * @param {*[]} a 
   * @param {number} i 
   * @param {number} j 
   */
  _exch(a, i, j) {
    const swap = a[i];
    a[i] = a[j];
    a[j] = swap;
  }
}
