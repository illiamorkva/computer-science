/**
11. Container With Most Water
https://leetcode.com/problems/container-with-most-water/description/

Given n non-negative integers a1, a2, ..., an, where each represents a point at coordinate (i, ai).
n vertical lines are drawn such that the two endpoints of line i is at (i, ai) and (i, 0).
Find two lines, which together with x-axis forms a container, such that the container contains the most water.

Note: You may not slant the container and n is at least 2.
*/

/**
 * Approach 1: Brute Force
 * 
 * Time Complexity.
 * O(n^2),
 * calculating area for all height pairs.
 * 
 * Space Complexity.
 * O(1),
 * constant extra space is used.
 * 
 * @param {number[]} height
 * @return {number}
 */
let maxArea = function(height) {
  let maxarea = 0;

  for (let i = 0; i < height.length; i++) {
    for (let j = i + 1; j < height.length; j++) {
      maxarea = Math.max(maxarea, Math.min(height[i], height[j]) * (j - i));
    }
  }
  
  return maxarea;
};

/**
 * Approach 2: Two Pointer Approach
 * 
 * Time Complexity.
 * O(n),
 * single pass.
 * 
 * Space Complexity.
 * O(1),
 * constant space is used.
 * 
 * @param {number[]} height
 * @return {number}
 */
maxArea = function(height) {
  let maxarea = 0;

  let start = 0, end = height.length - 1;
  
  while (start < end) {
    maxarea = Math.max(maxarea, Math.min(height[start], height[end]) * (end - start))  
    
    if (height[start] > height[end]) {
      end--;
    } else {
      start++;
    }
  }
  
  return maxarea;
};
