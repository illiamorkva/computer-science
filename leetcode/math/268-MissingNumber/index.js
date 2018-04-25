/**
268. Missing Number
https://leetcode.com/problems/missing-number/description/

Given an array containing n distinct numbers taken from 0, 1, 2, ..., n, find the one that is missing from the array.

Example 1

Input: [3,0,1]
Output: 2

Example 2

Input: [9,6,4,2,3,5,7,0,1]
Output: 8

Note:
Your algorithm should run in linear runtime complexity. Could you implement it using only constant extra space complexity?
*/

/**
 * My Brute Force
 * @param {number[]} nums
 * @return {number}
 */
let missingNumber = function(nums) {
  if (nums.length == 1) {
    return nums[0] == 1 ? 0 : 1;    
  }

  for (let j = 0; j <= nums.length; j++) {
    if (nums.indexOf(j) == -1) {
      return j;
    }
  }
};

console.log(missingNumber([3,0,1])) // 2

/**
 * Approach #4 Gauss' Formula
 * @param {number[]} nums
 * @return {number}
 */
missingNumber = function(nums) {
  let expectedSum = nums.length * (nums.length + 1) / 2; // Gauss' Formula
  let actualSum = 0;
  
  for (let i = 0; i <= nums.length - 1; i++) {
    actualSum += nums[i];
  }
  
  return expectedSum - actualSum;
};

console.log(missingNumber([3,0,1])) // 2