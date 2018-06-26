/**
7. Reverse Integer
https://leetcode.com/problems/reverse-integer/description/

Given a 32-bit signed integer, reverse digits of an integer.

Example 1:

Input: 123
Output: 321
Example 2:

Input: -123
Output: -321
Example 3:

Input: 120
Output: 21

Note:
Assume we are dealing with an environment which could only store
integers within the 32-bit signed integer range: [−2^31,  2^31 − 1].
For the purpose of this problem, assume that your function returns 0
when the reversed integer overflows.
*/

/**
 * My Brute Force
 * 
 * Time Complexity.
 * O(n),
 * where n is x.toString().length
 * 
 * @param {number} x
 * @return {number}
 */
let reverse = function(x) {
  if (x === 0) {
    return 0;
  }

  let string = removeZeros(x.toString());
    
  let isNegative = false;
  if (string.charAt(0) === '-') isNegative = true;
  
  let resultNumber = parseInt(
    string
    .split('')
    .filter((c) => {
      return c !== '-';  
    })
    .reverse()
    .join('')
  );

  if (resultNumber > 2147483647) {
    return 0; 
  }

  if (isNegative) {
    return 0 - resultNumber;
  }

  return resultNumber;
};

function removeZeros(str) {
  let string = str;
  let n = string.length;
  
  // remove zeros from front of string
  for (let i = 0, j = 0; i < n; i++) {
    if (string.charAt(i) === '0') {
      j++;
    } else {
      string = string.substring(j);
      break
    }
  }
  
  // remove zeros from back of string
  n = string.length;
  for (let i = n - 1, j = n - 1; i >= 0; i--) {
    if (string.charAt(i) === '0') {
      j--;
    } else {
      string = string.substring(0, j + 1);
      break
    }
  }
  
  return string;
}

/**
 * Number.MAX_SAFE_INTEGER constant represents the maximum safe integer in JavaScript (2^53 - 1).
 * Number.MAX_SAFE_INTEGER // 9007199254740991 
 * Math.pow(2, 53) - 1     // 9007199254740991
 */

/**
 * Approach 1: Pop and Push Digits & Check before Overflow or
 * Horner’s Method for Polynomial Evaluation (https://www.geeksforgeeks.org/horners-method-polynomial-evaluation/)
 * 
 * Time Complexity.
 * O(log x),
 * there are roughly log10(x) `log base 10 of x` digits in x.
 * 
 * Space Complexity.
 * O(1)
 * 
 * @param {number} x
 * @return {number}
 */
let reverse = function(x) {
  const isNeg = x < 0;
  let result = 0;
  let lastDigit = null;

  x = Math.abs(x);

  while (x > 0) {
    lastDigit = x % 10;
    
    result *= 10;
    result += lastDigit;
    
    x = parseInt(x / 10);
  }

  result = isNeg ? -result : result; 
  
  if (result > Math.pow(2, 31) - 1 || result < -Math.pow(2, 31)) {
    return 0;
  }

  return result;
};
