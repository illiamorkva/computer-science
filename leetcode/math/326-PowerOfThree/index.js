/**
326. Power of Three
https://leetcode.com/problems/power-of-three/description/

Given an integer, write a function to determine if it is a power of three.

Follow up:
Could you do it without using any loop / recursion?
*/

/**
 * My Brute Force
 * @param {number} n
 * @return {boolean}
 */
let isPowerOfThree = function(n) {
  if (n == 0) return false;
  if (n < 0) return false;
  
  while (n > 1) {
    if (n % 3 != 0) return false;
      n /= 3;
  }
  
  return true;
};

console.log(isPowerOfThree(27)) // true

/**
 * Approach #3 Mathematics
 * @param {number} n
 * @return {boolean}
 */
isPowerOfThree = function(n) {
  // n = 3^i
  // i = log3(n)
  // i = logb(n)/logb(3), where b = 10
  const i = Math.log10(n) / Math.log10(3);

  // n is a power of three if and only if i is an integer. 
  return (i) % 1 == 0;
};

console.log(isPowerOfThree(27)) // true

/**
 * Approach #4 Integer Limitations
 * @param {number} n
 * @return {boolean}
 */
isPowerOfThree = function(n) {
  // max INT value which is also power of three 
  // (3^(log3(maxInt) = log base 3 of maxInt)
  const maxPowerOfThree  = 1162261467;
  
  if (n <= 0) return false;
  if (maxPowerOfThree % n != 0) return false;
  return true;
};

console.log(isPowerOfThree(27)) // true