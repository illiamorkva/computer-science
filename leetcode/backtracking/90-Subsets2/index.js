/**
90. Subsets II
https://leetcode.com/problems/subsets-ii/description/

Given a collection of integers that might contain duplicates, nums, return all possible subsets (the power set).

Note: The solution set must not contain duplicate subsets.

Example:

Input: [1,2,2]
Output:
[
  [2],
  [1],
  [1,2,2],
  [2,2],
  [1,2],
  []
]
*/

/**
 * Another example of backtracking
 * @param {number[]} nums
 * @return {number[][]}
 */
const subsetsWithDup = function(nums) {
  const result = [];
  const chosen = [];
  
  nums.sort((a, b) => a - b);
  
  helper(result, chosen, nums, 0);
  
  return result;
};

function helper(result, chosen, nums, start) {
  result.push([...chosen]);
  
  for (let i = start; i < nums.length; i++) {
    if (i > start && nums[i] == nums[i - 1]) {
      continue; // skip duplicates
    }
    // choose
    chosen.push(nums[i]);
    
    // explore
    helper(result, chosen, nums, i + 1);
    
    // unchoose
    chosen.pop();
  }
}
