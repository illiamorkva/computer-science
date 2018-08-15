/**
387. First Unique Character in a String
https://leetcode.com/problems/first-unique-character-in-a-string/description/

Given a string, find the first non-repeating character in it and return it's index. If it doesn't exist, return -1.

Examples:

s = "leetcode"
return 0.

s = "loveleetcode",
return 2.

Note: You may assume the string contain only lowercase letters.
*/

/**
 * @param {string} s
 * @return {number}
 */
var firstUniqChar = function(s) {
  const map = new Map();
  
  for (let i = 0; i < s.length; i++) {
    if (map.has(s.charAt(i))) {
      map.set(s.charAt(i), map.get(s.charAt(i)) + 1);
    } else {
      map.set(s.charAt(i), 1);
    }
  }
  
  for (let i = 0; i < s.length; i++) {
    if (map.get(s.charAt(i)) === 1) {
      return i;
    }
  }
  
  return -1;
};
