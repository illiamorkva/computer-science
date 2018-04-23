/**
14. Longest Common Prefix
https://leetcode.com/problems/longest-common-prefix/description/

Write a function to find the longest common prefix string amongst an array of strings.

If there is no common prefix, return an empty string "".

Example 1:

Input: ["flower","flow","flight"]
Output: "fl"

Example 2:

Input: ["dog","racecar","car"]
Output: ""
Explanation: There is no common prefix among the input strings.

Note:

All given inputs are in lowercase letters a-z.
*/

/**
 * Approach #1 Horizontal scanning
 * @param {string[]} strs
 * @return {string}
 */
let longestCommonPrefix = function(strs) {
  if (strs.length == 0) return '';
  
  let prefix = strs[0];
  
  for (let i = 1; i < strs.length; i++) {
    while (strs[i].indexOf(prefix) != 0) {
      prefix = prefix.substring(0, prefix.length - 1);
          
      if (prefix.length == 0) return '';
    }
  }
  
  return prefix;
};

console.log(longestCommonPrefix(["dog","racecar","car"])) // ""
console.log(longestCommonPrefix(["flower", "flow", "flight"])) // "fl"

/**
 * Approach #2 Vertical scanning
 * @param {string[]} strs
 * @return {string}
 */
longestCommonPrefix = function(strs) {
  if (strs.length == 0) return '';
    
  for (let i = 0; i < strs[0].length; i++) {
    let current = strs[0].charAt(i);
        
    for (j = 1; j < strs.length; j++) {
      if (i == strs[j].length || strs[j].charAt(i) != current) {
        return strs[0].substring(0, i);
      }
    }
  }
    
  return strs[0];
};

console.log(longestCommonPrefix(["dog","racecar","car"])) // ""
console.log(longestCommonPrefix(["flower", "flow", "flight"])) // "fl"

/**
 * Approach #3 Divide and conquer
 * @param {string[]} strs
 * @return {string}
 */
longestCommonPrefix = function(strs) {
  if (strs.length == 0) return '';

  return longestCP(strs, 0, strs.length - 1);
};

function longestCP(strs, left, right) {
  if (left == right) {
    return strs[left];
  } else {
    let mid = parseInt((left + right) / 2);

    let lcpLeft = longestCP(strs, left, mid);
    let lcpRight = longestCP(strs, mid + 1, right);

    return getPrefixBeetwenTwo(lcpLeft, lcpRight);
  }
}

function getPrefixBeetwenTwo(left, right) {
  const min = Math.min(left.length, right.length);
  
  for (let i = 0; i < min; i++) {
    if (left.charAt(i) != right.charAt(i)) {
      return left.substring(0, i);
    }
  }
  
  return left.substring(0, min);
}

console.log(longestCommonPrefix(["dog","racecar","car"])) // ""
console.log(longestCommonPrefix(["flower","flow","flight"])); // "fl"
