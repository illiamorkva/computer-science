/**
344. Reverse String
https://leetcode.com/problems/reverse-string/description/

Write a function that takes a string as input and returns the string reversed.

Example:
Given s = "hello", return "olleh".
*/

/**
 * My Two Pointers
 * @param {string} s
 * @return {string}
 */
let reverseString = function(s) {
  let arr = s.split('');
  
  let i = 0;
  let n = arr.length - 1;
  
  while (i < n) {
    let temp = arr[i];
    arr[i++] = arr[n];
    arr[n--] = temp;
  }
  
  return arr.join('');
};

console.log(reverseString("hello")); // "olleh"
