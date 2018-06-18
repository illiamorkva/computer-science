// good explanation -  https://www.geeksforgeeks.org/quick-sort/

/**
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
   * Sorting in place avoids unnecessary use of additional memory, but modifies input array.
   * 
   * This process is difficult to describe, but much clearer with a visualization:
   * @see: http://www.algomation.com/algorithm/quick-sort-visualization
   * 
   * @param {*[]} originalArray 
   * @param {number} inputLowIndex 
   * @param {number} inputHighIndex 
   * @returns {*[]}
   */
  sort(originalArray, inputLowIndex, inputHighIndex) {
    // Destructures array on initial passthrough, and then sorts in place.
    const array = inputLowIndex === undefined ? [...originalArray] : originalArray;

    /**
     * Partition array segment and return index of last swap.
     * 
     * @param {number} lowIndex 
     * @param {number} highIndex 
     * @returns {number}
     */
    const partition = (lowIndex, highIndex) => {
      /**
       * @param {number} leftIndex 
       * @param {number} rightIndex 
       */
      const swap = (leftIndex, rightIndex) => {
        const tempVariable = array[leftIndex];
        array[leftIndex] = array[rightIndex];
        array[rightIndex] = tempVariable;
      }

      // pivot (element to be placed at right position)
      const pivot = array[highIndex];

      let firstRunner = lowIndex - 1; // firstRunner - index of smaller element
      for (let secondRunner = lowIndex; secondRunner < highIndex; secondRunner += 1) {
        // if current element is smaller than pivot
        if (this.comparator.lessThan(array[secondRunner], pivot)) {
          firstRunner += 1; // increment index of smaller element
          swap(firstRunner, secondRunner);
        }
      }

      if (this.comparator.lessThan(pivot, array[firstRunner + 1])) {
        swap(firstRunner + 1, highIndex); // highIndex - index of pivot
      }

      return firstRunner + 1;
    }

    /**
     * While we can use a default parameter to set `low` to 0, we would
     * still have to set `high`'s default within the function as we
     * don't have access to `array.length - 1` when declaring parameters
     */
    const lowIndex = inputLowIndex === undefined ? 0 : inputLowIndex;
    const highIndex = inputHighIndex === undefined ? array.length - 1 : inputHighIndex;

    // Base case is when low and high converge
    if (lowIndex < highIndex) {
      /**
       * array[partitionIndex] is now at right place
       */
      const partitionIndex = partition(lowIndex, highIndex);

      /**
       * `partition()` swaps elements of the array based on their comparison to the `hi` parameter,
       * and then returns the index where swapping is no longer necessary, which can be best thought
       * of as the pivot used to split an array in a non-in-place quicksort
       */
      this.sort(array, lowIndex, partitionIndex - 1); // Before partitionIndex
      this.sort(array, partitionIndex + 1, highIndex); // After partitionIndex
    }

    return array;
  }
}
