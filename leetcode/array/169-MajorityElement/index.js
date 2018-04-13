/**
169. Majority Element
https://leetcode.com/problems/majority-element/description/

Given an array of size n, find the majority element.
The majority element is the element that appears more than ⌊ n/2 ⌋ times.

You may assume that the array is non-empty and the majority element always exist in the array.
*/

/**
 * Approach #2 HashMap
 * @param {number[]} nums
 * @return {number}
 */
let majorityElement = function(nums) {
  const hashMap = {};
  
  for (let i = 0; i < nums.length; i++) {
    if (!hashMap[nums[i]]) {
      hashMap[nums[i]] = 1;
    } else {
      hashMap[nums[i]] += 1;
    }
  }
  
  for (let key in hashMap) {
    if (hashMap[key] > (nums.length / 2)) {
      return Number(key);
    }
  }
  
  return 0; // false
};

console.log(majorityElement([1, 3, 3, 3])); // 3

/**
 * Approach #6 Boyer-Moore Voting Algorithm
 * @param {number[]} nums
 * @return {number}
 */
majorityElement = function(nums) {
  let candidate = null;
  let count = 0;
  
  for (let i = 0; i < nums.length; i++) {
    if (count == 0) {
      candidate = nums[i];
    }
      
    if (candidate == nums[i]) {
      count++;
    } else {
      count--;
    }
  }
  
  return candidate;
};

console.log(majorityElement([1, 3, 3, 3])); // 3