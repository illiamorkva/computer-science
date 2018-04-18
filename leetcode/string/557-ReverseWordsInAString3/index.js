/**
557. Reverse Words in a String III
https://leetcode.com/problems/reverse-words-in-a-string-iii/description/

Given a string, you need to reverse the order of characters in each word
within a sentence while still preserving whitespace and initial word order.

Example 1:

Input: "Let's take LeetCode contest"
Output: "s'teL ekat edoCteeL tsetnoc"

Note: In the string, each word is separated by single space and there will not be any extra space in the string.
*/

/**
 * Approach #1 Simple Solution
 * @param {string} s
 * @return {string}
 */
let reverseWords = function(s) {
  return s.split(' ')
    .map(word =>
      word.split('').reverse().join('')
    )
    .join(' ');
};

console.log(reverseWords("Let's take LeetCode contest")) // s'teL ekat edoCteeL tsetnoc

/**
 * Approach #2 Without using pre-defined split and reverse function
 * @param {string} s
 * @return {string}
 */
reverseWords = function(s) {
  return mySplit(s, ' ').map(word => myReverse(word)).join(' ');
};

let mySplit = (s, delimiter) => {
  const result = [];
  let word = [];
  
  for (let i = 0; i < s.length; i++) {
    if (s.charAt(i) == delimiter) {
      result.push(word.join(''));
      word = [];
    } else {
      word.push(s.charAt(i));
    }

    if (i == s.length - 1) {
      result.push(word.join(''));
    }
  }
  
  return result;
};

let myReverse = (word) => {
  const result = [];
  
  for (let i = 0; i < word.length; i++) {
    result.unshift(word.charAt(i));
  }
  
  return result.join('');
}

console.log(reverseWords("Let's take LeetCode contest")) // s'teL ekat edoCteeL tsetnoc