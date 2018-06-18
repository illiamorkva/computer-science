/**
 * Time Complexity.
 * O(log N)
 * 
 * Space Complexity.
 * O(1)
 * 
 * @param {*[]} sortedArray 
 * @param {*} seekElement 
 * @param {Function(a, b)} [comparatorCallback]
 * @returns {number}
 */
function binarySearch(sortedArray, seekElement, comparatorCallback) {
  const comparator = new Comparator(comparatorCallback);

  let startIndex = 0;
  let endIndex = sortedArray.length - 1;

  while (startIndex <= endIndex) {
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
      startIndex = middleIndex + 1;
    } else {
      // Go to the left half of the array.
      endIndex = middleIndex - 1;
    }
  }

  return -1;
}
