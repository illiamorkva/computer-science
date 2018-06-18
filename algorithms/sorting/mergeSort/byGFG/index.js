// good explanation - https://www.geeksforgeeks.org/merge-sort/

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
   * @param {*[]} array 
   * @param {number} leftIndex 
   * @param {number} rightIndex 
   */
  sort(array, leftIndex, rightIndex) {
    if (leftIndex < rightIndex) {
      // find the middle point
      let middle = (leftIndex + rightIndex) / 2;

      // sort first and second halves
      this.sort(array, leftIndex, middle);
      this.sort(array, middle + 1, rightIndex);

      // merge the sorted halves
      this.merge(array, leftIndex, middle, rightIndex);
    }
  }

  /**
   * 
   * @param {*[]} array 
   * @param {number} leftIndex 
   * @param {number} middle 
   * @param {number} rightIndex 
   */
  merge(array, leftIndex, middle, rightIndex) {
    // find sizes of two subarrays to be merged
    let leftArrayLength = middle - leftIndex + 1;
    let rightArrayLength = rightIndex - middle;

    // create temp arrays
    const leftArray = new Array(leftArrayLength);
    const rightArray = new Array(rightArrayLength);

    // copy data to temp arrays
    for (let i = 0; i < leftArrayLength; ++i) {
      leftArray[i] = array[leftIndex + i];
    }
    for (let j = 0; j < rightArrayLength; ++j) {
      rightArray[j] = array[middle + 1 + j];
    }

    // merge the temp arrays

    // initial indices of left and right subarrays
    let i = 0;
    let j = 0;

    // initial index of merged subarry array
    let k = leftIndex;

    while (i < leftArrayLength && j < rightArrayLength) {
      if (this.comparator.lessThanOrEqual(leftArray[i], rightArray[j])) {
        array[k] = leftArray[i];
        i++;
      } else {
        array[k] = rightArray[j];
        j++;
      }
      k++;
    }

    // copy remaining elements of leftArray[] if any
    while (i < leftArrayLength) {
      array[k] = leftArray[i];
      i++;
      k++;
    }

    // copy remaining elements of rightArray[] if any
    while (j < rightArrayLength) {
      array[k] = rightArray[j];
      j++;
      k++;
    }
  }
}
