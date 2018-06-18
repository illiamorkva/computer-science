/**
 * Time Complexity.
 * O(log N)
 * 
 * Space Complexity.
 * O(log N), recursion call stack space.
 * 
 * @param {*[]} sortedArray 
 * @param {number} startIndex 
 * @param {number} endIndex 
 * @param {*} seekElement 
 * @param {Function(a, b)} [comparatorCallback]
 * @returns {(number|Function)}
 */
function binarySearch(sortedArray, startIndex, endIndex, seekElement, comparatorCallback) {
  const comparator = new Comparator(comparatorCallback);

  if (startIndex <= endIndex) {
    // startIndex + (endIndex - startIndex) / 2 - to avoid integer overflow for the addition,
    // startIndex + endIndex could cross integer limit since middleIndex is declared as integer.
    const middleIndex = startIndex + Math.floor((endIndex - startIndex) / 2);

    // If we've found the element just return its position.
    if (comparator.equal(sortedArray[middleIndex], seekElement)) {
      return middleIndex;
    }

    // Decide which half to choose for seeking next: left or right one.
    if (comparator.lessThan(sortedArray[middleIndex], seekElement)) {
      // Go to the right half of the array.
      return binarySearch(sortedArray, middleIndex + 1, endIndex, seekElement, comparatorCallback);
    } else {
      // Go to the left half of the array.
      return binarySearch(sortedArray, startIndex, middleIndex - 1, seekElement, comparatorCallback);
    }
  }

  return -1;
}
