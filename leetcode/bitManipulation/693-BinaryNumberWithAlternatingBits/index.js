/**
693. Binary Number with Alternating Bits
https://leetcode.com/problems/binary-number-with-alternating-bits/description/

Given a positive integer, check whether it has alternating bits: namely, if two adjacent bits will always have different values.

Example 1:

Input: 5
Output: True
Explanation:
The binary representation of 5 is: 101

Example 2:

Input: 7
Output: False
Explanation:
The binary representation of 7 is: 111.

Example 3:

Input: 11
Output: False
Explanation:
The binary representation of 11 is: 1011.

Example 4:

Input: 10
Output: True
Explanation:
The binary representation of 10 is: 1010.
*/

/**
 * My Brute Force
 * @param {number} n
 * @return {boolean}
 */
let hasAlternatingBits = function(n) {
  let prev = null;
  
  while (n != 0) {
    let cur = getFirstBit(n);
    
    if (prev !== cur) {
      prev = cur;
      n >>>= 1;
    } else {
      return false;
    }
  }
  
  return true;
};

function getFirstBit(n) {
  const mask = 1;
  
  return (n & mask) != 0;
}

console.log(hasAlternatingBits(5)) // true
