/**
217. Contains Duplicate
https://leetcode.com/problems/contains-duplicate/description/

Given an array of integers, find if the array contains any duplicates.
Your function should return true if any value appears at least twice in the array,
and it should return false if every element is distinct.
*/

/**
 * Approach #3 Hash Map
 * @param {number[]} nums
 * @return {number}
 */
let containsDuplicate = function(nums) {
  const hashMap = {};
    
  for (let i = 0; i < nums.length; i++) {
    if (hashMap[nums[i]]) {
      return true;
    } else {
      hashMap[nums[i]] = 1;
    }
  }

  return false;
};

console.log(containsDuplicate([1, 2, 3, 3])); // true
