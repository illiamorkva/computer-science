/**
728. Self Dividing Numbers
https://leetcode.com/problems/self-dividing-numbers/description/

A self-dividing number is a number that is divisible by every digit it contains.

For example, 128 is a self-dividing number because 128 % 1 == 0, 128 % 2 == 0, and 128 % 8 == 0.

Also, a self-dividing number is not allowed to contain the digit zero.

Given a lower and upper number bound, output a list of every possible self dividing number, including the bounds if possible.

Example 1:

Input: 
left = 1, right = 22

Output: [1, 2, 3, 4, 5, 6, 7, 8, 9, 11, 12, 15, 22]

Note:

The boundaries of each input argument are 1 <= left <= right <= 10000.
*/

/**
 * Approach #1: Brute Force
 * @param {number} left
 * @param {number} right
 * @return {number[]}
 */
let selfDividingNumbers = function(left, right) {
  let result = [];
  
  for (let i = left; i <= right; i++) {
    if (isValid(i)) {
      result.push(i);
    }
  }
  
  return result;
};

function isValid(number) {
  let string = number.toString();
  
  for (let j = 0; j <= string.length - 1; j++) {
    let currentNumber = +string.charAt(j);

    if (number % currentNumber != 0 || currentNumber == 0) {
      return false;
    }
  }
  
  return true;
}

/*
  Alternate implementation of isValid in Java:
  public boolean isValid(int n) {
    int x = n;
    while (x > 0) {
      int d = x % 10;
      x /= 10;
      if (d == 0 || (n % d) > 0) return false;
    }
    return true
  };
*/

console.log(selfDividingNumbers(1, 22)); // [1,2,3,4,5,6,7,8,9,11,12,15,22]
