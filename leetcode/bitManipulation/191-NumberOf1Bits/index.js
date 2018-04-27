/**
191. Number of 1 Bits
https://leetcode.com/problems/number-of-1-bits/description/

Write a function that takes an unsigned integer and returns the number of '1' bits it has (also known as the Hamming weight).

Example :

Input: 11
Output: 3

Explanation: the 32-bit integer 11 has binary representation 00000000000000000000000000001011 .
*/

/**
 * My Loop and Flip
 * @param {number} n - a positive integer
 * @return {number}
 */
let hammingWeight = function(n) {
  let result = 0;
  
  for (let i = 0; i <= 31; i++) {
    if (getBit(n, i)) {
      result++;
    }
  }
  
  return result;
};

function getBit(n, i) {
  const mask = 1 << i;

  return (n & mask) != 0;
}

console.log(hammingWeight(10)) // 2

/**
 * Approach #2 Bit Manipulation Trick
 * @param {number} n - a positive integer
 * @return {number}
 */
hammingWeight = function(n) {
  let res = 0;
  
  while (n != 0) {
    n &= n - 1;
    res++;
  }
  
  return res;
}

console.log(hammingWeight(10)) // 2