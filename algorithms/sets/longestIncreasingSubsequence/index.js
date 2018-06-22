// good explanation - https://www.youtube.com/watch?v=CE2b_-XfVDk&list=PLLXdhg_r2hKA7DPDsunoDZ-Z769jWn4R8
// JS implementation - https://github.com/trekhleb/javascript-algorithms/blob/master/src/algorithms/sets/longest-increasing-subsequence/dpLongestIncreasingSubsequence.js
// Java implementation - https://www.geeksforgeeks.org/longest-increasing-subsequence/
// DP intro explanation in russian - https://habr.com/post/113108/

/**
 * Dynamic programming approach to find longest increasing subsequence.
 * 
 * Time Complexity.
 * O(n^2)
 * 
 * @param {number[]} sequence 
 * @returns {number}
 */
function longestIncreasingSubsequence(sequence) {
  // create array with longest increasing substrings length and
  // fill it with 1-s that would mean that each element of the sequence
  // is itself a minimum increasing subsequence
  const lengthsArray = new Array(sequence.length).fill(1);

  let previousElementIndex = 0;
  let currentElementIndex = 1;

  while (currentElementIndex < sequence.length) {
    if (sequence[previousElementIndex] < sequence[currentElementIndex]) {
      // if current element is bigger then the previous one then
      // current element is a part of increasing subsequence which
      // length is by one bigger then the length of increasing subsequence
      // for previous element
      const newLength = lengthsArray[previousElementIndex] + 1;
      if (newLength > lengthsArray[currentElementIndex]) {
        // increase only if previous element would give us bigger subsequence length
        // then we already have for current element
        lengthsArray[currentElementIndex] = newLength;
      }
    }

    // move previous element index right
    previousElementIndex += 1;
    
    // if previous element index equals to current element index then
    // shift current element right and reset previous element index to zero
    if (previousElementIndex === currentElementIndex) {
      currentElementIndex += 1;
      previousElementIndex = 0;
    }
  }

  // find the biggest element in lengthsArray
  // this number is the biggest length of increasing subsequence
  let longestIncreasingLength = 0;

  for (let i = 0; i < lengthsArray.length; i += 1) {
    if (lengthsArray[i] > longestIncreasingLength) {
      longestIncreasingLength = lengthsArray[i];
    }
  }

  return longestIncreasingLength;  
}
