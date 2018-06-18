// good explanation - https://algs4.cs.princeton.edu/22mergesort/

/**
 * Stable.
 * 
 * Time Complexity.
 * Worst Case: O(N * log N)
 * Average Case: O(N * log N)
 * Best Case: O(N * log N),
 * As merge sort always divides the array in two halves and take linear time to merge two halves.
 * 
 * Space Complexity:
 * O(N)
 * 
 */
class MergeSort {
  constructor(comparatorCallback) {
    this.comparator = new Comparator(comparatorCallback);
  }
 
  /**
   * Rearranges the array in ascending order, using the natural order.
   * 
   * @param {*[]} a 
   */
  sort(a) {
    const aux = new Array(a.length);

    this._sort(a, aux, 0, a.length - 1);
  }

  /**
   * Mergesort a[lo..hi] using auxiliary array aux[lo..hi]
   * 
   * @param {*[]} a 
   * @param {*[]} aux 
   * @param {number} lo 
   * @param {number} hi 
   */
  _sort(a, aux, lo, hi) {
    if (hi <= lo) {
      return;
    }

    const mid = lo + (hi - lo) / 2;

    this._sort(a, aux, lo, mid);
    this._sort(a, aux, mid + 1, hi);

    this._merge(a, aux, lo, mid, hi);
  }

  /**
   * Stably merge a[lo .. mid] with a[mid+1 ..hi] using aux[lo .. hi].
   * 
   * @param {*[]} a 
   * @param {*[]} aux 
   * @param {number} lo 
   * @param {number} mid 
   * @param {number} hi 
   */
  _merge(a, aux, lo, mid, hi) {
    // precondition: a[lo .. mid] and a[mid+1 .. hi] are sorted subarrays

    // copy to aux[]
    for (let k = lo; k <= hi; k++) {
      aux[k] = a[k];
    }

    // merge back to a[]
    let i = lo;
    let j = mid + 1;

    for (let k = lo; k <= hi; k++) {
      if (i > mid) {
        a[k] = aux[j++];
      } else if (j > hi) {
        a[k] = aux[i++];
      } else if (this.comparator.lessThan(aux[j], aux[i])) {
        a[k] = aux[j++];
      } else {
        a[k] = aux[i++];
      }
    }

    // postcondition: a[lo .. hi] is sorted
  }
}
