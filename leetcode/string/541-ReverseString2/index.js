/**
541. Reverse String II
https://leetcode.com/problems/reverse-string-ii/description/

Given a string and an integer k, you need to reverse the first k characters
for every 2k characters counting from the start of the string. If there are less
than k characters left, reverse all of them. If there are less than 2k but greater
than or equal to k characters, then reverse the first k characters and left the other as original.

Example:

Input: s = "abcdefg", k = 2
Output: "bacdfeg"

Restrictions:
The string consists of lower English letters only.
Length of the given string and k will in the range [1, 10000]
*/

/**
 * Approach #1: Direct
 * @param {string} s
 * @param {number} k
 * @return {string}
 */
let reverseStr = function(s, k) {
  let array = s.split('');
  
  for (let start = 0; start < array.length; start += 2 * k) {
    let i = start;
    let j = Math.min(start + k, array.length) - 1;
      
    while (i < j) {
      let temp = array[i];
      array[i++] = array[j];
      array[j--] = temp;
    }
  }
  
  return array.join('');  
};

console.log(reverseStr("abcdefg", 2)); // "bacdfeg"
