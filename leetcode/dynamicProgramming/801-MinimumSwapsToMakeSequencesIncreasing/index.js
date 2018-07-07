/**
801. Minimum Swaps To Make Sequences Increasing
https://leetcode.com/problems/minimum-swaps-to-make-sequences-increasing/description/

We have two integer sequences A and B of the same non-zero length.

We are allowed to swap elements A[i] and B[i].  Note that both elements are in the same index
position in their respective sequences.

At the end of some number of swaps, A and B are both strictly increasing.
(A sequence is strictly increasing if and only if A[0] < A[1] < A[2] < ... < A[A.length - 1].)

Given A and B, return the minimum number of swaps to make both sequences strictly increasing.
It is guaranteed that the given input always makes it possible.

Example:
Input: A = [1,3,5,4], B = [1,2,3,7]
Output: 1
Explanation: 
Swap A[3] and B[3].  Then the sequences are:
A = [1, 3, 5, 7] and B = [1, 2, 3, 4]
which are both strictly increasing.

Note:

- A, B are arrays with the same length, and that length will be in the range [1, 1000].
- A[i], B[i] are integer values in the range [0, 2000].

*/

/**
 * My Brute Force (Not DP)
 * 
 * 90 / 102 test cases passed.
 * 
 * Time Complexity.
 * O(n)
 * 
 * Space Complexity.
 * O(1)
 * 
 * @param {number[]} A
 * @param {number[]} B
 * @return {number}
 */
let minSwap = function(A, B) {
  let counter = 0;
  
  const n = A.length;
  
  for (let i = 0; i < n - 1; i++) {
    if (A[i] < A[i + 1] && B[i] < B[i + 1]) {
      continue;
    } else {
      counter++;
      
      // first swap
      swap(A, B, i)
      
      if (isFirstSwapValid(A, B, i)) {
        continue;
      } else {
        // discard first swap
        swap(A, B, i)
        
        // second swap
        swap(A, B, i + 1)
      }
      
    }
  }
  
  return counter;
};

function swap(A, B, i) {
  let temp = A[i];
  A[i] = B[i];
  B[i] = temp;
}

function isFirstSwapValid(A, B, i) {
  let thirdElOfA = A[i + 2] ? A[i + 2] : 10001;
  let thirdElOfB = B[i + 2] ? B[i + 2] : 10001;
      
  let prevOfA = A[i - 1] ? A[i - 1] : -1;
  let prevOfB = B[i - 1] ? B[i - 1] : -1;
      
  const isFirstSwapValid = (
    A[i] < A[i + 1] &&
    A[i + 1] < thirdElOfA &&
    A[i] > prevOfA &&
    B[i] < B[i + 1] &&
    B[i + 1] < thirdElOfB &&
    B[i] > prevOfB
  );

  return isFirstSwapValid;
}

// https://leetcode.com/problems/minimum-swaps-to-make-sequences-increasing/solution/
// https://leetcode.com/problems/minimum-swaps-to-make-sequences-increasing/discuss/119835/Java-O(n)-DP-Solution

/**
 * Approach #1: Dynamic Programming
 * 
 * Time Complexity.
 * O(n)
 * 
 * Space Complexity.
 * O(1)
 * 
 * @param {number[]} A
 * @param {number[]} B
 * @return {number}
 */
minSwap = function(A, B) {
  let s1 = 1; // 1, 1, 1, 2
  let n1 = 0; // 0, 0, 1, 1
  
  //  debug:
  //
  //                 i
  // A [ 0,  1,  6,  7]
  // B [ 0,  3,  2,  4]
  
  for (let i = 1; i < A.length; i++) {
    let s2 = 2002;
    let n2 = 2002;
    
    if (A[i - 1] < A[i] && B[i - 1] < B[i]) {
      n2 = n1 + 0; // 1 + 0 = 1
      s2 = s1 + 1; // 1 + 1 = 2
    }
    
    if (A[i - 1] < B[i] && B[i - 1] < A[i]) {
      n2 = Math.min(n2, s1 + 0); // min (2002 , 1 + 0 = 1) // 1
      s2 = Math.min(s2, n1 + 1); // min (2002 , 0 + 1 = 1) // 1
    }
    
    s1 = s2;
    n1 = n2;
  }
  
  return Math.min(s1, n1); // 1
};
