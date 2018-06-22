// good explanation - https://www.youtube.com/watch?v=NnD96abizww&list=PLLXdhg_r2hKA7DPDsunoDZ-Z769jWn4R8
// JS implementation - https://github.com/trekhleb/javascript-algorithms/blob/master/src/algorithms/sets/longest-common-subsequence/longestCommonSubsequence.js
// Java implementation - https://www.geeksforgeeks.org/longest-common-subsequence/
// DP intro explanation in russian - https://habr.com/post/113108/

/**
 * Dynamic programming approach to find longest common subsequence.
 * 
 * Time Complexity.
 * O(n * m),
 * where n is set1.length and m is set2.length
 * 
 * @param {string[]} set1 
 * @param {string[]} set2 
 * @returns {string[]}
 */
function longestCommonSubsequence(set1, set2) {
  // init LCS matrix
  const lcsMatrix = new Array(set2.length + 1)
    .fill(null)
    .map(() =>
      new Array(set1.length + 1)
      .fill(null)
    );
  
  // fill first row with zeros
  for (let columnIndex = 0; columnIndex <= set1.length; columnIndex++) {
    lcsMatrix[0][columnIndex] = 0;
  }

  // fill first column with zeros
  for (let rowIndex = 0; rowIndex <= set2.length; rowIndex++) {
    lcsMatrix[rowIndex][0] = 0;
  }

  // fill rest of the column that correspond to each of two strings
  for (let rowIndex = 1; rowIndex <= set2.length; rowIndex++) {
    for (let columnIndex = 1; columnIndex <= set1.length; columnIndex++) {

      if (set1[columnIndex - 1] === set2[rowIndex - 1]) {
        lcsMatrix[rowIndex][columnIndex] = lcsMatrix[rowIndex - 1][columnIndex - 1] + 1;
      } else {
        lcsMatrix[rowIndex][columnIndex] = Math.max(
          lcsMatrix[rowIndex - 1][columnIndex],
          lcsMatrix[rowIndex][columnIndex - 1]
        );
      }

    }
  }

  // calculate LCS based on LCS matrix

  if (!lcsMatrix[set2.length][set1.length]) {
    //if the length of largest common string is zero then return empty string
    return [''];
  }

  const longestSequence = new Array();
  
  let columnIndex = set1.length;
  let rowIndex = set2.length;

  while (columnIndex > 0 || rowIndex > 0) {
    if (set1[columnIndex - 1] === set2[rowIndex - 1]) {
      // move by diagonal left-top
      longestSequence.unshift(set1[columnIndex - 1]);

      columnIndex--;
      rowIndex--;
    } else if (lcsMatrix[rowIndex][columnIndex] === lcsMatrix[rowIndex][columnIndex - 1]) {
      // move left
      columnIndex--;
    } else {
      // move up
      rowIndex--;
    }
  }

  return longestSequence;
}
