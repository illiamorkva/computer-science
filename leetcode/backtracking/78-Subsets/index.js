/**
78. Subsets
https://leetcode.com/problems/subsets/description/

Given a set of distinct integers, nums, return all possible subsets (the power set).

Note: The solution set must not contain duplicate subsets.

Example:

Input: nums = [1,2,3]
Output:
[
  [3],
  [1],
  [2],
  [1,2,3],
  [1,3],
  [2,3],
  [1,2],
  []
]
*/

/**
 * My Backtracking
 * @param {number[]} nums
 * @return {number[][]}
 */
const subsets = function(nums) {
  const result = [];
  const chosen = [];

  helper(nums, chosen, result);
  
  return result;
};

function helper (nums, chosen, result) {
  if (nums.length == 0) {
    // base case

    result.push([...chosen]);
  } else {
    // recursive case + backtracking
    
    const firstEl = nums.shift();
    
    // choose
    chosen.push(firstEl)
    // explore
    helper(nums, chosen, result);
    
    //shoose
    chosen.pop();
    //explore
    helper(nums, chosen, result);
    
    //unchoose
    nums.unshift(firstEl);
  }
};
