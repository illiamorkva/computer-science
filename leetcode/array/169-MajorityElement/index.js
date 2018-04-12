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