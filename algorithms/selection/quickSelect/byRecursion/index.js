// https://en.wikipedia.org/wiki/Quickselect
// https://www.geeksforgeeks.org/quickselect-algorithm/
// https://www.geeksforgeeks.org/kth-smallestlargest-element-unsorted-array/
// java implementation - https://gist.github.com/unnikked/14c19ba13f6a4bfd00a3

/**
 * This function returns k'th smallest element in arr[l..r] using QuickSort.
 * 
 * The algorithm is similar to QuickSort. The difference is, instead of recurring
 * for both sides (after finding pivot), it recurs only for the part that contains
 * the k-th smallest element.
 * This reduces the expected complexity from O(N * log N) to O(N), with a worst case of O(N^2).
 * 
 * Important Points:
 * - Like QuickSort, it is fast in practice, but has poor worst-case performance.
 * - The partition process is same as QuickSort, only recursive code differs.
 * - There exists an algorithm that finds k-th smallest element in O(N) in worst case,
 * but QuickSelect performs better on average.
 * 
 * Time Complexity.
 * The quickselect has good average performance, but is sensitive to the pivot that is chosen.
 * If good pivots are chosen, meaning ones that consistently decrease the search set by a given fraction,
 * then the search set decreases in size exponentially and by induction one sees that performance is linear - O(N),
 * as each step is linear.
 * However, if bad pivots are consistently chosen, such as decreasing by only a single element each time,
 * then worst-case performance is quadratic - O(N^2).
 * 
 * Space Complexity.
 * It is also an in-place algorithm, requiring only constant memory overhead
 * if tail call optimization is available, or if eliminating the tail recursion with a loop.
 * 
 * @param {number[]} arr 
 * @param {number} left 
 * @param {number} right 
 * @param {number} k 
 */
function quickSelect(arr, left, right, k) { // kthSmallest()
  if (left === right) { // if arr contains only one element,
    return arr[left]; // return that element
  }

  // if k is smaller than number of 
  // elements in array
  if (k > 0 && k <= (right - left) + 1) {
    // partition the array around last 
    // element and get position of pivot 
    // element in sorted array
    let pivot = partition(arr, left, right);

    // if position is same as k (the pivot is in its final sorted position (if k = pivotIndex))
    if (pivot - left === k - 1) {
      return arr[pivot];
    }

    // if position is more, recur for left subarray
    if (pivot - left > k - 1) {
      return quickSelect(arr, left, pivot - 1, k);
    } else {
      // else recur for right subarray
      return quickSelect(arr, pivot + 1, right, k - pivot + left - 1); // select(list, pivotIndex + 1, right, k)
    }
  }
  // if k is more than number of elements in array
  return null;
}

/**
 * Standard partition process of QuickSort().
 * It considers the last element as pivot
 * and moves all smaller element to left of
 * it and greater elements to right.
 * 
 * @param {number[]} arr 
 * @param {number} left 
 * @param {number} right 
 */
function partition(arr, left, right) {
  let pivot = arr[right];
  let i = left;

  for (let j = left; j <= right - 1; j++) {
    if (arr[j] <= pivot) {
      swap(arr, i, j);
      i++;
    }
  }

  // move pivot to its final place. right is index of pivot.
  swap(arr, i, right);
  return i;
}

function swap(arr, i, j) {
  const temp = arr[i];
  arr[i] = arr[j];
  arr[j] = temp;
}
