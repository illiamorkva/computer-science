/**
242. Valid Anagram
https://leetcode.com/problems/valid-anagram/description/

Given two strings s and t , write a function to determine if t is an anagram of s.

Example 1:

Input: s = "anagram", t = "nagaram"
Output: true

Example 2:

Input: s = "rat", t = "car"
Output: false

Note:
You may assume the string contains only lowercase alphabets.

Follow up:
What if the inputs contain unicode characters? How would you adapt your solution to such case?
*/

/**
 * @param {string} s
 * @param {string} t
 * @return {boolean}
 */
var isAnagram = function(s, t) {
  if (s.length !== t.length) {
    return false;
  }

  const map = new Map();
  
  for (let i = 0; i < s.length; i++) {
    if (map.has(s.charAt(i))) {
      map.set(s.charAt(i), map.get(s.charAt(i)) + 1);
    } else {
      map.set(s.charAt(i), 1);
    }
  }
  
  for (let i = 0; i < t.length; i++) {
    if (map.has(t.charAt(i))) {
      map.set(t.charAt(i), map.get(t.charAt(i)) - 1);
    } else {
      return false;
    }
  }
  
  for (let [key, value] of map) {
    if (value !== 0) {
      return false
    }
  }
  
  return true;

  /**
   * Follow up
   * What if the inputs contain unicode characters?
   * How would you adapt your solution to such case?
   * 
   * Answer
   * Use a hash table instead of a fixed size counter.
   * Imagine allocating a large size array to fit the entire range of unicode characters,
   * which could go up to more than 1 million. A hash table is a more generic
   * solution and could adapt to any range of characters.
   */
};
