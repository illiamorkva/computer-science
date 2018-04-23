/**
686. Repeated String Match
https://leetcode.com/problems/repeated-string-match/description/

Given two strings A and B, find the minimum number of times A has to be repeated
such that B is a substring of it. If no such solution, return -1.

For example, with A = "abcd" and B = "cdabcdab".

Return 3, because by repeating A three times (“abcdabcdabcd”), B is a substring of it;
and B is not a substring of A repeated two times ("abcdabcd").

Note:
The length of A and B will be between 1 and 10000.
*/

/**
 * My Brute Force
 * @param {string} A
 * @param {string} B
 * @return {number}
 */
let repeatedStringMatch = function(A, B) {
  let counter = 1;
  
  let arrayA = A.split('');
  let coppyArray = [...arrayA];
  
  while (A.indexOf(B) == -1 && (A.length / B.length) <= 3)
    {
      arrayA = arrayA.concat(coppyArray);
      A = arrayA.join('');

      counter++;
    }
  
  if (A.indexOf(B) == -1) return -1;

  return counter;

  //What is the Time and Space complexity here?
};

console.log(repeatedStringMatch("abcd", "cdabcdab")) // 3

/**
 * Approach #1: Ad-Hoc
 * @param {string} A
 * @param {string} B
 * @return {number}
 */
repeatedStringMatch = function(A, B) {
  let counter = 1;
  let string = A;
  
  while (string.length < B.length) {
    string = string.concat(A);
    counter++;
  }

  if (string.indexOf(B) != -1) return counter;
  
  string = string.concat(A);
  counter++;

  if (string.indexOf(B) != -1) return counter;

  return -1;
};

console.log(repeatedStringMatch("abcd", "cdabcdab")) // 3