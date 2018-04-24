/**
628. Maximum Product of Three Numbers
https://leetcode.com/problems/maximum-product-of-three-numbers/description/

Given an integer array, find three numbers whose product is maximum and output the maximum product.

Example 1:

Input: [1,2,3]
Output: 6

Example 2:

Input: [1,2,3,4]
Output: 24

Note:
The length of the given array will be in range [3,104] and all elements are in the range [-1000, 1000].
Multiplication of any three numbers in the input won't exceed the range of 32-bit signed integer.
*/

/**
 * Approach #2 Using Sorting
 * @param {number[]} nums
 * @return {number}
 */
let maximumProduct = function(nums) {
  nums.sort((a, b) => a - b);
  
  // either the product 
  // nums[0] x nums[1] x nums[n−1] or 
  // nums[n−3] x nums[n−2] x nums[n−1]
  return Math.max(
    nums[0] * nums[1] * nums[nums.length - 1],
    nums[nums.length - 1] * nums[nums.length - 2] * nums[nums.length - 3]
  );
};

console.log(maximumProduct([1,2,3])); // 6

/**
 * Approach #3 Single Scan
 * @param {number[]} nums
 * @return {number}
 */
maximumProduct = function(nums) {
  let min1 = Number.MAX_SAFE_INTEGER;
  let min2 = Number.MAX_SAFE_INTEGER;
  
  let max1 = Number.MIN_SAFE_INTEGER;
  let max2 = Number.MIN_SAFE_INTEGER;
  let max3 = Number.MIN_SAFE_INTEGER;
  
  for (let i = 0; i < nums.length; i++) {
    if (nums[i] < min1) {
      min2 = min1;
      min1 = nums[i]
    } else if (nums[i] < min2) {
      min2 = nums[i];
    }
    
    if (nums[i] > max1) {
      max3 = max2;
      max2 = max1;
      max1 = nums[i];
    } else if (nums[i] > max2) {
      max3 = max2;
      max2 = nums[i];
    } else if (nums[i] > max3) {
      max3 = nums[i];
    }
  }
  
  
  return Math.max(
    min1 * min2 * max1,
    max1 * max2 * max3
  );
};

console.log(maximumProduct([1,2,3])); // 6
