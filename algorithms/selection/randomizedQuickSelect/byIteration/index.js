// https://en.wikipedia.org/wiki/Quickselect
// https://www.geeksforgeeks.org/kth-smallestlargest-element-unsorted-array-set-2-expected-linear-time/
// java implementation - https://gist.github.com/unnikked/14c19ba13f6a4bfd00a3

/**
 * Expected Linear Time.
 * The idea is to randomly pick a pivot element. To implement randomized partition,
 * we use a random function, rand() to generate index between left and right, swap the element
 * at randomly generated index with the last element, and finally call the standard
 * partition process which uses last element as pivot.
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
function randomizedQuickSelect(arr, left, right, k) { // kthSmallest()
  if (left === right) { // if arr contains only one element,
    return arr[left]; // return that element
  }

  // while (true)
  for (;;) {
    // partition the array around a random element
    // and get position of pivot 
    // element in sorted array
    let pivot = randomPartition(arr, left, right);

    if (k === pivot) {
      return arr[k];
    } else if (k < pivot) {
      right = pivot - 1;
    } else {
      left = pivot + 1;
    }
  }
}

/**
 * Picks a random pivot element between left and right and partitions
 * arr[left..right] around the randomly picked element using partition().
 * 
 * @param {number[]} arr 
 * @param {number} left 
 * @param {number} right 
 */
function randomPartition(arr, left, right) {
  const n = right - left + 1;
  // left + floor(rand() % (right - left + 1))
  const pivot = left + Math.floor(Math.floor(Math.random() * Math.floor(right)) % n);

  swap(arr, pivot, right);

  return partition(arr, left, right);
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

  // move pivot to its final place (right is index of pivot).
  swap(arr, i, right);
  return i;
}

function swap(arr, i, j) {
  const temp = arr[i];
  arr[i] = arr[j];
  arr[j] = temp;
}
