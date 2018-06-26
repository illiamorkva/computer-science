/**
3. Longest Substring Without Repeating Characters
https://leetcode.com/problems/longest-substring-without-repeating-characters/description/

Given a string, find the length of the longest substring without repeating characters.

Examples:

Given "abcabcbb", the answer is "abc", which the length is 3.

Given "bbbbb", the answer is "b", with the length of 1.

Given "pwwkew", the answer is "wke", with the length of 3.
Note that the answer must be a substring, "pwke" is a subsequence and not a substring.
*/

// Approach 1: Brute Force

/**
 * Approach 2: Sliding Window
 * 
 * A sliding window is an abstract concept commonly used in array/string problems.
 * A window is a range of elements in the array/string which usually defined by
 * the start and end indices, i.e. [i, j) (left-closed, right-open).
 * A sliding window is a window "slides" its two boundaries to the certain direction.
 * For example, if we slide [i, j) to the right by 11 element, then it becomes [i+1, j+1)
 * (left-closed, right-open).
 * 
 * Time Complexity.
 * O(2 * n) = O(n),
 * in the worst case each character will be visited twice by i and j.
 * 
 * Space Complexity.
 * O(min(m, n)),
 * we need O(k) space for the sliding window, where k is the size of the Set.
 * The size of the Set is upper bounded by the size of the string n and the size of the charset/alphabet m. 
 * 
 * @param {string} s
 * @return {number}
 */
let lengthOfLongestSubstring = function(s) {
  let result = 0;

  const set = new HashSet();
  
  const n = s.length;
  let i = 0, j = 0;

  
  while (i < n && j < n) {
    if (!set.contains(s.charAt(j))) {
      set.add(s.charAt(j++));

      result = Math.max(result, j - i);
    } else {
      set.remove(s.charAt(i++));
    }
  }
  
  return result;
};

// Approach 3: Sliding Window Optimized
// and (Assuming ASCII 128)
