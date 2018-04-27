/**
136. Single Number
https://leetcode.com/problems/single-number/description/

Given a non-empty array of integers, every element appears twice except for one. Find that single one.

Note:

Your algorithm should have a linear runtime complexity. Could you implement it without using extra memory?

Example 1:

Input: [2,2,1]
Output: 1

Example 2:

Input: [4,1,2,1,2]
Output: 4
*/

/**
 * My Brute Force
 * @param {number[]} nums
 * @return {number}
 */
let singleNumber = function(nums) {
  const hm = {};
  
  for (let i = 0; i < nums.length; i++) {
    if (!hm[nums[i]]) {
      hm[nums[i]] = 1;
    } else {
      hm[nums[i]]++;
    }
  }
  
  for (let key in hm) {
    if (hm[key] == 1) return +key;
  }
  
  return -1;
};

console.log(singleNumber([2, 2, 1])) // 1

/**
 * Approach #4 Bit Manipulation
 * @param {number[]} nums
 * @return {number}
 */
singleNumber = function(nums) {
  let answer = 0;
  
  for (let i = 0; i < nums.length; i++) {
    answer ^= nums[i];
  }
  
  return answer;
};

console.log(singleNumber([2, 2, 1])) // 1
